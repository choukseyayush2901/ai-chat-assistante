"use client";

import { PanelLeft, Sparkles } from "lucide-react";

type Props = {
  toggleSidebar: () => void;
};

export default function ChatHeader({ toggleSidebar }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        ...
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 transition hover:border-violet-500 hover:bg-zinc-800"
          >
            <PanelLeft className="h-5 w-5 text-white" />
          </button>

          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-violet-400" />

            <div>
              <h1 className="text-lg font-semibold text-white">KITU AI</h1>

              <p className="text-xs text-zinc-400">Just Ask</p>
            </div>
          </div>
        </div>
        <div className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300">
          ● Online
        </div>
      </div>
    </header>
  );
}
