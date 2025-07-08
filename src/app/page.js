import React from "react";
import ChatContainer from "@/components/ChatContainer.jsx";
import TopBar from "@/components/ui/TopBar";
import ThemeToggle from "@/components/ThemeToggle";

// You could also fetch initial history from a database here.
const initialMessages = [];

export default function ChatPage() {
  return (
    <React.Fragment>
      <div className="chat-section flex-1">
        <TopBar />
        <ChatContainer initialMessages={initialMessages} />
      </div>
    </React.Fragment>
  );
}
