const express = require('express');
const app = express();
//incluir la libreia
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
//motor de busqueda
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


//definir parametros
app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Home',
        nombre: "Lisseth",

    });
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});