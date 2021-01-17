const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const app = express();

cont port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public'));

hbs.registerPartials( __dirname + '/views/partials');

app.set('view engine', 'hbs');


 
app.get('/',  (req, res) => {
  //res.send('Hola Mundo!')

res.render('home', {
    nombre: 'pkorro roman',
});

});

app.get('/nosotros',  (req, res) => {
    //res.send('Hola Mundo!')
  
  res.render('nosotros', {

  });
  
  });

app.get('/data',  (req, res) => {
    res.send('Hola data!')
  });
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});