const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path')

const { append } = require('express/lib/response');
const { join, dirname } = require('path');

// Inicializaciones
const app = express();

// Configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path,join(__dirname, 'view'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

// Widdlewares
app.use(morgan('dev'));
app.use(express.urlencode({extended: false}));
app.use(express.json());

// Variables globales
app.use((req, res, next) => {
    next();
});

// Routes
app.use(require('./routes'));
app.use(require('./routes/authentications'));
app.use('/links', require('./routes/links'));

// Public
app.use(express.static(__dirname, 'public'))

// Starting a server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});