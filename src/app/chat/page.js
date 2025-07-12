"use client";
import React from "react";
import ChatContainer from "@/components/ChatContainer.jsx";
import TopBar from "@/components/ui/TopBar";

// You could also fetch initial history from a database here.
const initialMessages = [
  { role: "user", content: "hey" },
  { role: "assistant", content: "Hello! How can I assist you today?" },
  { role: "user", content: "Can you help me with my code?" },
  {
    role: "assistant",
    content:
      "Of course! Please share the code or describe the issue you're facing.",
  },
];

export default function ChatPage() {
  return (
    <React.Fragment>
      <ChatContainer initialMessages={initialMessages} />
    </React.Fragment>
  );
}
