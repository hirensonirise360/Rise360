"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error("Unhandled Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-navy px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto text-red-400">
          <RefreshCw size={28} className="animate-spin-slow" />
        </div>
        <div className="space-y-2">
          <h1 className="font-display text-3xl font-bold text-white">Something went wrong</h1>
          <p className="text-white/60 text-sm leading-relaxed">
            An unexpected error occurred while processing your request. Our engineering team has been notified.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4DA6FF] hover:bg-[#70b8ff] text-[#010f2e] font-bold text-sm rounded-xl transition-all shadow-lg"
          >
            <RefreshCw size={15} /> Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm rounded-xl transition-all"
          >
            <Home size={15} /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
