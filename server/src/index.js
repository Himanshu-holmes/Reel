const express = require('express');
const fs = require('fs');
const { PORT, DB_URI, DB_NAME, CORS_ORIGIN } = require('./constant');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

let {count} = require('./constant');
const cookieParser = require('cookie-parser');



;(async()=>{
    try {
    const connectionInstance = await  mongoose.connect(`${DB_URI}/${DB_NAME}`);
    
     app.on('error', (error) => {
        console.log(`Error connecting to the database: ${error}`);
    }
    );
        console.log('Database connected !! connected to host ::',connectionInstance.connection.host);

        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
        // console.log("connectionInstance",connectionInstance);
        // console.log("connection DB",connectionInstance.connection.db);
    } catch (error) {
        console.log('Database connection failed');
        console.log(error);
        process.exit(1);
    }
})();


app.use(cors({
    origin:CORS_ORIGIN,
    credentials:true
}));
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())

const userRequest= {};
app.use((req,res,next)=>{
    console.log("req url :",req.url);
    // userRequest[req.url] = userRequest[req.url] ? userRequest[req.url]+1 : 1;
    userRequest[req.ip] = {url: req.url, method: req.method, count: userRequest[req.ip] ? userRequest[req.ip].count+1 : 1}; 

    console.log("userRequest",userRequest);

    fs.appendFile('userLogs.json', JSON.stringify(userRequest[req.ip], null, 2) + ',\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        }
    });

  
    next();
})

app.get('/',(req,res)=>{
    count++
    console.log("count",count);
    res.send("I am working!!!!!")
})

