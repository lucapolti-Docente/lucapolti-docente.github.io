# Decisiones

- 25/10/2026 · `la-gran-maquina/` no estaba en la compu: el SVG de Tuerca se copió del repo publicado (`src/datos/personajes/tuerca.js` en GitHub). Los tres dibujos de juegos se copiaron sin cambios; solo se les puso el `viewBox` (64×64 para Brote, 100×100 para Tuerca y Reci, la caja que usa cada juego).
- 25/10/2026 · Robot de Tecnología en 1.º: dibujo nuevo y original, con el mismo estilo de contorno que Tuerca y Reci y los colores de la colección (`tecnologia-1/comun/estilos.css`: coral, amarillo, lila, verde).
- 25/10/2026 · Colores de tarjeta: azul, amarillo, violeta y rosa, distintos entre sí y que hagan resaltar a cada personaje. Letras blancas sobre los oscuros y tinta sobre los claros (contraste alto).
- 25/10/2026 · Toda la tarjeta tiene el color de fondo y el dibujo va arriba sobre un recuadro un poco más claro; así "color de fondo" y "color de texto" de `actividades.js` se usan los dos.
- 25/10/2026 · Los textos en `actividades.js` van en minúscula normal y la portada los pasa a MAYÚSCULAS con CSS. Así la página para docentes los muestra en escritura normal sin duplicar datos.
- 25/10/2026 · Sin menú ☰ ni botón 🏠: la portada es el inicio y no hay nada que configurar.
- 25/10/2026 · El dibujo de cada tarjeta mide 40 % del alto de la pantalla (con tope): en 1366×768 y también en 1366×650 (notebook con las barras del navegador) entran las 4 tarjetas sin scroll.
- 25/10/2026 · El script que arma las tarjetas va dentro de `index.html` y `docentes.html` (son 30 líneas) en vez de un archivo más.
- 25/10/2026 · Las tarjetas abren la actividad en la misma pestaña (para chicos es más simple que manejar pestañas).
- 25/10/2026 · QR generado como SVG (nítido al imprimir) con corrección de errores M; se comprobó que se lee y da `https://lucapolti-docente.github.io/`. El cartel se arma con `cartel.html` (queda en el repo para rehacer el PDF) y se pasó a PDF con Playwright (A4, una página).
- 25/10/2026 · La guía de La gran máquina figura "En preparación": `https://lucapolti-docente.github.io/la-gran-maquina/docentes/` da 404.
- 27/10/2026 · Con La Línea son 5 actividades: en pantallas anchas la grilla pone todas en una sola fila (`grid-auto-flow: column`), sin importar cuántas sean, en lugar de dejar la quinta sola en otra fila con scroll. Para que entren sin scroll se bajó el dibujo a 36 % del alto, y en pantallas de hasta 730 px de alto a 26 % con letras un poco más chicas. Probado sin scroll en 1366×768, 1366×650, 1280×720, 1024×600 y 1920×1080. En celular sigue de a 2 por fila, con scroll.
- 27/10/2026 · El dibujo de La Línea es Nora, la encargada, copiada del código del juego (`src/dibujo/personajes.js`). Fondo naranja propio (#FF8A3D) con letras oscuras.

- 2026-10-28: se suma ¡A Moverse! (6 tarjetas, entran en 1366×768 sin scroll). Su dibujo (`img/bichito-a-moverse.svg`) se hizo a mano copiando el bichito del juego, porque ahí se dibuja en canvas y no hay SVG para copiar.
