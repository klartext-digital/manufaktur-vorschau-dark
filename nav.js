// Menue auf Handy und schmalen Laptops: Liste aus dem vorhandenen Menue, damit nur eine Stelle gepflegt wird
(function(){
  const btn=document.querySelector('button.burger'),menu=document.querySelector('.menu'),head=document.querySelector('header');
  if(!btn||!menu)return;
  const p=document.createElement('nav');p.id='mnav';p.className='mnav';p.hidden=true;p.setAttribute('aria-label','Hauptmenü');
  p.innerHTML=[...menu.querySelectorAll('a')].map(a=>'<a href="'+a.getAttribute('href')+'">'+a.textContent.trim()+'</a>').join('');
  document.body.appendChild(p);btn.setAttribute('aria-controls','mnav');
  const IC={zu:'M3 6h18M3 12h18M3 18h18',auf:'M6 6l12 12M18 6L6 18'};
  function set(o){
    p.style.top=Math.max(0,head.getBoundingClientRect().bottom)+'px';
    p.hidden=!o;document.body.classList.toggle('mnav-offen',o);
    btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Menü schliessen':'Menü öffnen');
    btn.querySelector('path').setAttribute('d',o?IC.auf:IC.zu);
    try{if(typeof lenis!=='undefined'&&lenis){o?lenis.stop():lenis.start()}}catch(_){}
  }
  btn.addEventListener('click',()=>set(p.hidden));
  p.addEventListener('click',e=>{if(e.target.closest('a'))set(false)});
  addEventListener('keydown',e=>{if(e.key==='Escape'&&!p.hidden){set(false);btn.focus()}});
  matchMedia('(min-width:1100px)').addEventListener('change',e=>{if(e.matches)set(false)});
})();
