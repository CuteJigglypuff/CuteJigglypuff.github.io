---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<style>
.cal-wrap { max-width:720px; margin:0 auto; font-family:'Noto Serif SC',serif; }

.cal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; }
.cal-head button { background:rgba(140,160,40,0.08); border:1px solid rgba(140,160,40,0.2); color:#5a6a3a; padding:9px 22px; border-radius:22px; cursor:pointer; font-family:'Noto Serif SC',serif; font-size:0.92rem; transition:all .25s; }
.cal-head button:hover { background:rgba(140,160,40,0.16); border-color:rgba(140,160,40,0.4); color:#3a4a28; }
.cal-head h3 { margin:0; font-size:1.15rem; font-weight:400; color:#4a5a28; }

.cal-wdays { display:grid; grid-template-columns:repeat(7,1fr); text-align:center; font-weight:500; color:#a0b070; font-size:0.8rem; margin-bottom:8px; }

.cal-cells { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; }
.cal-cell { aspect-ratio:1; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:12px; cursor:pointer; font-size:0.92rem; position:relative; color:#5a6a3a; transition:all .2s; border:1px solid transparent; }
.cal-cell:hover { background:rgba(180,200,80,0.12); }
.cal-cell.today { font-weight:700; color:#7a8828; }
.cal-cell.dim { color:#c0c8a0; cursor:default; }
.cal-cell.pick { border-color:rgba(140,160,40,0.5); background:rgba(180,200,80,0.14); }
.cal-cell.dot::after { content:''; width:5px;height:5px;background:#7a8828;border-radius:50%;position:absolute;bottom:6px; }
.cal-cell.rose-mark::before { content:''; width:8px;height:8px;background:#d09088;border-radius:50%;position:absolute;top:6px;right:8px; }
.cal-cell.dot.rose-mark::before { right:16px; }

/* ===== 右侧面板分两栏 ===== */
.cal-bottom { display:flex; gap:20px; margin-top:24px; flex-wrap:wrap; }
.cal-bottom > div { flex:1; min-width:280px; }

.panel-box {
  background:rgba(180,200,80,0.06); border:1px solid rgba(140,160,40,0.14); border-radius:18px; padding:24px 26px;
}
.panel-box h4 { margin:0 0 16px 0; font-weight:400; color:#4a5a28; font-size:1rem; display:flex; align-items:center; gap:8px; }
.panel-box .count-badge { font-size:0.78rem; color:#8a9a6a; margin-left:auto; background:rgba(140,160,40,0.1); padding:2px 10px; border-radius:10px; }

.todo-row { display:flex; gap:10px; margin-bottom:14px; }
.todo-row input { flex:1; padding:10px 14px; background:rgba(242,240,210,0.7); border:1px solid rgba(140,160,40,0.18); border-radius:12px; color:#4a5a28; font-family:'Noto Serif SC',serif; font-size:0.9rem; }
.todo-row input::placeholder { color:#b0b888; }
.todo-row button { padding:10px 18px; background:linear-gradient(135deg,rgba(180,200,80,0.25),rgba(160,180,60,0.2)); color:#6a7828; border:1px solid rgba(140,160,40,0.28); border-radius:12px; cursor:pointer; transition:all .25s; font-family:'Noto Serif SC',serif; font-size:0.9rem; white-space:nowrap; }
.todo-row button:hover { background:linear-gradient(135deg,rgba(180,200,80,0.35),rgba(160,180,60,0.3)); }

.todo-items { list-style:none; padding:0; margin:0; }
.todo-items li { display:flex; align-items:center; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(160,180,80,0.08); gap:8px; }
.todo-items li label { display:flex; align-items:center; gap:10px; cursor:pointer; flex:1; color:#4a5a28; font-size:0.9rem; }
.todo-items li label .todo-text { flex:1; }
.todo-items li button { background:none; border:none; color:rgba(160,160,120,0.5); cursor:pointer; font-size:0.85rem; padding:2px 6px; transition:all .2s; border-radius:4px; }
.todo-items li button:hover { color:rgba(180,100,100,0.8); }
.todo-items li button.undo-btn:hover { color:rgba(120,160,60,0.8); }

/* 已完成区域 */
.done-list { opacity:0.7; }
.done-list .todo-items li label { text-decoration:line-through; color:#a0b070; }

/* 重要日子切换 */
.rose-toggle { margin-top:14px; padding-top:14px; border-top:1px solid rgba(160,180,80,0.1); }
.rose-toggle button { padding:9px 18px; border-radius:20px; cursor:pointer; font-size:0.86rem; background:rgba(180,200,80,0.08); border:1px solid rgba(140,160,40,0.18); color:#8a9a6a; transition:all .25s; font-family:'Noto Serif SC',serif; }
.rose-toggle button.on { background:rgba(210,150,150,0.22); border-color:rgba(210,150,150,0.4); color:#b87878; }
</style>

<div class="calendar-glass">
  <div class="cal-wrap">
    <!-- 日历本体 -->
    <div class="cal-head">
      <button onclick="prevMonth()"><i class="fas fa-chevron-left"></i> 上月</button>
      <h3 id="monthLabel"></h3>
      <button onclick="nextMonth()">下月 <i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="cal-wdays"><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div>
    <div class="cal-cells" id="calCells"></div>

    <!-- 下半部分：待办 + 已完成 -->
    <div class="cal-bottom">
      <!-- 左侧：待办 -->
      <div class="panel-box">
        <h4><i class="fas fa-list-check"></i> <span id="selLabel">点击日期查看</span> <span class="count-badge" id="pendingCount">0</span></h4>
        <div class="todo-row">
          <input type="text" id="todoInput" placeholder="添加待办..." onkeydown="if(event.key==='Enter')addTodo()"/>
          <button onclick="addTodo()"><i class="fas fa-plus"></i></button>
        </div>
        <ul class="todo-items" id="pendingList"></ul>
        <div class="rose-toggle"><button id="roseBtn" onclick="toggleRose()">🌹 标记为重要日子</button></div>
      </div>

      <!-- 右侧：已完成 -->
      <div class="panel-box done-list">
        <h4><i class="fas fa-check-double"></i> 已完成 <span class="count-badge" id="doneCount">0</span></h4>
        <ul class="todo-items" id="doneList"></ul>
      </div>
    </div>
  </div>
</div>

<div class="end-section">
  <div class="end-line"></div>
  <span class="end-text">··· 未完待续 ···</span>
  <div class="end-line"></div>
</div>

<script>
var TK='cal_todos_b613',IK='cal_stars_b613';
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
  var items=todos[sel]||[];
  var pending=[],done=[];
  items.forEach(function(t,i){
    (t.done?done:pending).push({idx:i,text:t.text});
  });

  var pl=document.getElementById('pendingList');
  pl.innerHTML='';
  pending.forEach(function(t){
    var li=document.createElement('li');
    li.innerHTML='<label onclick="toggleTodo('+t.idx+')"><input type="checkbox" style="accent-color:#7a8828"/> <span class="todo-text">'+esc(t.text)+'</span></label><button onclick="delTodo('+t.idx+')"><i class="fas fa-times"></i></button>';
    pl.appendChild(li);
  });
  document.getElementById('pendingCount').textContent=pending.length;

  var dl=document.getElementById('doneList');
  dl.innerHTML='';
  done.forEach(function(t){
    var li=document.createElement('li');
    li.innerHTML='<label onclick="toggleTodo('+t.idx+')"><input type="checkbox" checked style="accent-color:#7a8828"/> <span class="todo-text">'+esc(t.text)+'</span></label><button class="undo-btn" onclick="delTodo('+t.idx+')"><i class="fas fa-undo"></i></button>';
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
