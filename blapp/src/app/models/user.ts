export class User {
    constructor(
        public _id: string,
        public idUsuario: string,
        public email: string,
        public password: string,
        public tipo: string,
    ) {}
}
