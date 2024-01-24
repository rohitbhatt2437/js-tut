const express = require('express');
const path = require('path');

const app = express();
const pblcPath = path.join(__dirname, 'pblc');

app.set('view engine', 'ejs');

app.get('', (req, resp) =>{
    resp.sendFile(`${pblcPath}/index.html`);
})

app.get('/profile', (req, resp) =>{
    const user = {
        name:'rohit bhatt',
        email:'rohitbhatt3241@gmail.com',
        city:'ludhiana'
    }
    resp.render('profile', {user});
})

app.get('/about', (req, resp) =>{
    resp.sendFile(`${pblcPath}/about.html`);
})

app.get('/help', (req, resp) =>{
    resp.sendFile(`${pblcPath}/help.html`);
})

app.get('*', (req, resp)=>{
    resp.sendFile(`${pblcPath}/notpage.html`);
})


app.listen(3000);