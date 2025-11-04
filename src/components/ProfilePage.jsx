import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="flex items-center gap-4">
        <div className="grid h-16 w-16 place-content-center rounded-xl bg-gradient-to-br from-white via-orange-300 to-amber-500 text-black">
          <User />
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-white">Traveler Profile</h1>
          <p className="text-sm text-neutral-400">Manage your preferences and upcoming trips.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
          <h3 className="text-lg font-medium text-white">Basics</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between text-neutral-300"><span>Name</span><span className="text-neutral-400">Alex Traveler</span></div>
            <div className="flex items-center justify-between text-neutral-300"><span>Email</span><span className="text-neutral-400">alex@example.com</span></div>
            <div className="flex items-center justify-between text-neutral-300"><span>Home Airport</span><span className="text-neutral-400">JFK</span></div>
          </div>
        </div>
        <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-5">
          <h3 className="text-lg font-medium text-white">Upcoming</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-300">
            <li className="flex items-center justify-between"><span>Paris Getaway</span><span className="text-neutral-500">Apr 12 - Apr 16</span></li>
            <li className="flex items-center justify-between"><span>Bali Escape</span><span className="text-neutral-500">Jun 2 - Jun 10</span></li>
            <li className="flex items-center justify-between"><span>Tokyo Lights</span><span className="text-neutral-500">Sep 8 - Sep 14</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
