"use client";

import { useState } from "react";

const field =
  "w-full rounded-xl border-2 border-ink bg-white/70 px-4 py-2.5 text-sm outline-none transition focus:bg-white focus:ring-2 focus:ring-ink/30";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-8 w-full max-w-lg space-y-3 text-left">
      {/* Honeypot */}
      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Your name" required maxLength={100} />
        <input
          className={field}
          type="email"
          name="email"
          placeholder="Your email"
          required
          maxLength={150}
        />
      </div>
      <textarea
        className={`${field} resize-y`}
        name="message"
        rows={4}
        placeholder="How can I help?"
        required
        maxLength={2000}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full border-2 border-ink bg-ink px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-transparent hover:text-ink disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className="min-h-5 text-center text-xs font-medium">
        {status === "success" && "Thanks! Your message was sent. I'll reply soon."}
        {status === "error" && error}
      </p>
    </form>
  );
}
