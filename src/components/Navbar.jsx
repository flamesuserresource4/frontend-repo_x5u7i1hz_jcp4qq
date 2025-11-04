import { Home, Map, User } from 'lucide-react';

export default function Navbar({ current, onNavigate }) {
  const items = [
    { key: 'home', label: 'Home', icon: Home },
    { key: 'trips', label: 'Trips', icon: Map },
    { key: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-neutral-800/60 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-white via-orange-300 to-amber-500" />
            <span className="text-lg font-semibold tracking-tight">Wayfinder</span>
          </button>
          <nav className="flex items-center gap-2">
            {items.map(({ key, label, icon: Icon }) => {
              const active = current === key;
              return (
                <button
                  key={key}
                  onClick={() => onNavigate(key)}
                  className={`group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? 'bg-neutral-800/70 text-white ring-1 ring-neutral-600'
                      : 'text-neutral-300 hover:bg-neutral-800/60 hover:text-white'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <Icon size={18} className={active ? 'text-amber-400' : 'text-neutral-400 group-hover:text-amber-300'} />
                  <span>{label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
