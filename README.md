# Portada · Tecnología, Diseño y Programación

Una sola dirección para todas las actividades: **https://lucapolti-docente.github.io/**

Sitio estático: se abre con doble clic en `index.html` y se publica tal cual con GitHub Pages (rama `main`, raíz).

```
index.html         portada para los chicos (tarjetas)
docentes.html      para docentes: tabla con guías, QR y cartel
cartel.html        fuente del cartel A4 (para rehacer el PDF)
cartel-aula.pdf    cartel A4 para imprimir
actividades.js     LA LISTA de actividades (lo único que se toca para sumar una)
estilos.css        estilos de las tres páginas
img/               un dibujo SVG por actividad + qr.svg
```

## Sumar una actividad

1. Poné su dibujo en `img/` como SVG (minúsculas, sin espacios), con `xmlns` y `viewBox`.
   Si el juego ya tiene un personaje, copiá su SVG, no lo redibujes.
2. En `actividades.js`, copiá un bloque `{ ... }` y cambiá: `nombre`, `frase`, `grados`, `url`,
   `docentes` (o `null` → "En preparación"), `fondo`, `texto` (letras que se lean bien sobre el fondo) y `dibujo`.
   El orden de la lista es el orden en pantalla.
3. Abrí `index.html` y `docentes.html` con doble clic y mirá que se vea bien.
4. Si querés que el cartel muestre el dibujo nuevo, rehacé el PDF: abrí `cartel.html` en Chrome → Imprimir →
   A4, márgenes "Ninguno", con "Gráficos de fondo" → Guardar como PDF → `cartel-aula.pdf`.
   (El QR no cambia: siempre lleva a la portada.)

En Claude Code, la skill `sumar-a-portada` hace todo esto y publica.
