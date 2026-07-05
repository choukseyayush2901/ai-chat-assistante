"use client";

import { Sparkles, Plus, Search, MessageSquare, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";

type SidebarProps = {
  collapsed: boolean;
};

export default function Sidebar({ collapsed }: SidebarProps) {
  return (
    <aside
      className={`hidden md:flex flex-col transition-all duration-300 border-r border-zinc-800 bg-zinc-950 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >
      {" "}
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600">
          <Sparkles />
        </div>

        {!collapsed && (
          <div>
            <h2>KITU AI</h2>

            <p>AI Assistant</p>
          </div>
        )}
      </div>
      {/* New Chat */}
      <div className="px-5">
        <Button
          className={`bg-violet-600 hover:bg-violet-500 rounded-xl ${
            collapsed ? "w-12 px-0" : "w-full"
          }`}
        >
          <Plus className="h-4 w-4" />

          {!collapsed && <span className="ml-2">New Chat</span>}
        </Button>
      </div>
      {/* Search */}
      {!collapsed && (
        <div className="px-5 mt-5">
          <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">
            <Search size={18} className="text-zinc-500" />

            <input
              placeholder="Search chats"
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
            />
          </div>
        </div>
      )}
      {/* History */}
      {!collapsed && (
        <div className="mt-8 flex-1 overflow-y-auto px-5">
          <p className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
            Today
          </p>

          {[
            //   "React Hooks",
            //   "Next.js App Router",
            //   "Docker Basics",
            //   "System Design",
            //   "Prisma ORM",
          ].map((chat) => (
            <button
              key={chat}
              className="mb-2 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-zinc-300 transition hover:bg-zinc-900"
            >
              <MessageSquare size={16} />

              {chat}
            </button>
          ))}
        </div>
      )}
      {/* Bottom */}
      <div className="border-t border-zinc-800 p-5">
        <button
          className={`flex rounded-xl px-3 py-3 transition hover:bg-zinc-900 ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <Settings size={18} />

          {!collapsed && "Settings"}
        </button>
      </div>
    </aside>
  );
}
