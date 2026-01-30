import { Header } from '@/components/Header';
import { Filters } from '@/components/Filters';
import { Dashboard } from '@/components/Dashboard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main>
        <Filters />
        <Dashboard />
      </main>
    </div>
  );
}
