require('@babel/register');

const express = require('express');
const serverConfig = require('./config/serverConfig');
const mainRoutes = require('./routes/Main.routes');
const authRoutes = require('./routes/auth.route');

const PORT = 3000;

const app = express();

serverConfig(app);

app.use('/', mainRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Подняли на ${PORT} порту`);
});
