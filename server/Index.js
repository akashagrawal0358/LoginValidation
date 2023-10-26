const express = require('express');
const cors = require('cors');

const app = express() ;
const PORT = process.env.PORT || 8000 ;

app.use(cors());
app.use(express.json());



// Default Home route
app.get('/' , (req, res)=>{
    res.send("Server....");
})


app.post('/register' , (req, res)=>{
    res.json("Register Route");
});

app.get('/register' , (req, res)=>{
    res.send("heelloooo...............");
});




app.listen(PORT , ()=>{
    console.log(`Server Listening on Port : ${PORT}`);
})