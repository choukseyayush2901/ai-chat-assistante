"use client";

import Sidebar from "./Sidebar";
import ChatHeader from "@/components/chat/ChatHeader";
import { useSidebarStore } from "@/store/sidebar-store";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  const collapsed = useSidebarStore((s) => s.collapsed);
  const hydrated = useSidebarStore((s) => s.hydrated);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  if (!hydrated) return null;

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-950">
      <Sidebar collapsed={collapsed} />

      <div className="flex flex-1 flex-col overflow-hidden">
        <ChatHeader toggleSidebar={toggleSidebar} />

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
