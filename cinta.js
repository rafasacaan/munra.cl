/* un player chico por tema: un botón con el ícono de play o pausa, una línea de progreso que se puede
   arrastrar, y el tiempo. Cada tema tiene su <audio>; darle play a uno
   pausa cualquier otro. Cuando un tema termina sigue el siguiente, como
   una cinta que corre. */
(function () {
  var temas = Array.prototype.slice.call(document.querySelectorAll('.tema')).filter(function (t) { return t.querySelector('audio'); });
  if (!temas.length) return;

  function mmss(s) {
    if (!isFinite(s)) return '-:--';
    s = Math.floor(s);
    return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
  }

  temas.forEach(function (tema, i) {
    var audio = tema.querySelector('audio');
    var play = tema.querySelector('.play');
    var linea = tema.querySelector('.linea');
    var pos = tema.querySelector('.pos');
    var tiempo = tema.querySelector('.tiempo');

    function rotular(estado) {
      play.setAttribute('aria-label', estado === 'sonando' ? 'pausa' : 'play');
      tema.dataset.estado = estado || '';
    }
    function pintar() {
      var d = audio.duration, t = audio.currentTime;
      pos.style.width = (isFinite(d) && d > 0 ? (t / d) * 100 : 0).toFixed(2) + '%';
      tiempo.textContent = mmss(t) + ' / ' + mmss(d);
      linea.setAttribute('aria-valuenow', Math.floor(t));
    }
    function ir(ev) {
      var r = linea.getBoundingClientRect();
      var x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      if (isFinite(audio.duration)) audio.currentTime = Math.max(0, Math.min(1, x / r.width)) * audio.duration;
      pintar();
    }

    play.addEventListener('click', function () {
      if (audio.paused) {
        temas.forEach(function (o) { var a = o.querySelector('audio'); if (a !== audio) a.pause(); });
        audio.play();
      } else audio.pause();
    });

    // arrastrar sobre la línea para moverse en la cinta
    var arrastrando = false;
    linea.addEventListener('pointerdown', function (ev) { arrastrando = true; ir(ev); try { linea.setPointerCapture(ev.pointerId); } catch (e) {} });
    linea.addEventListener('pointermove', function (ev) { if (arrastrando) ir(ev); });
    linea.addEventListener('pointerup', function () { arrastrando = false; });
    linea.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowRight') { audio.currentTime += 5; pintar(); }
      if (ev.key === 'ArrowLeft') { audio.currentTime -= 5; pintar(); }
      if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); play.click(); }
    });

    audio.addEventListener('loadedmetadata', function () { linea.setAttribute('aria-valuemax', Math.floor(audio.duration)); pintar(); });
    audio.addEventListener('timeupdate', pintar);
    audio.addEventListener('playing', function () { rotular('sonando'); });
    audio.addEventListener('pause', function () { rotular('pausado'); });
    audio.addEventListener('ended', function () {
      rotular('');
      audio.currentTime = 0; pintar();
      var sig = temas[i + 1];
      if (sig) sig.querySelector('.play').click();
    });
    pintar();
  });
})();
