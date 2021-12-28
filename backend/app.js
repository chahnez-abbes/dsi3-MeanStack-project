const express = require('express');
const mongoose = require('mongoose');


const terrainRouter = require('./routes/terrain');
const maisonRouter = require('./routes/maison');
const userRouter = require('./routes/user');
const app = express();

mongoose.connect('mongodb://localhost:27017/projet',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));



app.use(express.json());

app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
next();
});


app.use('/api/terrain', terrainRouter);
app.use('/api/maison', maisonRouter);
app.use('/api/auth', userRouter);

module.exports = app;