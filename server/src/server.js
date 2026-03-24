import dotenv from 'dotenv';
import { createApp } from './app.js';
import { connectDb } from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5000;
const app = createApp();

(async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`🚀 TaskFlow API running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
})();
