"use client";

import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div id="contact" className="max-w-5xl w-full flex flex-col gap-4 px-4">
      <div className="flex items-center gap-2 text-lime-400">
        <Mail size={20} />
        <h2 className="text-4xl font-medium">CONTACT ME</h2>
      </div>
      <p className=" ">
        Open to remote opportunities and freelance projects. I reply within 24
        hours or less.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-3 rounded-xl border border-lime-400/30 bg-lime-400/5 p-6 text-lime-400">
          <CheckCircle2 size={20} />
          <p className="text-sm">
            Message sent — thanks for reaching out. <br />I will get in touch
            with you shortly.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-2xl p-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm ">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-lime-400/40"
              />
            </div>
            <div className="hidden">
              <label htmlFor="website">website</label>
              <input id="website" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm ">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-lime-400/40"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm ">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or role..."
              className="bg-black border-neutral-800 text-white placeholder:text-neutral-600 focus-visible:ring-lime-400/40 resize-none"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-red-400">
              Something went wrong. Please try again or email me directly at{" "}
              <a href="mailto:diegopacherres15@gmail.com" className="underline">
                diegopacherres15@gmail.com
              </a>
              .
            </p>
          )}

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-fit bg-lime-400 text-black hover:bg-lime-400 hover:opacity-80 transition-opacity gap-2 mt-2"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                Send Message
              </>
            )}
          </Button>
        </form>
      )}
    </div>
  );
}
