"use client";

import { Sparkles } from "lucide-react";

const suggestions = [
  "💡 What is in your mind",
  "🧠 Facing any difficulties",
  "📚 Want to know something",
  "✨ Want answers? Just ask",
];

export default function WelcomeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-600">
        <Sparkles size={30} />
      </div>

      <h1 className="text-5xl font-bold text-white">KITU AI</h1>

      <p className="mt-4 max-w-xl text-zinc-400">
        Ask Anything KITU Will Answer It.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {suggestions.map((item) => (
          <button
            key={item}
            className="
    rounded-2xl
    border
    border-zinc-700
    bg-zinc-900/70
    px-6
    py-4
    text-left
    text-zinc-200
    font-medium
    transition-all
    duration-200
    hover:border-violet-500
    hover:bg-zinc-800
    hover:text-white
    hover:scale-[1.02]
  "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
