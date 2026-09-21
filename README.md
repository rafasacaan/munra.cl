# munra

La página hermana de [le bateleur](https://lebateleur.cl). Si aquella es una
hoja escrita a máquina, esta es la carátula de un cassette: demos grabados con
equipos antiguos y sencillos, puestos a escuchar y nada más.

Sitio estático, sin build ni dependencias. Se edita el HTML a mano y se
publica con GitHub Pages desde `main`, en [munra.cl](https://munra.cl). El
dominio está en GoDaddy: cuatro `A` del apex a los IPs de GitHub Pages y un
`CNAME` de `www` a `rafasacaan.github.io`. Qué es y qué decidí: `brief.md`.

## Estructura

```
index.html      la única hoja: lado A, lado B
temas/          los mp3, uno por tema
style.css       la única hoja de estilos
cinta.js        el player chico de cada tema: play, línea de progreso, tiempo
maquina.js      el peso de tinta de cada letra (como le bateleur, sin el temblor)
tema.js         modo claro / oscuro, y el link de contacto
404.html        página de error
CNAME           el dominio, lo lee GitHub Pages
```

Las rutas de `index.html` son relativas (`temas/01.mp3`, `style.css`) para que
funcione en GitHub Pages con o sin dominio propio. `404.html` usa `/` porque
GitHub Pages la sirve desde cualquier ruta.

## Agregar un tema

1. Exportar el audio como **mp3 mono a 96–128k** y guardarlo en `temas/`:

   ```bash
   ffmpeg -i original.wav -ac 1 -b:a 112k temas/02-nombre.mp3
   ```

2. Copiar el `<li class="tema">` de un tema existente en `index.html`, al lado
   que corresponda. Número, nombre con `[demo]`, la nota de dos líneas (qué
   equipo, dónde, qué toma) y el `src` del `<audio>`.
3. Si cambió `style.css`, `cinta.js`, `maquina.js` o `tema.js`, subir el
   `?v=N` en `index.html` y `404.html`.

## El player

Cada tema tiene su `<audio>` oculto y su player chico: `play`, una línea
punteada que se rellena y se puede arrastrar (o mover con las flechas del
teclado), y el tiempo. Darle play a uno pausa cualquier otro. Cuando un tema
termina, sigue el siguiente, como una cinta. Mientras suena, la palabra
`pausa` parpadea apenas, como el led de una casetera.

## Probar local

```bash
python3 -m http.server 8020
```
