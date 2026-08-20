import { cn } from "@/lib/cn";

type CornerBracketsProps = {
  className?: string;
  color?: string;
  size?: number;
  thickness?: number;
  glow?: boolean;
};

const Corners = ({
  className,
  color = "rgba(0, 232, 255, 0.55)",
  size = 14,
  thickness = 1.5,
}: CornerBracketsProps) => {
  const base = "pointer-events-none absolute";
  const s = `${size}px`;
  const border = `${thickness}px solid ${color}`;
  return (
    <>
      <span
        aria-hidden
        className={cn(base, className, "top-0 left-0")}
        style={{ width: s, height: s, borderTop: border, borderLeft: border }}
      />
      <span
        aria-hidden
        className={cn(base, className, "top-0 right-0")}
        style={{ width: s, height: s, borderTop: border, borderRight: border }}
      />
      <span
        aria-hidden
        className={cn(base, className, "bottom-0 left-0")}
        style={{ width: s, height: s, borderBottom: border, borderLeft: border }}
      />
      <span
        aria-hidden
        className={cn(base, className, "bottom-0 right-0")}
        style={{ width: s, height: s, borderBottom: border, borderRight: border }}
      />
    </>
  );
};

export function CornerBrackets({ glow = false, ...props }: CornerBracketsProps) {
  if (!glow) return <Corners {...props} />;
  return (
    <Corners
      {...props}
      color={props.color ?? "rgba(0, 232, 255, 0.9)"}
      className={cn(props.className, "drop-shadow-[0_0_6px_rgba(0,232,255,0.8)]")}
    />
  );
}

export function ReticleCorner({
  className,
  label,
  showLabel = true,
}: {
  className?: string;
  label?: string;
  showLabel?: boolean;
}) {
  return (
    <div className={cn("pointer-events-none absolute", className)}>
      <span
        aria-hidden
        className="absolute left-0 top-0 h-3.5 w-3.5 border-t-2 border-l-2 border-cyan/70"
      />
      <span
        aria-hidden
        className="absolute right-0 top-0 h-3.5 w-3.5 border-t-2 border-r-2 border-cyan/70"
      />
      <span
        aria-hidden
        className="absolute bottom-0 left-0 h-3.5 w-3.5 border-b-2 border-l-2 border-cyan/70"
      />
      <span
        aria-hidden
        className="absolute bottom-0 right-0 h-3.5 w-3.5 border-b-2 border-r-2 border-cyan/70"
      />
      <span
        aria-hidden
        className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_6px_#00e8ff]"
      />
      {label && showLabel ? (
        <span className="label-mono absolute -bottom-1 left-4 text-[10px] text-cyan/70">
          {label}
        </span>
      ) : null}
    </div>
  );
}