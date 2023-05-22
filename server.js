const express = require('express');
const ideasRouter = require('./routes/idea.js')
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}));

const connectDB = require('./config/db')
connectDB();




app.get('/',(req,res)=>{
    res.send("Welcome to ideas app")
})

app.use('/api/ideas',ideasRouter)



app.listen(port,()=>console.log(`Server is running on port ${port}`))
