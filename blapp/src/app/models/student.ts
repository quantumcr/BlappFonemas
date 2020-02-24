class EncargadoLegal {
    constructor( 
        public nombre: String = "none",
        public profesion: String = "none",
        public telefono: String = "none",
        public direccion: String = "none",
    ) {}    
}

export class MiembrosFamilia {
    constructor(
        public nombre: String = "none",
        public relacion: String = "none"
    ) {}
}

export class Alimentos {
    constructor(
        public alimento: String = "none",
        public seleccionado: Boolean = false
    ) {}
}

export class Student {
    constructor(
        public _id: String = "none",
        public nombre: String = "none",
        public cedula: String = "none",
        public sexo: String = "none",
        public edad: Number = 0,
        public encargadoLegal: EncargadoLegal = new EncargadoLegal,
        public familia: MiembrosFamilia[] = [],
        public alimentacion: Alimentos[] = []
    ) {}
}
