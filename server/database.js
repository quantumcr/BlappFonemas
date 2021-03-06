const mongoose = require('mongoose');
const URI = process.env.API_URL;
//const URI = process.env.API_URL_LOCAL;

mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


module.exports = mongoose;