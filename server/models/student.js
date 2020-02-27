const mongoose = require('mongoose');
const { Schema } = mongoose;

studentSchema = new Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, default: "" },
    sexo: { type: String, required: true },
    edad: { type: Number, required: true },
    encargadoLegal: {
        nombre: { type: String, required: true },
        profesion: { type: String, default: "" },
        telefono: { type: String, default: "" },
        direccion: { type: String, required: true }
    },
    familia: [
        {
            nombre: { type: String },
            relacion: { type: String, required: true }
        }
    ],
    alimentacion: [
        { 
            alimento: { type: String, required: true },
            seleccionado: { type: Boolean, required: true }
        }],
    habilitado: { type: Boolean, required: true, default: true }
},{
    timestamps: true
});

module.exports = mongoose.model('student', studentSchema);