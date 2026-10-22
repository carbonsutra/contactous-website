export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#090b10] text-white">
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
              <span className="text-sky-400">UNSTRUCTURED COMPLEX DATA,</span>{" "}
              <span className="text-red-400">ACCURATE ANSWERS.</span>
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.055em] sm:text-5xl xl:text-7xl">
              Solving by
              <br />
              <span className="inline-block max-w-full rounded-xl bg-gradient-to-r from-sky-500 via-slate-100 to-red-500 px-2 py-1 text-[#090b10] sm:px-3">
                Bespoke APIs
              </span>
            </h1>

            <p className="mb-5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-lg">
              Building conversationsal data layer for Education, Publishers and Enterprises.
            </p>

            <p className="mb-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              For ten years, Contactous has built custom software that powers operations for enterprises and institutions. Today, we make complex data effortless to query using our specialized Text-to-SQL methodology and tailored AI systems.
            </p>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Our plug-and-play APIs deliver instant capabilities—from automated assessments and document parsing to data deduplication and carbon tracking. Built for leaders in enterprise, education, publishing, data quality, and sustainability, we turn raw complexity into fast, reliable outcomes.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="/apis/index"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-sky-400 bg-gradient-to-r from-sky-500/20 to-red-500/15 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-red-400 sm:px-6"
              >
                Explore APIs <span className="text-xl"></span>
              </a>

              <span className="text-sm font-semibold text-slate-300">or</span>

              <a
                href="/solutions/index"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:from-red-400 hover:to-red-500 sm:px-6"
              >
                Browse Solutions
              </a>
            </div>
          </div>

          <aside
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minWidth: 0,
            }}
            className="landing-hero-visual"
          >
            <img
              src="/images/carbonsutra-hero.png"
              alt="Contactous platform illustration"
              fetchPriority="high"
              style={{
                display: "block",
                width: "60%",
                maxWidth: "460px",
                height: "70vh",
                objectFit: "contain",
                margin: 0,
              }}
            />
          </aside>
        </section>
      </main>

      <footer className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 px-5 py-6 text-xs text-slate-400 sm:px-8 sm:py-7 sm:text-sm lg:px-12">
        <a href="/apis" className="transition hover:text-sky-400">
          APIs
        </a>
        <a
          href="/solutions/enterprise"
          className="transition hover:text-sky-400"
        >
          Solutions
        </a>
        <a href="/playground" className="transition hover:text-sky-400">
          Playground
        </a>
        <a href="/about" className="transition hover:text-sky-400">
          About
        </a>
        <a href="/contact" className="transition hover:text-sky-400">
          Contact Us
        </a>
        <span className="sm:ml-auto">
          © 2026 Contactous Pte Ltd. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
