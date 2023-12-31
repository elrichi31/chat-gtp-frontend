import Image from "next/image";
import { ChatCompletionRequestMessageRoleEnum } from "openai";
import Markdown from "markdown-parser-react";

type Props = {
  type: ChatCompletionRequestMessageRoleEnum;
  message: any;
};

function ChatBubble({ type, message }: Props) {
  const name = type === "user" ? "Me" : "C";
  const chatEnd = type === "user" ? "justify-end" : "justify-start";
  const chatBubblePrimary =
    type === "user" ? "bg-blue-400 text-white" : "bg-gray-200";

  return (
    <div className={`flex ${chatEnd} mb-4`}>
      <div className="w-10 h-10 rounded-full mr-4">
        <Image
          width={64}
          height={64}
          src={`https://ui-avatars.com/api/?name=${name}`}
          alt={`${type} avatar`}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <div className={`py-2 px-4 max-w-6xl rounded-lg ${chatBubblePrimary}`}>
          <Markdown content={message}/>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
