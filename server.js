const express = require('express');
const nunjucksExp = require('express-nunjucks');
const app = express();
const port = 3000;

app.use(express.static('static'));
app.set('views', __dirname + '/views');
const njks = nunjucksExp(app, {
    watch: true,
    noCache: true
});

// Ruta HOME
app.get('/', (req, res) => {
    res.send('Hola Mundo!');
});

// Se levanta el servidor
app.listen(port, () => {
    console.log('Node JS app corriendo en puerto 3000');
})