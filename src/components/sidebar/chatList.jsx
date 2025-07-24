"use client";
import { useAuth } from "@/context/AuthContext";
import { listUserChats } from "@/lib/chatService";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { SidebarButton } from "../ui/Button";

const ChatList = () => {
  const { user } = useAuth();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!user) return;
    listUserChats(user?.uid).then(setChats);
  }, [user]);
  return (
    <div className="chats-wapper">
      {chats.map((c) => (
        <Link key={c} href={`/chat/${c}`}>
          <SidebarButton>{c}</SidebarButton>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
