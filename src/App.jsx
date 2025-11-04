import { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import TripsPage from './components/TripsPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';

export default function App() {
  const [route, setRoute] = useState('home');

  const CurrentPage = useMemo(() => {
    switch (route) {
      case 'home':
        return (
          <HomePage onPlanTrip={() => setRoute('trips')} />
        );
      case 'trips':
        return <TripsPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage onPlanTrip={() => setRoute('trips')} />;
    }
  }, [route]);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar current={route} onNavigate={setRoute} />
      <main className="pt-16">{CurrentPage}</main>
      <footer className="border-t border-neutral-800/60 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Wayfinder. All rights reserved.</p>
          <p className="opacity-80">Built with a modern, interactive travel aesthetic.</p>
        </div>
      </footer>
    </div>
  );
}
