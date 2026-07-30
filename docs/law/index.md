---
hide:
  - navigation
  - toc
---

<style>
.road-card { border-radius:24px; border:1px solid rgba(180,200,80,0.12); background:rgba(242,240,210,0.6); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); box-shadow:0 2px 16px rgba(80,100,30,0.04),inset 0 1px 0 rgba(255,255,255,0.3); margin-bottom:14px; transition:all .3s ease; }
.road-card:hover { border-color:rgba(180,200,80,0.22); }
.road-toggle { display:none; }
.road-toggle + .road-header { display:flex; align-items:center; gap:14px; padding:30px 28px; cursor:pointer; border-radius:24px; }
.road-toggle ~ .road-body { display:none; }
.road-toggle:checked ~ .road-body { display:block; border-top:1px solid rgba(180,200,80,0.08); padding:18px 28px 22px; }
.road-toggle:checked + .road-header { border-radius:24px 24px 14px 14px; }
.road-header .r-icon { font-size:28px; color:rgba(140,160,40,0.65); text-shadow:0 0 14px rgba(160,180,60,0.2); width:34px; text-align:center; flex-shrink:0; }
.road-header .r-info { flex:1; }
.road-header .r-title { font-family:'Ma Shan Zheng',cursive; font-size:1.4rem; color:#4a5a28; }
.road-header .r-sub { font-size:0.85rem; color:#8a9a6a; margin-top:2px; }
.road-header .r-arrow { margin-left:auto; transition:transform .3s; font-size:0.9rem; color:#a0b070; }
.road-toggle:checked + .road-header .r-arrow { transform:rotate(180deg); }
.road-body p { font-family:'Noto Serif SC',serif; font-size:0.95rem; color:#6a5a3a; line-height:1.85; }
</style>

<div class="page-wrap">
  <div class="section-header" style="margin-bottom:36px;">
    <h2>法学</h2>
    <div class="divider"></div>
    <p style="color:#8a9a6a;font-size:0.95rem;margin-top:12px;">记录一位法学生的扎根与求索</p>
  </div>

  <div class="road-card">
    <input type="checkbox" class="road-toggle" id="l1">
    <label class="road-header" for="l1">
      <span class="r-icon"><i class="fas fa-trophy"></i></span>
      <span class="r-info"><div class="r-title">学术竞赛</div><div class="r-sub">模拟法庭、辩论赛等</div></span>
      <span class="r-arrow"><i class="fas fa-chevron-down"></i></span>
    </label>
    <div class="road-body"><p>（在这里记录你参加的学术竞赛经历，打开 C:\Users\13416\docs\law\index.md 即可修改。）</p></div>
  </div>

  <div class="road-card">
    <input type="checkbox" class="road-toggle" id="l2">
    <label class="road-header" for="l2">
      <span class="r-icon"><i class="fas fa-flask"></i></span>
      <span class="r-info"><div class="r-title">科研训练</div><div class="r-sub">课题研究与学术写作</div></span>
      <span class="r-arrow"><i class="fas fa-chevron-down"></i></span>
    </label>
    <div class="road-body"><p>（在这里记录你的科研训练经历。）</p></div>
  </div>

  <div class="road-card">
    <input type="checkbox" class="road-toggle" id="l3">
    <label class="road-header" for="l3">
      <span class="r-icon"><i class="fas fa-compass"></i></span>
      <span class="r-info"><div class="r-title">其他航道</div><div class="r-sub">法律之路的更多可能</div></span>
      <span class="r-arrow"><i class="fas fa-chevron-down"></i></span>
    </label>
    <div class="road-body"><p>（在这里记录其他法学相关经历。）</p></div>
  </div>

  <div class="end-section">
    <div class="end-line"></div>
    <span class="end-text">··· 未完待续 ···</span>
    <div class="end-line"></div>
  </div>
</div>
