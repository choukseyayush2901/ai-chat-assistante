"use client";

import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { useChat } from "@/hooks/useChat";

export default function Chat() {
  const { messages, loading, sendMessage } = useChat();

  return (
    <main className="flex h-full flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-hidden">
        <ChatMessages messages={messages} loading={loading} />
      </div>

      <ChatInput loading={loading} onSend={sendMessage} />
    </main>
  );
}
