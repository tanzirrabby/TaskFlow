import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';

export default function BoardColumn({ column }) {
  return (
    <section className="board-column">
      <header className="column-header">
        <h3>{column.title}</h3>
        <span>{column.tasks.length} tasks</span>
      </header>
      <SortableContext items={column.tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
        <div className="tasks-list">
          {column.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </SortableContext>
    </section>
  );
}
