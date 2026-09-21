/* la cinta: un solo <audio> para toda la hoja. Cada tema tiene su botón;
   play en uno pausa cualquier otro. Cuando un tema termina sigue el
   siguiente, como una cinta que corre. Sin barra ni tiempo: no se sabe
   cuánto falta. */
(function () {
  var audio = document.querySelector('audio[data-cinta]');
  var temas = Array.prototype.slice.call(document.querySelectorAll('.tema[data-src]'));
  if (!audio || !temas.length) return;

  var actual = null;

  function rotular(tema, estado) {
    var b = tema.querySelector('.play span');
    b.textContent = estado === 'sonando' ? 'pausa' : estado === 'cargando' ? '...' : 'play';
    tema.dataset.estado = estado || '';
  }

  function sonar(tema) {
    if (actual === tema) {
      if (audio.paused) audio.play(); else audio.pause();
      return;
    }
    if (actual) rotular(actual, '');
    actual = tema;
    audio.src = tema.dataset.src;
    rotular(tema, 'cargando');
    audio.play();
  }

  temas.forEach(function (tema) {
    tema.querySelector('.play').addEventListener('click', function () { sonar(tema); });
  });

  audio.addEventListener('playing', function () { if (actual) rotular(actual, 'sonando'); });
  audio.addEventListener('pause', function () { if (actual && !audio.ended) rotular(actual, 'pausado'); });
  audio.addEventListener('ended', function () {
    var i = temas.indexOf(actual);
    rotular(actual, '');
    actual = null;
    if (i > -1 && i + 1 < temas.length) sonar(temas[i + 1]);
  });
  audio.addEventListener('error', function () { if (actual) { rotular(actual, ''); actual = null; } });
})();
