import express from 'express';
import setupRoutes from './routes/index'

const app: express.Express = express();
setupRoutes(app);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});