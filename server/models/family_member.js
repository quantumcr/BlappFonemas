const mongoose = require('mongoose');
const { Schema } = mongoose;

family_memberSchema = new Schema({
    nombre: { type: String, required: true },
    relacion: { type: String, required: true },
    habilitado: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model('family_member', family_memberSchema);