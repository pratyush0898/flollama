"use client";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ChatInput({ onSend, disabled }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSend(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="chat-input-box">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        placeholder="Type your message..."
        className="chat-input"
      />
      <button type="submit" disabled={disabled || !text.trim()} className="send-button">
        {" "}
        <FontAwesomeIcon icon={faPaperPlane} className="input-icon"/>
      </button>
    </form>
  );
}
