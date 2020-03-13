export class VideoSelected {
    constructor(
        public nombre: string= '',
        public video: string = '',
        public imagen: string ='',
        public mensaje: string= '',
        public duracion: number= 0,
        public reproduciendo: boolean= false
    ) {}
}
