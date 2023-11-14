const express =  require('express');

const debug = require('debug')('students-api:server');

const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

  require('dotenv').config();
  const envconfig = require('./src/config/env.config');
  const port = envconfig.PORT;

app.listen(port, () => {
    debug(`Server is running on port ${port}`)
  })

  const database = require('./src/config/db.config');
  database.connect();