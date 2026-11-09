"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const EMAIL = "jaffreymusin33@gmail.com";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers/contexts without the async Clipboard API (e.g. plain http).
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand("copy");
    area.remove();
    return ok;
  }
}

/** Copies the email address to the clipboard and shows a toast instead of opening a mail app. */
export function CopyEmailButton({
  children = "Email",
  className = "",
  email = EMAIL,
}: {
  children?: React.ReactNode;
  className?: string;
  email?: string;
}) {
  const [toast, setToast] = useState<{ ok: boolean; key: number } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleClick() {
    const ok = await copyText(email);
    clearTimeout(timer.current);
    setToast({ ok, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), 2500);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        title={`Copy ${email}`}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </button>
      {toast
        ? createPortal(
            <div
              key={toast.key}
              role="status"
              aria-live="polite"
              className="toast fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-zinc-900 px-4 py-2.5 text-sm text-white shadow-lg dark:bg-zinc-100 dark:text-zinc-900"
            >
              {toast.ok ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    className="text-emerald-400 dark:text-emerald-600" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Email copied to clipboard
                </>
              ) : (
                <>Couldn&apos;t copy. My email is {email}</>
              )}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
