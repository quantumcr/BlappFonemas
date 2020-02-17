export class Student {
    constructor(
        public _id: String,
        public nombre: String,
        public cedula: String,
        public sexo: String,
        public edad: Number,
        public encargadoLegal: {
            nombre: String,
            profesion: String,
            telefono: String,
            direccion: String
        },
        public familia: String[],
        public alimentacion: String[]
    ) {}
}
