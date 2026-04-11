"use client";

import { Poppins } from "next/font/google";
import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
} from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

function formatHargaPropertiDesain(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "Rp. —";
  const angka = new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
  return `Rp. ${angka}`;
}

function clampPersen(n: number, maks: number): number {
  if (!Number.isFinite(n)) return 0;
  return Math.min(maks, Math.max(0, Math.round(n)));
}

export type SimulasiCicilanKprProps = {
  hargaProperti: number;
  className?: string;
  /** Batas atas slider & input (default 50). */
  persenMaks?: number;
  /** `detail`: border biru muda seperti halaman listing. */
  variant?: "default" | "detail";
};

export default function SimulasiCicilanKpr({
  hargaProperti,
  className = "",
  persenMaks = 50,
  variant = "default",
}: SimulasiCicilanKprProps) {
  const [persenUangMuka, setPersenUangMuka] = useState(0);

  const border =
    variant === "detail" ? "border-[#7CB9E8]" : "border-[#1957A0]";
  const divider = variant === "detail" ? "bg-[#7CB9E8]" : "bg-[#1957A0]";

  const setPersen = useCallback(
    (raw: number) => {
      setPersenUangMuka(clampPersen(raw, persenMaks));
    },
    [persenMaks],
  );

  const nilaiUangMuka = useMemo(
    () => Math.round((hargaProperti * persenUangMuka) / 100),
    [hargaProperti, persenUangMuka],
  );

  const onInputPersenChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (raw === "") {
      setPersenUangMuka(0);
      return;
    }
    const v = Number(raw);
    setPersen(Number.isFinite(v) ? v : 0);
  };

  return (
    <div
      className={`${poppins.className} rounded-[12px] border-2 ${border} bg-white px-6 py-7 shadow-sm ${className}`}
    >
      <h2 className="mb-8 text-center text-[15px] font-bold uppercase leading-tight tracking-[0.14em] text-[#1E293B] sm:text-base">
        Simulasi Cicilan KPR
      </h2>

      <div className="mb-5 flex items-baseline justify-between gap-4">
        <span className="text-[15px] font-bold text-[#1E293B]">
          Harga Properti
        </span>
        <span className="text-right text-[15px] font-bold text-[#1E293B]">
          {formatHargaPropertiDesain(hargaProperti)}
        </span>
      </div>
      <div className={`mb-7 h-px w-full ${divider}`} aria-hidden />

      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="shrink-0 text-[14px] font-normal text-[#1E293B] sm:pt-0">
          Persentase uang muka
        </span>
        <div className="flex min-w-0 flex-1 justify-end sm:max-w-[min(100%,420px)]">
          <div
            className={`flex w-full max-w-[400px] overflow-hidden rounded-[10px] border-2 ${border}`}
          >
            <input
              type="number"
              min={0}
              max={persenMaks}
              value={persenUangMuka}
              onChange={onInputPersenChange}
              onBlur={() => setPersen(persenUangMuka)}
              className="w-[52px] shrink-0 border-0 bg-white py-2.5 text-center text-[15px] font-semibold text-[#1E293B] outline-none focus:ring-2 focus:ring-inset focus:ring-[#1957A0]/30"
              aria-label="Persentase uang muka"
            />
            <div
              className={`flex w-[44px] shrink-0 items-center justify-center border-l-2 ${border} bg-[#FDE047] text-[15px] font-bold text-[#1E293B]`}
            >
              %
            </div>
            <div
              className={`flex w-[48px] shrink-0 items-center justify-center border-l-2 ${border} bg-[#FDE047] text-[13px] font-bold leading-tight text-[#1E293B]`}
            >
              Rp.
            </div>
            <div
              className={`flex min-w-0 flex-1 items-center justify-end border-l-2 ${border} bg-white px-3 py-2.5 text-right text-[14px] font-bold tabular-nums text-[#1E293B]`}
            >
              {formatHargaPropertiDesain(nilaiUangMuka).replace(/^Rp\.\s*/, "")}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2 px-0.5">
        <input
          type="range"
          min={0}
          max={persenMaks}
          step={1}
          value={persenUangMuka}
          onChange={(e) => setPersen(Number(e.target.value))}
          className="simulasi-kpr-slider h-2 w-full cursor-pointer rounded-full"
          aria-valuemin={0}
          aria-valuemax={persenMaks}
          aria-valuenow={persenUangMuka}
          aria-label="Geser persentase uang muka"
        />
      </div>
      <div className="mb-6 flex justify-between text-[12px] font-medium text-[#5BADE0]">
        <span>0%</span>
        <span>{persenMaks}%</span>
      </div>

      <div className="rounded-[10px] bg-[#FEF9C3] px-4 py-3.5">
        <p className="text-center text-[12px] font-semibold italic leading-relaxed text-[#1957A0] sm:text-[13px]">
          Persentase uang muka 20% adalah jumlah minimum yang disarankan.
        </p>
      </div>
    </div>
  );
}
