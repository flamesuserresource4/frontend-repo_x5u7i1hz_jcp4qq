import Spline from '@splinetool/react-spline';

export default function Hero({ onPlanTrip }) {
  return (
    <section className="relative h-[68vh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/40 to-neutral-950/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white">
            Plan smarter trips with an interactive travel canvas
          </h1>
          <p className="mt-4 text-neutral-300 md:text-lg">
            Discover deals, compare flights, and map daily plans—all in one modern workspace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onPlanTrip}
              className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-medium text-neutral-900 shadow-lg shadow-orange-500/20 transition hover:brightness-110"
            >
              Start planning
            </button>
            <a
              href="#discover"
              className="rounded-full border border-neutral-700/70 bg-neutral-900/60 px-6 py-3 font-medium text-white backdrop-blur hover:border-neutral-600"
            >
              Explore deals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
