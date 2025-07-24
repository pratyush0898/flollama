"use client";

import { use, useEffect, useState } from "react";
import ChatContainer from "@/components/ChatContainer.jsx";
import { useAuth } from "@/context/AuthContext";
import { doesChatExist, loadChatMessages } from "@/lib/chatService";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import Link from "next/link";
import { PulseLoader } from "react-spinners";

export default function ChatPage({ params }) {
  const { user } = useAuth();
  const { chatName } = use(params);
  const decodedChatName = decodeURIComponent(chatName || "").trim();

  const [initialMessages, setInitialMessages] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!user || !decodedChatName) return;

    doesChatExist(user.uid, decodedChatName)
      .then((exists) => {
        if (!exists) {
          setNotFound(true);
          return;
        }

        return loadChatMessages(user.uid, decodedChatName)
          .then((messages) => {
            setInitialMessages(messages || []);
          })
          .catch(() => {
            console.error("Error loading messages");
            setNotFound(true);
          });
      })
      .catch((err) => {
        console.error("Error checking chat existence", err);
        setNotFound(true);
      });
  }, [user, decodedChatName]);

  if (!user) return <noscript>Waiting for authentication…</noscript>;
  if (notFound)
    return (
      <div className="chat-page px-4 sm:px-8">
        <div className="error-message text-center">
          <svg
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Chat not found or access denied
            </span>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Please check the chat name <br />
              We couldn&#39;t find the chat &quot;{decodedChatName}&quot;
            </p>
          </div>
          <Link href={`/chat`}>
            <SecondaryButton>
              <span className="text-base sm:text-lg">Go to Home</span>
            </SecondaryButton>
          </Link>
        </div>
      </div>
    );

  if (initialMessages === null)
    return (
      <>
        <noscript>Loading chat</noscript>
        <div className="chat-page">
          <PulseLoader color="var(--color-text)" size={32} />
        </div>
      </>
    );

  return (
    <ChatContainer chatId={decodedChatName} initialMessages={initialMessages} />
  );
}
