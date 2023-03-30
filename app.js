require('@babel/register');

const express = require('express');
const serverConfig = require('./config/serverConfig');
const mainRoutes = require('./routes/Main.routes');
const authRoutes = require('./routes/auth.route');
const candidateRoute = require('./routes/infoCard.route');

const PORT = 4000;

const app = express();

serverConfig(app);

app.use('/', mainRoutes);
app.use('/auth', authRoutes);
app.use('/candidate', candidateRoute);

app.listen(PORT, () => {
  console.log(`Подняли на ${PORT} порту`);
});
