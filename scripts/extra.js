(function() {
  'use strict';

  var _starsDone = false;
  var _revealDone = false;

  function createStars() {
    if (_starsDone) return;
    var wrap = document.getElementById('heroStars');
    if (!wrap) return;
    _starsDone = true;
    wrap.innerHTML = '';
    var frag = document.createDocumentFragment();
    for (var i = 0; i < 300; i++) {
      var s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      var sz = Math.random() * 3 + 1;
      s.style.width = sz + 'px';
      s.style.height = sz + 'px';
      s.style.setProperty('--dur', (Math.random() * 3.5 + 1.8) + 's');
      s.style.setProperty('--delay', Math.random() * 4 + 's');
      s.style.setProperty('--glow', (Math.random() * 10 + 4) + 'px');
      frag.appendChild(s);
    }
    wrap.appendChild(frag);

    for (var j = 0; j < 5; j++) {
      var ss = document.createElement('div');
      ss.className = 'shooting-star';
      ss.style.top = (6 + Math.random() * 30) + '%';
      ss.style.left = (40 + Math.random() * 50) + '%';
      ss.style.animationDuration = (8 + Math.random() * 10) + 's';
      ss.style.animationDelay = (Math.random() * 10) + 's';
      wrap.appendChild(ss);
    }
  }

  function updateTime() {
    var el = document.getElementById('liveTime');
    if (!el) return;
    var now = new Date();
    var days = ['日','一','二','三','四','五','六'];
    var h = now.getHours(), m = now.getMinutes();
    var part = h < 6 ? '深夜' : h < 12 ? '上午' : h < 18 ? '下午' : '晚上';
    el.textContent = now.getFullYear() + '年' + (now.getMonth()+1) + '月' + now.getDate() + '日  星期' + days[now.getDay()] + '  ' + part + ' ' + String(h).padStart(2,'0') + ':' + String(m).padStart(2,'0');
  }

  function initReveal() {
    if (_revealDone) return;
    var cards = document.querySelectorAll('.reveal-card');
    if (!cards.length) return;
    _revealDone = true;
    cards.forEach(function(c, i) { c.style.transitionDelay = (i * 0.1) + 's'; });
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.10, rootMargin: '0px 0px -16px 0px' });
    cards.forEach(function(c) { obs.observe(c); });
  }

  var BG_KEY = 'b613_bg_v2';
  var backgrounds = [
    { name: '午后茶园', gradient: 'linear-gradient(180deg, #e8e4c0 0%, #dcd8b0 35%, #d0cc98 68%, #c4c080 100%)' },
    { name: '青柠麦浪', gradient: 'linear-gradient(180deg, #e8e8c0 0%, #dce0a8 35%, #d0d890 68%, #c4d078 100%)' },
    { name: '橄榄暖阳', gradient: 'linear-gradient(180deg, #e4e0b8 0%, #d8d8a0 35%, #ccd088 68%, #c0c870 100%)' },
    { name: '芥末原野', gradient: 'linear-gradient(180deg, #ece4b8 0%, #e0dca0 35%, #d4d488 68%, #c8cc70 100%)' },
    { name: '草甸晨雾', gradient: 'linear-gradient(180deg, #e8e8c8 0%, #e0e0b4 35%, #d8d8a0 68%, #d0d088 100%)' }
  ];

  function applyBg(grad) {
    var hero = document.querySelector('.hero-section');
    if (hero) hero.style.background = grad;
    document.body.style.backgroundImage = 'none';
    document.body.style.background = grad;
    document.body.style.backgroundAttachment = 'fixed';
  }

  function restoreImageBg() {
    document.body.style.background = '';
    document.body.style.backgroundImage = "url('/assets/bg.jpg')";
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundColor = '#e8e4c0';
    var hero = document.querySelector('.hero-section');
    if (hero) hero.style.background = 'linear-gradient(180deg, rgba(232,228,192,0.3) 0%, rgba(220,220,180,0.4) 35%, rgba(200,205,160,0.55) 70%, rgba(180,190,140,0.7) 100%)';
  }

  function initBg() {
    var panel = document.getElementById('bgPanel');
    var btn = document.getElementById('bgSwitcherBtn');
    if (!panel || !btn) return;

    var saved = localStorage.getItem(BG_KEY);
    if (saved) applyBg(saved);

    btn.addEventListener('click', function(e) { e.stopPropagation(); panel.classList.toggle('open'); });
    document.addEventListener('click', function() { panel.classList.remove('open'); });
    panel.addEventListener('click', function(e) { e.stopPropagation(); });

    var opts = panel.querySelectorAll('.bg-option');
    opts.forEach(function(o) {
      o.addEventListener('click', function() {
        var g = this.getAttribute('data-gradient');
        if (g === 'default') {
          restoreImageBg();
          localStorage.removeItem(BG_KEY);
        } else {
          applyBg(g);
          localStorage.setItem(BG_KEY, g);
        }
        panel.classList.remove('open');
        opts.forEach(function(x) { x.classList.remove('active'); });
        this.classList.add('active');
      });
    });

    if (saved) {
      opts.forEach(function(o) { if (o.getAttribute('data-gradient') === saved) o.classList.add('active'); });
    } else {
      var d = panel.querySelector('.bg-option[data-gradient="default"]');
      if (d) d.classList.add('active');
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    createStars();
    updateTime();
    initReveal();
    initBg();
    setInterval(updateTime, 30000);
  });

  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      _starsDone = false;
      _revealDone = false;
      setTimeout(function() { createStars(); initReveal(); }, 100);
      updateTime();
      initBg();
    });
  }
})();
