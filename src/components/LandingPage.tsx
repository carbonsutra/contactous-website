export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-white">
      <main className="mx-auto flex w-full max-w-[1800px] flex-1 items-center px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-2">
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
            alignItems: "center",
            gap: "32px",
            width: "100%",
            minWidth: 0,
          }}
          className="landing-hero"
        >
          <div className="landing-hero-content">
            <p className="mb-4 text-xs font-bold tracking-[0.16em] sm:text-sm">
              <span className="text-cyan-600">UNSTRUCTURED COMPLEX DATA,</span>{" "}
              <span className="text-emerald-600">ACCURATE ANSWERS.</span>
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] sm:text-5xl xl:text-7xl">
              Solving by
              <br />
              <span className="inline-block max-w-full rounded-xl bg-gradient-to-r from-blue-500 via-cyan-300 to-emerald-600 px-2 py-1 text-black sm:px-3">
                Bespoke APIs
              </span>
            </h1>

            <p className="mb-5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Building conversationsal data layer for Education, Publishers and
              Enterprises.
            </p>

            <p className="mb-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              For ten years, Contactous has built custom software that powers
              operations for enterprises and institutions. Today, we make
              complex data effortless to query using our specialized Text-to-SQL
              methodology and tailored AI systems.
            </p>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Our plug-and-play APIs deliver instant capabilities—from automated
              assessments and document parsing to data deduplication and carbon
              tracking. Built for leaders in enterprise, education, publishing,
              data quality, and sustainability, we turn raw complexity into
              fast, reliable outcomes.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="/apis"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-cyan-400/60 bg-gradient-to-r from-blue-500/15 to-emerald-400/15 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:border-emerald-400 sm:px-6"
              >
                Explore APIs <span className="text-xl"></span>
              </a>

              <span className="text-sm font-semibold text-slate-300">or</span>

              <a
                href="/solutions"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-[#031016] transition hover:-translate-y-0.5 hover:from-blue-500 hover:via-cyan-400 hover:to-emerald-400 sm:px-6"
              >
                Browse Solutions
              </a>
            </div>
          </div>

          <aside className="landing-hero-visual rounded-xl p-8 flex w-full min-w-0 items-center justify-center overflow-hidden">
            <img
              src="/images/carbonsutra-hero.png"
              alt="Contactous AI and data API platform illustration"
              fetchPriority="high"
              className="block h-auto w-full max-w-[480px] object-contain rounded-xl border-cyan-800 border"
              style={{
                aspectRatio: "4 / 5",
              }}
            />
          </aside>
        </section>
      </main>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 px-5 py-6 text-xs text-slate-400 sm:px-8 sm:py-7 sm:text-sm lg:px-12">
        <a href="/apis" className="transition hover:text-cyan-400">
          APIs
        </a>
        <a
          href="/solutions/enterprise"
          className="transition hover:text-cyan-400"
        >
          Solutions
        </a>
        <a href="/playground" className="transition hover:text-cyan-400">
          Playground
        </a>
        <a href="/about" className="transition hover:text-cyan-400">
          About
        </a>
        <a href="/contact" className="transition hover:text-cyan-400">
          Contact Us
        </a>
        <span className="sm:ml-auto">
          © 2026 Contactous Pte Ltd. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
