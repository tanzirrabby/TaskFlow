import { DndContext, PointerSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core';
import { useMemo } from 'react';
import BoardColumn from './BoardColumn';

function findColumnByTaskId(columns, taskId) {
  return columns.find((column) => column.tasks.some((task) => task.id === taskId));
}

export default function KanbanBoard({ board, setBoard }) {
  const sensors = useSensors(useSensor(PointerSensor));

  const taskIds = useMemo(
    () => board.columns.flatMap((column) => column.tasks.map((task) => task.id)),
    [board.columns]
  );

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    const sourceColumn = findColumnByTaskId(board.columns, active.id);
    const targetColumn = findColumnByTaskId(board.columns, over.id);
    if (!sourceColumn || !targetColumn) return;

    const movingTask = sourceColumn.tasks.find((task) => task.id === active.id);
    if (!movingTask) return;

    setBoard((previous) => {
      const nextColumns = previous.columns.map((column) => {
        if (column.id === sourceColumn.id) {
          return { ...column, tasks: column.tasks.filter((task) => task.id !== active.id) };
        }

        if (column.id === targetColumn.id) {
          return { ...column, tasks: [movingTask, ...column.tasks] };
        }

        return column;
      });

      const targetTitle = nextColumns.find((column) => column.id === targetColumn.id)?.title || targetColumn.title;

      return {
        ...previous,
        columns: nextColumns,
        activity: [
          {
            id: `activity-${Date.now()}`,
            message: `${movingTask.assignee} moved “${movingTask.title}” to ${targetTitle}`,
            at: new Date().toISOString()
          },
          ...previous.activity
        ]
      };
    });
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="board-grid" data-task-count={taskIds.length}>
        {board.columns.map((column) => (
          <BoardColumn key={column.id} column={column} />
        ))}
      </div>
    </DndContext>
  );
}
