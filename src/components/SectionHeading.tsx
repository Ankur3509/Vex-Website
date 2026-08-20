import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export function SectionHeading({
  code,
  title,
  sub,
  align = "center",
  className,
}: {
  code: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "relative mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      <p className="label-mono mb-3 flex items-center gap-3 text-cyan/80 [&>*]:m-0">
        {align === "center" && <span className="hidden h-px w-8 bg-cyan/40 sm:block" />}
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_8px_#00e8ff]" />
          {code}
        </span>
        {align === "center" && <span className="hidden h-px w-8 bg-cyan/40 sm:block" />}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {sub ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}