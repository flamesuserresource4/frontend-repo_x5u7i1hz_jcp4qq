import Spline from '@splinetool/react-spline';
import { Plane, Star } from 'lucide-react';

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        <div className="flex items-center gap-2 text-amber-300">
          <Icon size={18} />
          <span className="text-xs uppercase tracking-widest">Featured</span>
        </div>
        <h2 className="mt-1 text-2xl font-semibold text-white">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>}
      </div>
    </div>
  );
}

function Card({ title, subtitle, image, badge }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition hover:border-neutral-700">
      <div className="relative h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {badge && (
          <span className="absolute left-3 top-3 rounded-full bg-amber-500/90 px-2 py-1 text-xs font-medium text-black">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>
      </div>
    </div>
  );
}

export default function HomePage({ onPlanTrip }) {
  return (
    <div>
      {/* Hero with Spline cover */}
      <section className="relative h-[68vh] w-full">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Overlay content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 backdrop-blur">
              <Plane size={14} className="text-amber-300" /> Smart travel planning
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
              Discover deals, attractions, and flights in one place
            </h1>
            <p className="mt-3 text-neutral-300">
              A modern travel experience with interactive visuals and curated recommendations.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button onClick={onPlanTrip} className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-amber-200">
                Plan your trip
              </button>
              <button className="rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:border-neutral-600">
                Explore deals
              </button>
            </div>
          </div>
        </div>
        {/* gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Deals */}
        <SectionTitle icon={Star} title="Hot Deals" subtitle="Limited-time offers curated for you" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Paris Weekend" subtitle="3 nights + flight from $699" image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop" badge="-20%" />
          <Card title="Bali Escape" subtitle="7 nights villa from $899" image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" />
          <Card title="Tokyo Lights" subtitle="5 nights city pass from $1099" image="https://images.unsplash.com/photo-1517720359744-6d12f8a9d3d0?q=80&w=1200&auto=format&fit=crop" />
        </div>

        {/* Attractions */}
        <div className="mt-12">
          <SectionTitle icon={Star} title="Top Attractions" subtitle="Must-see experiences around the world" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card title="Eiffel Tower" subtitle="Paris, France" image="https://images.unsplash.com/photo-1543349689-9a4d426bee8b?q=80&w=1200&auto=format&fit=crop" />
            <Card title="Ubud Rice Terraces" subtitle="Bali, Indonesia" image="https://images.unsplash.com/photo-1526481280698-8fcc13fd7313?q=80&w=1200&auto=format&fit=crop" />
            <Card title="Shibuya Crossing" subtitle="Tokyo, Japan" image="https://images.unsplash.com/photo-1498654206905-27edbc827f78?q=80&w=1200&auto=format&fit=crop" />
          </div>
        </div>

        {/* Flights */}
        <div className="mt-12">
          <SectionTitle icon={Plane} title="Featured Flights" subtitle="Great value on popular routes" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { from: 'NYC', to: 'PAR', price: 499 },
              { from: 'LAX', to: 'NRT', price: 699 },
              { from: 'LHR', to: 'DXB', price: 399 },
            ].map((f) => (
              <div key={`${f.from}-${f.to}`} className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/50 p-5">
                <div>
                  <div className="text-sm text-neutral-400">{f.from} → {f.to}</div>
                  <div className="mt-1 text-xl font-semibold text-white">${f.price}</div>
                </div>
                <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-200">Book</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
