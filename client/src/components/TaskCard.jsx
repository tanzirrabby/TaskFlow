import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TaskCard({ task }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1
  };

  return (
    <article ref={setNodeRef} style={style} className="task-card" {...attributes} {...listeners}>
      <h4>{task.title}</h4>
      <p>Assignee: {task.assignee}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
    </article>
  );
}
