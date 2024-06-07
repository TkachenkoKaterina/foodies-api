import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import authRouter from './routes/authRouter.js';
import recipesRouter from './routes/recipesRouter.js';
import publicRecipesRouter from './routes/publicRecipesRouter.js';
import categoriesRouter from "./routes/categoriesRouter.js";
import areasRouter from "./routes/areasRouter.js";
import ingredientsRouter from "./routes/ingredientsRouter.js";
import testimonialsRouter from "./routes/testimonialsRouter.js";

const app = express();

app.use(morgan('tiny'));

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', authRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/areas", areasRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/testimonials", testimonialsRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/public', publicRecipesRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

export default app;
