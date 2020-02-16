const mongoose = require('mongoose');
const { Schema } = mongoose;

professorSchema = new Schema({
    nombre: { type: String, required: true },
    sexo: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    especialidad: { type: String, required: true },
    habilitado: { type: Boolean, required: true, default: true }
},{
    timestamps: true
});

module.exports = mongoose.model('professor', professorSchema);