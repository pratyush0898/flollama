export default function MessageBubble({ msg, streaming = false }) {
  const isUser = msg.role === "user";

  if (isUser) {
    return (
      <div className="user-wapper">
        <div className="user-bubble">
          <noscript>You:</noscript>
          <span>{msg.content}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="assistant-wapper">
          <noscript>
            {streaming ? "Flollama (typing)..." : "Flollama:"}
          </noscript>
          <span>{msg.content}</span>
      </div>
    );
  }
}
