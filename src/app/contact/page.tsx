import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Contact | Slobodan Markoski",
  description:
    "Get in touch — I'm open to new opportunities and collaborations.",
};

const PHONE = "+38970255906";
const PHONE_DISPLAY = "+389 70 255 906";

export default function ContactPage() {
  return (
    <section className="min-h-screen relative px-6 py-20 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-6">
        {/* Header */}
        <div>
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h1 className="font-space text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl">
            Have a project in mind or just want to say hi? Fill out the form or
            reach me directly.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:bmarkoski@gmail.com"
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-violet-500/40 transition-colors duration-200 group"
            >
              <span className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-neutral-500 mb-0.5">Email</p>
                <p className="text-sm text-white group-hover:text-violet-300 transition-colors">
                  bmarkoski@gmail.com
                </p>
              </div>
            </a>

            <div className="glass rounded-2xl p-5 flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0">
                <Phone size={18} />
              </span>
              <div className="flex flex-col gap-2">
                <div>
                  <p className="text-xs text-neutral-500 mb-0.5">Phone</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-white">{PHONE_DISPLAY}</p>
                    <CopyButton text={PHONE} />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://wa.me/${PHONE.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <FaWhatsapp size={14} />
                    WhatsApp
                  </a>
                  <span className="text-neutral-700">·</span>
                  <a
                    href={`viber://chat?number=${PHONE}`}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-violet-400 transition-colors duration-200"
                  >
                    <FaViber size={14} />
                    Viber
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
