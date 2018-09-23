const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3000;
const path = require('path');
const rootPath = path.dirname(require.main.filename);
const nunjucks = require('nunjucks');

/*var hbs = require('express-handlebars').create({
    defaultLayout: 'main'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');*/


nunjucks.configure(rootPath + '/templates', {
    express: app
})

// Ruta HOME
app.get('/', (req, res) => {
    res.render('index', { name: 'Cristian' });
});

// Se levanta el servidor
server.listen(port, () => {
    console.log('Node JS app corriendo en puerto 3000');
});