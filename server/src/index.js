const express = require('express');
const { PORT } = require('./constant');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send("I am working!!!!!")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})