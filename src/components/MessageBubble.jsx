'use client';

export default function MessageBubble({ msg, streaming = false }) {
  const isUser = msg.role === 'user';

  return (
    <div>
      <span>
        {isUser ? 'You:' : streaming ? 'Flollama:' : 'Flollama:'}
      </span>
      <span>{msg.content}</span>
    </div>
  );
}
