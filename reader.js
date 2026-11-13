/* Reading navigation and quick reference. */
(function () {
  'use strict';
  var D = window.AI_DATA, dialog = document.getElementById('readerDialog');
  var input = document.getElementById('quickSearch'), results = document.getElementById('quickResults');
  var previousFocus;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var closeTimer = null, openFrame = null, savedOverflow = '';
  function closePanel(after) {
    if (!dialog.open || closeTimer !== null) return;
    cancelAnimationFrame(openFrame);
    dialog.classList.remove('is-visible');
    closeTimer = window.setTimeout(function () {
      closeTimer = null;
      dialog.close();
      if (after) after();
    }, reduceMotion ? 0 : 200);
  }
  var terms = [];
  D.layers.forEach(function(l) { l.terms.forEach(function(t,i) { terms.push({term:t,layer:l,id:'t-'+l.id+'-'+i}); }); });
  function render() {
    var q = input.value.trim().toLowerCase();
    var matches = terms.filter(function(x) { return !q || [x.term.cn,x.term.en,x.term.one,x.term.like].join(' ').toLowerCase().includes(q); });
    matches.sort(function(a,b) { function rank(x) { return [x.term.cn.toLowerCase(),x.term.en.toLowerCase()].includes(q) ? 0 : 1; } return rank(a)-rank(b); });
    results.replaceChildren();
    document.getElementById('quickCount').textContent = matches.length ? matches.length+' 个结果' : '没有找到，试试中文名称或其他关键词。';
    var fragment = document.createDocumentFragment();
    matches.forEach(function(x) {
      var b = document.createElement('button'); b.type='button'; b.className='quick-result';
      var title=document.createElement('strong'), desc=document.createElement('span'), meta=document.createElement('small');
      title.textContent=x.term.cn+' · '+x.term.en; desc.textContent=x.term.one; meta.textContent=x.layer.no+' / '+x.layer.title;
      b.append(title,desc,meta); b.onclick=function(){previousFocus=null;closePanel(function(){go(x.id);});}; fragment.append(b);
    });
    results.append(fragment);
  }
  function open(mode) {
    if (closeTimer !== null) { clearTimeout(closeTimer); closeTimer = null; }
    if (!dialog.open) previousFocus=document.activeElement;
    document.getElementById('readerSearch').hidden=mode!=='search';
    document.getElementById('readerContents').hidden=mode==='search';
    document.getElementById('readerDialogTitle').textContent=mode==='search'?'查一个词':'阅读目录';
    if(!dialog.open) {
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      dialog.showModal();
      // Establish the hidden starting frame before the entrance transition.
      dialog.getBoundingClientRect();
    }
    cancelAnimationFrame(openFrame);
    openFrame = requestAnimationFrame(function(){ dialog.classList.add('is-visible'); });
    if(mode==='search'){render();input.focus();} else document.querySelector('#readerContents a').focus();
  }
  function go(id) {
    var el=document.getElementById(id); if(!el)return;
    var chapter=el.closest('.chapter');
    if(chapter && el.classList.contains('extra') && !chapter.classList.contains('open')) chapter.querySelector('.more').click();
    history.pushState(null,'','#'+id);
    el.classList.add('in'); el.tabIndex=-1; el.focus({preventScroll:true}); el.scrollIntoView({block:'center',behavior:'instant'});
    el.classList.add('flash'); setTimeout(function(){el.classList.remove('flash');},1800);
  }
  document.getElementById('openContents').onclick=function(){open('contents');};
  document.getElementById('openSearch').onclick=document.getElementById('heroSearch').onclick=function(){open('search');};
  document.getElementById('closeReader').onclick=function(){closePanel();};
  dialog.addEventListener('cancel',function(e){e.preventDefault();closePanel();});
  dialog.addEventListener('click',function(e){if(e.target===dialog){var r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closePanel();}});
  dialog.addEventListener('close',function(){document.body.style.overflow=savedOverflow;dialog.classList.remove('is-visible');if(previousFocus && previousFocus.isConnected) previousFocus.focus({preventScroll:true});});
  input.oninput=render;
  var contents=document.getElementById('readerContents');
  D.layers.forEach(function(l){var a=document.createElement('a');a.href='#ch-'+l.id;a.textContent=l.no+'  '+l.title;a.onclick=function(e){e.preventDefault();previousFocus=null;closePanel(function(){go('ch-'+l.id);});};contents.append(a);});
  document.addEventListener('keydown',function(e){if(e.key==='/' && !dialog.open && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName) && !e.target.isContentEditable){e.preventDefault();open('search');}});
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var l=D.layers.find(function(l){return 'ch-'+l.id===e.target.id;});document.getElementById('currentChapter').textContent=l.no+' / '+l.title;}});},{rootMargin:'-15% 0px -70% 0px'});
  document.querySelectorAll('.chapter').forEach(function(el){observer.observe(el);});
  var layerBox = document.getElementById('layerDetail');
  var layerContent = document.getElementById('layerDetailContent');
  var resetLayer = document.getElementById('resetLayer');
  var initialLayerText = layerContent.textContent, selectedLabel = null;
  var layerTimer, layerAnimations = [];
  function changeLayerContent(render) {
    clearTimeout(layerTimer);
    layerAnimations.forEach(function(animation){animation.cancel();});
    layerAnimations = [];
    if (reduceMotion) { render(); return; }
    layerAnimations.push(layerContent.animate([{opacity:1},{opacity:0,transform:'translateY(-4px)'}],{duration:100,fill:'forwards'}));
    layerTimer = setTimeout(function(){
      var before = layerBox.getBoundingClientRect().height;
      render();
      var after = layerBox.getBoundingClientRect().height;
      layerAnimations.forEach(function(animation){animation.cancel();});
      layerAnimations = [
        layerBox.animate([{height:before+'px'},{height:after+'px'}],{duration:240,easing:'cubic-bezier(.2,.7,.2,1)'}),
        layerContent.animate([{opacity:0,transform:'translateY(5px)'},{opacity:1,transform:'translateY(0)'}],{duration:220,easing:'ease-out'})
      ];
    },100);
  }
  function resetLayerSelection() {
    var oldLabel = selectedLabel;
    selectedLabel = null;
    document.querySelectorAll('.x3d-lab[href]').forEach(function(label){label.setAttribute('aria-pressed','false');});
    document.querySelectorAll('.plate').forEach(function(plate){plate.style.opacity='';});
    if (document.activeElement === resetLayer && oldLabel) oldLabel.focus({preventScroll:true});
    changeLayerContent(function(){layerContent.textContent=initialLayerText;resetLayer.hidden=true;});
  }
  resetLayer.onclick = resetLayerSelection;
  document.querySelectorAll('.x3d-lab[href]').forEach(function(label){
    label.setAttribute('role','button');
    label.setAttribute('aria-controls','layerDetail');
    label.setAttribute('aria-pressed','false');
    label.addEventListener('keydown',function(e){if(e.key===' '){e.preventDefault();label.click();}});
    label.addEventListener('click',function(e){
      e.preventDefault();
      if (selectedLabel === label) { resetLayerSelection(); return; }
      selectedLabel = label;
      var id=label.getAttribute('href').slice(1);
      var layer=D.layers.find(function(l){return 'ch-'+l.id===id;});
      document.querySelectorAll('.x3d-lab[href]').forEach(function(item){item.setAttribute('aria-pressed',String(item===label));});
      document.querySelectorAll('.plate').forEach(function(plate,i){plate.style.opacity=i===Number(label.dataset.i)?'1':'.3';});
      changeLayerContent(function(){
        var title=document.createElement('strong'),description=document.createElement('p'),link=document.createElement('a');
        title.textContent=layer.title+' · '+layer.sub;
        description.textContent=layer.intro;
        link.href='#'+id;
        link.textContent='阅读本章：'+layer.terms.filter(function(t){return t.core;}).slice(0,3).map(function(t){return t.cn;}).join(' / ')+' →';
        layerContent.replaceChildren(title,description,link);
        resetLayer.hidden=false;
      });
    });
  });
  document.getElementById('xToggle').addEventListener('click',resetLayerSelection);
  document.getElementById('indexGrid').addEventListener('click',function(e){var b=e.target.closest('[data-go]');if(b){history.replaceState(null,'','#'+b.dataset.go);}});
  function restore(){var id=decodeURIComponent(location.hash.slice(1));if(id.startsWith('t-'))goWithoutHistory(id);}
  function goWithoutHistory(id){var el=document.getElementById(id);if(!el)return;var c=el.closest('.chapter');if(el.classList.contains('extra')&&!c.classList.contains('open'))c.querySelector('.more').click();el.classList.add('in');el.scrollIntoView({block:'center',behavior:'instant'});}
  window.addEventListener('popstate',restore); restore();
  var topButton = document.getElementById('backToTop'), idleTimer;
  function updateTop() {
    var visible = window.scrollY > 400;
    topButton.classList.toggle('is-visible', visible);
    topButton.tabIndex = visible ? 0 : -1;
    topButton.setAttribute('aria-hidden', String(!visible));
    topButton.classList.toggle('is-expanded', visible);
    clearTimeout(idleTimer);
    if (visible) idleTimer = setTimeout(function(){topButton.classList.remove('is-expanded');}, 1600);
  }
  topButton.onclick = function(){
    history.replaceState(null, '', location.pathname + location.search);
    window.scrollTo({top:0,behavior:reduceMotion?'instant':'smooth'});
    document.getElementById('top').tabIndex=-1;
    document.getElementById('top').focus({preventScroll:true});
  };
  window.addEventListener('scroll',updateTop,{passive:true}); updateTop();
})();
