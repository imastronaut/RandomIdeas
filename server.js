const express = require('express');
const path = require('path')
const ideasRouter = require('./routes/idea.js')

const cors = require('cors')

require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//cors middleware
app.use(cors({
    origin:['http://localhost:5000','http://localhost:3000'],
    credentials:true,
}))


app.use(express.static(path.join(__dirname,'public')))

const connectDB = require('./config/db')
connectDB();




app.get('/',(req,res)=>{
    res.send("Welcome to ideas app")
})

app.use('/api/ideas',ideasRouter)



app.listen(port,()=>console.log(`Server is running on port ${port}`))
