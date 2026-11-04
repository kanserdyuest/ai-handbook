/* ============================================================
   AI 零件大全 — interactions & motion
   ============================================================ */
(function () {
  'use strict';

  var D = window.AI_DATA;
  if (!D) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  Array.prototype.forEach.call(document.querySelectorAll('[data-total]'), function (el) {
    el.textContent = D.total;
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-layers]'), function (el) {
    el.textContent = D.layers.length;
  });

  function rgba(hex, a) {
    var h = hex.replace('#', '');
    var r = parseInt(h.substr(0, 2), 16), g = parseInt(h.substr(2, 2), 16), b = parseInt(h.substr(4, 2), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  }

  /* ---------------------------------------------------------- hero */
  var h1 = $('#heroTitle');
  if (h1) {
    var txt = h1.textContent.trim();
    h1.textContent = '';
    Array.prototype.forEach.call(txt, function (ch, i) {
      var s = document.createElement('span');
      s.className = 'ch';
      s.textContent = ch === ' ' ? '\u00A0' : ch;
      s.style.transitionDelay = (0.05 * i) + 's';
      h1.appendChild(s);
    });
  }
  window.setTimeout(function () { document.body.classList.add('ready'); }, 80);

  /* QA helper: ?qa=1 关闭入场动画；?scroll=N 直接定位，便于截图检查 */
  var QS = new URLSearchParams(location.search);
  if (QS.get('qa') === '1') {
    document.documentElement.classList.add('qa');
    var sy0 = parseInt(QS.get('scroll') || '', 10);
    document.documentElement.style.scrollBehavior = 'auto';
    if (!isNaN(sy0)) {
      var jump = function () { window.scrollTo(0, sy0); };
      jump();
      window.setTimeout(jump, 60);
      window.setTimeout(jump, 400);
    }
    var to = QS.get('to');
    if (to) {
      var goTo = function () {
        var el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
      };
      window.setTimeout(goTo, 30);
      window.setTimeout(goTo, 200);
      window.setTimeout(goTo, 600);
    }
  }

  /* ---------------------------------------------------------- canvas */
  (function particles() {
    var cv = $('#bg');
    if (!cv) return;
    var ctx = cv.getContext('2d');
    var W = 0, H = 0, pts = [], running = true;

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(28, Math.min(70, Math.round(W * H / 24000)));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({
          x: Math.random() * W, y: Math.random() * H,
          vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
          r: Math.random() * 1.3 + .5
        });
      }
    }

    function draw() {
      requestAnimationFrame(draw);
      if (!running || document.hidden) return;
      ctx.clearRect(0, 0, W, H);
      var i, j, p, q, dx, dy, d;
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
        if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
      }
      ctx.lineWidth = .6;
      for (i = 0; i < pts.length; i++) {
        for (j = i + 1; j < pts.length; j++) {
          dx = pts[i].x - pts[j].x; dy = pts[i].y - pts[j].y;
          d = dx * dx + dy * dy;
          if (d < 17000) {
            ctx.strokeStyle = 'rgba(180,180,200,' + (0.055 * (1 - d / 17000)).toFixed(3) + ')';
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
      }
      for (i = 0; i < pts.length; i++) {
        p = pts[i];
        ctx.fillStyle = 'rgba(220,220,235,.22)';
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
    }

    resize();
    window.addEventListener('resize', resize);
    if (reduce) { running = false; }
    requestAnimationFrame(draw);

    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight * 0.7) cv.classList.add('hide');
      else cv.classList.remove('hide');
      running = window.scrollY < window.innerHeight * 1.4;
    }, { passive: true });
  })();

  /* ---------------------------------------------------------- stack */
  var stack = $('#stack');
  D.layers.forEach(function (l) {
    var a = document.createElement('a');
    a.className = 'stack-row';
    a.href = '#ch-' + l.id;
    a.style.setProperty('--c', l.color);
    a.innerHTML =
      '<span class="stack-no">' + l.no + '</span>' +
      '<div><div class="stack-name">' + l.title + '<em>' + l.en + '</em></div>' +
      '<div class="stack-sub">' + l.sub + '</div></div>' +
      '<div class="stack-meta"><span>' + l.terms.length + ' 个零件</span><span class="go">↓</span></div>';
    stack.appendChild(a);
  });

  /* ---------------------------------------------------------- demos */
  function demoToken() {
    return '' +
      '<div class="demo reveal">' +
      '<div class="demo-head"><b>动手指 · 分词</b><span class="hint">改改下面的字，看它怎么被切开</span></div>' +
      '<input class="tok-input" value="AI 把整句话切成 token，再一个一个吐出来。" aria-label="输入要分词的文本">' +
      '<div class="tok-out"></div>' +
      '<div class="tok-stats"></div>' +
      '</div>';
  }

  function demoContext() {
    return '' +
      '<div class="demo reveal">' +
      '<div class="demo-head"><b>动手指 · 上下文窗口</b><span class="hint">拖动滑块，看工作台被塞满的代价</span></div>' +
      '<div class="ctx-bar">' +
      '<div class="seg" data-k="sys"></div>' +
      '<div class="seg" data-k="hist"></div>' +
      '<div class="seg" data-k="docs"></div>' +
      '<div class="seg" data-k="q"></div>' +
      '<div class="seg empty" data-k="free"></div>' +
      '</div>' +
      '<div class="ctx-legend">' +
      '<span><i style="background:#E9B44C"></i>系统提示词</span>' +
      '<span><i style="background:#C9A0DC"></i>历史对话</span>' +
      '<span><i style="background:#8FBF9F"></i>检索资料</span>' +
      '<span><i style="background:#6FA8DC"></i>你的问题</span>' +
      '<span><i style="background:#26262c"></i>留给回答</span>' +
      '</div>' +
      '<div class="ctx-controls"><label for="ctxRange">塞入量</label>' +
      '<input id="ctxRange" type="range" min="0" max="100" value="34" step="1"></div>' +
      '<div class="ctx-read">' +
      '<div>占用<b><span id="ctxTok">43</span><i>k / 128k</i></b></div>' +
      '<div>首字延迟<b><span id="ctxLat">1.4</span><i>秒</i></b></div>' +
      '<div>单次成本<b><span id="ctxCost">0.008</span><i>元</i></b></div>' +
      '</div></div>';
  }

  function demoAgent() {
    return '' +
      '<div class="demo reveal">' +
      '<div class="demo-head"><b>实时演示 · Agent 循环</b><span class="hint">想 → 做 → 看 → 再想</span></div>' +
      '<div class="agent">' +
      '<svg viewBox="0 0 320 320" aria-hidden="true">' +
      '<circle cx="160" cy="160" r="112" fill="none" stroke="#2c2c33" stroke-dasharray="2 7" stroke-width="1.4"/>' +
      '<circle id="agentDot" cx="160" cy="48" r="4.5" fill="#E9B44C"/>' +
      '<circle class="node-c" cx="160" cy="48" r="38"/><text class="node-t" x="160" y="52">规划</text>' +
      '<circle class="node-c" cx="272" cy="160" r="38"/><text class="node-t" x="272" y="164">调用工具</text>' +
      '<circle class="node-c" cx="160" cy="272" r="38"/><text class="node-t" x="160" y="276">看结果</text>' +
      '<circle class="node-c" cx="48" cy="160" r="38"/><text class="node-t" x="48" y="164">再规划</text>' +
      '</svg>' +
      '<div class="log" id="agentLog"></div>' +
      '</div></div>';
  }

  function demoRag() {
    return '' +
      '<div class="demo reveal">' +
      '<div class="demo-head"><b>动手指 · 检索增强</b><span class="hint"><button class="replay" type="button">重播</button></span></div>' +
      '<div class="rag">' +
      '<div class="rag-q"><span class="pre">你问</span><span class="qt">出差住宿能报多少？</span></div>' +
      '<div class="rag-docs">' +
      '<div class="rag-doc"><div class="dt">《员工手册》第 12 页<small>差旅与报销</small></div><div class="ag"><span class="score">0.92</span><div class="track"><i></i></div></div></div>' +
      '<div class="rag-doc"><div class="dt">《财务制度》第 3 节<small>费用标准</small></div><div class="ag"><span class="score">0.74</span><div class="track"><i></i></div></div></div>' +
      '<div class="rag-doc"><div class="dt">《年会通知》<small>行政通知</small></div><div class="ag"><span class="score">0.19</span><div class="track"><i></i></div></div></div>' +
      '</div>' +
      '<div class="rag-a"></div>' +
      '</div></div>';
  }

  function demoCache() {
    return '' +
      '<div class="demo reveal">' +
      '<div class="demo-head"><b>动手指 · 缓存</b><span class="hint">同样一段长提示词，跑两次</span></div>' +
      '<div class="cache">' +
      '<div class="cache-row slow"><span class="lbl">不缓存<small>每次都从头算</small></span><div class="track"><i></i></div><span class="t">—</span></div>' +
      '<div class="cache-row hit"><span class="lbl">命中缓存<small>前缀被复用</small></span><div class="track"><i></i></div><span class="t">—</span></div>' +
      '</div></div>';
  }

  function demoExt() {
    var items = [
      ['HOW', 'Skill', '一份说明书：遇到这类活，就按这几步做。'],
      ['PORT', 'MCP', '一个插座标准：谁都能插上来提供工具。'],
      ['CODE', 'Plugin', '一包代码：直接给宿主程序加功能。'],
      ['WHEN', 'Hook', '一个触发器：到点了就自动干某件事。']
    ];
    return '' +
      '<div class="demo reveal">' +
      '<div class="demo-head"><b>一张图分清 · 四种外挂</b><span class="hint">悬停看差别</span></div>' +
      '<div class="ext">' + items.map(function (it) {
        return '<div class="ext-item"><span class="pulse"></span><span class="k">' + it[0] + '</span>' +
          '<div class="n">' + it[1] + '</div><div class="d">' + it[2] + '</div></div>';
      }).join('') + '</div></div>';
  }

  var DEMOS = {
    token: demoToken, context: demoContext, agent: demoAgent,
    rag: demoRag, cost: demoCache, ext: demoExt
  };

  /* ---------------------------------------------------------- chapters */
  var host = $('#chapters');
  var html = '';
  D.layers.forEach(function (l) {
    var demo = DEMOS[l.id] ? DEMOS[l.id]() : '';
    var extras = l.terms.filter(function (t) { return !t.core; }).length;
    var coreN = l.terms.length - extras;
    var openAll = coreN < 4;
    var cards = l.terms.map(function (t, i) {
      return '<article class="term' + (t.core ? ' core' : ' extra') + '" id="t-' + l.id + '-' + i + '" style="--c:' + l.color + ';--d:' + Math.min(i, 9) + '">' +
        '<h3>' + t.cn + '<span>' + t.en + '</span></h3>' +
        '<p class="one">' + t.one + '</p>' +
        '<p class="like">' + t.like + '</p>' +
        (t.confuse ? '<p class="confuse"><b>别搞混</b>' + t.confuse + '</p>' : '') +
        '</article>';
    }).join('');

    html +=
      '<section class="chapter' + (openAll ? ' open' : '') + '" id="ch-' + l.id + '" style="--c:' + l.color +
      ';--c-45:' + rgba(l.color, .45) + ';--c-08:' + rgba(l.color, .08) + '">' +
      '<div class="ch-head"><span class="ch-no">' + l.no + '</span>' +
      '<h2>' + l.title + '<em>' + l.en + '</em></h2></div>' +
      '<p class="ch-sub">' + l.sub + '</p>' +
      '<div class="ch-rule"></div>' +
      '<p class="ch-intro">' + l.intro + '</p>' +
      demo +
      '<div class="grid">' + cards + '</div>' +
      (extras > 0
        ? '<button class="more" type="button" data-n="' + extras + '">' + (openAll ? '收起 ' : '展开另外 ') + extras + ' 个词 <span class="ar">↓</span></button>'
        : '') +
      '</section>';
  });
  host.innerHTML = html;

  $$('.more').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var sec = btn.closest('.chapter');
      var open = sec.classList.toggle('open');
      btn.firstChild.nodeValue = (open ? '收起 ' : '展开另外 ') + btn.dataset.n + ' 个词 ';
    });
  });

  /* ---------------------------------------------------------- rail */
  var rail = $('#rail');
  D.layers.forEach(function (l) {
    var a = document.createElement('a');
    a.href = '#ch-' + l.id;
    a.title = l.no + ' ' + l.title;
    a.setAttribute('aria-label', l.title);
    rail.appendChild(a);
  });
  var railDots = $$('#rail a');

  /* ---------------------------------------------------------- myths */
  var mythList = $('#mythList');
  D.myths.forEach(function (m) {
    var d = document.createElement('details');
    d.className = 'myth';
    d.innerHTML = '<summary>' + m.m + '<span class="plus">+</span></summary><p>' + m.a + '</p>';
    mythList.appendChild(d);
  });

  /* ---------------------------------------------------------- 3D exploded */
  (function () {
    var section = $('#x3d');
    if (!section) return;
    var stage = $('#xStage');
    var scene = $('#xScene');
    var svg = $('#xLinks');
    var labelsBox = $('#xLabels');
    var toggle = $('#xToggle');
    var range = $('#xRange');
    var NS = 'http://www.w3.org/2000/svg';
    var P = 1500;

    var PLATES = [
      ['07', '扩展层', 'Skill · MCP · Plugin · Hook', '#B9A0E0', 'ch-ext'],
      ['06', 'Harness', '装配 · 权限 · 轨迹 · 流式', '#7FB2C9', 'ch-harness'],
      ['05', 'Agent 层', '工具 · 循环 · 规划 · 子代理', '#E88B6A', 'ch-agent'],
      ['04', '检索层', 'RAG · 分块 · 重排', '#C9A0DC', 'ch-rag'],
      ['03', '上下文层', '提示词 · 窗口 · 温度', '#8FBF9F', 'ch-context'],
      ['02', 'Token 层', '分词 · 嵌入 · 向量', '#6FA8DC', 'ch-token'],
      ['01', '模型层', 'LLM · 参数 · 推理', '#E8B45A', 'ch-model'],
      ['—', '支撑层', '成本 · 数据 · 安全 · 产品', '#6E6E78', '']
    ];
    var N = PLATES.length;

    scene.innerHTML = PLATES.map(function (p, i) {
      var base = i === N - 1;
      var w = base ? 400 : 380, h = base ? 110 : 196;
      return '<div class="plate' + (base ? ' base' : '') + '" style="--pc:' + rgba(p[3], .5) +
        ';--pb:' + rgba(p[3], .07) +
        ';width:' + w + 'px;height:' + h + 'px;margin-left:' + (-w / 2) + 'px;margin-top:' + (-h / 2) + 'px">' +
        '<span class="p-no">' + p[0] + '</span><span class="p-nm">' + p[1] + '</span>' +
        '<i class="bolt tl"></i><i class="bolt tr"></i><i class="bolt bl"></i><i class="bolt br"></i></div>';
    }).join('');

    labelsBox.innerHTML = PLATES.map(function (p, i) {
      var tag = p[4] ? 'a' : 'span';
      var href = p[4] ? ' href="#' + p[4] + '"' : '';
      return '<' + tag + ' class="x3d-lab" data-i="' + i + '"' + href + ' style="--lc:' + p[3] + '">' +
        '<span class="n">' + p[0] + '</span><span class="t">' + p[1] + '</span>' +
        '<span class="d">' + p[2] + '</span></' + tag + '>';
    }).join('');

    var plates = $$('.plate', scene);
    var labs = $$('.x3d-lab', labelsBox);
    var axis = document.createElementNS(NS, 'path');
    axis.setAttribute('class', 'xaxis');
    svg.appendChild(axis);
    var links = [];
    for (var i = 0; i < N; i++) {
      var path = document.createElementNS(NS, 'path');
      path.setAttribute('class', 'xln');
      var dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('r', '2.5');
      svg.appendChild(path);
      svg.appendChild(dot);
      links.push({ p: path, c: dot });
    }

    var st = { rx: -20, ry: -22, ex: -1, target: 0 };

    function project(x, y, z, W, H) {
      var a = st.rx * Math.PI / 180, b = st.ry * Math.PI / 180;
      var ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
      var x1 = x * cb + z * sb;
      var z1 = -x * sb + z * cb;
      var y1 = y;
      var y2 = y1 * ca - z1 * sa;
      var z2 = y1 * sa + z1 * ca;
      var s = P / (P - z2);
      return { x: W / 2 + x1 * s, y: H / 2 + y2 * s, s: s };
    }

    function isSmall() { return stage.clientWidth < 780; }

    function render() {
      var W = stage.clientWidth, H = stage.clientHeight;
      var small = isSmall();
      section.classList.toggle('small', small);
      var sc = small ? Math.min(1, (W - 24) / 452) : 1;
      scene.style.transform = 'scale(' + sc.toFixed(3) + ') rotateX(' + st.rx + 'deg) rotateY(' + st.ry + 'deg)';
      var S = 8 + (st.ex < 0 ? 0 : st.ex) * (small ? 50 : 70);
      var off = (N - 1) * S / 2;

      plates.forEach(function (el, i) {
        var y = i * S - off;
        var z = i * 9;
        el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,' + z + 'px)';
        if (small) return;
        var hw = el.offsetWidth / 2 + 8;
        var ang = project(hw, y, z, W, H);
        var slotY = 44 + i * (H - 88) / (N - 1);
        labs[i].style.transform = 'translate(' + (W - 248) + 'px,' + slotY + 'px)';
        links[i].p.setAttribute('d', 'M' + (W - 252) + ',' + (slotY + 13) + ' L' + ang.x.toFixed(1) + ',' + ang.y.toFixed(1));
        links[i].c.setAttribute('cx', ang.x.toFixed(1));
        links[i].c.setAttribute('cy', ang.y.toFixed(1));
      });

      if (!small && axis) {
        var t = project(0, -off, 0, W, H);
        var b = project(0, (N - 1) * S - off, (N - 1) * 9, W, H);
        axis.setAttribute('d', 'M' + t.x.toFixed(1) + ',' + t.y.toFixed(1) + ' L' + b.x.toFixed(1) + ',' + b.y.toFixed(1));
      }
    }

    function tween(to, dur) {
      var from = st.target, t0 = performance.now();
      st.target = to;
      function step(now) {
        var k = Math.min(1, (now - t0) / (dur || 850));
        var e = 1 - Math.pow(1 - k, 3);
        st.ex = from + (to - from) * e;
        render();
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = st.target < 0.5;
        toggle.textContent = open ? '装回' : '拆解';
        if (range) range.value = open ? 100 : 0;
        tween(open ? 1 : 0);
      });
    }
    if (range) {
      range.addEventListener('input', function () {
        st.target = +range.value / 100;
        st.ex = st.target;
        if (toggle) toggle.textContent = st.ex > 0.5 ? '装回' : '拆解';
        render();
      });
    }

    // drag to orbit
    var drag = null;
    stage.addEventListener('pointerdown', function (e) {
      drag = { x: e.clientX, y: e.clientY, rx: st.rx, ry: st.ry };
      stage.classList.add('drag');
      try { stage.setPointerCapture(e.pointerId); } catch (err) { }
    });
    stage.addEventListener('pointermove', function (e) {
      if (!drag) return;
      st.ry = Math.max(-46, Math.min(46, drag.ry + (e.clientX - drag.x) * 0.2));
      st.rx = Math.max(-46, Math.min(6, drag.rx - (e.clientY - drag.y) * 0.16));
      render();
    });
    ['pointerup', 'pointercancel', 'pointerleave'].forEach(function (ev) {
      stage.addEventListener(ev, function () {
        drag = null;
        stage.classList.remove('drag');
      });
    });

    labs.forEach(function (lab, i) {
      lab.addEventListener('mouseenter', function () {
        plates.forEach(function (p, k) { p.classList.toggle('on', k === i); p.classList.toggle('dim', k !== i); });
        links.forEach(function (l, k) { l.p.classList.toggle('on', k === i); l.c.classList.toggle('on', k === i); });
        lab.classList.add('on');
      });
      lab.addEventListener('mouseleave', function () {
        plates.forEach(function (p) { p.classList.remove('on', 'dim'); });
        links.forEach(function (l) { l.p.classList.remove('on'); l.c.classList.remove('on'); });
        lab.classList.remove('on');
      });
    });

    window.addEventListener('resize', function () { render(); });

    var seen = false;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !seen) {
          seen = true;
          render();
          window.setTimeout(function () {
            tween(1, 1100);
            labs.forEach(function (l, i) {
              window.setTimeout(function () { l.classList.add('in'); }, 260 + i * 70);
            });
            if (toggle) toggle.textContent = '装回';
            if (range) range.value = 100;
          }, 260);
          io.disconnect();
        }
      });
    }, { threshold: 0.3 });
    io.observe(section);

    render();
    if (QS && QS.get('qa') === '1') {
      st.ex = 1; st.target = 1;
      render();
      if (range) range.value = 100;
      labs.forEach(function (l) { l.classList.add('in'); });
    }
  })();

  /* ---------------------------------------------------------- journey */
  (function () {
    var list = $('#jList');
    if (!list) return;

    var STEPS = [
      ['0.00s', '你按下回车', '一句话进入系统。这时还没到模型，也还没花钱。', '产品层 · 输入框'],
      ['0.01s', '切成 token', '一句话被切成 23 个碎片。中文大约 1 个字 = 1~2 个 token。', '02 · Token'],
      ['0.02s', '拼上下文', '系统提示、历史对话、检索到的资料、你的问题，打包成一段长文本。', '03 · 上下文 · 06 · 上下文装配'],
      ['0.03s', '查缓存', '前缀一样就复用，输入部分直接打折。命中率决定成本。', '08 · 提示词缓存'],
      ['0.45s', '首字到达', '模型吐出第一个字。这 0.45 秒就是 TTFT，也是你等待的主要来源。', '01 · 推理 · 06 · 流式'],
      ['1.90s', '流式吐字', '边生成边显示，你看到字一个个蹦出来。', '06 · 流式输出'],
      ['2.30s', '决定调工具', '模型输出的不是答案，而是一句“调用 get_weather(上海)”。', '05 · 函数调用'],
      ['2.90s', '结果回填', '工具跑完，结果写回上下文，模型接着往下想。', '05 · 观察'],
      ['3.60s', '检查 + 渲染', '过一遍护栏，确认没问题，才出现在你屏幕上。', '10 · 护栏']
    ];

    list.innerHTML = STEPS.map(function (s, i) {
      return '<li class="j-step" data-i="' + i + '">' +
        '<span class="j-time">' + s[0] + '</span>' +
        '<span class="j-dot"></span>' +
        '<div class="j-body"><h3>' + s[1] + '</h3><p>' + s[2] + '</p>' +
        '<span class="j-tag">' + s[3] + '</span></div></li>';
    }).join('');

    var steps = $$('.j-step', list);
    var idx = -1, timer = 0;

    function setStep(i) {
      idx = i;
      steps.forEach(function (el, k) {
        el.classList.toggle('on', k === i);
        el.classList.toggle('done', k < i);
      });
      var dot = steps[i].querySelector('.j-dot');
      list.style.setProperty('--fill', (dot.offsetTop + dot.offsetHeight / 2 - 12) + 'px');
    }

    function tick() {
      if (idx >= steps.length - 1) {
        timer = window.setTimeout(function () { idx = -1; tick(); }, 2800);
        return;
      }
      setStep(idx + 1);
      timer = window.setTimeout(tick, 1150);
    }

    steps.forEach(function (el) {
      el.addEventListener('click', function () {
        window.clearTimeout(timer);
        setStep(+el.getAttribute('data-i'));
        timer = window.setTimeout(tick, 3200);
      });
    });

    var started = false;
    var io2 = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !started) { started = true; tick(); io2.disconnect(); }
      });
    }, { threshold: 0.25 });
    io2.observe(list);

    var bars = $('#jBars');
    var fillBars = function () {
      $$('.tr i', bars).forEach(function (el) {
        el.style.width = el.getAttribute('data-w') + '%';
      });
    };

    if (bars) {
      var DATA = [
        ['首字延迟 TTFT', '0.45s', 31, 1],
        ['生成 38 个 token', '1.45s', 100, 1],
        ['工具调用', '0.60s', 41, 0],
        ['拼装与检查', '0.10s', 7, 0]
      ];
      bars.innerHTML = DATA.map(function (d) {
        return '<div class="j-bar' + (d[3] ? ' a' : '') + '">' +
          '<div class="lb"><span>' + d[0] + '</span><span>' + d[1] + '</span></div>' +
          '<div class="tr"><i data-w="' + d[2] + '"></i></div></div>';
      }).join('');

      var done = false;
      var io3 = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting && !done) { done = true; fillBars(); io3.disconnect(); }
        });
      }, { threshold: 0.4 });
      io3.observe(bars);
    }

    // 截图模式：直接落到一个稳定状态
    if (QS && QS.get('qa') === '1') {
      window.setTimeout(function () { setStep(3); if (bars) fillBars(); }, 80);
    }
  })();

  /* ---------------------------------------------------------- index */
  var grid = $('#indexGrid');
  var search = $('#termSearch');
  var count = $('#searchCount');
  var empty = $('#emptyHint');
  var all = [];
  D.layers.forEach(function (l) {
    l.terms.forEach(function (t, i) {
      all.push({ t: t, l: l, id: 't-' + l.id + '-' + i });
    });
  });

  function renderIndex(kw) {
    var q = (kw || '').trim().toLowerCase();
    var list = q ? all.filter(function (x) {
      return (x.t.cn + x.t.en + x.t.one + x.t.like).toLowerCase().indexOf(q) > -1;
    }) : all;
    grid.innerHTML = list.map(function (x) {
      return '<button class="term-chip" type="button" data-go="' + x.id + '">' +
        '<span class="lay" style="background:' + x.l.color + '"></span>' + x.t.cn +
        '<span class="lbl">' + x.t.en + '</span></button>';
    }).join('');
    count.textContent = list.length + ' / ' + all.length;
    empty.hidden = list.length > 0;
  }
  renderIndex('');
  search.addEventListener('input', function () { renderIndex(search.value); });

  grid.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-go]');
    if (!btn) return;
    var el = document.getElementById(btn.getAttribute('data-go'));
    if (!el) return;
    var sec = el.closest('.chapter');
    if (sec && el.classList.contains('extra') && !sec.classList.contains('open')) {
      sec.classList.add('open');
      var m = $('.more', sec);
      if (m) m.firstChild.nodeValue = '收起 ' + m.dataset.n + ' 个词 ';
    }
    window.setTimeout(function () {
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      el.classList.remove('flash');
      void el.offsetWidth;
      el.classList.add('flash');
      window.setTimeout(function () { el.classList.remove('flash'); }, 1700);
    }, 60);
  });

  /* ---------------------------------------------------------- reveal */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  $$('.reveal, .term, .creed-line').forEach(function (el) { io.observe(el); });

  /* ---------------------------------------------------------- nav state */
  var chapterIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        var id = e.target.id.replace('ch-', '');
        var idx = D.layers.findIndex(function (l) { return l.id === id; });
        railDots.forEach(function (d, i) { d.classList.toggle('on', i === idx); });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  $$('.chapter').forEach(function (c) { chapterIO.observe(c); });

  var bar = $('#progressBar');
  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.scrollY / h) * 100 : 0;
    if (bar) bar.style.width = p.toFixed(2) + '%';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------------------------------------------------- demo: token */
  (function () {
    var root = $('.tok-input') && $('.tok-input').closest('.demo');
    if (!root) return;
    var input = $('.tok-input', root), out = $('.tok-out', root), stats = $('.tok-stats', root);
    var timer = 0;

    function tokenize(s) {
      var res = [], i = 0, ch;
      while (i < s.length) {
        ch = s[i];
        if (/[\u3400-\u9fff\uf900-\ufaff]/.test(ch)) { res.push(ch); i++; }
        else if (/[A-Za-z]/.test(ch)) {
          var j = i; while (j < s.length && /[A-Za-z]/.test(s[j])) j++;
          var w = s.slice(i, j);
          if (w.length <= 4) res.push(w);
          else { for (var k = 0; k < w.length; k += 4) res.push(w.slice(k, k + 4)); }
          i = j;
        } else if (/\s/.test(ch)) {
          var m = i; while (m < s.length && /\s/.test(s[m])) m++;
          res.push(s.slice(i, m)); i = m;
        } else if (/[0-9]/.test(ch)) {
          var n2 = i; while (n2 < s.length && /[0-9]/.test(s[n2])) n2++;
          res.push(s.slice(i, n2)); i = n2;
        } else { res.push(ch); i++; }
      }
      return res;
    }

    function render() {
      var toks = tokenize(input.value);
      out.innerHTML = '';
      var frag = document.createDocumentFragment();
      toks.slice(0, 160).forEach(function (t, i) {
        var el = document.createElement('span');
        el.className = 'chip k' + (1 + (i % 3));
        el.textContent = t.replace(/ /g, '␣');
        frag.appendChild(el);
        window.setTimeout(function () { el.classList.add('in'); }, reduce ? 0 : i * 18);
      });
      out.appendChild(frag);
      var chars = input.value.length;
      stats.innerHTML =
        '<span>token 数<b>' + toks.length + '</b></span>' +
        '<span>字符数<b>' + chars + '</b></span>' +
        '<span>平均<b>' + (chars / Math.max(toks.length, 1)).toFixed(2) + '</b> 字 / token</span>';
    }

    input.addEventListener('input', function () {
      window.clearTimeout(timer);
      timer = window.setTimeout(render, 240);
    });
    render();
  })();

  /* ---------------------------------------------------------- demo: context */
  (function () {
    var range = $('#ctxRange');
    if (!range) return;
    var segs = {
      sys: document.querySelector('[data-k=sys]'),
      hist: document.querySelector('[data-k=hist]'),
      docs: document.querySelector('[data-k=docs]'),
      q: document.querySelector('[data-k=q]'),
      free: document.querySelector('[data-k=free]')
    };
    var cols = { sys: '#E9B44C', hist: '#C9A0DC', docs: '#8FBF9F', q: '#6FA8DC' };
    var tok = $('#ctxTok'), lat = $('#ctxLat'), cost = $('#ctxCost');

    function update(v) {
      var t = v / 100;
      var sys = 8;
      var hist = 46 * t;
      var docs = 34 * Math.max(0, (t - 0.12) / 0.88);
      var q = 4;
      var free = Math.max(0, 100 - sys - hist - docs - q);
      segs.sys.style.width = sys + '%';
      segs.hist.style.width = hist + '%';
      segs.docs.style.width = docs + '%';
      segs.q.style.width = q + '%';
      segs.free.style.width = free + '%';

      [['sys', sys], ['hist', hist], ['docs', docs], ['q', q]].forEach(function (p) {
        var el = segs[p[0]];
        el.style.background = cols[p[0]];
        el.textContent = p[1] > 11 ? Math.round(p[1]) + '%' : '';
      });

      var used = 128 * (sys + hist + docs + q) / 100;
      tok.textContent = Math.round(used);
      lat.textContent = (0.6 + t * 2.5).toFixed(1);
      cost.textContent = (0.002 + t * 0.019).toFixed(3);
    }
    range.addEventListener('input', function () { update(+range.value); });
    update(+range.value);
  })();

  /* ---------------------------------------------------------- demo: agent */
  (function () {
    var dot = $('#agentDot');
    if (!dot) return;
    var log = $('#agentLog');
    var nodes = $$('.node-c');
    var PHASE = 1700, R = 112, CX = 160, CY = 160;
    var lines = [
      ['01 规划', '先查上海天气，再决定穿什么。'],
      ['02 调用', 'get_weather(city="上海")'],
      ['03 观察', '返回：26℃，多云，湿度 71%。'],
      ['04 再规划', '信息够了，不用再查。']
    ];
    var last = -1, t0 = performance.now();

    function smooth(x) { return x * x * (3 - 2 * x); }

    function frame(now) {
      var p = ((now - t0) / PHASE) % 4;
      var phase = Math.floor(p), f = p - phase;
      var a0 = -Math.PI / 2 + phase * (Math.PI / 2);
      var a = a0 + smooth(f) * (Math.PI / 2);
      dot.setAttribute('cx', (CX + R * Math.cos(a)).toFixed(2));
      dot.setAttribute('cy', (CY + R * Math.sin(a)).toFixed(2));

      if (phase !== last) {
        if (phase === 0 && last === 3) log.innerHTML = '';
        nodes.forEach(function (n, i) { n.classList.toggle('on', i === phase); });
        if (lines[phase]) {
          var el = document.createElement('span');
          el.className = 'ln';
          el.innerHTML = '<span class="tag">' + lines[phase][0] + '</span>' + lines[phase][1];
          log.appendChild(el);
          void el.offsetWidth;
          el.classList.add('in');
          while (log.children.length > 4) log.removeChild(log.firstChild);
        }
        last = phase;
      }
      requestAnimationFrame(frame);
    }
    if (!reduce) requestAnimationFrame(frame);
    else {
      lines.forEach(function (l) {
        var el = document.createElement('span');
        el.className = 'ln in';
        el.innerHTML = '<span class="tag">' + l[0] + '</span>' + l[1];
        log.appendChild(el);
      });
    }
  })();

  /* ---------------------------------------------------------- demo: rag */
  (function () {
    var box = $('.rag');
    if (!box) return;
    var qEl = $('.qt', box), aEl = $('.rag-a', box);
    var docs = $$('.rag-doc', box);
    var scores = [92, 74, 19];
    var Q = '出差住宿能报多少？';
    var A = '一线城市每晚不超过 ¥600，其他城市 ¥400，需在 30 天内交发票。<span class="cite">员工手册 P12</span>';
    var timers = [];

    function clear() { timers.forEach(clearTimeout); timers = []; }
    function later(fn, ms) { timers.push(window.setTimeout(fn, ms)); }

    function run() {
      clear();
      qEl.textContent = ''; aEl.classList.remove('in'); aEl.innerHTML = '';
      docs.forEach(function (d) {
        d.classList.remove('hit');
        var bar = $('.track i', d);
        bar.style.transition = 'none';
        bar.style.width = '0%';
        var sc = $('.score', d);
        if (sc) sc.textContent = '—';
      });

      var i = 0;
      (function type() {
        if (i <= Q.length) {
          qEl.textContent = Q.slice(0, i);
          i++;
          later(type, 60);
        } else {
          docs.forEach(function (d, k) {
            later(function () {
              var bar = $('.track i', d);
              bar.style.transition = 'width .8s cubic-bezier(.22,.68,.28,1)';
              bar.style.width = scores[k] + '%';
              var sc = $('.score', d);
              if (sc) sc.textContent = (scores[k] / 100).toFixed(2);
              if (k === 0) d.classList.add('hit');
            }, 250 + k * 220);
          });
          later(function () {
            aEl.innerHTML = A;
            aEl.classList.add('in');
          }, 1400);
        }
      })();
    }

    var btn = $('.replay');
    if (btn) btn.addEventListener('click', run);

    var seen = false;
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !seen) { seen = true; run(); ob.disconnect(); }
      });
    }, { threshold: .4 });
    ob.observe(box);
  })();

  /* ---------------------------------------------------------- demo: cache */
  (function () {
    var slow = $('.cache-row.slow');
    if (!slow) return;
    var fast = $('.cache-row.hit');

    function run() {
      [slow, fast].forEach(function (row) {
        var bar = $('.track i', row);
        bar.style.transition = 'none';
        bar.style.width = '0%';
        $('.t', row).textContent = '—';
      });
      void slow.offsetWidth;

      var b1 = $('.track i', slow);
      b1.style.transition = 'width 2.4s linear';
      b1.style.width = '100%';
      var t1 = $('.t', slow), start1 = performance.now();
      (function tick1() {
        var ms = performance.now() - start1;
        t1.textContent = (Math.min(ms, 2400) / 1000).toFixed(1) + 's · ¥1.00';
        if (ms < 2400) requestAnimationFrame(tick1);
      })();

      window.setTimeout(function () {
        var b2 = $('.track i', fast);
        b2.style.transition = 'width .55s linear';
        b2.style.width = '100%';
        var t2 = $('.t', fast), start2 = performance.now();
        (function tick2() {
          var ms = performance.now() - start2;
          t2.textContent = (Math.min(ms, 550) / 1000).toFixed(1) + 's · ¥0.18';
          if (ms < 550) requestAnimationFrame(tick2);
        })();
      }, 400);
    }

    var seen = false;
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !seen) { seen = true; run(); ob.disconnect(); }
      });
    }, { threshold: .5 });
    ob.observe(slow);
  })();

})();
