//incluir la libreia
const hbs = require('hbs');

//Registr un Helper para no llamar por parametro
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});