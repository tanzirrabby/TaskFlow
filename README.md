# TaskFlow - Project Management Tool

TaskFlow is a Kanban-style project management app for small engineering teams, with:

- Drag-and-drop task boards (DnD Kit)
- Team collaboration with assignees and comments
- Deadlines and task priorities
- Real-time activity feed

## Tech Stack

- **Frontend:** React 19 + Vite
- **Backend:** Node.js + Express
- **Database:** MongoDB + Mongoose
- **Drag & Drop:** `@dnd-kit/core` + `@dnd-kit/sortable`

## Project Structure

```
.
├─ client/                 # React app
│  ├─ src/
│  │  ├─ components/       # Board, columns, cards, feed
│  │  ├─ data/             # Demo seed data
│  │  ├─ styles/           # Basic styling
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  └─ package.json
├─ server/                 # Node API
│  ├─ src/
│  │  ├─ controllers/
│  │  ├─ models/
│  │  ├─ routes/
│  │  ├─ app.js
│  │  └─ server.js
│  └─ package.json
└─ package.json            # Workspace scripts
```

## Quick Start

### 1) Install dependencies

```bash
npm install
npm run install:all
```

### 2) Configure environment

Create `server/.env`:

```bash
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/taskflow
CLIENT_ORIGIN=http://localhost:5173
```

### 3) Run in development

```bash
npm run dev
```

- Client: `http://localhost:5173`
- API: `http://localhost:5000/api`

## API Endpoints

- `GET /api/health`
- `GET /api/boards/:boardId`
- `PATCH /api/boards/:boardId/tasks/:taskId/move`
- `POST /api/boards/:boardId/tasks`

## Notes

- Frontend starts with demo board data so you can interact immediately.
- Backend is ready for MongoDB persistence and includes board/task models.
