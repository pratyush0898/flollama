import {
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  onSnapshot,
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

// ✅ Real-time: load chat messages
export function loadChatMessages(uid, chatName, callback) {
  const chatRef = doc(db, "users", uid, "chats", chatName);
  return onSnapshot(chatRef, (snap) => {
    if (snap.exists()) {
      callback(snap.data().messages || []);
    } else {
      callback([]);
    }
  });
}

export function listenToUserChats(uid, callback) {
  const chatsCol = collection(db, "users", uid, "chats");
  return onSnapshot(chatsCol, (snapshot) => {
    const chatIds = snapshot.docs.map((doc) => doc.id);
    callback(chatIds);
  });
}

export function listUserChats(uid, callback) {
  const chatsCol = collection(db, "users", uid, "chats");
  return onSnapshot(chatsCol, (snaps) => {
    callback(snaps.docs.map((d) => d.id));
  });
}

export async function clearAllChats(uid) {
  const chatsCol = collection(db, "users", uid, "chats");
  const snaps = await getDocs(chatsCol);
  await Promise.all(snaps.docs.map((d) => deleteDoc(d.ref)));
}

export function doesChatExist(uid, chatName, callback) {
  const chatRef = doc(db, "users", uid, "chats", chatName);
  return onSnapshot(chatRef, (snap) => {
    callback(snap.exists());
  });
}
