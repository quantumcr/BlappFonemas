const mongoose = require('mongoose');
//const URI = 'mongodb+srv://amarrero:MilitaryIntelligenceSection06@teca-7rrky.mongodb.net/teca?retryWrites=true&w=majority';
const URI = 'mongodb://localhost:27017/blapp';

mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;