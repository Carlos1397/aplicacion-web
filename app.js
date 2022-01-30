const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log(req.query)
    const nom = req.query.nombre;
    res.send(`<h1>Hola ${nom}!</h1>`)
});

app.listen(3000, () => console.log('Listening on port 3000!'));