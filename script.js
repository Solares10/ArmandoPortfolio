// Armando Solares - portfolio scripts
(function(){
  // project filters
  var buttons = document.querySelectorAll('.seg button');
  var projects = document.querySelectorAll('.project');
  var count = document.getElementById('count');

  buttons.forEach(function(btn){
    btn.addEventListener('click', function(){
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function(b){ b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
      var shown = 0;
      projects.forEach(function(p){
        var cats = p.getAttribute('data-cats').split(' ');
        var match = f === 'all' || cats.indexOf(f) !== -1;
        p.hidden = !match;
        if (match) shown++;
      });
      count.textContent = 'Showing ' + shown + (shown === 1 ? ' project' : ' projects');
    });
  });

  // highlight the sidebar link for the section on screen
  var links = document.querySelectorAll('.side-nav a');
  var sections = Array.prototype.map.call(links, function(a){
    return document.querySelector(a.getAttribute('href'));
  });
  function setCurrent(){
    var current = 0;
    sections.forEach(function(sec, i){
      if (sec && sec.getBoundingClientRect().top <= window.innerHeight * 0.35) current = i;
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections.length - 1;
    links.forEach(function(a, i){
      if (i === current) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', setCurrent, { passive: true });
  window.addEventListener('resize', setCurrent);
  setCurrent();

  // footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
