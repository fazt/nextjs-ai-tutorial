"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  console.log(messages);

  return (
    <section className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-xl w-full">
        <div className="text-white max-h-96 h-full overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col mb-2 p-2 rounded-md ${
                m.role === "assistant"
                  ? "self-end bg-gray-800"
                  : "self-start bg-blue-700"
              }`}
            >
              <span
                className={`text-xs ${
                  m.role === "assistant" ? "text-right" : "text-left"
                }`}
              >
                {m.role}
              </span>{" "}
              {m.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            Say something...
          </label>
          <button
            className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
            disabled={isLoading || !input}
          >
            Send
          </button>
        </div>
        <textarea
          rows={4}
          value={input}
          onChange={handleInputChange}
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Type something..."
          autoFocus
        />
      </form>
    </section>
  );
}
