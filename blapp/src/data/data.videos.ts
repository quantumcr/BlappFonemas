import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

export const VIDEOS = [
    {
        nombre: 'a',
        video: 'assets/video/fonemas/vidFonA.mp4',
        imagen: 'assets/img/fonemaA.svg',
        mensaje: 'Aaaaaaaa (Sirena de ambulancia)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'b',
        video: 'assets/video/fonemas/vidFonB.mp4',
        imagen: 'assets/img/fonemaB.svg',
        mensaje: 'Beeeee Beeeee (Oveja)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'c',
        video: 'assets/video/fonemas/vidFonC.mp4',
        imagen: 'assets/img/fonemaC.svg',
        mensaje: 'Cuac Cuac Cuac (Pato)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ch',
        video: 'assets/video/fonemas/vidFonCh.mp4',
        imagen: 'assets/img/fonemaCh.svg',
        mensaje: 'Chuuuu Chuuu Chuuu (Trencito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'd',
        video: 'assets/video/fonemas/vidFonD.mp4',
        imagen: 'assets/img/fonemaD.svg',
        mensaje: 'Dddddddddd (Abejas cerca de panal)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'e',
        video: 'assets/video/fonemas/vidFonE.mp4',
        imagen: 'assets/img/fonemaE.svg',
        mensaje: 'Ehhh Ehhh Ehhh (Alegría)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'f',
        video: 'assets/video/fonemas/vidFonF.mp4',
        imagen: 'assets/img/fonemaF.svg',
        mensaje: 'Fiiii Fiiii Fiiii (Soplando flauta)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'g',
        video: 'assets/video/fonemas/vidFonG.mp4',
        imagen: 'assets/img/fonemaG.svg',
        mensaje: 'Ggggggggg (Gárgaras)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'i',
        video: 'assets/video/fonemas/vidFonI.mp4',
        imagen: 'assets/img/fonemaI.svg',
        mensaje: 'Iiiii Iiiii Iiiii (Ratoncito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'j',
        video: 'assets/video/fonemas/vidFonJ.mp4',
        imagen: 'assets/img/fonemaJ.svg',
        mensaje: 'Jajajajajajaja (risas)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'Kk',
        video: 'assets/video/fonemas/vidFonK.mp4',
        imagen: 'assets/img/fonemaK.svg',
        mensaje: '',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'l',
        video: 'assets/video/fonemas/vidFonL.mp4',
        imagen: 'assets/img/fonemaL.svg',
        mensaje: 'La La La La La La (Cantando)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'll',
        video: 'assets/video/fonemas/vidFonL.mp4',
        imagen: 'assets/img/fonemaL.svg',
        mensaje: '',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'm',
        video: 'assets/video/fonemas/vidFonM.mp4',
        imagen: 'assets/img/fonemaM.svg',
        mensaje: 'Muuu Muuu Muuu (Vaca)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'n',
        video: 'assets/video/fonemas/vidFonNn.mp4',
        imagen: 'assets/img/fonemaNn.svg',
        mensaje: 'Ni No Ni No Ni No (Minions)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ñ',
        video: 'assets/video/fonemas/vidFonÑ.mp4',
        imagen: 'assets/img/fonemaÑ.svg',
        mensaje: 'Ñooo Ñooo Ñooo (Chanchito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'o',
        video: 'assets/video/fonemas/vidFonO.mp4',
        imagen: 'assets/img/fonemaO.svg',
        mensaje: 'Ohhh Ohhh Ohhh (Asombro)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'Pp',
        video: 'assets/video/fonemas/vidFonP.mp4',
        imagen: 'assets/img/fonemaP.svg',
        mensaje: '',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'r',
        video: 'assets/video/fonemas/vidFonRr.mp4',
        imagen: 'assets/img/fonemaRr.svg',
        mensaje: 'Ra Ra Ra Ra Ra (Cantando)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'rr',
        video: 'assets/video/fonemas/vidFonRR.mp4',
        imagen: 'assets/img/fonemaRR.svg',
        mensaje: 'Rrrrrrrrrrrr (Moto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'Ss',
        video: 'assets/video/fonemas/vidFonS.mp4',
        imagen: 'assets/img/fonemaS.svg',
        mensaje: 'Sssssssss (Serpiente)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 't',
        video: 'assets/video/fonemas/vidFonT.mp4',
        imagen: 'assets/img/fonemaT.svg',
        mensaje: 'Tilín Tilín Tilín (Campana)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'u',
        video: 'assets/video/fonemas/vidFonU.mp4',
        imagen: 'assets/img/fonemaU.svg',
        mensaje: 'Uy Uy Uy (Susto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'x',
        video: 'assets/video/fonemas/vidFonX.mp4',
        imagen: 'assets/img/fonemaX.svg',
        mensaje: 'Xxxx Xxxx Xxxx (spray)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'y',
        video: 'assets/video/fonemas/vidFonY.mp4',
        imagen: 'assets/img/fonemaY.svg',
        mensaje: 'Yyyyyyyy (Avión volando)',
        duracion: 4,
        reproduciendo: false
    },
];
