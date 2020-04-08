const passport = require('passport');

const Professor = require('../models/professor');
const Student = require('../models/student');
const User = require('../models/user');

userCtrl = {};

/**
 * El controlador de la creacion de un nuevo usuario con passport
 */
userCtrl.createUser = (req, res, next) => {
    // (err, user, info) son datos que son retornados desde el "passport.use('local-signup'" con el done()    
    passport.authenticate('local-signup', { session: false }, (err, user, info) => {
        // Si en el primer paramentro retornado del done() no es null es que hubo un error
        if (err) { Student.findByIdAndRemove(req.body.idUsuario); return res.status(501).json(err); }
        // Luego si el primer y segundo paramentro son null es por que hubo un con el correo ingresado
        if (!user) { Student.findByIdAndRemove(req.body.idUsuario); return res.status(501).json(info); }
        // Si el segundo paramentro es un usuario es porque fue registrado exitosamente en la base de datos
        if (user.tipo == "Estudiante") {
            Student.findById(user.idUsuario, (err, student) => {
                if(err) {
                    return res.status(501).json(err);
                }
                return res.status(200).json( { "token": user.generateJwt(student.nombre) });
            });
        } else {
            Professor.findById(user.idUsuario, (err, professor) => {
                if(err) {
                    return res.status(501).json(err);
                }
                return res.status(200).json( { "token": user.generateJwt(professor.nombre) });
            })
        }        
    })(req, res, next);
}

/**
 * Controlador del login con passport
 */
userCtrl.loginUser = (req, res, next) => {
    //console.log("LoginUser", process.env.API_URL);
    passport.authenticate('local-signin', { session: false }, async (err, user, info) => {
        // Si en el primer paramentro retornado del done() no es null es que hubo un error
        if(err) { return res.status(501).json(err); }
        // Luego si el primer y segundo paramentro son null es por credenciales incorrectas
        if(!user) { return res.status(501).json(info); }
        // Si el segundo paramentro es un usuario es porque las credenciales son correctasuser.generateJwt();
        if(user.tipo == 'Estudiante') {
            await Student.findById(user.idUsuario, (err, student) => {
                if(err) { return res.status(501).json(err); }
                return res.status(200).json( { "token": user.generateJwt(student.nombre) });
            });
        } else {
            await Professor.findById(user.idUsuario, (err, professor) => {
                if(err) { return res.status(501).json(err); }
                return res.status(200).json( { "token": user.generateJwt(professor.nombre) });
            });
        }
    })(req, res, next);
}

userCtrl.putUser = async (req, res) => {
    var params = { email: req.body.email, password: req.body.password };
    //console.log(params.password, req.body);
    if (params.password == "") {
        delete params.password;
    } else {
        const user = new User;
        params.password = user.encryptPassword(req.body.password);
    }
    for(let prop in params) { if(!params[prop]) { delete params[prop]; } }
    await User.findByIdAndUpdate(req.body._id, params, { habilitado: true }, (err, user) => {
        if(err) { return res.status(501).json(err); }
        return res.status(200).json( { message: "Updated User!!!" });
    });
}

userCtrl.getUserWithIdStudent = async (req, res, next) => {
    await User.findOne({ idUsuario: req.params.idUsuario }, (err, user) => {
        if(err) { return res.status(501).json(err); }
        user.password = "";
        return res.status(200).json(user);
    });
}

module.exports = userCtrl;