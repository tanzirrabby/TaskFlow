import cors from 'cors';
import express from 'express';
import boardRoutes from './routes/boardRoutes.js';

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.CLIENT_ORIGIN || '*'
    })
  );
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'taskflow-api' });
  });

  app.use('/api/boards', boardRoutes);

  app.use((error, _req, res, _next) => {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  });

  return app;
}
