---
hide:
  - navigation
  - toc
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<style>
.cal-container { max-width:700px; margin:0 auto; font-family:'Noto Serif SC',serif; }
.cal-head { display:flex; justify-content:space-between; align-items:center; margin-bottom:22px; }
.cal-head button {
  background:rgba(140,160,40,0.08); border:1px solid rgba(140,160,40,0.2);
  color:#5a6a3a; padding:9px 22px; border-radius:22px; cursor:pointer;
  font-family:'Noto Serif SC',serif; font-size:0.92rem; transition:all .25s;
}
.cal-head button:hover { background:rgba(140,160,40,0.16); border-color:rgba(140,160,40,0.4); color:#3a4a28; }
.cal-head h3 { margin:0; font-size:1.15rem; font-weight:400; color:#4a5a28; }
.cal-wdays { display:grid; grid-template-columns:repeat(7,1fr); text-align:center; font-weight:500; color:#a0b070; font-size:0.8rem; margin-bottom:8px; }
.cal-cells { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; }
.cal-cell {
  aspect-ratio:1; display:flex; flex-direction:column; align-items:center; justify-content:center;
  border-radius:12px; cursor:pointer; font-size:0.92rem; position:relative; color:#5a6a3a;
  transition:all .2s; border:1px solid transparent;
}
.cal-cell:hover { background:rgba(180,200,80,0.12); }
.cal-cell.today { font-weight:700; color:#7a8828; }
.cal-cell.dim { color:#c0c8a0; cursor:default; }
.cal-cell.pick { border-color:rgba(140,160,40,0.5); background:rgba(180,200,80,0.14); }
.cal-cell.dot::after { content:''; width:5px;height:5px;background:#7a8828;border-radius:50%;position:absolute;bottom:6px; }
.cal-cell.rose-mark::before { content:''; width:8px;height:8px;background:#d09088;border-radius:50%;position:absolute;top:6px;right:8px; }
.cal-cell.dot.rose-mark::before { right:16px; }

.cal-panel { margin-top:24px; background:rgba(180,200,80,0.06); border:1px solid rgba(140,160,40,0.14); border-radius:18px; padding:24px 26px; }
.cal-panel h4 { margin:0 0 16px 0; font-family:'Noto Serif SC',serif; font-weight:400; color:#4a5a28; font-size:1rem; }
.todo-row { display:flex; gap:12px; margin-bottom:16px; }
.todo-row input {
  flex:1; padding:11px 16px; background:rgba(242,240,210,0.7); border:1px solid rgba(140,160,40,0.18);
  border-radius:14px; color:#4a5a28; font-family:'Noto Serif SC',serif; font-size:0.92rem;
}
.todo-row input::placeholder { color:#b0b888; }
.todo-row button {
  padding:11px 20px; background:linear-gradient(135deg,rgba(180,200,80,0.25),rgba(160,180,60,0.2));
  color:#6a7828; border:1px solid rgba(140,160,40,0.28); border-radius:14px;
  cursor:pointer; transition:all .25s; font-family:'Noto Serif SC',serif; font-size:0.92rem;
}
.todo-row button:hover { background:linear-gradient(135deg,rgba(180,200,80,0.35),rgba(160,180,60,0.3)); }
.todo-items { list-style:none; padding:0; margin:0; }
.todo-items li { display:flex; align-items:center; justify-content:space-between; padding:11px 0; border-bottom:1px solid rgba(160,180,80,0.1); }
.todo-items li label { display:flex; align-items:center; gap:12px; cursor:pointer; flex:1; color:#4a5a28; font-family:'Noto Serif SC',serif; }
.todo-items li label.done { text-decoration:line-through; color:#b0b888; }
.todo-items li button { background:none; border:none; color:rgba(180,120,120,0.5); cursor:pointer; font-size:0.88rem; transition:color .2s; }
.todo-items li button:hover { color:rgba(180,120,120,0.8); }
.rose-toggle { margin-top:16px; padding-top:16px; border-top:1px solid rgba(160,180,80,0.12); }
.rose-toggle button {
  padding:10px 20px; border-radius:20px; cursor:pointer; font-size:0.88rem;
  background:rgba(180,200,80,0.08); border:1px solid rgba(140,160,40,0.18);
  color:#8a9a6a; transition:all .25s; font-family:'Noto Serif SC',serif;
}
.rose-toggle button.on { background:rgba(210,150,150,0.22); border-color:rgba(210,150,150,0.4); color:#b87878; }
</style>

<div class="calendar-glass">
  <div class="cal-container">
    <div class="cal-head">
      <button onclick="prevMonth()"><i class="fas fa-chevron-left"></i> 上月</button>
      <h3 id="monthLabel"></h3>
      <button onclick="nextMonth()">下月 <i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="cal-wdays"><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div>
    <div class="cal-cells" id="calCells"></div>
    <div class="cal-panel">
      <h4 id="selLabel"><i class="fas fa-calendar-day"></i> 点击日期查看</h4>
      <div class="todo-row">
        <input type="text" id="todoInput" placeholder="添加待办..." onkeydown="if(event.key==='Enter')addTodo()"/>
        <button onclick="addTodo()"><i class="fas fa-plus"></i> 添加</button>
      </div>
      <ul class="todo-items" id="todoList"></ul>
      <div class="rose-toggle"><button id="roseBtn" onclick="toggleRose()">🌹 标记为重要日子</button></div>
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
  var it=todos[sel]||[],l=document.getElementById('todoList'); l.innerHTML='';
  it.forEach(function(t,i){
    var li=document.createElement('li');
    li.innerHTML='<label class="'+(t.done?'done':'')+'" onclick="tg('+i+')"><input type="checkbox" '+(t.done?'checked':'')+' style="accent-color:#7a8828"/> '+esc(t.text)+'</label><button onclick="del('+i+')"><i class="fas fa-times"></i></button>';
    l.appendChild(li);
  });
  var b=document.getElementById('roseBtn');
  if(roses.has(sel)){b.className='on';b.innerHTML='🌹 已标记重要日子（点击取消）';}
  else{b.className='';b.innerHTML='🌹 标记为重要日子';}
}
function addTodo(){var v=document.getElementById('todoInput').value.trim();if(!v)return;if(!todos[sel])todos[sel]=[];todos[sel].push({text:v,done:false});sv();document.getElementById('todoInput').value='';rd()}
function tg(i){todos[sel][i].done=!todos[sel][i].done;sv();rd()}
function del(i){todos[sel].splice(i,1);sv();rd()}
function toggleRose(){if(roses.has(sel))roses.delete(sel);else roses.add(sel);sv();rd()}
function sv(){localStorage.setItem(TK,JSON.stringify(todos));localStorage.setItem(IK,JSON.stringify(Array.from(roses)))}
function prevMonth(){m--;if(m<0){m=11;y--}rd()}
function nextMonth(){m++;if(m>11){m=0;y++}rd()}
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')}
rd();
</script>
