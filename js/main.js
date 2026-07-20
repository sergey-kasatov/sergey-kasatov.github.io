/* Sergey Kasatov · site v4 · vanilla JS, no dependencies */
(function () {
  'use strict';

  var docEl = document.documentElement;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Sheet frame zone labels ---------- */
  var frame = document.querySelector('.sheet-frame');
  if (frame) {
    var i, s;
    for (i = 1; i <= 6; i++) {
      ['zt', 'zb'].forEach(function (cls) {
        var el = document.createElement('span');
        el.className = 'zone ' + cls;
        el.textContent = String(i);
        el.style.left = 'calc(' + (i - 0.5) + ' * 100% / 6)';
        frame.appendChild(el);
      });
    }
    var letters = ['A', 'B', 'C', 'D'];
    for (i = 0; i < 4; i++) {
      ['zl', 'zr'].forEach(function (cls) {
        var el = document.createElement('span');
        el.className = 'zone ' + cls;
        el.textContent = letters[i];
        el.style.top = 'calc(' + (i + 0.5) + ' * 100% / 4)';
        frame.appendChild(el);
      });
    }
  }

  /* ---------- Theme toggle: paper <-> blueprint ---------- */
  function currentTheme() {
    return docEl.getAttribute('data-theme') === 'blueprint' ? 'blueprint' : 'paper';
  }
  function applyTheme(t) {
    docEl.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'blueprint' ? '#0d1f33' : '#f2efe9');
    try { localStorage.setItem('theme', t); } catch (e) {}
  }
  document.querySelectorAll('.theme-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTheme(currentTheme() === 'blueprint' ? 'paper' : 'blueprint');
    });
  });
  if (currentTheme() === 'blueprint') applyTheme('blueprint');

  /* ---------- Burger menu ---------- */
  var burger = document.querySelector('.nav-burger');
  var nav = document.getElementById('site-nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- SVG plotter draw-in ---------- */
  function drawGeoms(el) {
    var tag = el.tagName.toLowerCase();
    if (tag === 'path' || tag === 'line' || tag === 'polyline') return [el];
    return Array.prototype.slice.call(el.querySelectorAll('path, line, polyline'));
  }
  function primeDraw(el) {
    if (reduceMotion) return;
    drawGeoms(el).forEach(function (g) {
      var fill = g.getAttribute('fill');
      if (fill && fill !== 'none') return;
      var len;
      try { len = g.getTotalLength(); } catch (e) { return; }
      if (!len) return;
      g.style.strokeDasharray = len;
      g.style.strokeDashoffset = len;
    });
  }
  function runDraw(el) {
    drawGeoms(el).forEach(function (g) { g.style.strokeDashoffset = '0'; });
  }
  var drawables = document.querySelectorAll('.draw');
  drawables.forEach(primeDraw);

  /* ---------- Counters ---------- */
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    if (reduceMotion) { el.textContent = target; return; }
    var start = null, dur = 1100;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveal on scroll ---------- */
  var revealables = document.querySelectorAll('.reveal, .reveal-stamp');
  var counters = document.querySelectorAll('[data-count]');

  function activate(el) {
    el.classList.add('in');
    el.querySelectorAll('[data-count]').forEach(runCounter);
    if (el.hasAttribute && el.hasAttribute('data-count')) runCounter(el);
  }

  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        if (el.classList.contains('draw')) { runDraw(el); } else { activate(el); }
        io.unobserve(el);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });

    revealables.forEach(function (el) { io.observe(el); });
    drawables.forEach(function (el) { io.observe(el); });

    /* Safety net: never leave content hidden */
    setTimeout(function () {
      revealables.forEach(function (el) {
        if (!el.classList.contains('in') && el.getBoundingClientRect().top < window.innerHeight) activate(el);
      });
    }, 1600);
  } else {
    docEl.classList.add('no-observer');
    document.body && document.body.classList.add('no-observer');
    revealables.forEach(activate);
    drawables.forEach(function (el) { runDraw(el); });
    counters.forEach(runCounter);
  }

  /* ---------- Copy email ---------- */
  document.querySelectorAll('[data-copy-email]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var email = 'sergey@kasatov.de';
      var note = document.querySelector('.copy-note');
      var isDe = (document.documentElement.lang || '').indexOf('de') === 0;
      function ok() { if (note) note.textContent = isDe ? 'in die Zwischenablage kopiert ✓' : 'copied to clipboard ✓'; }
      function fail() { if (note) note.textContent = email; }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(ok, fail);
      } else { fail(); }
    });
  });

  /* ---------- Year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
