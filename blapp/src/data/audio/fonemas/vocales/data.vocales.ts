export interface PhonemeVocalI {
    vocal: string;
    data: [{
        nombre: string;
        audio: string;
        imagen: string;
        duracion: number;
        reproduciendo: Boolean;
    }]
}

export interface OneDataPhonemeVocalI {
    nombre: string;
    audio: string;
    imagen: string;
    duracion: number;
    reproduciendo: Boolean;
}

export const VOCALES = [
    // Vocal A
    {
        vocal: 'a',
        data: [
            /*{
                nombre: 'A-bri-go',
                audio: 'assets/audio/fonemas/vocales/a/abrigo.mp3',
                imagen: 'assets/img/fonemas/vocales/a/abrigo.jpg',
                duracion: 4,
                reproduciendo: false
            },*/
            {
                nombre: 'A-gua',
                audio: 'assets/audio/fonemas/vocales/a/agua.mp3',
                imagen: 'assets/img/fonemas/vocales/a/agua.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-la',
                audio: 'assets/audio/fonemas/vocales/a/ala.mp3',
                imagen: 'assets/img/fonemas/vocales/a/ala.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-ve',
                audio: 'assets/audio/fonemas/vocales/a/ave.mp3',
                imagen: 'assets/img/fonemas/vocales/a/ave.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-vión',
                audio: 'assets/audio/fonemas/vocales/a/avion.mp3',
                imagen: 'assets/img/fonemas/vocales/a/avion.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-zul',
                audio: 'assets/audio/fonemas/vocales/a/azul.mp3',
                imagen: 'assets/img/fonemas/vocales/a/azul.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-ni-llo',
                audio: 'assets/audio/fonemas/vocales/a/anillo.mp3',
                imagen: 'assets/img/fonemas/vocales/a/anillo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-be-ja',
                audio: 'assets/audio/fonemas/vocales/a/abeja.mp3',
                imagen: 'assets/img/fonemas/vocales/a/abeja.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Á-gui-la',
                audio: 'assets/audio/fonemas/vocales/a/aguila.mp3',
                imagen: 'assets/img/fonemas/vocales/a/aguila.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-ba-ni-co',
                audio: 'assets/audio/fonemas/vocales/a/abanico.mp3',
                imagen: 'assets/img/fonemas/vocales/a/abanico.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ar-di-lla',
                audio: 'assets/audio/fonemas/vocales/a/ardilla.mp3',
                imagen: 'assets/img/fonemas/vocales/a/ardilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'A-mi-gos',
                audio: 'assets/audio/fonemas/vocales/a/amigos.mp3',
                imagen: 'assets/img/fonemas/vocales/a/amigos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            /*
            {
                nombre: 'Algas',
                audio: 'assets/audio/fonemas/vocales/a/algas.mp3',
                imagen: 'assets/img/fonemas/vocales/a/algas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Algodón',
                audio: 'assets/audio/fonemas/vocales/a/algodón.mp3',
                imagen: 'assets/img/fonemas/vocales/a/algodon.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Almendras',
                audio: 'assets/audio/fonemas/vocales/a/almendras.mp3',
                imagen: 'assets/img/fonemas/vocales/a/almendras.jpg',
                duracion: 4,
                reproduciendo: false
            },
            
            {
                nombre: 'Arbol',
                audio: 'assets/audio/fonemas/vocales/a/arbol.mp3',
                imagen: 'assets/img/fonemas/vocales/a/arbol.jpg',
                duracion: 4,
                reproduciendo: false
            },
            */
        ]
    }
    ,
    // Vocal E
    {
        vocal: 'e',
        data: [
            {
                nombre: 'E-mma',
                audio: 'assets/audio/fonemas/vocales/e/emma.mp3',
                imagen: 'assets/img/fonemas/vocales/e/emma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'E-lo-te',
                audio: 'assets/audio/fonemas/vocales/e/elote.mp3',
                imagen: 'assets/img/fonemas/vocales/e/elote.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'E-na-no',
                audio: 'assets/audio/fonemas/vocales/e/enano.mp3',
                imagen: 'assets/img/fonemas/vocales/e/enano.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Es-pa-da',
                audio: 'assets/audio/fonemas/vocales/e/espada.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Es-pe-jo',
                audio: 'assets/audio/fonemas/vocales/e/espejo.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espejo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Es-pi-na-ca',
                audio: 'assets/audio/fonemas/vocales/e/espinaca.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espinaca.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'E-di-fi-cio',
                audio: 'assets/audio/fonemas/vocales/e/edificio.mp3',
                imagen: 'assets/img/fonemas/vocales/e/edificio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'He-la-do',
                audio: 'assets/audio/fonemas/vocales/e/helado.mp3',
                imagen: 'assets/img/fonemas/vocales/e/helado.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'E-le-fan-te',
                audio: 'assets/audio/fonemas/vocales/e/elefante.mp3',
                imagen: 'assets/img/fonemas/vocales/e/elefante.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Es-tre-lla',
                audio: 'assets/audio/fonemas/vocales/e/estrella.mp3',
                imagen: 'assets/img/fonemas/vocales/e/estrella.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Es-co-ba',
                audio: 'assets/audio/fonemas/vocales/e/escoba.mp3',
                imagen: 'assets/img/fonemas/vocales/e/escoba.jpg',
                duracion: 4,
                reproduciendo: false
            },
            /*
            {
                nombre: 'Escamas',
                audio: 'assets/audio/fonemas/vocales/e/escamas.mp3',
                imagen: 'assets/img/fonemas/vocales/e/escamas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Escudo',
                audio: 'assets/audio/fonemas/vocales/e/escudo.mp3',
                imagen: 'assets/img/fonemas/vocales/e/escudo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            
            {
                nombre: 'Espárrago',
                audio: 'assets/audio/fonemas/vocales/e/esparragos.mp3',
                imagen: 'assets/img/fonemas/vocales/e/espárragos.jpg',
                duracion: 4,
                reproduciendo: false
            },*/
            
            
        ]
    },

    // Vocal I
    {
        vocal: 'i',
        data: [
            {
                nombre: 'I-mán',
                audio: 'assets/audio/fonemas/vocales/i/iman.mp3',
                imagen: 'assets/img/fonemas/vocales/i/iman.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Hi-lo',
                audio: 'assets/audio/fonemas/vocales/i/hilo.mp3',
                imagen: 'assets/img/fonemas/vocales/i/hilo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'I-glú',
                audio: 'assets/audio/fonemas/vocales/i/iglu.mp3',
                imagen: 'assets/img/fonemas/vocales/i/iglu.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'In-dio',
                audio: 'assets/audio/fonemas/vocales/i/indio.mp3',
                imagen: 'assets/img/fonemas/vocales/i/indio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Is-la',
                audio: 'assets/audio/fonemas/vocales/i/isla.mp3',
                imagen: 'assets/img/fonemas/vocales/i/isla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'I-de-a',
                audio: 'assets/audio/fonemas/vocales/i/idea.mp3',
                imagen: 'assets/img/fonemas/vocales/i/idea.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'I-gua-na',
                audio: 'assets/audio/fonemas/vocales/i/iguana.mp3',
                imagen: 'assets/img/fonemas/vocales/i/iguana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'In-cen-dio',
                audio: 'assets/audio/fonemas/vocales/i/incendio.mp3',
                imagen: 'assets/img/fonemas/vocales/i/incendio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'In-sec-to',
                audio: 'assets/audio/fonemas/vocales/i/insecto.mp3',
                imagen: 'assets/img/fonemas/vocales/i/insecto.jpg',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },

    // Vocal O
    {
        vocal: 'o',
        data: [
            {
                nombre: 'O-so',
                audio: 'assets/audio/fonemas/vocales/o/oso.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oso.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-jo',
                audio: 'assets/audio/fonemas/vocales/o/ojo.mp3',
                imagen: 'assets/img/fonemas/vocales/o/ojo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-lla',
                audio: 'assets/audio/fonemas/vocales/o/olla.mp3',
                imagen: 'assets/img/fonemas/vocales/o/olla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-ro',
                audio: 'assets/audio/fonemas/vocales/o/oro.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-tto',
                audio: 'assets/audio/fonemas/vocales/o/otto.mp3',
                imagen: 'assets/img/fonemas/vocales/o/otto.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-la',
                audio: 'assets/audio/fonemas/vocales/o/ola.mp3',
                imagen: 'assets/img/fonemas/vocales/o/ola.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-ve-ja',
                audio: 'assets/audio/fonemas/vocales/o/oveja.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oveja.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-ru-ga',
                audio: 'assets/audio/fonemas/vocales/o/oruga.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oruga.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-cho',
                audio: 'assets/audio/fonemas/vocales/o/ocho.mp3',
                imagen: 'assets/img/fonemas/vocales/o/ocho.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'O-re-ja',
                audio: 'assets/audio/fonemas/vocales/o/oreja.mp3',
                imagen: 'assets/img/fonemas/vocales/o/oreja.jpg',
                duracion: 4,
                reproduciendo: false
            },
            
        ]
    },

    // Vocal U
    {
        vocal: 'u',
        data: [
            {
                nombre: 'U-va',
                audio: 'assets/audio/fonemas/vocales/u/Uva.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uva.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'U-no',
                audio: 'assets/audio/fonemas/vocales/u/Uno.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uno.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'U-ña',
                audio: 'assets/audio/fonemas/vocales/u/Uña.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ur-na',
                audio: 'assets/audio/fonemas/vocales/u/Urna.mp3',
                imagen: 'assets/img/fonemas/vocales/u/urna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'U-rra-ca',
                audio: 'assets/audio/fonemas/vocales/u/Urraca.mp3',
                imagen: 'assets/img/fonemas/vocales/u/urraca.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ú-ti-les',
                audio: 'assets/audio/fonemas/vocales/u/Útiles.mp3',
                imagen: 'assets/img/fonemas/vocales/u/utiles.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'U-ni-ver-so',
                audio: 'assets/audio/fonemas/vocales/u/Universo.mp3',
                imagen: 'assets/img/fonemas/vocales/u/universo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'U-ni-cor-nio',
                audio: 'assets/audio/fonemas/vocales/u/Unicornio.mp3',
                imagen: 'assets/img/fonemas/vocales/u/unicornio.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'U-ni-for-me',
                audio: 'assets/audio/fonemas/vocales/u/Uniforme.mp3',
                imagen: 'assets/img/fonemas/vocales/u/uniforme.jpg',
                duracion: 4,
                reproduciendo: false
            },
            
            
            
            
            
            
        ]
    }

];