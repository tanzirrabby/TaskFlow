export const seedBoard = {
  id: 'board-1',
  name: 'Sprint Board',
  team: ['Alex', 'Sam', 'Priya', 'Jordan'],
  columns: [
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        {
          id: 'task-1',
          title: 'Set up MongoDB indexes',
          assignee: 'Alex',
          priority: 'High',
          dueDate: '2026-03-28'
        },
        {
          id: 'task-2',
          title: 'Design activity feed API',
          assignee: 'Priya',
          priority: 'Medium',
          dueDate: '2026-03-30'
        }
      ]
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      tasks: [
        {
          id: 'task-3',
          title: 'Implement drag-and-drop board',
          assignee: 'Sam',
          priority: 'High',
          dueDate: '2026-03-26'
        }
      ]
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        {
          id: 'task-4',
          title: 'Define sprint goals',
          assignee: 'Jordan',
          priority: 'Low',
          dueDate: '2026-03-23'
        }
      ]
    }
  ],
  activity: [
    {
      id: 'activity-1',
      message: 'Sam moved “Implement drag-and-drop board” to In Progress',
      at: '2026-03-24T09:30:00Z'
    },
    {
      id: 'activity-2',
      message: 'Jordan completed “Define sprint goals”',
      at: '2026-03-24T08:10:00Z'
    }
  ]
};
