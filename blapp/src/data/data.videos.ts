import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

export const VIDEOS = [
    {
        nombre: 'a',
        video: 'assets/video/fonemas/vidFonA.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaA.png',
        mensaje: 'Aaaaaaaa (Sirena de ambulancia)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'b',
        video: 'assets/video/fonemas/vidFonB.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaB.png',
        mensaje: 'Beeeee Beeeee (Oveja)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'c',
        video: 'assets/video/fonemas/vidFonC.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaC.png',
        mensaje: 'Cuac Cuac Cuac (Pato)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ch',
        video: 'assets/video/fonemas/vidFonCh.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaCh.png',
        mensaje: 'Chuuuu Chuuu Chuuu (Trencito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'd',
        video: 'assets/video/fonemas/vidFonD.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaD.png',
        mensaje: 'Dddddddddd (Abejas cerca de panal)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'e',
        video: 'assets/video/fonemas/vidFonE.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaE.png',
        mensaje: 'Ehhh Ehhh Ehhh (Alegría)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'f',
        video: 'assets/video/fonemas/vidFonF.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaF.png',
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
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaI.png',
        mensaje: 'Iiiii Iiiii Iiiii (Ratoncito)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'j',
        video: 'assets/video/fonemas/vidFonJ.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaJ.png',
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
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaM.png',
        mensaje: 'Muuu Muuu Muuu (Vaca)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'n',
        video: 'assets/video/fonemas/vidFonN.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaN.png',
        mensaje: 'Ni No Ni No Ni No (Minions)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'ñ',
        video: 'assets/video/fonemas/vidFonÑ.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaÑ.png',
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
        nombre: 'p',
        video: 'assets/video/fonemas/vidFonP.mp4',
        imagen: 'assets/img/fonemaP.svg',
        mensaje: 'Pum Pum Pum (Tambor)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'r',
        video: 'assets/video/fonemas/vidFonR.mp4',
        imagen: 'assets/img/fonemaRr.svg',
        mensaje: 'Ra Ra Ra Ra Ra (Cantando)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'rr',
        video: 'assets/video/fonemas/vidFonRR.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaRR.png',
        mensaje: 'Rrrrrrrrrrrr (Moto)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 's',
        video: 'assets/video/fonemas/vidFonS.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaSs.png',
        mensaje: 'Sssssssss (Serpiente)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 't',
        video: 'assets/video/fonemas/vidFonT.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaT.png',
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
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaX.png',
        mensaje: 'Xxxx Xxxx Xxxx (spray)',
        duracion: 4,
        reproduciendo: false
    },
    {
        nombre: 'LLll Yy',
        video: 'assets/video/fonemas/vidFonY.mp4',
        imagen: 'assets/img/fonemas/phoneme-bar/fonemaY.png',
        mensaje: 'Yyyyyyyy (Avión volando)',
        duracion: 4,
        reproduciendo: false
    },
];

