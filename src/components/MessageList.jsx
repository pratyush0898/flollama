import MessageBubble from './MessageBubble.jsx';

export default function MessageList({ messages, loading, streamingMsg }) {
  return (
    <div>
      {messages.map((msg, i) => (
        <MessageBubble key={i} msg={msg} />
      ))}
      {loading && (
        <MessageBubble
          msg={{ role: 'assistant', content: streamingMsg || 'Flollama is typing...' }}
          streaming
        />
      )}
    </div>
  );
}
