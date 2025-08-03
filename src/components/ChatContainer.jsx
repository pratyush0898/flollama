"use client";
import { useEffect, useState } from "react";
import MessageList from "./MessageList.jsx";
import ChatInput from "./ChatInput.jsx";
import { chatWithFlollama } from "@/lib/ollamaApi.js";
import { useAuth } from "@/context/AuthContext";
import { appendMessage } from "@/lib/chatService.js";

export default function ChatContainer({ initialMessages = [], chatId }) {
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  const [streamingMsg, setStreamingMsg] = useState("");

  const { user } = useAuth();

  async function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed || !user || !chatId) return;

    const userMsg = { role: "user", content: trimmed };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setLoading(true);
    setStreamingMsg("");
    await appendMessage(user?.uid, chatId, userMsg);

    let fullReply = "";
    try {
      await chatWithFlollama(updatedMessages, (token) => {
        fullReply += token;
        setStreamingMsg((prev) => prev + token);
      });

      const assistantMsg = { role: "assistant", content: fullReply };

      setMessages((msgs) => [...msgs, assistantMsg]);
      await appendMessage(user?.uid, chatId, assistantMsg);
    } catch (err) {
      const errMsg = { role: "assistant", content: "Error: " + err.message };
      setMessages((msgs) => [...msgs, errMsg]);
      await appendMessage(user?.uid, chatId, errMsg);
    } finally {
      setLoading(false);
      setStreamingMsg("");
    }
  }
  async function generateMessage(userMsg) {
    if (!user || !chatId || !userMsg) return;

    const updatedMessages = [...messages, userMsg];
    setLoading(true);
    setStreamingMsg("");

    let fullReply = "";
    try {
      await chatWithFlollama(updatedMessages, (token) => {
        fullReply += token;
        setStreamingMsg((prev) => prev + token);
      });

      const assistantMsg = { role: "assistant", content: fullReply };

      setMessages((msgs) => [...msgs, assistantMsg]);
      await appendMessage(user?.uid, chatId, assistantMsg);
    } catch (err) {
      const errMsg = { role: "assistant", content: "Error: " + err.message };
      setMessages((msgs) => [...msgs, errMsg]);
      await appendMessage(user?.uid, chatId, errMsg);
    } finally {
      setLoading(false);
      setStreamingMsg("");
    }
  }

  useEffect(() => {
    if (messages.length == 1 && !loading && !streamingMsg) {
      generateMessage(messages[messages.length - 1]);
    }
  }, [messages]);

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
