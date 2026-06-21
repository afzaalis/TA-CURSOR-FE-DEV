import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export function PropertyCardKontekstualSkeleton() {
  return (
    <div
      className={`${poppins.className} h-[241px] w-full max-w-[320px] animate-pulse overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10)] sm:w-[207px] sm:max-w-none`}
      role="status"
      aria-label="Memuat kartu properti"
    >
      <div className="h-[131px] w-full rounded-t-[10px] bg-zinc-200" />
      <div className="flex h-[110px] flex-col justify-between px-4 pt-3">
        <div className="space-y-2">
          <div className="h-4 w-28 rounded bg-zinc-200" />
          <div className="flex gap-1">
            <div className="h-3 w-16 rounded-[7px] bg-zinc-200" />
            <div className="h-3 w-16 rounded-[7px] bg-zinc-200" />
          </div>
          <div className="h-3 w-full rounded bg-zinc-200" />
          <div className="h-2 w-3/4 rounded bg-zinc-200" />
        </div>
        <div className="border-t border-[#E6E9EF] py-2">
          <div className="flex justify-between">
            <div className="h-2 w-10 rounded bg-zinc-200" />
            <div className="h-2 w-10 rounded bg-zinc-200" />
            <div className="h-2 w-6 rounded bg-zinc-200" />
            <div className="h-2 w-6 rounded bg-zinc-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
