"use client";

import React, { useState } from "react";
import Toast from "./Toast";

interface ProntoButtonProps {
  onPronto: (e?: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface ToastData {
  id: number;
  message: string;
  duration?: number;
}

export default function ProntoButton({
  onPronto,
  children,
  className = "",
  style,
}: ProntoButtonProps) {
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const pushToast = (message: string, duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, duration }]);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (busy) return;
    try {
      setBusy(true);
      const result = onPronto?.(e);
      if (result instanceof Promise) await result;

      setSuccess(true);
      pushToast("Ação concluída com sucesso!");
      setTimeout(() => setSuccess(false), 900);
    } catch (error) {
      console.error("Erro ao executar onPronto:", error);
      pushToast("Erro ao concluir ação.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={busy}
        className={`pronto-btn ${className} ${busy ? "busy" : ""} ${
          success ? "success" : ""
        }`}
        style={style}
      >
        {busy ? "Processando..." : success ? "Pronto ✓" : children}
      </button>

      <div className="toast-wrapper" aria-live="polite">
        {toasts.map((t) => (
          <Toast
            key={t.id}
            id={t.id}
            message={t.message}
            duration={t.duration}
            onClose={removeToast}
          />
        ))}
      </div>

      <style jsx>{`
        .pronto-btn {
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
          transition: transform 0.12s ease, background 0.15s ease,
            border-color 0.12s ease;
        }
        .pronto-btn:active {
          transform: translateY(1px);
        }
        .pronto-btn.busy {
          opacity: 0.8;
          cursor: wait;
        }
        .pronto-btn.success {
          background: #0f9d58;
          color: white;
          border-color: rgba(0, 0, 0, 0.07);
        }
        .toast-wrapper {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
