"use client";
import { useState } from "react";
import MessageList from "./MessageList.jsx";
import ChatInput from "./ChatInput.jsx";
import { PrimaryButton, SecondaryButton, OutlineButton, Link } from "@/components/ui/Button.jsx";
import { chatWithFlollama } from "@/lib/ollamaApi.js";

export default function ChatContainer({ initialMessages }) {
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  const [streamingMsg, setStreamingMsg] = useState("");

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    // 1) Add user message
    const next = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setLoading(true);
    setStreamingMsg("");

    let fullReply = "";
    try {
      // 2) Stream AI reply
      await chatWithFlollama(next, (token) => {
        fullReply += token;
        setStreamingMsg((prev) => prev + token);
      });

      // 3) Finalize assistant message
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: fullReply },
      ]);
    } catch (err) {
      setMessages((msgs) => [
        ...msgs,
        { role: "assistant", content: "Error: " + err.message },
      ]);
    } finally {
      setLoading(false);
      setStreamingMsg("");
    }
  }

  console.log(messages);
  return (
    <div className="chat-container">
      <MessageList
        messages={messages}
        loading={loading}
        streamingMsg={streamingMsg}
      />
      <ChatInput onSend={sendMessage} disabled={loading} />
    </div>
  );
}
