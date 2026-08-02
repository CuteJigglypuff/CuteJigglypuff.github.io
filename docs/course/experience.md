---
hide:
  - navigation
  - toc
---

<style>
.sem-card { border-radius:24px; border:1px solid rgba(180,200,80,0.12); background:rgba(242,240,210,0.6); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); box-shadow:0 2px 16px rgba(80,100,30,0.04),inset 0 1px 0 rgba(255,255,255,0.3); margin-bottom:14px; transition:all .3s ease; }
.sem-card:hover { border-color:rgba(180,200,80,0.22); }

.sem-toggle { display:none; }
.sem-toggle + .sem-header { display:flex; align-items:center; gap:14px; padding:34px 28px; cursor:pointer; border-radius:24px; }
.sem-toggle ~ .sem-body { display:none; }
.sem-toggle:checked ~ .sem-body { display:block; border-top:1px solid rgba(180,200,80,0.08); padding:6px 20px 16px; }
.sem-toggle:checked + .sem-header { border-radius:24px 24px 14px 14px; }

.sem-header .sem-icon { font-size:30px; color:rgba(140,160,40,0.65); text-shadow:0 0 16px rgba(160,180,60,0.25); width:36px; text-align:center; flex-shrink:0; }
.sem-header .sem-info { flex:1; min-width:180px; }
.sem-header .sem-title { font-family:'Ma Shan Zheng',cursive; font-size:1.5rem; color:#4a5a28; }
.sem-header .sem-sub { font-size:0.88rem; color:#8a9a6a; margin-top:2px; }
.sem-header .arrow { margin-left:auto; transition:transform .3s; font-size:0.9rem; color:#a0b070; }
.sem-toggle:checked + .sem-header .arrow { transform:rotate(180deg); }

.course-link { display:flex; align-items:center; gap:14px; padding:12px 14px; border-radius:14px; text-decoration:none; color:#4a5a28; transition:all .25s ease; margin-bottom:6px; flex-wrap:wrap; border:1px solid transparent; }
.course-link:hover { background:rgba(180,200,80,0.1); border-color:rgba(140,160,40,0.18); }
.course-link .c-icon { font-size:22px; color:rgba(140,160,40,0.55); width:26px; text-align:center; flex-shrink:0; }
.course-link .c-info { flex:1; min-width:150px; }
.course-link .c-name { font-size:1.15rem; font-weight:700; color:#3a4a28; }
.course-link .c-teacher { font-size:0.85rem; color:#8a9a6a; margin-top:2px; }
.course-link .c-score { text-align:right; flex-shrink:0; }
.course-link .c-score-num { font-size:1.35rem; font-weight:800; color:#5a6a28; }
.course-link .c-score-gpa { font-size:0.9rem; font-weight:700; color:#8a9a4a; margin-top:1px; }

.transmission { text-align:center; padding:12px 0 8px; color:#b0c888; font-size:0.85rem; letter-spacing:0.04em; }
.transmission i { animation:twinkle2 2s ease-in-out infinite; }
@keyframes twinkle2{0%,100%{opacity:0.3}50%{opacity:1}}
</style>

<div class="page-wrap">
  <div class="section-header" style="margin-bottom:36px;">
    <h2>课程经验分享</h2>
    <div class="divider"></div>
    <p style="color:#8a9a6a;font-size:0.95rem;margin-top:12px;">按学期整理的课程经验与心得体会</p>
  </div>

  <div class="sem-card">
    <input type="checkbox" class="sem-toggle" id="sem1" checked>
    <label class="sem-header" for="sem1">
      <span class="sem-icon"><i class="fas fa-snowflake"></i></span>
      <span class="sem-info">
        <div class="sem-title">2025-2026 秋冬学期</div>
        <div class="sem-sub">大一上</div>
      </span>
      <span class="arrow"><i class="fas fa-chevron-down"></i></span>
    </label>
    <div class="sem-body">
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-person-military-rifle"></i></span>
        <span class="c-info"><div class="c-name">军训</div><div class="c-teacher">郑玲玲老师</div></span>
        <span class="c-score"><div class="c-score-num">89</div><div class="c-score-gpa">绩点 4.5</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-language"></i></span>
        <span class="c-info"><div class="c-name">大学英语Ⅲ</div><div class="c-teacher">陈伶俐老师</div></span>
        <span class="c-score"><div class="c-score-num">93</div><div class="c-score-gpa">绩点 4.8</div></span>
      </a>
      <a class="course-link" href="autumn-advanced-math/">
        <span class="c-icon"><i class="fas fa-square-root-alt"></i></span>
        <span class="c-info"><div class="c-name">高等数学</div><div class="c-teacher">叶和溪老师</div></span>
        <span class="c-score"><div class="c-score-num">90</div><div class="c-score-gpa">绩点 4.5</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-landmark"></i></span>
        <span class="c-info"><div class="c-name">中国近代史纲要</div><div class="c-teacher">赵文心老师</div></span>
        <span class="c-score"><div class="c-score-num">95</div><div class="c-score-gpa">绩点 5.0</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-heart"></i></span>
        <span class="c-info"><div class="c-name">思想道德与法治</div><div class="c-teacher">周钰珊 / 杜锦佩老师</div></span>
        <span class="c-score"><div class="c-score-num">91</div><div class="c-score-gpa">绩点 4.5</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-shield-haltered"></i></span>
        <span class="c-info"><div class="c-name">军事理论</div><div class="c-teacher">郑纪达老师</div></span>
        <span class="c-score"><div class="c-score-num">86</div><div class="c-score-gpa">绩点 4.2</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-code"></i></span>
        <span class="c-info"><div class="c-name">C语言程序设计</div><div class="c-teacher">肖少拥老师</div></span>
        <span class="c-score"><div class="c-score-num">88</div><div class="c-score-gpa">绩点 4.2</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-seedling"></i></span>
        <span class="c-info"><div class="c-name">农事劳动实践</div><div class="c-teacher">金蓉老师</div></span>
        <span class="c-score"><div class="c-score-num">90</div><div class="c-score-gpa">绩点 4.5</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-bug"></i></span>
        <span class="c-info"><div class="c-name">仿生学导论</div><div class="c-teacher">柏浩老师</div></span>
        <span class="c-score"><div class="c-score-num">91</div><div class="c-score-gpa">绩点 4.5</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-dna"></i></span>
        <span class="c-info"><div class="c-name">生命科学导论</div><div class="c-teacher">梁爽 / 史锋老师</div></span>
        <span class="c-score"><div class="c-score-num">86</div><div class="c-score-gpa">绩点 4.2</div></span>
      </a>
      <a class="course-link" href="#">
        <span class="c-icon"><i class="fas fa-table-tennis"></i></span>
        <span class="c-info"><div class="c-name">乒乓球（初级）</div><div class="c-teacher">张亚卓老师</div></span>
        <span class="c-score"><div class="c-score-num">100</div><div class="c-score-gpa">绩点 5.0</div></span>
      </a>
      <div class="transmission"><i class="fas fa-satellite"></i> 更多课程经验正在星际传输中...</div>
    </div>
  </div>

  <div class="sem-card">
    <input type="checkbox" class="sem-toggle" id="sem2">
    <label class="sem-header" for="sem2">
      <span class="sem-icon"><i class="fas fa-leaf"></i></span>
      <span class="sem-info">
        <div class="sem-title">2025-2026 春夏学期</div>
        <div class="sem-sub">大一下</div>
      </span>
      <span class="arrow"><i class="fas fa-chevron-down"></i></span>
    </label>
    <div class="sem-body">
      <a class="course-link" href="spring-civil-law/">
        <span class="c-icon"><i class="fas fa-balance-scale"></i></span>
        <span class="c-info">
          <div class="c-name">民法总论</div>
          <div class="c-teacher">陆家豪老师</div>
        </span>
        <span class="c-score">
          <div class="c-score-num">96</div>
          <div class="c-score-gpa">绩点 5.0</div>
        </span>
      </a>
      <a class="course-link" href="spring-linear-algebra/">
        <span class="c-icon"><i class="fas fa-table"></i></span>
        <span class="c-info">
          <div class="c-name">线性代数</div>
          <div class="c-teacher">待补充</div>
        </span>
        <span class="c-score">
          <div class="c-score-num">--</div>
          <div class="c-score-gpa">绩点 --</div>
        </span>
      </a>
      <div class="transmission"><i class="fas fa-satellite"></i> 更多课程经验正在星际传输中...</div>
    </div>
  </div>

  <div class="end-section">
    <div class="end-line"></div>
    <span class="end-text">··· 未完待续 ···</span>
    <div class="end-line"></div>
  </div>
</div>
