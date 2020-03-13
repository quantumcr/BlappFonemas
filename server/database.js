const mongoose = require('mongoose');
const URI = process.env.API_URL;
//const URI = process.env.API_URL_LOCAL;
console.log(URI);
mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error("Error db connected: ", err));

module.exports = mongoose;