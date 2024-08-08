const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Use routes
app.use('/api/todos', todoRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
