const mongoose = require('mongoose');
const { Schema } = mongoose;

studentSchema = new Schema({
    nombre: { type: String, required: true },
    cedula: { type: String, required: true },
    sexo: { type: String, required: true },
    edad: { type: Number, required: true },
    encargadoLegal: {
        nombre: { type: String, required: true },
        profesion: { type: String, required: true },
        telefono: { type: String, required: true },
        direccion: { type: String, required: true }
    },
    familia: [
        {
            nombre: { type: String, required: true },
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