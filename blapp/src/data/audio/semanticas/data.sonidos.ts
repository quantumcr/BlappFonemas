export interface CategoriesSoundI {
    nombre: string;
    data: [{
        sujeto: string;
        audio: string;
    }]
}

export interface OneDataCategoriesSoundI {
    sujeto: string;
    audio: string;
}
export const SONIDOS = [
    {
        nombre: 'instrumentos',
        data: [
            {
                sujeto: 'El tambor',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Tambor.mp3'
            },
            {
                sujeto: 'La trompeta',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Trompeta.mp3'
            },
            {
                sujeto: 'La campana',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Campana.mp3'
            },
            {
                sujeto: 'El piano',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Piano.mp3'
            },
            {
                sujeto: 'Las maracas',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Maracas.mp3'
            },
            {
                sujeto: 'La Guitarra',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Guitarra.mp3'
            },
            {
                sujeto: 'La Flauta',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Flauta.mp3'
            },
            {
                sujeto: 'Los platillos',
                audio: 'assets/audio/semanticas/categorias/instrumentos/PLatillos.mp3'
            },
        ]
    },
    {
        nombre : 'salvajes'
    }
];