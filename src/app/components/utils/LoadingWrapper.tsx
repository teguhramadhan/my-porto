"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // Durasi loading saat route berubah

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {/* Overlay Loading */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-zinc-900 transition-opacity duration-500">
          <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      {children}
    </>
  );
}
