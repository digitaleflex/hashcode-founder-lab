const slides=[
{c:"OPENING",t:"HASHCODE<br><span class='accent'>REBOOT</span>",s:"Ce qui vient maintenant est différent.",type:"title"},
{c:"QUESTION",t:"Nous avons<br>une question.",s:"Qu'est-ce qui fait réellement vivre une communauté ?",type:"title"},
{c:"LE MIROIR",t:"Des membres ?<br>Des groupes ?<br>Des projets ?",s:"Alors pourquoi cela ne suffit-il pas ?",type:"title"},
{c:"LE CONSTAT",t:"Une communauté peut être grande…",s:"…et silencieuse.",type:"title"},
{c:"LA VÉRITÉ",t:"Le problème n'était pas le potentiel.",s:"Le problème était <strong style='color:var(--lime)'>l'activation.</strong>",type:"title"},
{c:"LE CHOIX",t:"Continuer comme avant.",s:"Ou décider de changer le système.",type:"title"},
{c:"LE PROCESSUS",flow:["IDENTIFIER","ACTIVER","ENGAGER","STRUCTURER","COLLABORER","CONSTRUIRE"],type:"flow"},
{c:"LA VISION",stack:["APPRENDRE","EXPÉRIMENTER","COLLABORER","CONSTRUIRE"],type:"stack"},
{c:"TRANSFORMATION",stack:["INDIVIDUS","TALENTS","ÉQUIPES","PROJETS","IMPACT"],type:"stack"},
{c:"QUESTION",t:"Mais il reste une question.",s:"Qui fera vivre ce système ?",type:"title"},
{c:"RÉALITÉ",stack:["Un système ne fonctionne pas tout seul.","Une communauté ne s'anime pas toute seule.","Les projets ne se construisent pas tout seuls."],type:"stack"},
{c:"LE BESOIN",stack:["ORGANISER","CONNECTER","ACTIVER","COORDONNER","CONSTRUIRE"],type:"stack"},
{c:"REVEAL",t:"C'EST POUR CELA<br>QUE VOUS ÊTES ICI.",s:"",type:"title",network:true},
{c:"THE REVEAL",t:"HASHCODE<br><span class='accent'>FOUNDER LAB</span>",s:"The Builders Behind the Movement.",type:"title"},
{c:"LA TRANSITION",t:"Vous n'êtes plus seulement là pour participer.",s:"Vous allez progressivement apprendre à faire fonctionner le système.",type:"title"},
{c:"LE PARCOURS",stack:["OBSERVER","EXÉCUTER","PROPOSER","DIRIGER","TRANSMETTRE"],type:"stack"},
{c:"UN SYSTÈME",t:"Pas plus d'efforts désorganisés.",s:"<strong style='color:var(--lime)'>Un meilleur système.</strong>",type:"title"},
{c:"OUTILS",stack:["NOTION — Penser & documenter","TODOIST — Exécuter","WHATSAPP — Communiquer","GITHUB — Collaborer","REBOOT — Accueillir","WORKSHOPS — Apprendre"],type:"stack"},
{c:"ROADMAP",flow:["REBOOT","OPERATIONS","AUTONOMY","BUILD"],type:"flow"},
{c:"PHASE 01",t:"REBOOT",s:"Identifier. Activer. Construire le noyau.",type:"title"},
{c:"PHASE 02",t:"OPERATIONS",s:"Documenter. Former. Organiser.",type:"title"},
{c:"PHASE 03",t:"AUTONOMY",s:"Responsabiliser. Coordonner. Diriger.",type:"title"},
{c:"PHASE 04",stack:["COMMUNAUTÉ","ÉQUIPES","PROJETS","PRODUITS","IMPACT"],type:"stack"},
{c:"INTERACTION",t:"Quel rôle voulez-vous apprendre à jouer ?",s:"Organisation · Communication · Animation · Tech · Operations",type:"title"},
{c:"FINAL",t:"HashCode n'a pas besoin de plus de spectateurs.",s:"",type:"title"},
{c:"FINAL",t:"HashCode a besoin de <span class='accent'>bâtisseurs.</span>",s:"",type:"title"},
{c:"NOW",t:"THE REBOOT<br>HAS STARTED.",s:"<strong style='color:var(--lime)'>NOW, WE BUILD.</strong>",type:"title",network:true}
];
let index=0,step=0;const deck=document.querySelector('#deck'),counter=document.querySelector('#counter'),chapter=document.querySelector('#chapter'),bar=document.querySelector('#progressFill');
function render(){deck.innerHTML=slides.map((x,i)=>{let body=x.type==='flow'?'<div class="flow">'+x.flow.map((v,j)=>'<span class="flowItem" data-n="'+j+'">'+v+'</span>'+(j<x.flow.length-1?'<b class="arrow">→</b>':'')).join('')+'</div>':x.type==='stack'?'<div class="stack">'+x.stack.map((v,j)=>'<div class="stackItem" data-n="'+j+'">'+v+'</div>').join('')+'</div>':'<h1 class="title">'+x.t+'</h1><div class="subtitle">'+x.s+'</div>';return '<section class="slide '+(i===index?'active':'')+' '+(x.network?'flash':'')+'">'+(x.network?'<div class="network"></div>':'')+'<div class="kicker">'+x.c+'</div>'+body+'</section>'}).join('');counter.textContent=String(index+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');chapter.textContent=slides[index].c;bar.style.width=((index+1)/slides.length*100)+'%';applyStep();}
function applyStep(){const x=slides[index],els=[...document.querySelectorAll('.slide.active .flowItem,.slide.active .stackItem')];if(!els.length)return;els.forEach((e,i)=>e.classList.toggle('on',i<=step));}
function next(){const x=slides[index],n=x.flow?.length||x.stack?.length||1;if(step<n-1){step++;applyStep()}else if(index<slides.length-1){index++;step=0;render()}}
function prev(){if(step>0){step--;applyStep()}else if(index>0){index--;step=0;render();const x=slides[index];step=Math.max(0,(x.flow?.length||x.stack?.length||1)-1);applyStep()}}
addEventListener('keydown',e=>{if(['ArrowRight',' ','Enter'].includes(e.key)){e.preventDefault();next()}if(e.key==='ArrowLeft')prev();if(e.key.toLowerCase()==='f'){document.documentElement.requestFullscreen?.()}if(e.key==='Escape'&&document.fullscreenElement)document.exitFullscreen?.()});
addEventListener('click',e=>e.clientX>innerWidth*.25?next():prev());let sx=0;addEventListener('touchstart',e=>sx=e.changedTouches[0].clientX);addEventListener('touchend',e=>Math.abs(e.changedTouches[0].clientX-sx)>45&&(e.changedTouches[0].clientX<sx?next():prev()));render();