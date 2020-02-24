const mongoose = require('mongoose');
const { Schema } = mongoose;

foodSchema = new Schema({
    alimento: { type: String, required: true, unique: true },
    seleccionado: { type: Boolean, required: true },
    habilitado: { type: Boolean, required: true }
});

module.exports = mongoose.model('food', foodSchema);