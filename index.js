const express =  require('express');

require('dotenv').config();
  const envconfig = require('./src/config/env.config');
  const port = envconfig.PORT;

  app.listen(port, () => {
    debug(`Server is running on port ${port}`)
  })