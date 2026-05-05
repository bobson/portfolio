"use client";

import { useState } from "react";
import { Send } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-neutral-400">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-neutral-400">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-violet-500 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-neutral-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="self-start flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-sm transition-colors duration-200"
      >
        <Send size={15} />
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-400">Message sent — I&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
