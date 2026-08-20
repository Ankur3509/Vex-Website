export function BackgroundFX() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-deep-space"
      />
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-grid" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="scan-beam absolute left-0 top-0" />
      </div>
      <div aria-hidden className="scanlines pointer-events-none fixed inset-0 z-0" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 90% at 50% 50%, transparent 60%, rgba(4,8,16,0.75) 100%)",
        }}
      />
    </>
  );
}