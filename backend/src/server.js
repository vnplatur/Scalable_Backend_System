import { PORT } from "./config/env.js";
import app from "./app.js";
import connectDB from './config/db.js';

const Port = PORT || 3000;

// Connect to Database

connectDB();

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});