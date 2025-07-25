import React, { useState, useRef, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { firestore } from "@/firebase";
import ChatModal from "@/modal/ChatModal";

// 👤 Create or retrieve stable user ID
function getOrCreateUserId() {
  const saved = localStorage.getItem("chat_user_id");
  if (saved) return saved;

  const generated = "anon_" + Math.random().toString(36).substring(2, 10);
  localStorage.setItem("chat_user_id", generated);
  return generated;
}

export default function ChatPage() {
  // 🔁 State
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [enteredName, setEnteredName] = useState(
    localStorage.getItem("chat_display_name") || ""
  );

  const userId = useRef(getOrCreateUserId()).current;
  const bottomRef = useRef(null);

  // 🔄 Listen for real-time updates from Firestore
  useEffect(() => {
    const q = query(
      collection(firestore, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  // 📜 Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 📨 Handle message submission
  async function writeData(e) {
    e.preventDefault();
    if (!text.trim()) return;

    const newMessage = {
      text,
      sender: userId,
      senderName: enteredName,
      timestamp: serverTimestamp(),
    };

    await addDoc(collection(firestore, "messages"), newMessage);
    setText("");
  }

  // ✅ Handle modal name input
  const handleModalSubmit = () => {
    if (enteredName.trim()) {
      localStorage.setItem("chat_display_name", enteredName);
      setShowModal(false);
    }
  };

  return (
    <div className="w-full h-full relative">
      {/* 💬 Prompt Modal */}
      {showModal ? (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <div className="max-w-md w-full mx-auto p-4 border border-gray-200 rounded-lg shadow bg-white">
            <ChatModal
              name={enteredName}
              setName={setEnteredName}
              onSubmit={handleModalSubmit}
            />
          </div>
        </div>
      ) : (
        // 🧱 Main Chat UI
        <div className="flex flex-col md:flex-row h-[calc(100vh-5.5rem)] w-full bg-transparent">
          {/* Sidebar */}
          <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r bg-transparent p-4">
            <h2 className="text-2xl font-bold text-[#2199f2] mb-4">Chat App</h2>
            <div className="rounded-md px-3 py-2 bg-blue-100 text-[#2199f2] font-semibold">
              <div className="font-medium">{enteredName}</div>
              <div className="text-sm text-gray-500">You</div>
            </div>
          </aside>

          {/* Main Chat Area */}
          <main className="flex flex-col flex-1 p-4 bg-transparent">
            {/* Header */}
            <div className="border-b pb-4 mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome, {enteredName}
              </h2>
            </div>

            {/* Message List */}
            <div className="flex-1 overflow-y-auto pr-2 flex flex-col space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className="flex flex-col">
                  {msg.sender !== userId && msg.senderName && (
                    <div className="text-xs text-gray-500 ml-1 mb-1">
                      {msg.senderName}
                    </div>
                  )}
                  <div
                    className={`rounded-lg p-3 max-w-[75%] break-words ${
                      msg.sender === userId
                        ? "bg-blue-500 text-white ml-auto"
                        : "bg-gray-200 text-black mr-auto"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef}></div>
            </div>

            {/* Input Form */}
            <form className="mt-4 flex gap-2 w-full" onSubmit={writeData}>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                type="submit"
                className="bg-[#2199f2] text-white px-4 py-2 rounded-lg hover:bg-[#5b8fb6fd] cursor-pointer"
              >
                Send
              </button>
            </form>
          </main>
        </div>
      )}
    </div>
  );
}
