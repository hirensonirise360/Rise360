import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-navy">
      <div className="text-center px-4 space-y-6">
        <div className="font-display text-[160px] font-bold text-white/10 leading-none select-none">404</div>
        <div className="-mt-10 space-y-4">
          <h1 className="font-display text-4xl font-bold text-white">Page not found</h1>
          <p className="text-white/60 max-w-sm mx-auto">
            The page you&apos;re looking for has moved or doesn&apos;t exist.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#4DA6FF] hover:bg-[#70b8ff] text-[#010f2e] font-bold text-sm rounded-xl transition-all">
            <Home size={15} /> Go Home
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm rounded-xl transition-all">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
