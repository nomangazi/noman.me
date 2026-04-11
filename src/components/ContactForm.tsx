"use client";

import { useState } from "react";

interface ContactFormProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}

const ContactForm = ({ email, copyLabel, copiedLabel }: ContactFormProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof navigator === "undefined") {
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1800);
    } catch {
      setIsCopied(false);
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <a
        href={`mailto:${email}`}
        className="text-sm text-zinc-700 underline underline-offset-4 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex h-10 items-center justify-center border border-zinc-300 px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
      >
        {isCopied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
};

export default ContactForm;

