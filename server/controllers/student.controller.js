const Student = require('../models/student');
const User = require('../models/user');
const Food = require('../models/food');

studentCtrl = {}

studentCtrl.createStudent = async (req, res) => {
    await Food.find({ habilitado: true }, { _id: 0, alimento: 1, seleccionado: 1 }, async (err, foods) => {
        if(err) { return res.status(501).json(err); }
        req.body.alimentacion = foods;
        newStudent = new Student(req.body);
        await newStudent.save((err, student) => {
            if(err) { return res.status(501).json(err); }
            return res.status(200).json(student);
        });
    });    
};

studentCtrl.getStudent = async (req, res) => {
    await Student.findById(req.params.id, { habilitado:0 }, (err, student) => {
        if(err) { return res.status(501).json(err); }
        console.log(student);
        return res.status(200).json(student);
    });
}

studentCtrl.getNameStudents = async (req, res) => {
    await Student.find({ habilitado: true }, { nombre:1 }, (err, nameStudents) => {
        if(err) { return res.status(501).json(err); }
        return res.status(200).json(nameStudents);
    });
}

studentCtrl.disableStudent = async (req, res) => {
    await Student.findByIdAndUpdate(req.body._id, { $set: {habilitado: false}}, async (err, student) => {
        if(err) { return res.status(501).json(err); }
        await User.updateOne({ idUsuario: req.body._id }, { $set: {habilitado: false}}, (err, user) => {
            if(err) { return res.status(501).json(err); }
            return res.status(200).json({ message: "Disabled Student!!!" });
        });
    });
}

studentCtrl.putStudent = async (req, res) => {
    let params = { nombre: req.body.nombre, cedula: req.body.cedula, sexo: req.body.sexo, edad: req.body.edad, familia: req.body.familia, alimentacion: req.body.alimentacion, "encargadoLegal.nombre": req.body.encargadoLegal.nombre, "encargadoLegal.profesion": req.body.encargadoLegal.profesion, "encargadoLegal.telefono": req.body.encargadoLegal.telefono, "encargadoLegal.direccion": req.body.encargadoLegal.direccion };
    for(let prop in params) { if(!params[prop]) { delete params[prop]; } }
    await Student.findByIdAndUpdate(req.body._id, params, { habilitado: true }, (err, student) => {
        if(err) { return res.status(501).json(err); }
        return res.status(200).json( { message: "Updated Student!!!" });
    });
}

module.exports = studentCtrl;