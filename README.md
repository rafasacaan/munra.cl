# munra

La página hermana de [le bateleur](https://lebateleur.cl). Si aquella es una
hoja escrita a máquina, esta es la carátula de un cassette: demos grabados con
equipos antiguos y sencillos, puestos a escuchar y nada más.

Sitio estático, sin build ni dependencias. Se edita el HTML a mano y se
publica con GitHub Pages desde `main`. Qué es y qué decidí: `brief.md`.

## Estructura

```
index.html      la única hoja: lado A, lado B
temas/          los mp3, uno por tema
style.css       la única hoja de estilos
cinta.js        el player: un <audio> para toda la hoja, sin barra ni tiempo
maquina.js      la pegada de cada letra (igual que en le bateleur)
tema.js         modo claro / oscuro, y el link de contacto
404.html        página de error
```

Las rutas de `index.html` son relativas (`temas/01.mp3`, `style.css`) para que
funcione en GitHub Pages con o sin dominio propio. `404.html` usa `/` porque
GitHub Pages la sirve desde cualquier ruta.

## Agregar un tema

1. Exportar el audio como **mp3 mono a 96–128k** y guardarlo en `temas/`:

   ```bash
   ffmpeg -i original.wav -ac 1 -b:a 112k temas/02-nombre.mp3
   ```

2. Agregar un `<li class="tema" data-src="temas/02-nombre.mp3">` al lado que
   corresponda, en `index.html`. Número, nombre con `[demo]`, y la nota de dos
   líneas: qué equipo, dónde, qué toma.
3. Si cambió `style.css`, `cinta.js`, `maquina.js` o `tema.js`, subir el
   `?v=N` en `index.html` y `404.html`.

## El player

Un solo `<audio>` oculto. Cada tema tiene un botón `play`; apretar uno pausa
cualquier otro. Cuando un tema termina, sigue el siguiente, como una cinta.
No hay barra de progreso ni tiempo restante, a propósito. Mientras suena, la
palabra `pausa` parpadea apenas, como el led de una casetera.

## Probar local

```bash
python3 -m http.server 8020
```
