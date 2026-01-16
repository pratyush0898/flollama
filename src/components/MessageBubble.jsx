import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import rehypeHighlight from "rehype-highlight";

export default function MessageBubble({ msg, streaming = false }) {
  const isUser = msg.role === "user";

  if (isUser) {
    return (
      <div className="user-wapper">
        <div className="user-bubble">
          <noscript>You:</noscript>
          <div className="user-markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize, rehypeHighlight]}
            >
              {msg.content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="assistant-wapper">
      <noscript>{streaming ? "Flollama (typing)..." : "Flollama:"}</noscript>

      <div className="assistant-markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSanitize, rehypeHighlight]}
        >
          {msg.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
