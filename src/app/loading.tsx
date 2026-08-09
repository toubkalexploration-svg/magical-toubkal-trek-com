export default function Loading() {
  return (
    <main
      className="flex min-h-[72svh] items-center justify-center bg-slate-50 px-6 pb-16 pt-32"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="w-full max-w-sm text-center">
        <div className="relative mx-auto h-28 w-52 text-brand-slate" aria-hidden="true">
          <svg viewBox="0 0 220 120" className="h-full w-full overflow-visible" fill="none">
            <path
              d="M12 102 62 49l21 22 37-55 44 61 18-19 27 44H12Z"
              className="fill-slate-200 stroke-brand-slate"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path
              d="m62 49 13 8 8 14 13-11 24-44 12 28"
              className="stroke-white/90"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M31 101c24-11 37-5 53-16 16-10 20-23 37-31 13-6 23-2 34-12"
              className="loading-trail stroke-brand-terracotta"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx="31" cy="101" r="5" className="loading-hiker fill-brand-terracotta" />
          </svg>
        </div>

        <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-brand-terracotta">
          Preparing your trail
        </p>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
          Mapping the next High Atlas view for you
          <span className="loading-dots ml-1 inline-flex w-5 justify-start" aria-hidden="true">
            <span>.</span><span>.</span><span>.</span>
          </span>
        </p>

        <div className="mx-auto mt-6 h-1.5 w-44 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
          <span className="loading-progress block h-full rounded-full bg-brand-terracotta" />
        </div>
        <span className="sr-only">Loading the requested page</span>
      </div>
    </main>
  );
}
