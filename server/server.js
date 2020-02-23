const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const passport = require('passport');
const cors = require('cors');

// Initioalizations
const { mongoose } = require('./database');
require('./passport/local-auth');

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/students', require('./routes/students.routes'));

// Static files
app.use(express.static(path.join(__dirname, '../blapp/www')));

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});
