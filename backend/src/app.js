import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import errorHandling from './middelware/error.middleware.js';
import authRouter from './routes/auth.route.js';
import productRouter from './routes/product.route.js';
import swaggerSetup from './config/swagger.js';
import requestLogger from './middelware/logger.middleware.js';

const app = express();
  
// Middleware
app.use(express.json());  // to parse JSON bodies
app.use(cors());
app.use(morgan('dev')); 
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));  // to read form data

swaggerSetup(app);
app.use(requestLogger);

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
}); 
app.use('/api/auth',authRouter);
app.use('/api/products',productRouter);
// Error Handling Middleware(global)
app.use(errorHandling);


export default app;
