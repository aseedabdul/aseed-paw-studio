import { PawPrint } from "lucide-react";
import { cn } from "@/lib/utils";

type Paw = { className: string; size: number; rotate: number };

const defaults: Paw[] = [
  { className: "left-[4%] top-[14%]", size: 46, rotate: -18 },
  { className: "right-[8%] top-[8%]", size: 30, rotate: 22 },
  { className: "left-[16%] bottom-[10%]", size: 24, rotate: 8 },
  { className: "right-[3%] bottom-[18%]", size: 56, rotate: -12 },
];

export function PawDecor({ paws = defaults, className }: { paws?: Paw[]; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      {paws.map((paw, i) => (
        <PawPrint
          key={i}
          className={cn("paw-deco float-soft", paw.className)}
          style={{
            width: paw.size,
            height: paw.size,
            transform: `rotate(${paw.rotate}deg)`,
            animationDelay: `${i * 1.4}s`,
          }}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
