"use client";

import { useEffect } from "react";
import "../components/Toast.module.css";

interface ToastProps {
  id: number;
  message: string;
  duration?: number;
  onClose: (id: number) => void;
}

export default function Toast({
  id,
  message,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, onClose, duration]);

  return (
    <div className="toast">
      <div className="toast-body">{message}</div>
    </div>
  );
}
