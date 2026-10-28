/* Lista de actividades de la portada. El orden de la lista es el orden en pantalla.
   Para sumar una actividad: copiá un bloque { ... }, cambiá los datos y poné su dibujo en img/.
   - nombre, frase: se muestran en MAYÚSCULAS (se pueden escribir como quieras).
   - grados: un cartel por grado.
   - url: dirección de la actividad.
   - docentes: dirección de la guía docente, o null si todavía no tiene ("En preparación").
   - fondo, texto: color de la tarjeta y color de las letras (que se lean bien).
   - dibujo: archivo SVG dentro de img/. */
window.ACTIVIDADES = [
  {
    nombre: 'Tecnología en 1.º',
    frase: '13 juegos para empezar',
    grados: ['Jardín', '1.º', '2.º'],
    url: 'https://lucapolti-docente.github.io/tecnologia-1/',
    docentes: 'https://lucapolti-docente.github.io/tecnologia-1/docentes/',
    fondo: '#1F5FC4',
    texto: '#FFFFFF',
    dibujo: 'robot-tecnologia-1.svg'
  },
  {
    nombre: 'Brote',
    frase: 'Limpiá el planeta',
    grados: ['1.º', '2.º', '3.º'],
    url: 'https://lucapolti-docente.github.io/brote/',
    docentes: 'https://lucapolti-docente.github.io/brote/docentes/',
    fondo: '#FFD23F',
    texto: '#1B1A3A',
    dibujo: 'brote.svg'
  },
  {
    nombre: 'La gran máquina',
    frase: 'Programá al robot',
    grados: ['4.º'],
    url: 'https://lucapolti-docente.github.io/la-gran-maquina/',
    docentes: null,
    fondo: '#3B2C8F',
    texto: '#FFFFFF',
    dibujo: 'tuerca.svg'
  },
  {
    nombre: 'Planta Reci',
    frase: 'Repetí y avanzá',
    grados: ['4.º'],
    url: 'https://lucapolti-docente.github.io/planta-reci/',
    docentes: 'https://lucapolti-docente.github.io/planta-reci/docentes/',
    fondo: '#FFB3CB',
    texto: '#1B1A3A',
    dibujo: 'reci.svg'
  },
  {
    nombre: 'La Línea',
    frase: 'Armá la fábrica',
    grados: ['4.º', '5.º', '6.º', '7.º'],
    url: 'https://lucapolti-docente.github.io/la-linea/',
    docentes: 'https://lucapolti-docente.github.io/la-linea/docentes/',
    fondo: '#FF8A3D',
    texto: '#1B1A3A',
    dibujo: 'nora-la-linea.svg'
  },
  {
    nombre: '¡A Moverse!',
    frase: 'Programá como en Scratch',
    grados: ['4.º', '5.º', '6.º', '7.º'],
    url: 'https://lucapolti-docente.github.io/a-moverse/',
    docentes: 'https://lucapolti-docente.github.io/a-moverse/docentes/',
    fondo: '#8EE3B0',
    texto: '#1B1A3A',
    dibujo: 'bichito-a-moverse.svg'
  }
];
