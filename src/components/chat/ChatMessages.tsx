import type { Message } from "@/types/chat";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import WelcomeScreen from "./WelcomeScreen";

type Props = {
  messages: Message[];
  loading: boolean;
};

export default function ChatMessages({ messages, loading }: Props) {
  // 👇 No chat yet
  if (messages.length === 0) {
    return <WelcomeScreen />;
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-8 py-8">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}

        {loading && <TypingIndicator />}
      </div>
    </div>
  );
}
