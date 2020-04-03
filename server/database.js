const mongoose = require('mongoose');
const URI = 'mongodb+srv://pbrenes:brenespablo@teca-7rrky.mongodb.net/blapp?retryWrites=true&w=majority';
//const URI = process.env.API_URL_LOCAL;

mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;