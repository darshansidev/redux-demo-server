require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

//-----------route define -----------------
const connectDb = require('./src/database/db-connection')
const todoRoute = require('./src/routes/todo.routes');

// ------------MiddleWare------------------------------
app.use(express.json())

//--------------Route Call -----------------
app.use('/todo', todoRoute);

//-------------Database Connection & Server ----------------
connectDb.then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    });
})