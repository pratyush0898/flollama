import React from 'react';
import ChatContainer from '@/components/ChatContainer.jsx';

// You could also fetch initial history from a database here.
const initialMessages = [
  { role: 'assistant', content: 'Hi! How can I help you today?' }
];

export default function ChatPage() {
  return (
    <React.Fragment>
      <ChatContainer initialMessages={initialMessages} />
    </React.Fragment>
  );
}
