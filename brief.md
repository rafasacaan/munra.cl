# munra

**Estado:** build

## Qué es
La página hermana de [le bateleur](https://lebateleur.cl): un cassette en vez de una hoja. Demos grabados con equipos antiguos y sencillos, puestos a escuchar y nada más.

## Por qué
Quiero un lugar donde las canciones existan sin la presión de "postear". Un demo es algo que no está terminado y no pretende estarlo; el sitio tiene que respetar eso. Es para escuchar, no para leer ni para seguir.

## Qué decidí
- **Una sola hoja, lado A / lado B.** No hay cronología ni feed. Un cassette tiene dos lados y punto.
- **Cada tema lleva número, nombre y una nota de dos líneas**: qué equipo, dónde, qué toma. Lo que iría escrito a mano en la carátula. No una reflexión sobre la canción.
- **Player sin barra de progreso ni tiempo.** Apretás play y no sabés cuánto falta. Cuando termina un tema, sigue el siguiente, como una cinta. Sí se puede elegir tema (la versión sin saltos era demasiado hostil).
- **Sin fecha de publicación visible.** Munra no publica, munra graba. La fecha, si va, es la de la grabación y vive en la nota.
- **Todo sigue `[demo]`, siempre.** Es el equivalente al `[placeholder]` de le bateleur, pero acá nada sale nunca de ese estado.
- **Mismo look que la hermana**: Sometype Mono, grano de papel, `maquina.js` con la pegada de cada letra, modo claro/oscuro. Se nota que son de la misma familia. **Arranca en oscuro** (le bateleur sigue al sistema): una cinta se escucha de noche.
- **Estático puro**, HTML a mano, `<audio>` nativo controlado desde `cinta.js`. Sin build, sin librerías. Audio en mp3 mono a 96–128k: pesa la mitad y suena a lo que es.
- **Rutas relativas** (`temas/01.mp3`, `style.css`), para que funcione en GitHub Pages con o sin dominio propio.

## Qué descarté
- **Un solo play sin poder saltar de tema.** Perfecto como idea, insoportable en la práctica.
- **Sin títulos, solo números o fechas.** Tentador, pero el título es parte del demo. Queda como opción si algún tema no lo tiene.
- **Bandcamp / SoundCloud embebido.** Trae su UI, su tracking y su barra de progreso. Todo lo que no quiero.
- **Una página por tema.** Sería un blog con otro nombre.
- **Forma rafa-os con `research/`.** El sitio *es* el research. `research/` queda por si aparecen insumos (referencias, fotos de equipos).

## Próximo paso
Reemplazar `temas/prueba.mp3` por el primer demo real y escribir su nota.
