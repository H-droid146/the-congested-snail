const GAMES = [
 {id:"snake",title:"Snail Trail",category:"Arcade",description:"Collect dots and keep your trail clear.",symbol:"🐌",colors:["#30452c","#192a2a"],kind:"builtin",badge:"BUILT IN"},
 {id:"memory",title:"Match Stack",category:"Puzzle",description:"Flip cards and find every matching pair.",symbol:"✦",colors:["#4c3e7c","#24243e"],kind:"builtin",badge:"BUILT IN"},
 {id:"poki",title:"Poki Game Library",category:"Arcade",description:"A big collection of casual browser games.",symbol:"🟡",colors:["#f9c846","#e96954"],kind:"external",url:"https://poki.com/",badge:"WEB"},
 {id:"crazy",title:"CrazyGames",category:"Action",description:"Explore action, 3D, and multiplayer games.",symbol:"🎮",colors:["#1ebda2","#165a65"],kind:"external",url:"https://www.crazygames.com/",badge:"WEB"},
 {id:"coolmath",title:"Coolmath Games",category:"Puzzle",description:"Puzzles, logic games, and clever challenges.",symbol:"🧩",colors:["#2985c5","#203f8a"],kind:"external",url:"https://www.coolmathgames.com/",badge:"WEB"},
 {id:"itch",title:"itch.io HTML5",category:"Strategy",description:"Independent games playable in your browser.",symbol:"🎨",colors:["#e65b67","#7d304d"],kind:"external",url:"https://itch.io/games/html5",badge:"INDIE"},
 {id:"chess",title:"Lichess",category:"Strategy",description:"Play chess, practice tactics, and improve.",symbol:"♞",colors:["#71956a","#2d493b"],kind:"external",url:"https://lichess.org/",badge:"STRATEGY"},
 {id:"geoguessr",title:"GeoGuessr",category:"Puzzle",description:"Use clues from the world to guess locations.",symbol:"🌍",colors:["#4a9bb6","#27577a"],kind:"external",url:"https://www.geoguessr.com/",badge:"PUZZLE"},
 {id:"littlealchemy",title:"Little Alchemy 2",category:"Puzzle",description:"Combine elements to discover new things.",symbol:"⚗️",colors:["#8b77c5","#4b3c7d"],kind:"external",url:"https://littlealchemy2.com/",badge:"PUZZLE"},
 {id:"shellshock",title:"Shell Shockers",category:"Action",description:"Egg-themed online arena shooter.",symbol:"🥚",colors:["#d6a347","#7f4b2c"],kind:"external",url:"https://shellshock.io/",badge:"ACTION"},
 {id:"drift",title:"Drift Hunters",category:"Racing",description:"Tune a car and practice your drifting.",symbol:"🏎️",colors:["#bd6545","#60314a"],kind:"external",url:"https://www.drifthunters.com/",badge:"RACING"},
 {id:"2048",title:"2048",category:"Puzzle",description:"Slide numbered tiles and combine them.",symbol:"🔢",colors:["#d6a45e","#8d5d36"],kind:"external",url:"https://play2048.co/",badge:"PUZZLE"},
 {id:"school-chat",title:"Chat",category:"Strategy",description:"Open the Google Sites page you use at school.",symbol:"💬",colors:["#4b8bba","#273b70"],kind:"external",url:"https://sites.google.com/students.chccs.k12.nc.us/chat?pli=1&authuser=0",badge:"YOUR SITE"},
 {id:"zen-xyz",title:"Zen XYZ",category:"Arcade",description:"Open your Zen XYZ Google Sites page.",symbol:"🕹️",colors:["#9a6fe8","#432c70"],kind:"external",url:"https://sites.google.com/view/zen-xyz/home",badge:"YOUR SITE"}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let activeFilter="All";
let favorites=new Set(readStorage("snailFavorites",[]));
let recent=readStorage("snailRecent",[]);
let activeGame=null;
let snakeTimer=null;
let snakeState=null;
let memoryState=null;

function readStorage(key,fallback){try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}}
function saveStorage(){try{localStorage.setItem("snailFavorites",JSON.stringify([...favorites]));localStorage.setItem("snailRecent",JSON.stringify(recent))}catch{}}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function coverStyle(g){return `background:radial-gradient(circle at 30% 20%,${g.colors[0]},${g.colors[1]} 80%)`}
function renderGames(){
 const query=$("#searchInput").value.trim().toLowerCase();
 let list=GAMES.filter(g=>{
  const matchesQuery=[g.title,g.category,g.description].join(" ").toLowerCase().includes(query);
  const matchesFilter=activeFilter==="All"||g.category===activeFilter||(activeFilter==="Favorites"&&favorites.has(g.id))||(activeFilter==="Recent"&&recent.includes(g.id));
  return matchesQuery&&matchesFilter;
 });
 $("#gameGrid").innerHTML=list.map(g=>`<article class="game-card">
  <div class="game-cover" style="${coverStyle(g)}"><span class="cover-symbol">${g.symbol}</span><span class="cover-badge">${g.badge}</span><button class="favorite-button ${favorites.has(g.id)?"favorited":""}" data-fav="${g.id}" aria-label="${favorites.has(g.id)?"Remove":"Add"} ${escapeHtml(g.title)} ${favorites.has(g.id)?"from":"to"} favorites">${favorites.has(g.id)?"♥":"♡"}</button></div>
  <div class="game-info"><h3>${escapeHtml(g.title)}</h3><p>${escapeHtml(g.description)}</p><div class="game-info-bottom"><span class="category-label">${g.category}</span><button class="play-link" data-play="${g.id}">${g.kind==="builtin"?"PLAY NOW →":"OPEN SITE ↗"}</button></div></div>
 </article>`).join("");
 $("#emptyState").classList.toggle("hidden",list.length>0);
 $("#gameGrid").classList.toggle("hidden",list.length===0);
 $("#resultsCount").textContent=`${list.length} ${list.length===1?"TITLE":"TITLES"}`;
 $("#gameCount").textContent=GAMES.length;
 $("#favoriteCount").textContent=favorites.size;
 $("#playedCount").textContent=recent.length;
}
function setFilter(filter){activeFilter=filter;$$(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));renderGames();if(filter!=="All")$("#library").scrollIntoView({behavior:"smooth",block:"start"})}
function recordPlay(id){recent=[id,...recent.filter(x=>x!==id)].slice(0,6);saveStorage();renderGames()}
function openGame(id){
 const game=GAMES.find(g=>g.id===id);if(!game)return;
 recordPlay(id);
 if(game.kind==="external"){window.open(game.url,"_blank","noopener,noreferrer");return}
 activeGame=id;$("#gameModal").classList.remove("hidden");document.body.style.overflow="hidden";
 if(id==="snake")renderSnake();if(id==="memory")renderMemory();
}
function closeModal(){stopSnake();$("#gameModal").classList.add("hidden");document.body.style.overflow="";activeGame=null}
function stopSnake(){if(snakeTimer){clearInterval(snakeTimer);snakeTimer=null}}
function renderSnake(){
 $("#modalTitle").textContent="Snail Trail";
 $("#gameInstructions").textContent="Use arrow keys or WASD. On touch screens, use the buttons.";
 $("#modalBody").innerHTML=`<div class="game-shell"><div class="game-toolbar"><span>SCORE <strong id="snakeScore">0</strong></span><span id="snakeStatus">READY</span><button id="snakeRestart">Restart</button></div><canvas id="snakeCanvas" class="snake-canvas" width="400" height="400" aria-label="Snail Trail game board"></canvas><div class="game-controls"><button data-dir="up">↑</button></div><div class="game-controls"><button data-dir="left">←</button><button data-dir="down">↓</button><button data-dir="right">→</button></div><div class="game-help">Collect the glowing dots. Don't hit the walls or your own trail.</div></div>`;
 $("#snakeRestart").addEventListener("click",startSnake);
 $$("[data-dir]").forEach(b=>b.addEventListener("click",()=>setSnakeDirection(b.dataset.dir)));
 startSnake();
}
function startSnake(){
 stopSnake();const canvas=$("#snakeCanvas");if(!canvas)return;
 snakeState={body:[{x:8,y:10},{x:7,y:10},{x:6,y:10}],dir:{x:1,y:0},next:{x:1,y:0},food:{x:14,y:10},score:0,over:false};
 $("#snakeScore").textContent="0";$("#snakeStatus").textContent="PLAYING";drawSnake();
 snakeTimer=setInterval(tickSnake,125);
}
function setSnakeDirection(dir){
 if(!snakeState||snakeState.over)return;const dirs={up:{x:0,y:-1},down:{x:0,y:1},left:{x:-1,y:0},right:{x:1,y:0}};
 const n=dirs[dir];if(n&&!(n.x===-snakeState.dir.x&&n.y===-snakeState.dir.y))snakeState.next=n;
}
function tickSnake(){
 const s=snakeState;if(!s||s.over)return;s.dir=s.next;
 const head={x:s.body[0].x+s.dir.x,y:s.body[0].y+s.dir.y};
 if(head.x<0||head.y<0||head.x>=20||head.y>=20||s.body.some(p=>p.x===head.x&&p.y===head.y)){s.over=true;stopSnake();$("#snakeStatus").textContent="GAME OVER — RESTART";drawSnake();return}
 s.body.unshift(head);
 if(head.x===s.food.x&&head.y===s.food.y){s.score++;$("#snakeScore").textContent=s.score;s.food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)};while(s.body.some(p=>p.x===s.food.x&&p.y===s.food.y))s.food={x:Math.floor(Math.random()*20),y:Math.floor(Math.random()*20)}}
 else s.body.pop();drawSnake();
}
function drawSnake(){
 const c=$("#snakeCanvas");if(!c||!snakeState)return;const ctx=c.getContext("2d"),s=snakeState,cell=20;
 ctx.fillStyle="#111b20";ctx.fillRect(0,0,400,400);ctx.strokeStyle="#26372e";ctx.lineWidth=.5;
 for(let i=0;i<=20;i++){ctx.beginPath();ctx.moveTo(i*cell,0);ctx.lineTo(i*cell,400);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i*cell);ctx.lineTo(400,i*cell);ctx.stroke()}
 ctx.fillStyle="#ffb16d";ctx.shadowColor="#ffb16d";ctx.shadowBlur=12;ctx.beginPath();ctx.arc(s.food.x*cell+10,s.food.y*cell+10,6,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
 s.body.forEach((p,i)=>{ctx.fillStyle=i===0?"#d5ff9a":`rgba(157,220,105,${Math.max(.35,1-i*.06)})`;ctx.beginPath();ctx.roundRect(p.x*cell+2,p.y*cell+2,cell-4,cell-4,5);ctx.fill()});
 if(s.over){ctx.fillStyle="#07100dcc";ctx.fillRect(0,0,400,400);ctx.fillStyle="#f2f5f7";ctx.textAlign="center";ctx.font="bold 25px Manrope, sans-serif";ctx.fillText("TRAIL ENDED",200,190);ctx.font="14px Manrope, sans-serif";ctx.fillText(`Score: ${s.score} — try again!`,200,220)}
}
const icons=["✦","☾","◆","●","☀","♣","♥","★"];
function renderMemory(){
 $("#modalTitle").textContent="Match Stack";$("#gameInstructions").textContent="Tap two cards to find a pair. Match all eight pairs.";
 $("#modalBody").innerHTML=`<div class="game-shell"><div class="game-toolbar"><span>MOVES <strong id="memoryMoves">0</strong></span><span>PAIRS <strong id="memoryPairs">0/8</strong></span><button id="memoryRestart">Shuffle</button></div><div id="memoryBoard" class="memory-board"></div><div id="memoryWin" class="win-message"></div><div class="game-help">Find all eight pairs with as few moves as possible.</div></div>`;
 $("#memoryRestart").addEventListener("click",startMemory);startMemory();
}
function startMemory(){
 const deck=[...icons,...icons].sort(()=>Math.random()-.5);
 memoryState={deck,opened:[],matched:new Set(),moves:0,lock:false};
 $("#memoryMoves").textContent="0";$("#memoryPairs").textContent="0/8";$("#memoryWin").textContent="";
 $("#memoryBoard").innerHTML=deck.map((v,i)=>`<button class="memory-tile" data-card="${i}" aria-label="Hidden card ${i+1}">?</button>`).join("");
 $$(".memory-tile").forEach(b=>b.addEventListener("click",()=>flipMemory(Number(b.dataset.card))));
}
function flipMemory(i){
 const s=memoryState;if(!s||s.lock||s.opened.includes(i)||s.matched.has(i))return;
 s.opened.push(i);paintMemoryTile(i);
 if(s.opened.length===2){s.moves++;$("#memoryMoves").textContent=s.moves;
  const [a,b]=s.opened;
  if(s.deck[a]===s.deck[b]){s.matched.add(a);s.matched.add(b);s.opened=[];paintMemoryTile(a);paintMemoryTile(b);$("#memoryPairs").textContent=`${s.matched.size/2}/8`;if(s.matched.size===16)$("#memoryWin").textContent=`Nice work! You cleared the board in ${s.moves} moves.`}
  else{s.lock=true;setTimeout(()=>{s.opened.forEach(j=>paintMemoryTile(j));s.opened=[];s.lock=false},700)}
 }
}
function paintMemoryTile(i){const b=$(`[data-card="${i}"]`);if(!b||!memoryState)return;const shown=memoryState.opened.includes(i)||memoryState.matched.has(i);b.textContent=shown?memoryState.deck[i]:"?";b.classList.toggle("revealed",shown&&!memoryState.matched.has(i));b.classList.toggle("matched",memoryState.matched.has(i));b.setAttribute("aria-label",shown?`Card ${memoryState.deck[i]}`:`Hidden card ${i+1}`)}
document.addEventListener("click",e=>{
 const fav=e.target.closest("[data-fav]");if(fav){const id=fav.dataset.fav;favorites.has(id)?favorites.delete(id):favorites.add(id);saveStorage();renderGames();return}
 const play=e.target.closest("[data-play]");if(play){openGame(play.dataset.play);return}
 const open=e.target.closest("[data-open-game]");if(open){openGame(open.dataset.openGame);return}
 const quick=e.target.closest("[data-quick]");if(quick){setFilter(quick.dataset.quick);return}
 if(e.target.closest("[data-close-modal]"))closeModal();
});
$("#searchInput").addEventListener("input",renderGames);
$("#filterRow").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(b)setFilter(b.dataset.filter)});
$("#resetFilters").addEventListener("click",()=>{$("#searchInput").value="";setFilter("All")});
$("#themeButton").addEventListener("click",()=>{document.body.classList.toggle("light");try{localStorage.setItem("snailLight",document.body.classList.contains("light")?"1":"0")}catch{}});
try{if(localStorage.getItem("snailLight")==="1")document.body.classList.add("light")}catch{}
document.addEventListener("keydown",e=>{
 if(e.key==="Escape"&&!$("#gameModal").classList.contains("hidden"))closeModal();
 if(e.key==="/"&&!["INPUT","TEXTAREA"].includes(document.activeElement.tagName)&&$("#gameModal").classList.contains("hidden")){e.preventDefault();$("#searchInput").focus()}
 if(activeGame==="snake"&&!$("#gameModal").classList.contains("hidden")){const map={ArrowUp:"up",w:"up",ArrowDown:"down",s:"down",ArrowLeft:"left",a:"left",ArrowRight:"right",d:"right"};if(map[e.key]){e.preventDefault();setSnakeDirection(map[e.key])}}
});
$("#backTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
renderGames();
