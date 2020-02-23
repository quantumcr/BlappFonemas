const mongoose = require('mongoose');
const { Schema } = mongoose;

foodShema = new Schema({
    alimento: { type: String, required: true, unique: true },
    seleccionado: { type: Boolean, required: true },
    habilitado: { type: Boolean, required: true }
});

module.exports = mongoose.model('food', foodShema);