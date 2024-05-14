const express = require('express');
const cors = require('cors');
const router = require('./router/index');
const { databaseConnect } = require('./db');
const { errorHandler } = require('./middlewares/errorMiddleware');
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
}));
app.use('/api', router);
app.use(errorHandler);

const start = async () => {
  try {
    await databaseConnect();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.error(e);
  }
}

start();
