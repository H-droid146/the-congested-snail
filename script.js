const GAMES = [
 {id:"snake",title:"Snail Trail",category:"Arcade",description:"Collect dots and keep your trail clear.",symbol:"🐌",colors:["#30452c","#192a2a"],kind:"builtin",badge:"BUILT IN"},
 {id:"memory",title:"Match Stack",category:"Puzzle",description:"Flip cards and find every matching pair.",symbol:"✦",colors:["#4c3e7c","#24243e"],kind:"builtin",badge:"BUILT IN"},
 {id:"clickdash",title:"Click Dash",category:"Arcade",description:"Race the clock and see how many clicks you can score in 10 seconds.",symbol:"⚡",colors:["#e7a34a","#8b3c50"],kind:"builtin",badge:"BUILT IN"},
 {id:"reaction",title:"Reaction Rush",category:"Arcade",description:"Wait for the green signal, then test your reflexes.",symbol:"🟢",colors:["#36b77c","#174e4c"],kind:"builtin",badge:"BUILT IN"},
 {id:"tictactoe",title:"Tiny Tic-Tac-Toe",category:"Strategy",description:"A classic two-player game for one screen.",symbol:"⭕",colors:["#7d8fe5","#3e367c"],kind:"builtin",badge:"BUILT IN"},
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
 {id:"zen-xyz",title:"Zen XYZ",category:"Arcade",description:"Open your Zen XYZ Google Sites page.",symbol:"🕹️",colors:["#9a6fe8","#432c70"],kind:"external",url:"https://sites.google.com/view/zen-xyz/home",badge:"YOUR SITE"},
 {id:"chesscom",title:"Chess.com",category:"Strategy",description:"Play chess puzzles and matches against people or bots.",symbol:"♟️",colors:["#83b96d","#2c533d"],kind:"external",url:"https://www.chess.com/",badge:"STRATEGY"},
 {id:"tetrio",title:"TETR.IO",category:"Arcade",description:"A fast modern take on falling-block puzzle battles.",symbol:"🟦",colors:["#4c94e8","#292e68"],kind:"external",url:"https://tetr.io/",badge:"ARCADE"},
 {id:"garticphone",title:"Gartic Phone",category:"Multiplayer",description:"A silly drawing-and-guessing party game for groups.",symbol:"✏️",colors:["#ee8baf","#7e427a"],kind:"external",url:"https://garticphone.com/",badge:"MULTIPLAYER"},
 {id:"boardgamearena",title:"Board Game Arena",category:"Strategy",description:"Play digital versions of board games with friends.",symbol:"🎲",colors:["#d9ad62","#79532f"],kind:"external",url:"https://boardgamearena.com/",badge:"BOARD GAMES"},
 {id:"wordle",title:"Wordle",category:"Word",description:"Guess the five-letter word in six tries.",symbol:"🔤",colors:["#6b9c67","#35553d"],kind:"external",url:"https://www.nytimes.com/games/wordle/index.html",badge:"WORD"},
 {id:"solitaire",title:"Solitaire Bliss",category:"Casual",description:"Take a quiet break with classic solitaire card games.",symbol:"🃏",colors:["#438e72","#1e4b43"],kind:"external",url:"https://solitairebliss.com/",badge:"CASUAL"},
 {id:"jigsaw",title:"Jigsaw Explorer",category:"Puzzle",description:"Build jigsaw puzzles from a wide selection of pictures.",symbol:"🧩",colors:["#5f9fc4","#34527e"],kind:"external",url:"https://www.jigsawexplorer.com/",badge:"PUZZLE"},
 {id:"agar",title:"Agar.io",category:"Multiplayer",description:"Grow your cell and try to outlast other players.",symbol:"🟣",colors:["#8f79d8","#34316c"],kind:"external",url:"https://agar.io/",badge:"MULTIPLAYER"},
 {id:"scratch",title:"Scratch Games",category:"Casual",description:"Discover games and creations made by the Scratch community.",symbol:"🐱",colors:["#f4a64b","#b95840"],kind:"external",url:"https://scratch.mit.edu/explore/projects/games/",badge:"COMMUNITY"},
 {id:"doodle",title:"Google Doodle Games",category:"Casual",description:"Play fun interactive games from Google Doodles.",symbol:"🎨",colors:["#5c9fe6","#3b4c91"],kind:"external",url:"https://doodles.google/",badge:"CASUAL"},
 {id:"littlebigsnake",title:"Little Big Snake",category:"Multiplayer",description:"A colorful online snake game with progression and rivals.",symbol:"🐍",colors:["#6dbd69","#27543c"],kind:"external",url:"https://littlebigsnake.com/",badge:"MULTIPLAYER"},
 {id:"minigolf",title:"Mini Golf Games",category:"Sports",description:"Browse mini-golf and other sports games on Poki.",symbol:"⛳",colors:["#6dbb7b","#2d6856"],kind:"external",url:"https://poki.com/en/sports",badge:"SPORTS"}
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
let activeFilter="All";
let favorites=new Set(readStorage("snailFavorites",[]));
let recent=readStorage("snailRecent",[]);
let savedRequests=readStorage("snailRequests",[]);
let reactionTimeout=null;
let clickDashTimer=null;
let tttState=null;
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
 const names=recent.map(id=>GAMES.find(g=>g.id===id)?.title).filter(Boolean);
 $("#historySummary").textContent=names.length?`Recently played: ${names.slice(0,4).join(" · ")}${names.length>4?` · +${names.length-4} more`:""}`:"Your recent games will show up here.";
}
function setFilter(filter){activeFilter=filter;$$(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));renderGames();if(filter!=="All")$("#library").scrollIntoView({behavior:"smooth",block:"start"})}
function recordPlay(id){recent=[id,...recent.filter(x=>x!==id)].slice(0,12);saveStorage();renderGames()}
function openGame(id){
 const game=GAMES.find(g=>g.id===id);if(!game)return;
 recordPlay(id);
 if(game.kind==="external"){window.open(game.url,"_blank","noopener,noreferrer");return}
 activeGame=id;$("#gameModal").classList.remove("hidden");document.body.style.overflow="hidden";
 if(id==="snake")renderSnake();else if(id==="memory")renderMemory();else if(id==="clickdash")renderClickDash();else if(id==="reaction")renderReaction();else if(id==="tictactoe")renderTicTacToe();
}
function closeModal(){stopSnake();if(clickDashTimer){clearInterval(clickDashTimer);clickDashTimer=null}if(reactionTimeout){clearTimeout(reactionTimeout);reactionTimeout=null}$("#gameModal").classList.add("hidden");document.body.style.overflow="";activeGame=null}
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
function renderClickDash(){
 $("#modalTitle").textContent="Click Dash";$("#gameInstructions").textContent="Tap as fast as you can for 10 seconds.";
 $("#modalBody").innerHTML=`<div class="game-shell mini-game"><div class="game-toolbar"><span>TIME <strong id="dashTime">10</strong>s</span><span>CLICKS <strong id="dashScore">0</strong></span></div><button id="dashTarget" class="dash-target" type="button">START!</button><p id="dashMessage" class="game-help">Ready? Press start, then click quickly!</p><button id="dashAgain" class="button button-quiet" type="button">Restart</button></div>`;
 let score=0,started=false,left=10;const target=$("#dashTarget");
 const begin=()=>{if(started)return;started=true;target.textContent="CLICK ME!";target.classList.add("running");clickDashTimer=setInterval(()=>{left--;$("#dashTime").textContent=left;if(left<=0){clearInterval(clickDashTimer);clickDashTimer=null;started=false;target.disabled=true;target.textContent="TIME!";$("#dashMessage").textContent=`Final score: ${score} clicks. Try to beat it!`;target.classList.remove("running")}},1000)};
 target.addEventListener("click",()=>{if(target.disabled)return;if(!started){begin();return}score++;$("#dashScore").textContent=score});
 $("#dashAgain").addEventListener("click",()=>{if(clickDashTimer)clearInterval(clickDashTimer);clickDashTimer=null;renderClickDash()});
}
function renderReaction(){
 if(reactionTimeout){clearTimeout(reactionTimeout);reactionTimeout=null}
 $("#modalTitle").textContent="Reaction Rush";$("#gameInstructions").textContent="Wait for green, then tap once. False starts count!";
 $("#modalBody").innerHTML=`<div class="game-shell mini-game"><button id="reactionTarget" class="reaction-target" type="button">Tap to start</button><p id="reactionMessage" class="game-help">Wait until the button turns green.</p><button id="reactionAgain" class="button button-quiet" type="button">Try again</button></div>`;
 let phase="ready",startedAt=0;const target=$("#reactionTarget"),msg=$("#reactionMessage");
 const start=()=>{if(reactionTimeout)clearTimeout(reactionTimeout);phase="waiting";target.className="reaction-target waiting";target.textContent="Wait…";msg.textContent="Don't click until it turns green!";reactionTimeout=setTimeout(()=>{phase="go";startedAt=performance.now();target.className="reaction-target go";target.textContent="CLICK!"},1200+Math.random()*2600)};
 target.addEventListener("click",()=>{if(phase==="ready"){start();return}if(phase==="waiting"){clearTimeout(reactionTimeout);phase="ready";target.className="reaction-target";target.textContent="False start!";msg.textContent="Too soon! Tap to try again.";return}if(phase==="go"){const ms=Math.round(performance.now()-startedAt);phase="ready";target.className="reaction-target";target.textContent=`${ms} ms`;msg.textContent=ms<220?"Lightning fast!":ms<320?"Nice reflexes!":"Good try — can you go faster?"}});
 $("#reactionAgain").addEventListener("click",()=>renderReaction());
}
function renderTicTacToe(){
 $("#modalTitle").textContent="Tiny Tic-Tac-Toe";$("#gameInstructions").textContent="Two players, one device. X goes first.";
 $("#modalBody").innerHTML=`<div class="game-shell mini-game"><div id="tttStatus" class="game-help">X's turn</div><div id="tttBoard" class="ttt-board">${Array.from({length:9},(_,i)=>`<button class="ttt-cell" data-cell="${i}" aria-label="Cell ${i+1}"></button>`).join("")}</div><button id="tttReset" class="button button-quiet" type="button">New round</button></div>`;
 tttState={cells:Array(9).fill(""),turn:"X",done:false};const board=$("#tttBoard"),status=$("#tttStatus");
 const reset=()=>{tttState={cells:Array(9).fill(""),turn:"X",done:false};board.querySelectorAll("button").forEach(b=>{b.textContent="";b.disabled=false;b.classList.remove("winner")});status.textContent="X's turn"};
 const wins=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 board.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{const i=Number(b.dataset.cell),s=tttState;if(s.done||s.cells[i])return;s.cells[i]=s.turn;b.textContent=s.turn;b.classList.add(s.turn.toLowerCase());const win=wins.find(line=>line.every(n=>s.cells[n]===s.turn));if(win){s.done=true;win.forEach(n=>board.querySelector(`[data-cell="${n}"]`).classList.add("winner"));status.textContent=`${s.turn} wins!`;board.querySelectorAll("button").forEach(x=>x.disabled=true)}else if(s.cells.every(Boolean)){s.done=true;status.textContent="It's a draw!"}else{s.turn=s.turn==="X"?"O":"X";status.textContent=`${s.turn}'s turn`}}));
 $("#tttReset").addEventListener("click",reset);
}
function renderSavedRequests(){
 const holder=$("#savedRequests");if(!holder)return;
 holder.innerHTML=savedRequests.length?`<strong class="saved-heading">Saved on this device (${savedRequests.length})</strong>`+savedRequests.map((r,i)=>`<div class="saved-request"><div><strong>${escapeHtml(r.name)}</strong>${r.url?`<small>${escapeHtml(r.url)}</small>`:""}${r.reason?`<p>${escapeHtml(r.reason)}</p>`:""}</div><button type="button" class="text-button" data-delete-request="${i}" aria-label="Delete ${escapeHtml(r.name)}">Remove</button></div>`).join(""):"";
}
function copyText(text){
 if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(text).then(()=>{$("#requestStatus").textContent="Copied! Paste the suggestions wherever you want to send them."}).catch(()=>fallbackCopy(text))}else fallbackCopy(text)
}
function fallbackCopy(text){const area=document.createElement("textarea");area.value=text;document.body.appendChild(area);area.select();let ok=false;try{ok=document.execCommand("copy")}catch{}area.remove();$("#requestStatus").textContent=ok?"Copied! Paste the suggestions wherever you want to send them.":"Copy wasn't available here. You can select and copy the text from the saved suggestions."}

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
$("#randomGameButton").addEventListener("click",()=>{const pool=GAMES.filter(g=>activeFilter==="All"||g.category===activeFilter||activeFilter==="Favorites"&&favorites.has(g.id)||activeFilter==="Recent"&&recent.includes(g.id));const choices=pool.length?pool:GAMES;const pick=choices[Math.floor(Math.random()*choices.length)];openGame(pick.id)});
$("#clearHistory").addEventListener("click",()=>{recent=[];saveStorage();renderGames()});
$("#requestForm").addEventListener("submit",e=>{e.preventDefault();const name=$("#requestName").value.trim(),url=$("#requestUrl").value.trim(),reason=$("#requestReason").value.trim();if(!name)return;savedRequests.unshift({name,url,reason,date:new Date().toISOString()});savedRequests=savedRequests.slice(0,30);try{localStorage.setItem("snailRequests",JSON.stringify(savedRequests))}catch{};$("#requestForm").reset();$("#requestStatus").textContent="Suggestion saved in this browser. Use Copy saved suggestions to share it with the site owner.";renderSavedRequests()});
$("#copyRequests").addEventListener("click",()=>{const body=savedRequests.map((r,i)=>`${i+1}. ${r.name}${r.url?`\nLink: ${r.url}`:""}${r.reason?`\nWhy: ${r.reason}`:""}`).join("\n\n");if(!body){$("#requestStatus").textContent="No saved suggestions yet.";return}copyText(body)});
$("#savedRequests").addEventListener("click",e=>{const b=e.target.closest("[data-delete-request]");if(!b)return;savedRequests.splice(Number(b.dataset.deleteRequest),1);try{localStorage.setItem("snailRequests",JSON.stringify(savedRequests))}catch{}renderSavedRequests()});
try{if(localStorage.getItem("snailLight")==="1")document.body.classList.add("light")}catch{}
renderSavedRequests();
renderGames();
