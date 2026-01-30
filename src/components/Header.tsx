import { FlameKindling } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <FlameKindling className="h-8 w-8 text-zinc-500" />
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            GenzVibe
          </h1>
        </div>
      </div>
    </header>
  );
}
