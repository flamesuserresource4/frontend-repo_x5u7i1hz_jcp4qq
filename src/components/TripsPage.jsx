import { useMemo, useState } from 'react';
import { Calendar, Plus, Search, MapPin } from 'lucide-react';

function DayBadge({ day, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm transition ${
        active ? 'bg-white text-black' : 'border border-neutral-700 bg-neutral-900 text-white hover:border-neutral-600'
      }`}
    >
      Day {day}
    </button>
  );
}

function AttractionResult({ item, onAdd }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-800">
          <MapPin size={18} className="text-amber-300" />
        </div>
        <div>
          <div className="font-medium text-white">{item.name}</div>
          <div className="text-xs text-neutral-400">{item.city}</div>
        </div>
      </div>
      <button onClick={() => onAdd(item)} className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-black transition hover:bg-amber-200">Add</button>
    </div>
  );
}

function PlannedItem({ item, onRemove }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
      <div>
        <div className="font-medium text-white">{item.name}</div>
        <div className="text-xs text-neutral-400">{item.city}</div>
      </div>
      <button onClick={onRemove} className="text-xs text-neutral-400 hover:text-red-300">Remove</button>
    </div>
  );
}

export default function TripsPage() {
  const [days, setDays] = useState([{ id: 1, items: [] }]);
  const [activeDay, setActiveDay] = useState(1);
  const [query, setQuery] = useState('');

  const catalog = useMemo(
    () => [
      { id: 'eiffel', name: 'Eiffel Tower', city: 'Paris' },
      { id: 'louvre', name: 'Louvre Museum', city: 'Paris' },
      { id: 'ubud', name: 'Ubud Rice Terraces', city: 'Bali' },
      { id: 'shibuya', name: 'Shibuya Crossing', city: 'Tokyo' },
      { id: 'skytree', name: 'Tokyo Skytree', city: 'Tokyo' },
      { id: 'bigben', name: 'Big Ben', city: 'London' },
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catalog.slice(0, 5);
    return catalog.filter((i) => i.name.toLowerCase().includes(q) || i.city.toLowerCase().includes(q));
  }, [query, catalog]);

  const addDay = () => {
    const nextId = days.length + 1;
    setDays((d) => [...d, { id: nextId, items: [] }]);
    setActiveDay(nextId);
  };

  const addItemToDay = (dayId, item) => {
    setDays((prev) => prev.map((d) => (d.id === dayId ? { ...d, items: [...d.items, item] } : d)));
  };

  const removeItemFromDay = (dayId, index) => {
    setDays((prev) => prev.map((d) => (d.id === dayId ? { ...d, items: d.items.filter((_, i) => i !== index) } : d)));
  };

  const current = days.find((d) => d.id === activeDay) ?? days[0];

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2 text-amber-300"><Calendar size={18} /><span className="text-xs uppercase tracking-widest">Plan</span></div>
          <h1 className="mt-1 text-3xl font-semibold text-white">Trip Planner</h1>
          <p className="mt-1 text-sm text-neutral-400">Organize your days and add attractions easily.</p>
        </div>
        <button onClick={addDay} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-amber-200">
          <Plus size={16} /> Add day
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {days.map((d) => (
          <DayBadge key={d.id} day={d.id} active={activeDay === d.id} onClick={() => setActiveDay(d.id)} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Search & results */}
        <div>
          <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/60 p-3">
            <Search size={18} className="text-neutral-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search attractions or cities"
              className="w-full bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            />
          </div>
          <div className="mt-4 space-y-3">
            {filtered.map((item) => (
              <AttractionResult key={item.id} item={item} onAdd={(i) => addItemToDay(current.id, i)} />
            ))}
          </div>
        </div>

        {/* Day plan */}
        <div>
          <h3 className="mb-3 text-lg font-medium text-white">Day {current.id} plan</h3>
          <div className="space-y-3">
            {current.items.length === 0 && (
              <div className="rounded-xl border border-dashed border-neutral-800 p-6 text-center text-sm text-neutral-400">
                No items yet. Use the search to add attractions.
              </div>
            )}
            {current.items.map((item, idx) => (
              <PlannedItem key={`${item.id}-${idx}`} item={item} onRemove={() => removeItemFromDay(current.id, idx)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
