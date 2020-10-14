export interface Encargado {
    nombre: string;
    profesion: string;
    telefono: string;
    direccion: string;
}
export interface Familia{
    nombre: string;
    relacion: string;
}
export class EncargadoLegal {
    constructor(
        public nombre: string = "",
        public profesion: string = "",
        public telefono: string = "",
        public direccion: string = "",
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
        public _id: string = "",
        public nombre: string = "",
        public cedula: string = "",
        public sexo: string = "",
        public edad: number = 0,
        public encargadoLegal: Encargado = {
            nombre: '',
            profesion: 'por asignar',
            telefono: 'por asignar',
            direccion: '',
        },
        //public familia: Encargado[] = [],
        // public alimentacion: Alimentos[] = []
    ) {}
}
