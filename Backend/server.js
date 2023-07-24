const express = require('express');     
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb+srv://Devjit_Sarkar:Cluster0pass@cluster0.s6l3u1k.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const quoteRouter = require('./routes/quote');
app.use('/quote',quoteRouter);

/*app.use('/', (req,res)=>{
    res.send('Hello World!');
})*/


app.listen(5050, ()=>console.log('Server started on port 5050'));