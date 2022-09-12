const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 6200;

const static_path = path.join(__dirname, "../src")
const template_path = path.join(__dirname, "../src/views")


app.set('view engine', '.hbs');
app.set('views', template_path)

app.use(express.static(static_path));

app.get('/',(req,res)=>{
    res.render('home')
})
app.listen(port,() =>{
    console.log(`Listening at ${port}`)
});