import dotenv from 'dotenv';

import { connectDB } from './src/database/index.js';
import app from './src/server.js';

dotenv.config();

(async function () {
  try {
    await connectDB(process.env.DB_URL);
    app.listen(3333, (_) => {
      console.log("Server running on port 3333");
    });
  } catch (error) {
    console.log("Database connection not established, server will not run");
  }
})();
