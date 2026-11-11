/* The Vanilla: Warenkorb, Merkliste, Suche, Konto-Hinweis und Newsletter fuer die Vorschau.
   Speicher: localStorage dieses Browsers. Im Shopify-Theme wird nur die Ablage getauscht
   (Warenkorb -> /cart/add.js, Suche -> /search/suggest.json), die Oberflaeche bleibt gleich. */
(function(){
'use strict';
const TVP={"planifolia":{"n":"Planifolia Vanilleschoten","link":"produkt.html?p=planifolia","img":"p2/planifolia-1.jpg","kat":"Vanilleschoten","note":"20–21 cm · Grade A · Indonesien","def":0,"sizes":[{"l":"50 g","p":36.0},{"l":"100 g","p":72.0}],"staffel":[]},"planifolia-extra":{"n":"Planifolia Extra Vanilleschoten","link":"produkt.html?p=planifolia-extra","img":"p2/planifolia-extra-1-v2.jpg","kat":"Vanilleschoten","note":"21–23 cm · Grade A · Indonesien","def":0,"sizes":[{"l":"50 g","p":39.5},{"l":"100 g","p":79.0},{"l":"250 g","p":197.5},{"l":"500 g","p":395.0},{"l":"1 kg","p":790.0}],"staffel":[]},"jumbofinger":{"n":"Pompona „Jumbo Finger“","link":"produkt.html?p=jumbofinger","img":"shop/jumbo-ki.jpg","kat":"Vanilleschoten","note":"1 Stück im Reagenzglas · 24–30 cm · 20–30 g","def":0,"sizes":[{"l":"1 Stück im Reagenzglas","p":21.0}],"staffel":[]},"vanille-tahitensis-aktion-frisch-aus-madagaskar":{"n":"Vanille Tahitensis","link":"produkt.html?p=vanille-tahitensis-aktion-frisch-aus-madagaskar","img":"shop/tahitensis-ki.jpg","kat":"Vanilleschoten","note":"Frisch aus Madagaskar · 16–22 cm, nicht kalibriert","def":0,"sizes":[{"l":"50 g","p":27.5},{"l":"1 kg","p":550.0}],"staffel":[]},"vanilleschoten-extra-21-23cm-im-reagenzglas":{"n":"Vanilleschoten „Extra“ im Reagenzglas","link":"produkt.html?p=vanilleschoten-extra-21-23cm-im-reagenzglas","img":"p2/schoten-1.jpg","kat":"Vanilleschoten","note":"21–23 cm · 2 Stück · Indonesien","def":0,"sizes":[{"l":"21–23 cm","p":14.0}],"staffel":[]},"vanillepaste":{"n":"Vanillepaste im Glas","link":"produkt.html?p=vanillepaste","img":"p2/paste-1-v2.jpg","kat":"Paste & Sirup","note":"Ohne Alkohol · auch für Kinder","def":1,"sizes":[{"l":"20 g Mini-Glas","p":7.0,"img":"p2/paste-mini-1.jpg"},{"l":"100 g Glas","p":22.0,"img":"p2/paste-1-v2.jpg"}],"staffel":[]},"vanille-sirup":{"n":"Vanille-Sirup","link":"produkt.html?p=vanille-sirup","img":"p2/sirup-1.jpg","kat":"Paste & Sirup","note":"Ohne Alkohol & Zusatzstoffe","def":0,"sizes":[{"l":"400 ml","p":18.0}],"staffel":[{"q":2,"d":10}]},"vanillepulver":{"n":"Gourmet Vanillepulver","link":"produkt.html?p=vanillepulver","img":"p2/pulver-1.jpg","kat":"Pulver & Zucker","note":"100 % rein · Tahitensis & Planifolia","def":1,"sizes":[{"l":"8 g Mini-Glas","p":15.0,"img":"p2/pulver-mini-1.jpg"},{"l":"25 g","p":31.5,"img":"p2/pulver-1.jpg"},{"l":"1 kg","p":1140.0,"img":"p2/pulver-1.jpg"}],"staffel":[]},"vanillezucker":{"n":"Zucker mit Vanille","link":"produkt.html?p=vanillezucker","img":"p2/zucker-1-v2.jpg","kat":"Pulver & Zucker","note":"7,4 % Vanille · Schweizer Zucker","def":1,"sizes":[{"l":"20 g Mini-Glas","p":5.0,"img":"p2/zucker-mini-1.jpg"},{"l":"80 g Dose","p":10.5,"img":"p2/zucker-1-v2.jpg"},{"l":"1 kg Vakuumbeutel","p":58.0,"img":"p2/zucker-1-v2.jpg"}],"staffel":[]},"vanille-salz-feine-kornung":{"n":"Vanille-Salz fein","link":"produkt.html?p=vanille-salz-feine-kornung","img":"p2/salz-fein-1.jpg","kat":"Salz & Würze","note":"Meersalz mit 5,4 % Vanille","def":0,"sizes":[{"l":"20 g","p":9.5},{"l":"100 g","p":15.0},{"l":"1 kg","p":79.0}],"staffel":[]},"vanille-salz-grob":{"n":"Vanille-Salz grob","link":"produkt.html?p=vanille-salz-grob","img":"p2/salz-grob-1.jpg","kat":"Salz & Würze","note":"Grobe Kristalle · Mittelmeersalz","def":0,"sizes":[{"l":"20 g","p":9.5},{"l":"100 g","p":15.0},{"l":"1 kg","p":89.0}],"staffel":[]},"schwarze-vanille-wurze-fein":{"n":"Schwarze Vanille-Würze fein","link":"produkt.html?p=schwarze-vanille-wurze-fein","img":"p2/wuerze-fein-1.jpg","kat":"Salz & Würze","note":"Mit Pflanzenkohle · feine Körnung","def":0,"sizes":[{"l":"20 g","p":9.5},{"l":"100 g","p":15.0},{"l":"1 kg","p":89.0}],"staffel":[]},"schwarze-vanille-wurze-grobe-kornung":{"n":"Schwarze Vanille-Würze grob","link":"produkt.html?p=schwarze-vanille-wurze-grobe-kornung","img":"p2/wuerze-grob-1.jpg","kat":"Salz & Würze","note":"Mit Pflanzenkohle · grobe Körnung","def":0,"sizes":[{"l":"20 g","p":9.5},{"l":"100 g","p":15.0},{"l":"1 kg","p":79.0}],"staffel":[]},"the-vanilla-4-erlei":{"n":"The Vanilla 4-erlei","link":"produkt.html?p=the-vanilla-4-erlei","img":"shop/box-echt-set.jpg","kat":"Geschenke","note":"4 Mini-Gläser in der Geschenkbox","def":0,"sizes":[{"l":"4 Mini-Gläser in der Geschenkbox","p":32.5}],"staffel":[{"q":20,"d":15},{"q":50,"d":20},{"q":100,"d":25},{"q":300,"d":30}]},"geschenkpackung":{"n":"Geschenkpackung","link":"geschenkset.html","img":"produkte/geschenk-1.jpg","kat":"Geschenke","note":"3 Mini-Gläser + 2 Vanilleschoten","def":0,"sizes":[{"l":"Sortiment 1","p":32.5},{"l":"Sortiment 2","p":32.5}],"staffel":[{"q":20,"d":15},{"q":50,"d":20},{"q":100,"d":25},{"q":300,"d":30}]}};
const FREI=99; // kostenloser Versand ab CHF 99 (wie the-vanilla.ch)
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const chf=n=>'CHF '+(Math.round(n*100)/100).toFixed(2);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const lies=k=>{try{return JSON.parse(localStorage.getItem(k)||'[]')}catch(_){return []}};
const schreib=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(_){}};
let korb=lies('tv_korb').filter(x=>TVP[x.h]&&TVP[x.h].sizes[x.s]);
let merk=lies('tv_merk').filter(h=>TVP[h]);

function rabatt(h,n){const st=(TVP[h].staffel||[]);let d=0;st.forEach(s=>{if(n>=s.q)d=s.d});return d}
function zeile(x){const p=TVP[x.h],s=p.sizes[x.s],d=rabatt(x.h,x.n);return {p,s,d,voll:s.p*x.n,tot:Math.round(s.p*x.n*(1-d/100)*100)/100}}
function bild(h,s){const p=TVP[h];const z=p.sizes[s];return 'img/'+((z&&z.img)||p.img)}

/* ---------- Grundgeruest: Seitenleiste ---------- */
const ov=document.createElement('div');ov.className='tvp-ov';ov.hidden=true;
const pan=document.createElement('aside');pan.className='tvp-pan';pan.hidden=true;pan.setAttribute('role','dialog');pan.setAttribute('aria-modal','true');
pan.innerHTML='<div class="tvp-kopf"><h2 class="tvp-titel" id="tvpT"></h2><button type="button" class="tvp-zu" aria-label="Schliessen"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div class="tvp-inhalt"></div><div class="tvp-fuss"></div>';
pan.setAttribute('aria-labelledby','tvpT');
document.body.append(ov,pan);
let offen=null,zuvor=null;
function oeffne(art){
  zuvor=document.activeElement;offen=art;male();
  ov.hidden=pan.hidden=false;requestAnimationFrame(()=>{ov.classList.add('an');pan.classList.add('an')});
  document.documentElement.classList.add('tvp-offen');
  try{if(typeof lenis!=='undefined'&&lenis)lenis.stop()}catch(_){}
  setTimeout(()=>{const f=art==='suche'?$('#tvpQ',pan):$('.tvp-zu',pan);f&&f.focus()},60);
}
function schliesse(){
  if(!offen)return;offen=null;ov.classList.remove('an');pan.classList.remove('an');
  document.documentElement.classList.remove('tvp-offen');
  try{if(typeof lenis!=='undefined'&&lenis)lenis.start()}catch(_){}
  setTimeout(()=>{if(!offen){ov.hidden=pan.hidden=true}},320);zuvor&&zuvor.focus&&zuvor.focus();
}
ov.addEventListener('click',schliesse);$('.tvp-zu',pan).addEventListener('click',schliesse);
addEventListener('keydown',e=>{if(e.key==='Escape'&&offen)schliesse()});

function male(){
  const T=$('.tvp-titel',pan),I=$('.tvp-inhalt',pan),F=$('.tvp-fuss',pan);F.innerHTML='';
  pan.dataset.art=offen;
  if(offen==='korb'){
    const n=korb.reduce((a,x)=>a+x.n,0);T.textContent='Warenkorb'+(n?' ('+n+')':'');
    if(!korb.length){I.innerHTML='<div class="tvp-leer"><p>Dein Warenkorb ist noch leer.</p><a class="btn btn-gold" href="produkte.html"><span>Zu den Produkten</span> <span class="arrow">→</span></a></div>';return}
    let sum=0;
    I.innerHTML='<ul class="tvp-liste">'+korb.map((x,i)=>{const z=zeile(x);sum+=z.tot;return '<li class="tvp-pos"><a class="tvp-bild" href="'+z.p.link+'"><img src="'+bild(x.h,x.s)+'" alt=""></a><div class="tvp-txt"><a class="tvp-name" href="'+z.p.link+'">'+esc(z.p.n)+'</a><span class="tvp-var">'+esc(z.s.l)+'</span>'+(z.d?'<span class="tvp-rab">−'+z.d+' % Mengenrabatt</span>':'')+'<div class="tvp-menge" data-i="'+i+'"><button type="button" data-d="-1" aria-label="Menge verringern">−</button><span aria-live="polite">'+x.n+'</span><button type="button" data-d="1" aria-label="Menge erhöhen">+</button></div></div><div class="tvp-preis">'+(z.d?'<s>'+chf(z.voll)+'</s>':'')+'<b>'+chf(z.tot)+'</b><button type="button" class="tvp-weg" data-i="'+i+'">Entfernen</button></div></li>'}).join('')+'</ul>';
    const fehlt=Math.max(0,FREI-sum),pct=Math.min(100,sum/FREI*100);
    F.innerHTML='<div class="tvp-frei"><span>'+(fehlt?'Noch <b>'+chf(fehlt)+'</b> bis zum kostenlosen Versand':'Der Versand ist <b>kostenlos</b>')+'</span><i style="--p:'+pct+'%"></i></div><div class="tvp-summe"><span>Zwischensumme</span><b>'+chf(sum)+'</b></div><button type="button" class="btn btn-gold btn-block tvp-kasse"><span>Zur Kasse</span> <span class="arrow">→</span></button><p class="tvp-hinweis" id="tvpKasse" hidden>Vorschau: Bezahlt wird nach dem Livegang über die sichere Shopify-Kasse.</p>';
    return;
  }
  if(offen==='merkliste'){
    T.textContent='Merkliste';
    if(!merk.length){I.innerHTML='<div class="tvp-leer"><p>Noch nichts gemerkt. Tippe bei einem Produkt auf das Herz.</p><a class="btn btn-gold" href="produkte.html"><span>Zu den Produkten</span> <span class="arrow">→</span></a></div>';return}
    I.innerHTML='<ul class="tvp-liste">'+merk.map(h=>{const p=TVP[h];return '<li class="tvp-pos"><a class="tvp-bild" href="'+p.link+'"><img src="img/'+p.img+'" alt=""></a><div class="tvp-txt"><a class="tvp-name" href="'+p.link+'">'+esc(p.n)+'</a><span class="tvp-var">ab '+chf(Math.min(...p.sizes.map(s=>s.p)))+'</span><button type="button" class="btn btn-outline tvp-inkorb" data-h="'+h+'"><span>In den Warenkorb</span></button></div><div class="tvp-preis"><button type="button" class="tvp-weg" data-h="'+h+'">Entfernen</button></div></li>'}).join('')+'</ul>';
    return;
  }
  if(offen==='suche'){
    T.textContent='Suchen';
    I.innerHTML='<label class="tvp-such"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg><input id="tvpQ" type="search" placeholder="Produkt, Rezept, Thema…" autocomplete="off" aria-label="Suchbegriff"></label><ul class="tvp-liste tvp-treffer" id="tvpR" aria-live="polite"></ul>';
    const q=$('#tvpQ',pan),r=$('#tvpR',pan);
    const seiten=[['Rezepte','rezepte.html','rezept backen kochen dessert'],['Über Stephan Stemminger','ueber-uns.html','stephan koch manufaktur bauern indonesien qualität'],['Weihnachtsmärkte','weihnachtsmaerkte.html','markt termine stand weihnacht'],['Degustationsmenü','degustationsmenue.html','degustation abend menü gruppe team event'],['Versand & Rückgabe','versand.html','versand lieferung rückgabe widerruf'],['Impressum','impressum.html','impressum kontakt adresse'],['AGB','agb.html','agb geschäftsbedingungen'],['Datenschutz','datenschutz.html','datenschutz cookies']];
    const norm=t=>t.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
    function such(){const w=norm(q.value.trim());
      const P=Object.entries(TVP).filter(([h,p])=>!w||norm(p.n+' '+p.kat+' '+p.note+' '+p.sizes.map(s=>s.l).join(' ')).includes(w)).slice(0,w?20:6);
      const S=w?seiten.filter(x=>norm(x[0]+' '+x[2]).includes(w)):[];
      r.innerHTML=P.map(([h,p])=>'<li class="tvp-pos"><a class="tvp-bild" href="'+p.link+'"><img src="img/'+p.img+'" alt=""></a><div class="tvp-txt"><a class="tvp-name" href="'+p.link+'">'+esc(p.n)+'</a><span class="tvp-var">'+esc(p.kat)+' · ab '+chf(Math.min(...p.sizes.map(s=>s.p)))+'</span></div></li>').join('')
        +S.map(x=>'<li class="tvp-seite"><a href="'+x[1]+'">'+x[0]+' <span class="arrow">→</span></a></li>').join('')
        +(w&&!P.length&&!S.length?'<li class="tvp-leer"><p>Keine Treffer für „'+esc(q.value)+'“.</p></li>':'');
    }
    q.addEventListener('input',such);such();return;
  }
  if(offen==='konto'){
    T.textContent='Kundenkonto';
    I.innerHTML='<div class="tvp-leer"><p>Anmelden, Bestellungen und Adressen ansehen: Das Kundenkonto läuft nach dem Livegang über Shopify, mit denselben Zugangsdaten wie im bisherigen Shop.</p><p class="tvp-hinweis">In der Vorschau ist keine Anmeldung möglich.</p></div>';
  }
}

pan.addEventListener('click',e=>{
  const m=e.target.closest('.tvp-menge button');
  if(m){const i=+m.parentElement.dataset.i;korb[i].n=Math.max(0,Math.min(999,korb[i].n+(+m.dataset.d)));if(!korb[i].n)korb.splice(i,1);sichern();male();return}
  const w=e.target.closest('.tvp-weg');
  if(w){if(w.dataset.h){merk=merk.filter(h=>h!==w.dataset.h)}else{korb.splice(+w.dataset.i,1)}sichern();male();return}
  const k=e.target.closest('.tvp-inkorb');if(k){lege(k.dataset.h,TVP[k.dataset.h].def||0,1);return}
  if(e.target.closest('.tvp-kasse')){const h=$('#tvpKasse',pan);h.hidden=false}
});

function sichern(){schreib('tv_korb',korb);schreib('tv_merk',merk);zaehler()}
function zaehler(){
  const n=korb.reduce((a,x)=>a+x.n,0);
  const setz=(b,v,leer)=>{v=String(v);if(b.textContent!==v)b.textContent=v;if(b.hidden!==leer)b.hidden=leer};
  $$('[data-tv="korb"] .ico-n').forEach(b=>setz(b,n>99?'99+':n,!n));
  $$('[data-tv="merkliste"] .ico-n').forEach(b=>setz(b,merk.length,!merk.length));
  $$('[data-merk]').forEach(b=>{const an=merk.includes(b.dataset.merk);b.classList.toggle('an',an);b.setAttribute('aria-pressed',an);b.setAttribute('aria-label',an?'Von der Merkliste entfernen':'Auf die Merkliste')});
}
function lege(h,s,n){
  if(!TVP[h])return;const x=korb.find(y=>y.h===h&&y.s===s);
  if(x)x.n=Math.min(999,x.n+n);else korb.push({h,s,n});
  sichern();oeffne('korb');
}
function merke(h){merk=merk.includes(h)?merk.filter(x=>x!==h):[...merk,h];sichern()}

/* ---------- Kopf-Symbole ---------- */
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-tv]');if(b&&!b.closest('.tvp-pan')){e.preventDefault();const a=b.dataset.tv;offen===a?schliesse():oeffne(a);return}
  const h=e.target.closest('[data-merk]');if(h){e.preventDefault();e.stopPropagation();merke(h.dataset.merk);return}
});

/* ---------- Produktkarten ---------- */
function handleAus(href){if(!href)return null;if(/geschenkset\.html/.test(href))return 'geschenkpackung';const m=/[?&]p=([^&#]+)/.exec(href);return m&&TVP[decodeURIComponent(m[1])]?decodeURIComponent(m[1]):null}
function karten(){
  $$('.pcard, .rcard, .relgrid article').forEach(c=>{
    if(c.dataset.tvok)return;const a=c.querySelector('h3 a,a[href]');const h=handleAus(a&&a.getAttribute('href'));if(!h)return;c.dataset.tvok=1;
    const btn=[...c.querySelectorAll('button')].find(b=>/Warenkorb/.test(b.textContent));
    if(btn){btn.type='button';btn.addEventListener('click',e=>{e.preventDefault();lege(h,TVP[h].def||0,1)})}
    const ht=c.querySelector('.heart');
    if(ht){ht.dataset.merk=h;ht.setAttribute('role','button');ht.tabIndex=0;ht.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();merke(h)}})}
    const med=c.querySelector('.pcard-media')||c.firstElementChild;
    if(!ht&&med&&!c.querySelector('[data-merk]')){const m=document.createElement('button');m.type='button';m.className='tvp-herz';m.dataset.merk=h;m.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9C1 8.5 3 5 6.5 5 9 5 12 8 12 8s3-3 5.5-3C21 5 23 8.5 21.5 12 19 16.5 12 21 12 21z"/></svg>';getComputedStyle(med).position==='static'&&(med.style.position='relative');med.appendChild(m)}
  });zaehler();
}
karten();let kWart=0;
new MutationObserver(ms=>{
  if(kWart)return;
  const neu=ms.some(m=>[...m.addedNodes].some(n=>n.nodeType===1&&!n.closest('.tvp-pan')&&(n.matches('article,.pcard')||!!n.querySelector('article,.pcard'))));
  if(neu)kWart=requestAnimationFrame(()=>{kWart=0;karten()});
}).observe(document.body,{childList:true,subtree:true});

/* ---------- Produktseite ---------- */
const kauf=$('.buycta');
if(kauf){
  const name=($('.pdp h1')||{}).textContent||'';
  let h=null;try{if(typeof P!=='undefined'){h=Object.keys(TVP).find(k=>TVP[k].n===P.n)}}catch(_){}
  if(!h)h=Object.keys(TVP).find(k=>TVP[k].n.replace(/­/g,'')===name.trim().replace(/­/g,''));
  const btn=[...kauf.querySelectorAll('button')].find(b=>/Warenkorb/.test(b.textContent));
  if(h&&btn){
    btn.type='button';
    btn.addEventListener('click',e=>{e.preventDefault();
      const sel=$$('#psizes .bundle');const i=Math.max(0,sel.findIndex(x=>x.classList.contains('sel')));
      const q=$('#qtyN');const n=Math.max(1,Math.min(999,parseInt(q&&q.value,10)||1));
      lege(h,sel.length?i:(TVP[h].def||0),n)});
    const m=document.createElement('button');m.type='button';m.className='tvp-herz tvp-herz-pdp';m.dataset.merk=h;
    m.innerHTML='<svg viewBox="0 0 24 24"><path d="M12 21s-7-4.5-9.5-9C1 8.5 3 5 6.5 5 9 5 12 8 12 8s3-3 5.5-3C21 5 23 8.5 21.5 12 19 16.5 12 21 12 21z"/></svg>';
    btn.after(m);zaehler();
  }
}

/* ---------- Handy-Menue: Konto und Merkliste ergaenzen ---------- */
const mn=$('#mnav');
if(mn&&!mn.querySelector('[data-tv]')){mn.insertAdjacentHTML('beforeend','<button type="button" class="mnav-x" data-tv="merkliste">Merkliste</button><button type="button" class="mnav-x" data-tv="konto">Kundenkonto</button>')}

/* ---------- Newsletter ---------- */
const nl=$('#nlForm');
if(nl){nl.addEventListener('submit',e=>{e.preventDefault();const i=nl.querySelector('input[type=email]');let m=nl.parentElement.querySelector('.nl-msg');
  if(!m){m=document.createElement('p');m.className='nl-msg';m.setAttribute('role','status');nl.after(m)}
  if(!i.value.trim()||!i.checkValidity()){m.textContent='Bitte gib eine gültige E-Mail-Adresse ein.';m.classList.add('fehler');i.focus();return}
  m.classList.remove('fehler');m.textContent='Danke! Im Live-Shop kommt dein Code für 10 % auf die erste Bestellung per E-Mail. In der Vorschau wird die Anmeldung noch nicht gespeichert.';i.value=''})}
zaehler();
})();
