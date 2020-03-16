export interface CategoriaI {
    nombre: string;
    imagen: string;
    subcategoria: [{
        nombre: string;
    } ]
}

export const CATEGORIAS = [
    {
        nombre: 'Imagen de mí mismo',
        imagen: 'assets\img\semanticas\categories-bar\imagen.png',
        subcategoria: []
    },
    {
        nombre: 'Partes del Cuerpo',
        imagen: 'assets\img\semanticas\categories-bar\cuerpo.png',
        subcategoria: []
    },
    {
        nombre: 'Familia',
        imagen: 'assets\img\semanticas\categories-bar\familia.png',
        subcategoria: []
    },
    {
        nombre: 'Alimentos',
        imagen: 'assets\img\semanticas\categories-bar\alimentos.png',
        subcategoria: [
            {nombre: 'Frutas'},
            {nombre: 'Vegetales'},
            {nombre: 'Alimentos Salados'},
            {nombre: 'Alimentos Dulces'},
            {nombre: 'Bebidas'}
        ]
    },
    {
        nombre: 'Animales',
        imagen: 'assets\img\semanticas\categories-bar\animales.png',
        subcategoria: [
            {nombre: 'Animales de la Granja'},
            {nombre: 'Animales Domésticos'},
            {nombre: 'Salvajes'}
        ]
    },
    {
        nombre: 'Juguetes',
        imagen: 'assets\img\semanticas\categories-bar\juguetes.png',
        subcategoria: [
            {nombre: ''}
        ]
    },
    {
        nombre: 'Prendas de Vestir',
        imagen: 'assets\img\semanticas\categories-bar\prendas.png',
        subcategoria: [
            {nombre: 'Ropa de Hombre'},
            {nombre: 'Ropa de Mujer'},
            {nombre: 'Ropa de Playa'}
        ]
    },
    {
        nombre: 'Partes de la Casa',
        imagen: 'assets\img\semanticas\categories-bar\casa.png',
        subcategoria: []
    },
    {
        nombre: 'Medios de Transporte',
        imagen: 'assets\img\semanticas\categories-bar\transporte.png',
        subcategoria: []
    },
    {
        nombre: 'Servidores de la Comunidad',
        imagen: 'assets\img\semanticas\categories-bar\servidores.png',
        subcategoria: []
    },
    {
        nombre: 'Instrumentos Musicales',
        imagen: 'assets\img\semanticas\categories-bar\instrumentos.png',
        subcategoria: []
    }
];
