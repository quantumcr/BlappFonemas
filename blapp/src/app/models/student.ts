class EncargadoLegal {
    constructor( 
        public nombre: String = "",
        public profesion: String = "",
        public telefono: String = "",
        public direccion: String = "",
    ) {}    
}

export class MiembrosFamilia {
    constructor(
        public nombre: String = "",
        public relacion: String = ""
    ) {}
}

export class Alimentos {
    constructor(
        public alimento: String = "",
        public seleccionado: Boolean = false
    ) {}
}

export class Student {
    constructor(
        public _id: String = "",
        public nombre: String = "",
        public cedula: String = "",
        public sexo: String = "",
        public edad: Number = 0,
        public encargadoLegal: EncargadoLegal = new EncargadoLegal,
        public familia: MiembrosFamilia[] = [],
        public alimentacion: Alimentos[] = []
    ) {}
}
