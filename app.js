const express = require ('express');
const app = express ();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en http://localhost:3000/');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
})

app.get('/register', (req, res) => {
    res.sendFile('views/register.html', {root: __dirname });
});

app.get('/login', (req, res) => {
    res.sendFile('views/login.html', {root: __dirname });
});