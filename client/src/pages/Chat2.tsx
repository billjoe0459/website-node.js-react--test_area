import { useState } from "react";
import "./Chat2.css";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setMessages(m => [...m, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8067/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: userText })
      });

      const data = await res.json();

      setMessages(m => [
        ...m,
        {
          role: "assistant",
          text: data.output
        }
      ]);
    } catch {
      setMessages(m => [
        ...m,
        { role: "assistant", text: "Error contacting backend." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chat-container">
      <head>
        <title>Snord.ai - Chat</title>
      </head>
      <div className="chat-window">
        {messages.map((m, i) => (
          <pre key={i} className={`chat-message ${m.role}`}>
            {m.text}
          </pre>
        ))}
        {loading && <div className="chat-loading">Running…</div>}
      </div>

      <div className="chat-input-row">
        <input
          className="chat-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Describe the website you want to generate…"
        />
        <button className="chat-send-button" onClick={send}>
          Send
        </button>
      </div>
    </div>
  );
}
