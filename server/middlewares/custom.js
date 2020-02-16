const passport = require('passport');

middleware = {}

middleware.ensureAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info)=>{
        //si hubo un error relacionado con la validez del token (error en su firma, caducado, etc)
        if(info){ return res.status(401).json(info); }

        //si hubo un error en la consulta a la base de datos
        if (err) { return res.status(501).json(err); }

        //si el token está firmado correctamente pero no pertenece a un usuario existente
        if (!user) { return res.status(403).json({ message: "Token firmado pero no pertenece a ningun usuario" }); }
        
        //inyectamos los datos de usuario en la request
        req.user = user;
        next();
    })(req, res, next);
}

module.exports = middleware;