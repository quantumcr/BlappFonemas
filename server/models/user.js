const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const userSchema = new Schema({
    idUsuario: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    tipo: { type: String, required: true },
    habilitado: { type: Boolean, required: true, default: true }
},{
    timestamps: true
});

/**
 * Encriptar la contraseña que ingresa el usuario cuando se
 * registra en el sistema
 */
userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
  
/**
 * Comparar contraseña ingresada por el usuario con la que
 * encriptada en la base de datos
 */
userSchema.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
};
  
userSchema.methods.generateJwt = function(nombre) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
        _id: this._id,
        idUsuario: this.idUsuario,
        nombre: nombre,
        exp: parseInt(expiry.getTime() / 1000),
    }, "123"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('user', userSchema);