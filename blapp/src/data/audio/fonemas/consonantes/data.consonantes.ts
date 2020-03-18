export interface PhonemeConsonantI {
    consonante: string;
    data: [{
        nombre: string;
        audio: string;
        imagen: string;
        duracion: number;
        reproduciendo: Boolean;
    }],
    dataS: [{
        nombre: string;
        audio: string;
        duracion: number,
        reproduciendo: false
    }]
}

export interface OneDataPhonemeConsonantI {
    nombre: string;
    audio: string;
    imagen: string;
    duracion: number;
    reproduciendo: Boolean;
}

export interface OneDataSPhonemeConsonantI {
    nombre: string;
    audio: string;
    duracion: number,
    reproduciendo: false
}

export const CONSONANTES = [
    // Consonante B
    {
        consonante: 'b',
        data: [
            {
                nombre: 'Ba-na-no',
                audio: 'assets/audio/fonemas/consonantes/b/Banano.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Banano.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ba-su-ra',
                audio: 'assets/audio/fonemas/consonantes/b/Basura.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Basura.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bi-ci-cle-ta',
                audio: 'assets/audio/fonemas/consonantes/b/Bicicleta.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Bicicleta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bom-be-ro',
                audio: 'assets/audio/fonemas/consonantes/b/Bombero.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Bombero.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bo-rra-dor',
                audio: 'assets/audio/fonemas/consonantes/b/Borrador.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Borrador.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bo-tón',
                audio: 'assets/audio/fonemas/consonantes/b/Botón.mp3',
                imagen: 'assets/img/fonemas/consonantes/b/Botón.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ba',
                audio: 'assets/audio/fonemas/silabas/b/Ba.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Be',
                audio: 'assets/audio/fonemas/silabas/b/Be.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bi',
                audio: 'assets/audio/fonemas/silabas/b/Bi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bo',
                audio: 'assets/audio/fonemas/silabas/b/Bo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Bu',
                audio: 'assets/audio/fonemas/silabas/b/Bu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ],
    },

    // Consonante Ch
    {
        consonante: 'ch',
        data: [
            {
                nombre: 'Chu-rros',
                audio: 'assets/audio/fonemas/consonantes/ch/churros.mp3',
                imagen: 'assets/img/fonemas/consonantes/ch/churros.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Cha',
                audio: 'assets/audio/fonemas/silabas/ch/Cha.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Che',
                audio: 'assets/audio/fonemas/silabas/ch/Che.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Chi',
                audio: 'assets/audio/fonemas/silabas/ch/Chi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Cho',
                audio: 'assets/audio/fonemas/silabas/ch/Cho.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Chu',
                audio: 'assets/audio/fonemas/silabas/ch/Cha.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ],
    },
    // Consonante D
    {
        consonante: 'd',
        data: [
            {
                nombre: 'Del-fín',
                audio: 'assets/audio/fonemas/consonantes/d/Delfín.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Delfín.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'De-por-tes',
                audio: 'assets/audio/fonemas/consonantes/d/Deportes.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Deportes.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Di-bu-jo',
                audio: 'assets/audio/fonemas/consonantes/d/Dibujo.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Dibujo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Dien-tes',
                audio: 'assets/audio/fonemas/consonantes/d/Dientes.mp3',
                imagen: 'assets/img/fonemas/consonantes/d/Dientes.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Da',
                audio: 'assets/audio/fonemas/silabas/d/Da.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'De',
                audio: 'assets/audio/fonemas/silabas/d/De.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Di',
                audio: 'assets/audio/fonemas/silabas/d/Di.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Do',
                audio: 'assets/audio/fonemas/silabas/d/Do.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Du',
                audio: 'assets/audio/fonemas/silabas/d/Du.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante F
    {
        consonante: 'f',
        data: [
            {
                nombre: 'Fa-mi-lia',
                audio: 'assets/audio/fonemas/consonantes/f/Familia.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Familia.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fies-ta',
                audio: 'assets/audio/fonemas/consonantes/f/Fiesta.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Fiesta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fan-tas-ma',
                audio: 'assets/audio/fonemas/consonantes/f/Fantasma.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Fantasma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Flo-res',
                audio: 'assets/audio/fonemas/consonantes/f/Flores.mp3',
                imagen: 'assets/img/fonemas/consonantes/f/Flores.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Fa',
                audio: 'assets/audio/fonemas/silabas/f/Fa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fe',
                audio: 'assets/audio/fonemas/silabas/f/Fe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fi',
                audio: 'assets/audio/fonemas/silabas/f/Fi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fo',
                audio: 'assets/audio/fonemas/silabas/f/Fo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Fu',
                audio: 'assets/audio/fonemas/silabas/f/Fu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante G
    {
        consonante: 'g',
        data: [
            {
                nombre: 'Ga-ve-ta',
                audio: 'assets/audio/fonemas/consonantes/g/Gaveta.mp3',
                imagen: 'assets/img/fonemas/consonantes/g/Gaveta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Go-rra',
                audio: 'assets/audio/fonemas/consonantes/g/Gorra.mp3',
                imagen: 'assets/img/fonemas/consonantes/g/Gorra.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ga',
                audio: 'assets/audio/fonemas/silabas/g/Ga.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Gue',
                audio: 'assets/audio/fonemas/silabas/g/Gue.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Gui',
                audio: 'assets/audio/fonemas/silabas/g/Gui.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Go',
                audio: 'assets/audio/fonemas/silabas/g/Go.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Gu',
                audio: 'assets/audio/fonemas/silabas/g/Gu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante J
    {
        consonante: 'j',
        data: [
            {
                nombre: 'Ja-rra',
                audio: 'assets/audio/fonemas/consonantes/j/jarra.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/jarra.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Je-fe',
                audio: 'assets/audio/fonemas/consonantes/j/jefe.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/jefe.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ji-ne-te',
                audio: 'assets/audio/fonemas/consonantes/j/jinete.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/jinete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ji-ra-fa',
                audio: 'assets/audio/fonemas/consonantes/j/jirafa.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/jirafa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Jo-ya',
                audio: 'assets/audio/fonemas/consonantes/j/joya.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/joya.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Jue-go',
                audio: 'assets/audio/fonemas/consonantes/j/juego.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/juego.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju-go',
                audio: 'assets/audio/fonemas/consonantes/j/jugo.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/jugo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju-gue-te',
                audio: 'assets/audio/fonemas/consonantes/j/juguete.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/juguete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju-gue-tes',
                audio: 'assets/audio/fonemas/consonantes/j/juguetes.mp3',
                imagen: 'assets/img/fonemas/consonantes/j/juguetes.jpg',
                duracion: 4,
                reproduciendo: false
            },

        ],
        dataS: [
            {
                nombre: 'Ja',
                audio: 'assets/audio/fonemas/silabas/j/Ja.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Je',
                audio: 'assets/audio/fonemas/silabas/j/Je.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ji',
                audio: 'assets/audio/fonemas/silabas/j/Ji.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Jo',
                audio: 'assets/audio/fonemas/silabas/j/Jo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ju',
                audio: 'assets/audio/fonemas/silabas/j/Ju.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante L
    {
        consonante: 'l',
        data: [
            {
                nombre: 'La-gar-ti-ja',
                audio: 'assets/audio/fonemas/consonantes/l/Lagartija.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lagartija.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-go',
                audio: 'assets/audio/fonemas/consonantes/l/Lago.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lago.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-gu-na',
                audio: 'assets/audio/fonemas/consonantes/l/Laguna.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Laguna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lám-pa-ra',
                audio: 'assets/audio/fonemas/consonantes/l/Lampara.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lampara.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-pa',
                audio: 'assets/audio/fonemas/consonantes/l/Lapa.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lapa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lá-pi-ces',
                audio: 'assets/audio/fonemas/consonantes/l/Lapices.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lapices.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lá-piz',
                audio: 'assets/audio/fonemas/consonantes/l/Lapiz.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lapiz.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-ta',
                audio: 'assets/audio/fonemas/consonantes/l/Lata.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'La-zo',
                audio: 'assets/audio/fonemas/consonantes/l/Lazo.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lazo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-che',
                audio: 'assets/audio/fonemas/consonantes/l/Leche.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Leche.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-chu-za',
                audio: 'assets/audio/fonemas/consonantes/l/Lechuza.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lechuza.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-gos',
                audio: 'assets/audio/fonemas/consonantes/l/Legos.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Legos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-ña',
                audio: 'assets/audio/fonemas/consonantes/l/Leña.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Leña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le-ón',
                audio: 'assets/audio/fonemas/consonantes/l/León.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/León.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-bo',
                audio: 'assets/audio/fonemas/consonantes/l/Lobo.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lobo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-co-mo-to-ra',
                audio: 'assets/audio/fonemas/consonantes/l/Locotora.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Locomotora.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-ma',
                audio: 'assets/audio/fonemas/consonantes/l/Loma.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Loma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-ra',
                audio: 'assets/audio/fonemas/consonantes/l/Lora.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lora.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo-ro',
                audio: 'assets/audio/fonemas/consonantes/l/Loro.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Loro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-ciér-na-ga',
                audio: 'assets/audio/fonemas/consonantes/l/Luciernaga.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Luciernaga.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-na',
                audio: 'assets/audio/fonemas/consonantes/l/Luna.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Luna.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-na-res',
                audio: 'assets/audio/fonemas/consonantes/l/Lunares.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lunares.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu-pi-ta',
                audio: 'assets/audio/fonemas/consonantes/l/Lupita.mp3',
                imagen: 'assets/img/fonemas/consonantes/l/Lupita.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'La',
                audio: 'assets/audio/fonemas/silabas/l/La.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Le',
                audio: 'assets/audio/fonemas/silabas/l/Le.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Li',
                audio: 'assets/audio/fonemas/silabas/l/Li.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lo',
                audio: 'assets/audio/fonemas/silabas/l/Lo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Lu',
                audio: 'assets/audio/fonemas/silabas/l/Lu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante M
    {
        consonante: 'm',
        data: [
            {
                nombre: 'Ma-che-te',
                audio: 'assets/audio/fonemas/consonantes/m/Machete.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Machete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-dri-na',
                audio: 'assets/audio/fonemas/consonantes/m/madrina.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Madrina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-es-tra',
                audio: 'assets/audio/fonemas/consonantes/m/Maestra.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Maestra.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-go',
                audio: 'assets/audio/fonemas/consonantes/m/Mago.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mago.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-le-ta',
                audio: 'assets/audio/fonemas/consonantes/m/Maleta.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Maleta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-má',
                audio: 'assets/audio/fonemas/consonantes/m/Mama.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mama.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-da-ri-na',
                audio: 'assets/audio/fonemas/consonantes/m/Mandarina.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mandarina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-go',
                audio: 'assets/audio/fonemas/consonantes/m/Mango.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mango.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-gue-ra',
                audio: 'assets/audio/fonemas/consonantes/m/Manguera.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Manguera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-ní',
                audio: 'assets/audio/fonemas/consonantes/m/Maní.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Maní.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-tel',
                audio: 'assets/audio/fonemas/consonantes/m/Mantel.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mantel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-te-qui-lla',
                audio: 'assets/audio/fonemas/consonantes/m/Mantequilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mantequilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ma-ña-na',
                audio: 'assets/audio/fonemas/consonantes/m/Mañana.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Mañana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Man-za-nas',
                audio: 'assets/audio/fonemas/consonantes/m/Manzanas.mp3',
                imagen: 'assets/img/fonemas/consonantes/m/Manzanas.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ma',
                audio: 'assets/audio/fonemas/silabas/m/Ma.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Me',
                audio: 'assets/audio/fonemas/silabas/m/Me.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Mi',
                audio: 'assets/audio/fonemas/silabas/m/Mi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Mo',
                audio: 'assets/audio/fonemas/silabas/m/Mo.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Mu',
                audio: 'assets/audio/fonemas/silabas/m/Mu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante N
    {
        consonante: 'n',
        data: [
            {
                nombre: 'Na-chos',
                audio: 'assets/audio/fonemas/consonantes/n/Nachos.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nachos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nan-cy',
                audio: 'assets/audio/fonemas/consonantes/n/Nancy.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nancy.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Na-ti-lla',
                audio: 'assets/audio/fonemas/consonantes/n/Natilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Natilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Na-va-ja',
                audio: 'assets/audio/fonemas/consonantes/n/Navaja.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Navaja.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Na-ve',
                audio: 'assets/audio/fonemas/consonantes/n/Nave.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nave.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ne-va-da',
                audio: 'assets/audio/fonemas/consonantes/n/Nevada.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nevada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-do',
                audio: 'assets/audio/fonemas/consonantes/n/Nido.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nido.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-ña',
                audio: 'assets/audio/fonemas/consonantes/n/Niña.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Niña.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-ñe-ra',
                audio: 'assets/audio/fonemas/consonantes/n/Niñera.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Niñera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni-ños',
                audio: 'assets/audio/fonemas/consonantes/n/Niños.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Niños.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'No-che',
                audio: 'assets/audio/fonemas/consonantes/n/Noche.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Noche.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'No-mo',
                audio: 'assets/audio/fonemas/consonantes/n/Nancy.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nancy.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nu-be',
                audio: 'assets/audio/fonemas/consonantes/n/Nube.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nube.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nu-do',
                audio: 'assets/audio/fonemas/consonantes/n/Nudo.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nudo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nuez',
                audio: 'assets/audio/fonemas/consonantes/n/Nuez.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Nuez.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nú-me-ros',
                audio: 'assets/audio/fonemas/consonantes/n/Números.mp3',
                imagen: 'assets/img/fonemas/consonantes/n/Números.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Na',
                audio: 'assets/audio/fonemas/silabas/n/na.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ne',
                audio: 'assets/audio/fonemas/silabas/n/ne.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ni',
                audio: 'assets/audio/fonemas/silabas/n/Ni.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'No',
                audio: 'assets/audio/fonemas/silabas/n/No.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Nu',
                audio: 'assets/audio/fonemas/silabas/n/Nu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]
    },
    // Consonante Ñ
    {
        consonante: 'ñ',
        data: [
            {
                nombre: 'Ña-me',
                audio: 'assets/audio/fonemas/consonantes/ñ/Ñame.mp3',
                imagen: 'assets/img/fonemas/consonantes/ñ/Ñame.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñam-pí',
                audio: 'assets/audio/fonemas/consonantes/ñ/Ñampí.mp3',
                imagen: 'assets/img/fonemas/consonantes/ñ/Ñampí.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñan-dú',
                audio: 'assets/audio/fonemas/consonantes/ñ/Ñandú.mp3',
                imagen: 'assets/img/fonemas/consonantes/ñ/Ñandú.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ña',
                audio: 'assets/audio/fonemas/silabas/ñ/Ña.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñe',
                audio: 'assets/audio/fonemas/silabas/ñ/Ñe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñi',
                audio: 'assets/audio/fonemas/silabas/ñ/Ñi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ño',
                audio: 'assets/audio/fonemas/silabas/ñ/Ño.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ñu',
                audio: 'assets/audio/fonemas/silabas/ñ/Ñu.mp3',
                duracion: 4,
                reproduciendo: false
            }
        ]

    },
    // Consonante P
    {
        consonante: 'p',
        data: [
            {
                nombre: 'Pa-dri-no',
                audio: 'assets/audio/fonemas/consonantes/p/Padrino.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Padrino.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pá-ja-ro',
                audio: 'assets/audio/fonemas/consonantes/p/Pajaro.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pajaro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ji-lla',
                audio: 'assets/audio/fonemas/consonantes/p/Pajilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pajilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-la',
                audio: 'assets/audio/fonemas/consonantes/p/Pala.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pala.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-le-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Paleta.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paleta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pal-me-ra',
                audio: 'assets/audio/fonemas/consonantes/p/Palmera.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Palmera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-ma',
                audio: 'assets/audio/fonemas/consonantes/p/Paloma.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paloma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-mas',
                audio: 'assets/audio/fonemas/consonantes/p/Palomas.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Palomas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-mi-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Palomita.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Palomita.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-na-de-ro',
                audio: 'assets/audio/fonemas/consonantes/p/Panadero.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Panadero.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pan-da',
                audio: 'assets/audio/fonemas/consonantes/p/Panda.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Panda.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-lo-ma',
                audio: 'assets/audio/fonemas/consonantes/p/Paloma.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paloma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pan-ta-lo-nes',
                audio: 'assets/audio/fonemas/consonantes/p/Pantalones.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pantalones.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pan-ta-lo-ne-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Pantaloneta.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pantaloneta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ñue-lo',
                audio: 'assets/audio/fonemas/consonantes/p/Pañuelo.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pañuelo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-pá',
                audio: 'assets/audio/fonemas/consonantes/p/Papá.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Papá.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-pel',
                audio: 'assets/audio/fonemas/consonantes/p/Papel.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Papel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-que-te',
                audio: 'assets/audio/fonemas/consonantes/p/Paquete.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paquete.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-qui-to',
                audio: 'assets/audio/fonemas/consonantes/p/Paquito.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Paquito.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pas-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Pasta.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pasta.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Pata.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ti-nar',
                audio: 'assets/audio/fonemas/consonantes/p/Patinar.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Patinar.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ti-nes',
                audio: 'assets/audio/fonemas/consonantes/p/Patines.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Patines.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-to',
                audio: 'assets/audio/fonemas/consonantes/p/Pato.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pato.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-vo',
                audio: 'assets/audio/fonemas/consonantes/p/Pavo.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pavo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pa-ya-so',
                audio: 'assets/audio/fonemas/consonantes/p/Payaso.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Payaso.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-ces',
                audio: 'assets/audio/fonemas/consonantes/p/Peces.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Peces.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-lo-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Pelota.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pelota.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-pe',
                audio: 'assets/audio/fonemas/consonantes/p/Pepe.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pepe.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-ra',
                audio: 'assets/audio/fonemas/consonantes/p/Pera.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Per-fu-me',
                audio: 'assets/audio/fonemas/consonantes/p/Perfume.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Perfume.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-ri-co',
                audio: 'assets/audio/fonemas/consonantes/p/Perico.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Perico.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe-rro',
                audio: 'assets/audio/fonemas/consonantes/p/Perro.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Perro.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pez',
                audio: 'assets/audio/fonemas/consonantes/p/Pez.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pez.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pia-no',
                audio: 'assets/audio/fonemas/consonantes/p/Piano.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Piano.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-chel',
                audio: 'assets/audio/fonemas/consonantes/p/Pichel.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pichel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pie',
                audio: 'assets/audio/fonemas/consonantes/p/Pie.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pie.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-ja-ma',
                audio: 'assets/audio/fonemas/consonantes/p/Pijama.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pijama.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pin-cel',
                audio: 'assets/audio/fonemas/consonantes/p/Pincel.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pincel.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-no',
                audio: 'assets/audio/fonemas/consonantes/p/Pino.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pino.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pin-tor',
                audio: 'assets/audio/fonemas/consonantes/p/Pintor.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pintor.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pin-za',
                audio: 'assets/audio/fonemas/consonantes/p/Pinza.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pinza.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-ña-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Piñata.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Piñata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-pa',
                audio: 'assets/audio/fonemas/consonantes/p/Pipa.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pipa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-ra-ta',
                audio: 'assets/audio/fonemas/consonantes/p/Pirata.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pirata.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-to',
                audio: 'assets/audio/fonemas/consonantes/p/Pito.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pito.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi-za-rra',
                audio: 'assets/audio/fonemas/consonantes/p/Pizarra.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pizarra.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pla-ti-llos',
                audio: 'assets/audio/fonemas/consonantes/p/Platillos.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Platillos.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po-li-cia',
                audio: 'assets/audio/fonemas/consonantes/p/Policia.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Policia.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po-lli-to',
                audio: 'assets/audio/fonemas/consonantes/p/Pollito.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pollito.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po-ma-da',
                audio: 'assets/audio/fonemas/consonantes/p/Pomada.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pomada.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Por-tal',
                audio: 'assets/audio/fonemas/consonantes/p/Portal.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Portal.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pren-sas',
                audio: 'assets/audio/fonemas/consonantes/p/Prensas.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Prensas.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pri-ma',
                audio: 'assets/audio/fonemas/consonantes/p/Prima.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Prima.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pri-mo',
                audio: 'assets/audio/fonemas/consonantes/p/Prima.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Prima.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pul-pe-ro',
                audio: 'assets/audio/fonemas/consonantes/p/Pulpero.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pulpero.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pul-po',
                audio: 'assets/audio/fonemas/consonantes/p/Pulpo.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Pulpo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pu-ma',
                audio: 'assets/audio/fonemas/consonantes/p/Puma.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Puma.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pu-ño',
                audio: 'assets/audio/fonemas/consonantes/p/Puño.mp3',
                imagen: 'assets/img/fonemas/consonantes/p/Puño.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Pa',
                audio: 'assets/audio/fonemas/silabas/p/Pa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pe',
                audio: 'assets/audio/fonemas/silabas/p/Pe.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pi',
                audio: 'assets/audio/fonemas/silabas/p/Pi.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Po',
                audio: 'assets/audio/fonemas/silabas/p/Po.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Pu',
                audio: 'assets/audio/fonemas/silabas/p/Pu.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante R
    {
        consonante: 'r',
        data: [
            {
                nombre: 'Ra-mo',
                audio: 'assets/audio/fonemas/consonantes/r/Ramo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Ramo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ra-na',
                audio: 'assets/audio/fonemas/consonantes/r/Rana.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ra-tón',
                audio: 'assets/audio/fonemas/consonantes/r/Ratón.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Ratón.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ra-yo',
                audio: 'assets/audio/fonemas/consonantes/r/Rayo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rayo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re-ga-de-ra',
                audio: 'assets/audio/fonemas/consonantes/r/Regadera.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Regadera.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re-ga-lo',
                audio: 'assets/audio/fonemas/consonantes/r/Regalo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Regalo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re-loj',
                audio: 'assets/audio/fonemas/consonantes/r/Reloj.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Reloj.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Río',
                audio: 'assets/audio/fonemas/consonantes/r/Río.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Río.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ri-sa',
                audio: 'assets/audio/fonemas/consonantes/r/Risa.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Risa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-bot',
                audio: 'assets/audio/fonemas/consonantes/r/Robot.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Robot.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-ca',
                audio: 'assets/audio/fonemas/consonantes/r/Roca.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Roca.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-jo',
                audio: 'assets/audio/fonemas/consonantes/r/Rojo.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rojo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-sa',
                audio: 'assets/audio/fonemas/consonantes/r/Rosa.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rosa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro-sa-do',
                audio: 'assets/audio/fonemas/consonantes/r/Rosado.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rosado.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ros-qui-lla',
                audio: 'assets/audio/fonemas/consonantes/r/Rosquilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/r/Rosquilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Ra',
                audio: 'assets/audio/fonemas/silabas/r/Ra.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Re',
                audio: 'assets/audio/fonemas/silabas/r/Re.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ri',
                audio: 'assets/audio/fonemas/silabas/r/Ri.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ro',
                audio: 'assets/audio/fonemas/silabas/r/Ro.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ru',
                audio: 'assets/audio/fonemas/silabas/r/Ru.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    },
    // Consonante S
    {
        consonante: 's',
        data: [
            {
                nombre: 'Sá-ba-na',
                audio: 'assets/audio/fonemas/consonantes/s/Sabana.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sabana.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-co',
                audio: 'assets/audio/fonemas/consonantes/s/Saco.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Saco.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sal',
                audio: 'assets/audio/fonemas/consonantes/s/Sal.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sal.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-la',
                audio: 'assets/audio/fonemas/consonantes/s/Sala.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sala.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sal-chi-cha',
                audio: 'assets/audio/fonemas/consonantes/s/Salchicha.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Salchicha.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-ni-ta-rio',
                audio: 'assets/audio/fonemas/consonantes/s/Sanitario.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sanitario.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sa-po',
                audio: 'assets/audio/fonemas/consonantes/s/Sapo.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sapo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sar-di-na',
                audio: 'assets/audio/fonemas/consonantes/s/Sardina.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sardina.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sar-tén',
                audio: 'assets/audio/fonemas/consonantes/s/Sartén.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sartén.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-cre-ta-ria',
                audio: 'assets/audio/fonemas/consonantes/s/Secretaria.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Secretaria.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sel-va',
                audio: 'assets/audio/fonemas/consonantes/s/Selva.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Selva.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-má-fo-ro',
                audio: 'assets/audio/fonemas/consonantes/s/Semáforo.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Semáforo.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-mi-lla',
                audio: 'assets/audio/fonemas/consonantes/s/Semilla.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Semilla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Ser-pien-te',
                audio: 'assets/audio/fonemas/consonantes/s/Serpiente.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Serpiente.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-rru-cho',
                audio: 'assets/audio/fonemas/consonantes/s/Serrucho.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Serrucho.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sex-to',
                audio: 'assets/audio/fonemas/consonantes/s/Sexto.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sexto.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se-xy',
                audio: 'assets/audio/fonemas/consonantes/s/Sexy.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sexy.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si-lla',
                audio: 'assets/audio/fonemas/consonantes/s/Silla.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Silla.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si-llón',
                audio: 'assets/audio/fonemas/consonantes/s/Sillón.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sillón.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si-llo-nes',
                audio: 'assets/audio/fonemas/consonantes/s/Sillones.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sillones.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'So-fá',
                audio: 'assets/audio/fonemas/consonantes/s/Sofá.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sofá.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sol',
                audio: 'assets/audio/fonemas/consonantes/s/Sol.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sol.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'So-pa',
                audio: 'assets/audio/fonemas/consonantes/s/Sopa.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Sopa.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sub-ma-ri-no',
                audio: 'assets/audio/fonemas/consonantes/s/Submarino.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Submarino.jpg',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Sué-ter',
                audio: 'assets/audio/fonemas/consonantes/s/Suéter.mp3',
                imagen: 'assets/img/fonemas/consonantes/s/Suéter.jpg',
                duracion: 4,
                reproduciendo: false
            },
        ],
        dataS: [
            {
                nombre: 'Sa',
                audio: 'assets/audio/fonemas/silabas/s/Sa.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Se',
                audio: 'assets/audio/fonemas/silabas/s/Se.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Si',
                audio: 'assets/audio/fonemas/silabas/s/Si.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'So',
                audio: 'assets/audio/fonemas/silabas/s/So.mp3',
                duracion: 4,
                reproduciendo: false
            },
            {
                nombre: 'Su',
                audio: 'assets/audio/fonemas/silabas/s/Su.mp3',
                duracion: 4,
                reproduciendo: false
            },
        ]
    }
];
