---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<style>
.cal-inner { max-width:660px; margin:0 auto; font-family:'Noto Serif SC',serif; }
.cal-inner .cal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; }
.cal-inner .cal-head button { background:rgba(140,160,40,0.08); border:1px solid rgba(140,160,40,0.2); color:#5a6a3a; padding:8px 20px; border-radius:20px; cursor:pointer; font-family:'Noto Serif SC',serif; font-size:0.9rem; transition:all .25s; }
.cal-inner .cal-head button:hover { background:rgba(140,160,40,0.16); border-color:rgba(140,160,40,0.4); color:#3a4a28; }
.cal-inner .cal-head h3 { margin:0; font-size:1.1rem; font-weight:400; color:#4a5a28; }
.cal-inner .cal-wdays { display:grid; grid-template-columns:repeat(7,1fr); text-align:center; font-weight:500; color:#a0b070; font-size:0.78rem; margin-bottom:4px; }
.cal-inner .cal-cells { display:grid; grid-template-columns:repeat(7,1fr); gap:3px; }
.cal-inner .cal-cell { aspect-ratio:1; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:10px; cursor:pointer; font-size:0.92rem; position:relative; color:#5a6a3a; transition:all .2s; border:1px solid transparent; }
.cal-inner .cal-cell:hover { background:rgba(180,200,80,0.12); }
.cal-inner .cal-cell.today { font-weight:700; color:#7a8828; background:rgba(180,200,100,0.1); }
.cal-inner .cal-cell.dim { color:#c0c8a0; cursor:default; }
.cal-inner .cal-cell.pick { border-color:rgba(140,160,40,0.5); background:rgba(180,200,80,0.16); }
.cal-inner .cal-cell.dot::after { content:''; width:4px;height:4px;background:#7a8828;border-radius:50%;position:absolute;bottom:5px; }
.cal-inner .cal-cell.rose-mark::before { content:''; width:7px;height:7px;background:#d09088;border-radius:50%;position:absolute;top:5px;right:7px; }
.cal-inner .cal-cell.dot.rose-mark::before { right:14px; }

.todo-two-col { display:flex; gap:18px; flex-wrap:wrap; }
.todo-two-col > div { flex:1; min-width:260px; }
.todo-two-col h4 { margin:0 0 12px 0; font-weight:400; color:#4a5a28; font-size:1rem; display:flex; align-items:center; gap:8px; }
.todo-two-col .count-badge { font-size:0.75rem; color:#8a9a6a; margin-left:auto; background:rgba(140,160,40,0.1); padding:2px 10px; border-radius:10px; }

.todo-row { display:flex; gap:10px; margin-bottom:12px; }
.todo-row input { flex:1; padding:9px 12px; background:rgba(242,240,210,0.7); border:1px solid rgba(140,160,40,0.18); border-radius:12px; color:#4a5a28; font-family:'Noto Serif SC',serif; font-size:0.88rem; }
.todo-row input::placeholder { color:#b0b888; }
.todo-row button { padding:9px 16px; background:linear-gradient(135deg,rgba(180,200,80,0.25),rgba(160,180,60,0.2)); color:#6a7828; border:1px solid rgba(140,160,40,0.28); border-radius:12px; cursor:pointer; transition:all .25s; font-size:0.88rem; white-space:nowrap; }
.todo-row button:hover { background:linear-gradient(135deg,rgba(180,200,80,0.35),rgba(160,180,60,0.3)); }

.todo-items { list-style:none; padding:0; margin:0; }
.todo-items li { display:flex; align-items:center; justify-content:space-between; padding:9px 0; border-bottom:1px solid rgba(160,180,80,0.08); gap:6px; }
.todo-items li label { display:flex; align-items:center; gap:8px; cursor:pointer; flex:1; color:#4a5a28; font-size:0.88rem; overflow:hidden; }
.todo-items li label .todo-text { flex:1; overflow:hidden; text-overflow:ellipsis; }
.todo-items li .act-btn { background:none; border:none; color:rgba(160,160,120,0.5); cursor:pointer; font-size:0.82rem; padding:2px 5px; transition:all .2s; border-radius:4px; white-space:nowrap; }
.todo-items li .act-btn:hover { color:rgba(180,100,100,0.8); }
.todo-items li .act-btn.undo-btn:hover { color:rgba(120,160,60,0.8); }

.done-list { opacity:0.75; }
.done-list .todo-items li label { text-decoration:line-through; color:#a0b070; }

.rose-toggle { margin-top:12px; padding-top:12px; border-top:1px solid rgba(160,180,80,0.1); }
.rose-toggle button { padding:8px 16px; border-radius:18px; cursor:pointer; font-size:0.84rem; background:rgba(180,200,80,0.08); border:1px solid rgba(140,160,40,0.18); color:#8a9a6a; transition:all .25s; font-family:'Noto Serif SC',serif; }
.rose-toggle button.on { background:rgba(210,150,150,0.22); border-color:rgba(210,150,150,0.4); color:#b87878; }
</style>

<div class="page-wrap">
  <div class="page-panel" style="padding:28px 30px 18px;">
    <h2><i class="fas fa-calendar-days"></i> 日历</h2>
    <div class="cal-inner">
      <div class="cal-head">
        <button onclick="prevMonth()"><i class="fas fa-chevron-left"></i></button>
        <h3 id="monthLabel"></h3>
        <button onclick="nextMonth()"><i class="fas fa-chevron-right"></i></button>
      </div>
      <div class="cal-wdays"><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div>
      <div class="cal-cells" id="calCells"></div>
      <p style="text-align:center;margin:12px 0 0;color:#a0b070;font-size:0.82rem;" id="selLabel">点击日期开始编辑</p>
    </div>
  </div>

  <div class="todo-two-col" style="margin-top:0;">
    <div class="page-panel" style="padding:22px 24px;">
      <h4><i class="fas fa-list-check"></i> 待办 <span class="count-badge" id="pendingCount">0</span></h4>
      <div class="todo-row">
        <input type="text" id="todoInput" placeholder="添加待办..." onkeydown="if(event.key==='Enter')addTodo()"/>
        <button onclick="addTodo()"><i class="fas fa-plus"></i></button>
      </div>
      <ul class="todo-items" id="pendingList"></ul>
      <div class="rose-toggle"><button id="roseBtn" onclick="toggleRose()">🌹 标记为重要日子</button></div>
    </div>
    <div class="page-panel done-list" style="padding:22px 24px;">
      <h4><i class="fas fa-check-double"></i> 已完成 <span class="count-badge" id="doneCount">0</span></h4>
      <ul class="todo-items" id="doneList"></ul>
    </div>
  </div>
</div>

<div class="end-section">
  <div class="end-line"></div>
  <span class="end-text">··· 未完待续 ···</span>
  <div class="end-line"></div>
</div>

<script>
var TK='cal_todos_b613_v4',IK='cal_stars_b613_v4';
var now=new Date(),y=now.getFullYear(),m=now.getMonth(),sel=fmt(now);
var todos=JSON.parse(localStorage.getItem(TK)||'{}'),roses=new Set(JSON.parse(localStorage.getItem(IK)||'[]'));
function fmt(d){return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function rd(){
  document.getElementById('monthLabel').textContent=y+'年 '+(m+1)+'月';
  var fd=new Date(y,m,1),s=fd.getDay(),dim=new Date(y,m+1,0).getDate(),pd=new Date(y,m,0).getDate(),th=fmt(now),h='';
  for(var i=s-1;i>=0;i--) h+='<div class="cal-cell dim">'+(pd-i)+'</div>';
  for(var d=1;d<=dim;d++){
    var ds=y+'-'+String(m+1).padStart(2,'0')+'-'+String(d).padStart(2,'0'),c='cal-cell';
    if(ds===th) c+=' today'; if(ds===sel) c+=' pick';
    if(todos[ds]&&todos[ds].length) c+=' dot'; if(roses.has(ds)) c+=' rose-mark';
    h+='<div class="'+c+'" onclick="pick(\''+ds+'\')">'+d+'</div>';
  }
  var r=42-(s+dim); for(var d=1;d<=r;d++) h+='<div class="cal-cell dim">'+d+'</div>';
  document.getElementById('calCells').innerHTML=h; rp();
}
function pick(ds){sel=ds;rd()}
function rp(){
  var p=sel.split('-');
  document.getElementById('selLabel').innerHTML='<i class="fas fa-calendar-day"></i> '+p[0]+'年 '+parseInt(p[1])+'月 '+parseInt(p[2])+'日';
  var items=todos[sel]||[],pending=[],done=[];
  items.forEach(function(t,i){ (t.done?done:pending).push({idx:i,text:t.text}); });
  var pl=document.getElementById('pendingList');pl.innerHTML='';
  pending.forEach(function(t){
    var li=document.createElement('li');
    li.innerHTML='<label onclick="toggleTodo('+t.idx+')"><input type="checkbox" style="accent-color:#7a8828"/> <span class="todo-text">'+esc(t.text)+'</span></label><button class="act-btn" onclick="delTodo('+t.idx+')"><i class="fas fa-times"></i></button>';
    pl.appendChild(li);
  });
  document.getElementById('pendingCount').textContent=pending.length;
  var dl=document.getElementById('doneList');dl.innerHTML='';
  done.forEach(function(t){
    var li=document.createElement('li');
    li.innerHTML='<label onclick="toggleTodo('+t.idx+')"><input type="checkbox" checked style="accent-color:#7a8828"/> <span class="todo-text">'+esc(t.text)+'</span></label><button class="act-btn undo-btn" onclick="delTodo('+t.idx+')"><i class="fas fa-undo"></i></button>';
    dl.appendChild(li);
  });
  document.getElementById('doneCount').textContent=done.length;
  var b=document.getElementById('roseBtn');
  if(roses.has(sel)){b.className='on';b.innerHTML='🌹 已标记重要日子（点击取消）';}
  else{b.className='';b.innerHTML='🌹 标记为重要日子';}
}
function addTodo(){var v=document.getElementById('todoInput').value.trim();if(!v)return;if(!todos[sel])todos[sel]=[];todos[sel].push({text:v,done:false});sv();document.getElementById('todoInput').value='';rd()}
function toggleTodo(i){todos[sel][i].done=!todos[sel][i].done;sv();rd()}
function delTodo(i){todos[sel].splice(i,1);sv();rd()}
function toggleRose(){if(roses.has(sel))roses.delete(sel);else roses.add(sel);sv();rd()}
function sv(){localStorage.setItem(TK,JSON.stringify(todos));localStorage.setItem(IK,JSON.stringify(Array.from(roses)))}
function prevMonth(){m--;if(m<0){m=11;y--}rd()}
function nextMonth(){m++;if(m>11){m=0;y++}rd()}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
rd();
</script>
