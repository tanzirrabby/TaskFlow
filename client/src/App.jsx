import { useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import ActivityFeed from './components/ActivityFeed';
import { seedBoard } from './data/seedBoard';

export default function App() {
  const [board, setBoard] = useState(seedBoard);

  return (
    <main className="app-shell">
      <header>
        <h1>TaskFlow</h1>
        <p>Kanban project management for small engineering teams.</p>
      </header>

      <section className="content-layout">
        <div>
          <h2>{board.name}</h2>
          <KanbanBoard board={board} setBoard={setBoard} />
        </div>
        <ActivityFeed items={board.activity} />
      </section>
    </main>
  );
}
