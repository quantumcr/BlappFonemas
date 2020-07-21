export interface SubcategoryI {
    nombre: string;
    data: [{
        sujeto: string;
        verbo: string;
        predicado: string;
        imagenSujeto: string;
        imagenVerbo: string;
        imagenPredicado: string;
        audio: string;
    }]
}

export interface OneDataI {
    sujeto: string;
    verbo: string;
    predicado: string;
    imagenSujeto: string;
    imagenVerbo: string;
    imagenPredicado: string;
    audio: string;
}

export const SUBCATEGORIAS = [
    {
        nombre: 'Imagen de mí mismo',
        data: [
            {
                sujeto: 'Este',
                verbo: ' soy',
                predicado: 'yo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Yo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'me llamo',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Nombre.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'vivo',
                predicado: 'Lugar',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Lugar.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: ' en el Centro de Apoyos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/imagen/Centro.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Partes del Cuerpo',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cabeza',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cabeza.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'pelo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pelo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'frente',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Frente.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'mejillas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Mejillas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'ojos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Ojos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cejas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cejas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'pestaña',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pestañas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'nariz',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cabeza.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'boca',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Boca.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'dientes',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Dientes.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'lengua',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Lengua.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'labios',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Labios.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'barbilla',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Barbilla.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'orejas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Orejas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cuello',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cuello.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'nuca',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Nuca.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'espalda',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Espalda.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'hombros',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Hombros.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'estómago',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Estómago.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'brazos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Brazos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'codos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Codos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'manos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Manos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'dedos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Dedos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'uñas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Uñas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'cintura',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Cintura.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'piernas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Piernas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'rodillas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Rodillas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'tobillos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Tobillos.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'talones',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Talones.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'pies',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/cuerpo/Pies.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Familia',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'mamá',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Mamá.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Mamá.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'papá',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Papá.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Papá.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'abuelita',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuela.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuela.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'abuelito',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuelo.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Abuelo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'tío',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tío.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tío.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'tía',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tía.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tía.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'Padrino',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Padrino.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Padrino.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'tengo',
                predicado: 'Madrina',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Tía.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'se llama',
                predicado: 'Nombre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/familia/Madrina.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Frutas',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'banano',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Banano.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'naranja',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Naranja.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'manzana',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Manzana.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'uvas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Uvas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'sandía',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Sandía.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'papaya',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Papaya.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'melón',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Melón.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'piña',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Piña.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'fresas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Fresas.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'cas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/frutas/Cas.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Vegetales',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'aguacate',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Aguacate.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'ajo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Ajo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'coliflor',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Coliflor.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'verduras',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Verduras.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'tomate',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Tomate.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'papa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Papa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chayote',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Chayote.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'zanahoria',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/vegetales/Zanahoria.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Alimentos Salados',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chuleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Chuleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'matequilla',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Mantequilla.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'pasta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Pasta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'sopa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Sopa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'tortilla',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Tortilla.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'tostadas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salados/Tostadas.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Alimentos Dulces',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chocolate',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chocolate.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chocolates',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chocolates.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chocoleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chocoleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'chupa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Chupa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'churros',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Churros.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'churros',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Churros.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'confite',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Confite.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'confites',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Confites.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'dona',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Dona.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'queque',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/dulces/Queque.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Bebidas',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'bebo',
                predicado: 'café',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/bebidas/Café.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'bebp',
                predicado: 'coca cola',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/bebidas/CocaCola.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'bebo',
                predicado: 'leche',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/bebidas/Leche.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Animales de la Granja',
        data: [
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una vaca',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Vaca.jpg',
                audio: ''
            },
            {
                sujeto: 'La vaca',
                verbo: 'hace',
                predicado: 'Mu Mu Mu',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Vaca.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Vaca.jpg',
                audio: ''
            },

            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una gallina',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallina.jpg',
                audio: ''
            },
            {
                sujeto: 'La gallina',
                verbo: 'hace',
                predicado: 'Co Co Co',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Gallina.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallina.jpg',
                audio: ''
            },

            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un pato',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pato.jpg',
                audio: ''
            },
            {
                sujeto: 'El pato',
                verbo: 'hace',
                predicado: 'Cuac Cuac Cuac',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Pato.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pato.jpg',
                audio: ''
            },

            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un caballo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Caballo.jpg',
                audio: ''
            },
            {
                sujeto: 'El caballo',
                verbo: 'hace',
                predicado: 'Jim Jim Jim',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Caballo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Caballo.jpg',
                audio: ''
            },

            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una cabra',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Cabra.jpg',
                audio: ''
            },
            {
                sujeto: 'La cabra',
                verbo: 'hace',
                predicado: 'Bee Bee Bee',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Cabra.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Cabra.jpg',
                audio: ''
            },

            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un gallo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallo.jpg',
                audio: ''
            },
            {
                sujeto: 'El gallo',
                verbo: 'hace',
                predicado: 'Ki Ki Ri Ki',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Gallo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Gallo.jpg',
                audio: ''
            },

            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un pollito',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pollito.jpg',
                audio: ''
            },
            {
                sujeto: 'El pollito',
                verbo: 'hace',
                predicado: 'Pío Pío Pío',
                imagenSujeto: 'assets/img/semanticas/categorias/granja/Pollito.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/granja/Pollito.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Animales Domésticos',
        data: [
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un conejo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Conejo.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una lora',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Lora.jpg',
                audio: ''
            },
            {
                sujeto: 'Estos',
                verbo: 'son',
                predicado: 'unos peces',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Estos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Peces.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un perico',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Perico.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un perro',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Perro.jpg',
                audio: ''
            },
            {
                sujeto: 'El perro',
                verbo: 'hace',
                predicado: 'Guau Guau Guau',
                imagenSujeto: 'assets/img/semanticas/categorias/domesticos/Perro.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Perro.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una tortuga',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/domesticos/Tortuga.jpg',
                audio: ''
            },

        ]
    },
    {
        nombre: 'Animales Salvajes',
        data: [
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una cebra',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Cebra.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una jirafa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Jirafa.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un león',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/León.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un mono',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Mono.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un oso',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Oso.jpg',
                audio: ''
            },
            {
                sujeto: 'Esta',
                verbo: 'es',
                predicado: 'una serpiente',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Esta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Serpiente.jpg',
                audio: ''
            },
            {
                sujeto: 'Este',
                verbo: 'es',
                predicado: 'un tigre',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Este.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/salvajes/Tigre.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Juguetes',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'bola',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Bola.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'muñecas',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Muñeca.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'tucos',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Tucos.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'juega',
                predicado: 'bicicleta',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Bicicleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'patines',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Patines.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'motos',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Moto.png',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'rompecabezas',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Rompecabezas.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'aviones',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Aviones.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'trastes',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Trastes.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'juega',
                predicado: 'bingo',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Bingo.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'lotería',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Lotería.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'juega',
                predicado: 'Hula Hula',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/HulaHula.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'juego',
                predicado: 'Suiza',
                imagenSujeto:  'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Suiza.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'juega',
                predicado: 'nintendo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/juguetes/Nintendo.jpg',
                audio: ''
            }
        ]
    },
    {
        nombre: 'Ropa de Hombre',
        data: [
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'bota',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Bota.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'camisa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Camisa.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'corbata',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Corbata.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'pantalón corto',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/PantalónCorto.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'pantalones',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Pantalones.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'pantalón largo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/PantalónLargo.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'zapato',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Zapato.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'uso',
                predicado: 'zapatos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaH/Zapatos.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Ropa de Mujer',
        data: [
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'abrigo',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Abrigo.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'blusa',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Blusa.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'chaleco',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Chaleco.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'colas',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Colas.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'diadema',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Diadema.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'pijama',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Pijama.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'vestido',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Vestido.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'zapatos',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaM/Zapatos.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Ropa de Playa',
        data: [
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'pantaloneta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaP/Pantaloneta.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'usa',
                predicado: 'vestido de baño',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/ropaP/Vestido.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Partes de la Casa',
        data: [

            {
                sujeto: 'Yo',
                verbo: 'veo',
                predicado: 'la cocina',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Cocina.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'como',
                predicado: 'en el comedor',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Comedor.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'duermo',
                predicado: 'en el cuarto',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Cuarto.jpg',
                audio: ''
            },

            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: 'en el baño',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Baño.jpg',
                audio: ''
            },

            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: 'en el patio',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Patio.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'estoy',
                predicado: 'en el corredor',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/casa/Corredor.jpg',
                audio: ''
            },


        ]
    },
    {
        nombre: 'Medios de Transporte',
        data: [
            {
                sujeto: 'Usted',
                verbo: 'va',
                predicado: 'en carro',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Usted.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Carro.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellos',
                verbo: 'ven',
                predicado: 'el bus',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Bus.jpg',
                audio: ''
            },
            {
                sujeto: 'Nosotros',
                verbo: 'oímos',
                predicado: 'el trailer',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Nosotros.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Trailer.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellas',
                verbo: 'usan',
                predicado: 'el taxi',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellas.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Taxi.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellos',
                verbo: 'usan',
                predicado: 'la motocicleta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Motocicleta.jpg',
                audio: ''
            },
            {
                sujeto: 'Yo',
                verbo: 'pinto',
                predicado: 'la carreta',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Yo.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Carreta.jpg',
                audio: ''
            },
            {
                sujeto: 'Ella',
                verbo: 'va',
                predicado: 'en tren',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ella.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Tren.jpg',
                audio: ''
            },
            {
                sujeto: 'Él',
                verbo: 'vuela',
                predicado: 'en avión',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Él.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Avión.jpg',
                audio: ''
            },
            {
                sujeto: 'Nosotros',
                verbo: 'oímos',
                predicado: 'el helicóptero',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Nosotros.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Helicóptero.jpg',
                audio: ''
            },
            {
                sujeto: 'Ustedes',
                verbo: 'pasean',
                predicado: 'en barco',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ustedes.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Barco.jpg',
                audio: ''
            },
            {
                sujeto: 'Nosotros',
                verbo: 'vemos',
                predicado: 'el submarino',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Nosotros.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Submarino.jpg',
                audio: ''
            },
            {
                sujeto: 'Ellos',
                verbo: 'oyen',
                predicado: 'el cohete',
                imagenSujeto: 'assets/img/semanticas/estructura/sujeto/Ellos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Cohete.jpg',
                audio: ''
            },
        ]
    },
    {
        nombre: 'Servidores de la Comunidad',
        data: [
            {
                sujeto: 'El doctor',
                verbo: 'cura',
                predicado: 'a los enfermos',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Doctor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Enfermos.jpg',
                audio: ''
            },
            {
                sujeto: 'El dentista',
                verbo: 'limpia',
                predicado: 'los dientes',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Dentista.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Dientes.jpg',
                audio: ''
            },
            {
                sujeto: 'El veterinario',
                verbo: 'cura',
                predicado: 'animales',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Veterinario.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Animales.jpg',
                audio: ''
            },
            {
                sujeto: 'La maestra',
                verbo: 'enseña',
                predicado: 'a los niños',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Maestra.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Niños.jpg',
                audio: ''
            },
            {
                sujeto: 'La secretaria',
                verbo: 'hace',
                predicado: 'cartas',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Secretaria.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Cartas.jpg',
                audio: ''
            },
            {
                sujeto: 'El panadero',
                verbo: 'hace',
                predicado: 'pan',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Panadero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Pan.jpg',
                audio: ''
            },
            {
                sujeto: 'El carnicero',
                verbo: 'vende',
                predicado: 'carnes',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Carnicero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Carnes.jpg',
                audio: ''
            },
            {
                sujeto: 'El pulpero',
                verbo: 'vende',
                predicado: 'arroz',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Pulpero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Arroz.jpg',
                audio: ''
            },
            {
                sujeto: 'El chofer',
                verbo: 'maneja',
                predicado: 'el bus',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Chofer.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Bus.jpg',
                audio: ''
            },
            {
                sujeto: 'El cartero',
                verbo: 'entrega',
                predicado: 'cartas',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Cartero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Cartas.jpg',
                audio: ''
            },
            {
                sujeto: 'El bombero',
                verbo: 'apaga',
                predicado: 'el fuego',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Bombero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Fuego.jpg',
                audio: ''
            },
            {
                sujeto: 'El policía',
                verbo: 'cuida',
                predicado: 'a los niños',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Policía.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Niños.jpg',
                audio: ''
            },
            {
                sujeto: 'El mecánico',
                verbo: 'arregla',
                predicado: 'el carro',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Mecánico.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/transporte/Carro.jpg',
                audio: ''
            },
            {
                sujeto: 'El carpintero',
                verbo: 'hace',
                predicado: 'muebles',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Carpintero.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Muebles.jpg',
                audio: ''
            },
            {
                sujeto: 'El pintor',
                verbo: 'pinta',
                predicado: 'la casa',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Pintor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/La casa.jpg',
                audio: ''
            },
            {
                sujeto: 'El agricultor',
                verbo: 'siembra',
                predicado: 'verduras',
                imagenSujeto: 'assets/img/semanticas/categorias/servidores/Agricultor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/estructura/predicado/Verduras.jpg',
                audio: ''
            },

        ]
    },
    {
        nombre: 'Instrumentos Musicales',
        data: [
            {
                sujeto: 'El tambor',
                verbo: 'suena',
                predicado: 'pum pum',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Tambor.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Tambor.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Tambor.mp3'
            },
            {
                sujeto: 'La trompeta',
                verbo: 'suena',
                predicado: 'tu tu tuuu',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Trompeta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Trompeta.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Trompeta.mp3'
            },
            {
                sujeto: 'La campana',
                verbo: 'suena',
                predicado: 'din don',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Campana.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Campana.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Campana.mp3'
            },
            {
                sujeto: 'El piano',
                verbo: 'suena',
                predicado: 'tilililin',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Piano.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Piano.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Piano.mp3'
            },
            {
                sujeto: 'Las maracas',
                verbo: 'suenan',
                predicado: 'chk chk',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Maracas.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Maracas.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Maracas.mp3'
            },
            {
                sujeto: 'La guitarra',
                verbo: 'suena',
                predicado: 'chin chin',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Guitarra.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Guitarra.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Guitarra.mp3'
            },
            {
                sujeto: 'La flauta',
                verbo: 'suena',
                predicado: 'fi fi fiiii',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Flauta.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Flauta.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Flauta.mp3'
            },
            {
                sujeto: 'Los platillos',
                verbo: 'suenan',
                predicado: 'tilililin',
                imagenSujeto: 'assets/img/semanticas/categorias/instrumentos/Platillos.jpg',
                imagenVerbo: 'assets/img/semanticas/estructura/verbo/Verbo.jpg',
                imagenPredicado: 'assets/img/semanticas/categorias/instrumentos/Platillos.jpg',
                audio: 'assets/audio/semanticas/categorias/instrumentos/Platillos.mp3'
            }
        ]
    }
];
