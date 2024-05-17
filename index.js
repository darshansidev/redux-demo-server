require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

//-----------route define -----------------
const connectDb = require('./src/database/db-connection')
const todoRoute = require('./src/routes/todo.routes');
const errorMiddleware = require('./src/middlewares/error.middleware');

// ------------MiddleWare------------------------------
app.use(express.json())
app.use(cors());

// ---------sample get ---------------------
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

//--------------Route Call -----------------
app.use('/todo', todoRoute, errorMiddleware);

//-------------Database Connection & Server ----------------
connectDb.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    });
})