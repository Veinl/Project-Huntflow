require('@babel/register');

const express = require('express');
const serverConfig = require('./config/serverConfig');
const mainRoutes = require('./routes/Main.routes');

const PORT = 3000;

const app = express();

serverConfig(app);

app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Подняли на ${PORT} порту`);
});
