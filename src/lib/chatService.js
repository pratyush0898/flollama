import {
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/firebase/firebase.js";

export async function saveChatMessages(uid, chatName, messages) {
  const chatRef = doc(db, "users", uid, "chats", chatName);
  await setDoc(chatRef, { messages });
}

export async function appendMessage(uid, chatName, message) {
  const chatRef = doc(db, "users", uid, "chats", chatName);
  const snap = await getDoc(chatRef);
  const prev = snap.exists() ? snap.data().messages : [];
  await updateDoc(chatRef, { messages: [...prev, message] });
}

export async function loadChatMessages(uid, chatName) {
  const chatRef = doc(db, "users", uid, "chats", chatName);
  const snap = await getDoc(chatRef);
  return snap.exists() ? snap.data().messages : [];
}

export async function listUserChats(uid) {
  const chatsCol = collection(db, "users", uid, "chats");
  const snaps = await getDocs(chatsCol);
  return snaps.docs.map((d) => d.id);
}

export async function clearAllChats(uid) {
  const chatsCol = collection(db, "users", uid, "chats");
  const snaps = await getDocs(chatsCol);
  await Promise.all(snaps.docs.map((d) => deleteDoc(d.ref)));
}

export async function doesChatExist(uid, chatName) {
  const chatRef = doc(db, "users", uid, "chats", chatName);
  const chatSnap = await getDoc(chatRef);
  return chatSnap.exists();
}
