
(function(){
  if(document.getElementById('elegantThemeStyle')) return;
  const style=document.createElement('style'); style.id='elegantThemeStyle';
  style.textContent=`
    :root{--g:#16845a;--g2:#0f6b49;--silver:#64748b;--ink:#172033;--muted:#64748b;--line:#e2e8f0;--card:#ffffff;--soft:#f5f8f7;--shadow:0 10px 30px rgba(15,23,42,.08)}
    *{box-sizing:border-box}
    body{background:linear-gradient(135deg,#f4f8f6 0%,#eef3f1 50%,#f8fafc 100%);color:var(--ink);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    button,input,select,textarea{font:inherit}
    button{border-radius:10px!important;border:1px solid transparent!important;transition:.2s ease;cursor:pointer}
    button:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(15,23,42,.10)}
    input,select,textarea{border:1px solid var(--line)!important;border-radius:10px!important;background:#fff!important;min-height:42px;padding:9px 12px!important;outline:none;transition:.2s}
    input:focus,select:focus,textarea:focus{border-color:#53a982!important;box-shadow:0 0 0 3px rgba(22,132,90,.10)}
    .hidden{display:none!important}
    .panel{background:rgba(255,255,255,.88)!important;border:1px solid rgba(226,232,240,.9)!important;border-radius:18px!important;box-shadow:var(--shadow)!important;padding:20px!important}
    .tab{background:#fff!important;color:#475569!important;border:1px solid #e2e8f0!important;font-weight:700!important;padding:10px 14px!important}
    .tab.active{background:linear-gradient(135deg,var(--g),var(--g2))!important;color:#fff!important;border-color:var(--g)!important;box-shadow:0 7px 18px rgba(22,132,90,.22)!important}
    .primary,.btn-primary{background:linear-gradient(135deg,var(--g),var(--g2))!important;color:#fff!important}
    .secondary{background:#eef3f1!important;color:#166b4c!important;border-color:#d7e5df!important}
    table{width:100%;border-collapse:separate!important;border-spacing:0!important;overflow:hidden;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 4px 15px rgba(15,23,42,.04)}
    th{background:#f1f6f4!important;color:#315447!important;font-size:12px;text-transform:uppercase;letter-spacing:.04em}
    th,td{padding:11px 12px!important;border-bottom:1px solid #edf1f0!important;text-align:left}
    tbody tr:hover{background:#f8fbfa!important}
    .badge{display:inline-flex;align-items:center;padding:5px 9px!important;border-radius:999px!important;background:#e7f5ee!important;color:#166b4c!important;font-weight:700;font-size:12px}
    #toast{border-radius:12px!important;background:#172033!important;color:#fff!important;box-shadow:0 10px 30px rgba(15,23,42,.2)!important;padding:11px 16px!important}
    .card,.stat-card,.dashboard-card{background:rgba(255,255,255,.92)!important;border:1px solid var(--line)!important;border-radius:16px!important;box-shadow:0 8px 24px rgba(15,23,42,.06)!important}
    h1,h2,h3{color:var(--ink);letter-spacing:-.02em}
    h1{font-weight:800} h2{font-weight:800} h3{font-weight:750}
    #loginView{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
    #loginView form,#loginView .login-card,#loginView>div{border-radius:22px!important}
    @media(max-width:800px){
      body{font-size:14px}.panel{padding:14px!important;border-radius:14px!important}
      .tab{padding:9px 11px!important;font-size:13px}.tabs{gap:7px!important;overflow-x:auto;padding-bottom:5px}
      table{font-size:12px;display:block;overflow-x:auto;white-space:nowrap}.panel>div{max-width:100%}
      input,select,textarea{width:100%;min-height:44px}
    }
    @media(prefers-reduced-motion:no-preference){.panel.active{animation:fadePanel .18s ease-out}@keyframes fadePanel{from{opacity:.65;transform:translateY(3px)}to{opacity:1;transform:none}}}
  `;
  document.head.appendChild(style);
})();
(function(){
  if(document.getElementById('appStyleTheme')) return;
  const style=document.createElement('style'); style.id='appStyleTheme';
  style.textContent=`
    :root{--app-green:#138a5b;--app-green2:#0b6847;--app-bg:#f4f7f6;--app-ink:#14211b;--app-muted:#718078;--app-card:#fff;--app-line:#e4ebe7;--app-shadow:0 12px 34px rgba(20,45,34,.08)}
    html{background:var(--app-bg)}
    body{margin:0!important;background:radial-gradient(circle at 50% -10%,#e7f5ee 0,#f4f7f6 34%,#f4f7f6 100%)!important;color:var(--app-ink)!important;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif!important}
    #appView{max-width:1180px;margin:0 auto;padding:0 18px 90px}
    #appView>*{position:relative}
    #appView .panel{background:var(--app-card)!important;border:1px solid var(--app-line)!important;border-radius:22px!important;box-shadow:var(--app-shadow)!important}
    #appView .panel.active{animation:appPanelIn .2s ease-out}
    @keyframes appPanelIn{from{opacity:.6;transform:translateY(5px)}to{opacity:1;transform:none}}
    .app-mobile-header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 2px 12px;position:sticky;top:0;z-index:30;background:rgba(244,247,246,.9);backdrop-filter:blur(14px)}
    .app-brand{display:flex;align-items:center;gap:10px;min-width:0}.app-brand-icon{width:46px;height:46px;border-radius:14px;object-fit:contain;background:#fff;padding:3px;border:1px solid #dfe9e4;box-shadow:0 8px 18px rgba(19,138,91,.14)}
    .app-login-logo{width:92px;height:92px;object-fit:contain;display:block;margin:0 auto 12px;border-radius:20px;background:#fff;padding:5px;box-shadow:0 10px 24px rgba(20,45,34,.12);border:1px solid #e2ebe6}.app-desktop-brand{display:flex;align-items:center;gap:12px;padding:12px 4px}.app-desktop-brand img{width:48px;height:48px;object-fit:contain;border-radius:14px;background:#fff;padding:3px;border:1px solid #dfe9e4}.app-desktop-brand b{font-size:16px}.app-desktop-brand span{display:block;font-size:11px;color:var(--app-muted);margin-top:2px}
    .app-brand-title{font-weight:850;font-size:15px;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.app-brand-sub{font-size:11px;color:var(--app-muted);margin-top:3px}
    .app-user-pill{display:flex;align-items:center;gap:7px;background:#fff;border:1px solid var(--app-line);padding:8px 11px;border-radius:999px;font-size:11px;color:#52615a;max-width:44vw;overflow:hidden}.app-user-pill span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
    .app-mobile-nav{display:none}
    .app-more-sheet{display:none;position:fixed;inset:0;background:rgba(8,20,15,.28);z-index:90;align-items:flex-end;justify-content:center;padding:12px}.app-more-sheet.open{display:flex}.app-more-card{width:min(560px,100%);background:#fff;border-radius:24px;padding:14px;box-shadow:0 20px 60px rgba(0,0,0,.18);max-height:75vh;overflow:auto}.app-more-head{display:flex;justify-content:space-between;align-items:center;padding:4px 4px 12px;font-weight:800}.app-more-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}.app-more-btn{padding:13px!important;background:#f5f8f6!important;color:#27453a!important;border:1px solid #e1eae5!important;text-align:left;font-weight:750!important;border-radius:15px!important}.app-more-btn.active{background:#e6f5ee!important;color:#0b6847!important;border-color:#bfe4d1!important}
    .app-desktop-tabs{position:sticky;top:0;z-index:25;margin:0 0 14px;padding:9px;background:rgba(255,255,255,.86);backdrop-filter:blur(14px);border:1px solid var(--app-line);border-radius:18px;box-shadow:0 8px 22px rgba(20,45,34,.05);display:flex;gap:7px;overflow:auto}
    .app-desktop-tabs .tab{border-radius:12px!important;border:0!important;background:transparent!important;color:#617069!important;box-shadow:none!important;white-space:nowrap}
    .app-desktop-tabs .tab.active{background:#e7f5ee!important;color:#0b6847!important;box-shadow:none!important}
    .app-action-row{display:flex;gap:8px;flex-wrap:wrap}.app-action-row button{border-radius:12px!important}
    @media(max-width:800px){
      #appView{padding:0 12px calc(108px + env(safe-area-inset-bottom))}
      .app-mobile-header{padding:12px 0 10px}.app-user-pill{max-width:48vw;padding:7px 9px}
      .app-desktop-tabs{position:static;display:flex;overflow-x:auto;border:0;box-shadow:none;background:transparent;padding:0;margin:0 0 10px;border-radius:0;scrollbar-width:none}
      .app-desktop-tabs::-webkit-scrollbar{display:none}
      .app-desktop-tabs .tab{display:none!important}
      .app-mobile-nav{display:grid;grid-template-columns:repeat(5,1fr);position:fixed;left:10px;right:10px;bottom:calc(10px + env(safe-area-inset-bottom));z-index:80;background:rgba(255,255,255,.94);backdrop-filter:blur(18px);border:1px solid #dfe9e4;border-radius:22px;box-shadow:0 14px 40px rgba(20,45,34,.16);padding:7px}
      .app-nav-btn{border:0!important;background:transparent!important;color:#728079!important;box-shadow:none!important;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;padding:7px 2px!important;border-radius:15px!important;font-size:10px;font-weight:750!important;min-height:52px}
      .app-nav-btn .ico{font-size:20px;line-height:1}.app-nav-btn:nth-child(2){transform:translateY(-7px)}.app-nav-btn:nth-child(2) .ico{width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(145deg,var(--app-green),var(--app-green2));color:#fff;box-shadow:0 8px 18px rgba(19,138,91,.28);border:4px solid #fff}.app-nav-btn:nth-child(2).active{background:transparent!important;color:#0b6847!important}.app-nav-btn.active{background:#e8f6ef!important;color:#0b6847!important}
      .app-more-grid{grid-template-columns:repeat(2,1fr)}
      #appView .panel{border-radius:18px!important;padding:15px!important;box-shadow:0 8px 24px rgba(20,45,34,.06)!important}
      #appView table{border-radius:14px!important}
      #appView h1{font-size:22px!important} #appView h2{font-size:19px!important} #appView h3{font-size:16px!important}
    }
    @media(min-width:801px){.app-mobile-header{display:flex}.app-mobile-nav{display:none!important}.app-more-sheet{display:none!important}}
    @media(max-width:800px){
      body:after{content:"";position:fixed;inset:auto 0 0;height:2px;background:linear-gradient(90deg,#0b6847,#77c7a5,#0b6847);z-index:100}
      #appView .stat-card,#appView .card,#appView .dashboard-card{border-radius:18px!important}
      #appView .primary,#appView .btn-primary{min-height:44px}
      #appView .badge{padding:6px 10px!important}
    }
  `;
  document.head.appendChild(style);
})();
const $=id=>document.getElementById(id);
let students={}, classes={}, teachers={}, attendance={}, settings={schoolName:"MTs Miftahul Ulum Pronojiwo",lateAfter:"07:15"};
let selectedStudent=null, scanner=null, lastScanCode=null;
let currentRole = "petugas";
const today=()=>new Date().toISOString().slice(0,10);
const nowTime=()=>new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const toast=m=>{const t=$("toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)};
const key=s=>String(s).replace(/[.#$/[\]]/g,"_");

// v2.6 OFFLINE SCAN: antrean lokal agar scan tetap bisa dilakukan saat internet putus.
const OFFLINE_QUEUE_KEY="absensiOfflineQueue_v26";
let offlineQueue=[];
try{offlineQueue=JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY)||"[]");if(!Array.isArray(offlineQueue))offlineQueue=[];}catch{offlineQueue=[];}
function saveOfflineQueue(){try{localStorage.setItem(OFFLINE_QUEUE_KEY,JSON.stringify(offlineQueue));}catch(e){console.warn("Queue lokal gagal disimpan",e)}}
function setOnlineBadge(){
  let el=document.getElementById("offlineStatusBadge");
  if(!el){el=document.createElement("div");el.id="offlineStatusBadge";el.style.cssText="position:fixed;top:10px;right:10px;z-index:9999;padding:7px 11px;border-radius:999px;font:700 11px system-ui;box-shadow:0 5px 18px rgba(0,0,0,.10);transition:.2s;";document.body.appendChild(el)}
  const online=navigator.onLine; const n=offlineQueue.length;
  el.textContent=online?(n?`🟡 Online • ${n} antrean`:"🟢 Online"):"🔴 Offline • scan tetap bisa";
  el.style.background=online?(n?"#fff7d6":"#e8f7ef"):"#ffe8e8";
  el.style.color=online?(n?"#8a6500":"#12633f"):"#9b2020";
}
async function queueOrWrite(path,data,mode="set"){
  if(navigator.onLine){
    try{if(mode==="update")await db.ref(path).update(data);else await db.ref(path).set(data);return true;}catch(e){
      offlineQueue.push({path,data,mode,queuedAt:Date.now()});saveOfflineQueue();setOnlineBadge();return false;
    }
  }
  offlineQueue.push({path,data,mode,queuedAt:Date.now()});saveOfflineQueue();setOnlineBadge();return false;
}
async function flushOfflineQueue(){
  if(!navigator.onLine||!offlineQueue.length){setOnlineBadge();return;}
  const pending=[...offlineQueue]; offlineQueue=[]; saveOfflineQueue();
  const failed=[];
  for(const item of pending){
    try{if(item.mode==="update")await db.ref(item.path).update(item.data);else await db.ref(item.path).set(item.data);}
    catch(e){failed.push(item);}
  }
  if(failed.length){offlineQueue=failed;saveOfflineQueue();toast(`${failed.length} data masih menunggu koneksi.`)}
  else if(pending.length)toast(`${pending.length} data offline berhasil disinkronkan.`);
  setOnlineBadge();
}
function updateLocalAttendance(path,data,mode="set"){
  const m=path.match(/^attendance\/([^/]+)\/([^/]+)(?:\/(pulang))?$/);
  if(!m)return;
  const [,day,id,child]=m; attendance[day]=attendance[day]||{}; attendance[day][id]=attendance[day][id]||{};
  if(child==="pulang")attendance[day][id].pulang=data.pulang||data;
  else attendance[day][id]=data;
}
window.addEventListener("online",()=>{setOnlineBadge();flushOfflineQueue()});
window.addEventListener("offline",setOnlineBadge);
document.addEventListener("DOMContentLoaded",()=>{setOnlineBadge();setTimeout(flushOfflineQueue,1200)});
setTimeout(setOnlineBadge,300);

async function logActivity(action, detail="", targetId="") {
  try {
    const u=auth.currentUser;
    if(!u) return;
    const id=db.ref("activityLogs").push().key;
    await db.ref("activityLogs/"+id).set({
      id, action, detail:String(detail||""), targetId:String(targetId||""),
      uid:u.uid, email:u.email||"", role:currentRole,
      timestamp:Date.now(), date:today(), time:nowTime()
    });
  } catch(e) { console.warn("Audit log gagal:",e); }
}

function ensureActivityLogUI(){
  if(currentRole!=="admin") return;
  const tabs=document.querySelector('.app-desktop-tabs') || document.querySelector('[data-tab="dashboard"]')?.parentElement;
  if(tabs && !document.querySelector('[data-tab="activityLogs"]')){
    const b=document.createElement("button"); b.type="button"; b.className="tab"; b.dataset.tab="activityLogs"; b.textContent="🛡️ Aktivitas";
    b.onclick=()=>showTab("activityLogs"); tabs.appendChild(b);
  }
  if(!$('activityLogs')){
    const panel=document.createElement("section"); panel.id="activityLogs"; panel.className="panel"; panel.innerHTML=`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div><h2>🛡️ Log Aktivitas</h2><p style="color:#64748b">Riwayat tindakan Admin dan Petugas di aplikasi.</p></div><div style="display:flex;gap:8px;flex-wrap:wrap"><label style="font-size:12px">Tanggal<input type="date" id="activityDate" style="display:block;margin-top:4px"></label><button type="button" class="secondary" id="activityRefresh">Tampilkan</button><button type="button" class="secondary" id="activityExport">Export CSV</button></div></div><div id="activityTable" style="margin-top:16px"></div></div>`;
    document.getElementById("appView")?.appendChild(panel);
    document.getElementById("activityDate").value=today();
    document.getElementById("activityRefresh").onclick=renderActivityLogs;
    document.getElementById("activityExport").onclick=exportActivityLogs;
  }
  renderActivityLogs();
}

async function fetchActivityLogs(){
  if(currentRole!=="admin") return [];
  const snap=await db.ref("activityLogs").orderByChild("timestamp").limitToLast(200).once("value");
  return Object.values(snap.val()||{}).sort((a,b)=>(b.timestamp||0)-(a.timestamp||0));
}

async function renderActivityLogs(){
  const box=$("activityTable"); if(!box || currentRole!=="admin") return;
  box.innerHTML='<div style="padding:18px;text-align:center;color:#64748b">Memuat log...</div>';
  try{
    const date=$("activityDate")?.value||"";
    const rows=(await fetchActivityLogs()).filter(x=>!date||x.date===date);
    box.innerHTML=`<div style="overflow:auto"><table><thead><tr><th>Waktu</th><th>Role</th><th>Petugas/Akun</th><th>Aksi</th><th>Detail</th></tr></thead><tbody>${rows.map(x=>`<tr><td>${esc(x.date||"")} ${esc(x.time||"")}</td><td><span class="badge">${esc(String(x.role||"").toUpperCase())}</span></td><td>${esc(x.email||x.uid||"")}</td><td><b>${esc(x.action||"")}</b></td><td>${esc(x.detail||"")}</td></tr>`).join("")||'<tr><td colspan="5" style="text-align:center">Belum ada aktivitas pada tanggal ini.</td></tr>'}</tbody></table></div>`;
  }catch(e){ console.error(e); box.innerHTML='<div style="padding:18px;color:#b91c1c">Log tidak dapat dimuat.</div>'; }
}

async function exportActivityLogs(){
  if(currentRole!=="admin") return toast("Hanya Admin yang dapat melihat log aktivitas.");
  const date=$("activityDate")?.value||"";
  const rows=(await fetchActivityLogs()).filter(x=>!date||x.date===date);
  const head=["Tanggal","Waktu","Role","Email","Aksi","Detail","Target ID","UID"];
  const csv=[head,...rows.map(x=>[x.date,x.time,x.role,x.email,x.action,x.detail,x.targetId,x.uid])].map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n");
  const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");
  a.href=url; a.download=`log-aktivitas-${date||today()}.csv`; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function installMtsBranding(){
  if(!document.getElementById("mtsFavicon")){
    const f=document.createElement("link");f.id="mtsFavicon";f.rel="icon";f.type="image/png";f.href="favicon-32.png";document.head.appendChild(f);
  }
  if(!document.querySelector('link[rel="apple-touch-icon"]')){
    const a=document.createElement("link");a.rel="apple-touch-icon";a.href="apple-touch-icon.png";document.head.appendChild(a);
  }
  if(!document.querySelector('link[rel="manifest"]')){
    const m=document.createElement("link");m.rel="manifest";m.href="manifest.json";document.head.appendChild(m);
  }
  if(!document.querySelector('meta[name="theme-color"]')){
    const t=document.createElement("meta");t.name="theme-color";t.content="#1f5d35";document.head.appendChild(t);
  }
  const login=document.getElementById("loginView");
  if(login && !document.getElementById("mtsLoginLogo")){
    const logo=document.createElement("img");logo.id="mtsLoginLogo";logo.className="app-login-logo";logo.src="logo.png";logo.alt="Logo MTs Miftahul Ulum";
    const target=login.querySelector("form,.login-card,#loginView>div") || login.firstElementChild;
    if(target) target.insertBefore(logo,target.firstChild);
  }
}
installMtsBranding();

function showTab(id){
 document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 $(id).classList.add("active");document.querySelector(`[data-tab="${id}"]`).classList.add("active");
 if(id==="dashboard") renderDashboard(); if(id==="students") renderStudents(); if(id==="classes") renderClasses(); if(id==="attendance") renderAttendance(); if(id==="teachers") { ensureTeacherUI(); renderTeachers(); renderTeacherAttendance(); }
}
function initAppStyleUI(){
  const app=$("appView"); if(!app || document.getElementById("appMobileNav")) return;
  const header=document.createElement("div"); header.className="app-mobile-header";
  header.innerHTML=`<div class="app-brand"><img class="app-brand-icon" src="logo.png" alt="Logo MTs Miftahul Ulum"><div><div class="app-brand-title">Absensi MTs</div><div class="app-brand-sub">Miftahul Ulum Pronojiwo</div></div></div><div class="app-user-pill">👤 <span id="appStyleUser">${esc(window.firebase?.auth?.currentUser?.email||"")}</span></div>`;
  app.insertBefore(header,app.firstChild);
  const tabContainer=document.querySelector('[data-tab="dashboard"]')?.parentElement;
  if(tabContainer && !tabContainer.classList.contains("app-desktop-tabs")) tabContainer.classList.add("app-desktop-tabs");
  const nav=document.createElement("nav"); nav.id="appMobileNav"; nav.className="app-mobile-nav";
  nav.innerHTML=`<button class="app-nav-btn" data-go="dashboard"><span class="ico">⌂</span><span>Home</span></button><button class="app-nav-btn" data-go="scanner"><span class="ico">▣</span><span>Scan</span></button><button class="app-nav-btn" data-go="attendance"><span class="ico">✓</span><span>Absensi</span></button><button class="app-nav-btn" data-go="teachers" id="appGuruNav"><span class="ico">♟</span><span>Guru</span></button><button class="app-nav-btn" id="appMoreBtn"><span class="ico">☰</span><span>Lainnya</span></button>`;
  document.body.appendChild(nav);
  const sheet=document.createElement("div"); sheet.id="appMoreSheet"; sheet.className="app-more-sheet";
  sheet.innerHTML=`<div class="app-more-card"><div class="app-more-head"><span>Menu Aplikasi</span><button type="button" id="appMoreClose">✕</button></div><div class="app-more-grid" id="appMoreGrid"></div></div>`;
  document.body.appendChild(sheet);
  const sync=()=>{
    nav.querySelectorAll(".app-nav-btn[data-go]").forEach(b=>b.classList.toggle("active",b.dataset.go===(document.querySelector('.tab.active')?.dataset.tab||"dashboard")));
    const u=document.getElementById("appStyleUser"); if(u && window.firebase?.auth?.currentUser) u.textContent=window.firebase.auth.currentUser.email||"";
    const guru=document.getElementById("appGuruNav"); if(guru) guru.style.display=(typeof currentRole!=="undefined"&&currentRole==="admin")?"flex":"none";
  };
  nav.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{showTab(b.dataset.go);sheet.classList.remove("open");sync();window.scrollTo({top:0,behavior:"smooth"})});
  document.getElementById("appMoreBtn").onclick=()=>{
    const grid=document.getElementById("appMoreGrid");
    grid.innerHTML="";
    document.querySelectorAll('.tab').forEach(t=>{
      if(getComputedStyle(t).display==='none' && t.dataset.tab!=='students' && t.dataset.tab!=='classes' && t.dataset.tab!=='settings' && t.dataset.tab!=='teachers') return;
      if(getComputedStyle(t).display==='none') return;
      const b=document.createElement("button"); b.className="app-more-btn"; b.textContent=t.textContent.trim(); b.onclick=()=>{showTab(t.dataset.tab);sheet.classList.remove("open");sync();window.scrollTo({top:0,behavior:"smooth"})}; grid.appendChild(b);
    });
    sheet.classList.add("open");
  };
  document.getElementById("appMoreClose").onclick=()=>sheet.classList.remove("open");
  sheet.addEventListener("click",e=>{if(e.target===sheet) sheet.classList.remove("open")});
  const oldShowTab=showTab;
  // Keep active bottom navigation synchronized after existing calls.
  window.setTimeout(sync,0);
  const obs=new MutationObserver(sync); document.querySelectorAll('.tab').forEach(t=>obs.observe(t,{attributes:true,attributeFilter:['class','style']}));
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showTab(b.dataset.tab));

auth.onAuthStateChanged(async user=>{
  if(user){
    $("loginView").classList.add("hidden");
    $("appView").classList.remove("hidden");
    $("userEmail").textContent=user.email||"";

    try{
      const roleSnap = await db.ref("roles/"+user.uid).once("value");
      const roleData = roleSnap.val();
      currentRole = roleData === "petugas" ? "petugas" : "admin";

      applyRoleUI();
      ensureTeacherUI();
      initAppStyleUI();
      ensureActivityLogUI();
      await loadAll();
    }catch(e){
      console.error(e);
      $("loginMsg").textContent="Gagal memuat hak akses.";
    }

  }else{
    $("loginView").classList.remove("hidden");
    $("appView").classList.add("hidden");
    currentRole="petugas";
  }
});
$("loginBtn").onclick=async()=>{try{await auth.signInWithEmailAndPassword($("loginEmail").value,$("loginPassword").value)}catch(e){$("loginMsg").textContent=e.message}};
$("logoutBtn").onclick=()=>auth.signOut();
function ensureBackupUI(){
  if(currentRole!=="admin") return;
  const save=document.getElementById("saveSettingsBtn");
  if(!save || document.getElementById("backupDataBtn")) return;
  const box=document.createElement("div");
  box.id="backupDataBox";
  box.style.cssText="margin-top:16px;padding:14px;border:1px solid #dbe2ea;border-radius:12px;background:#f8fafc";
  box.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
    <div><b>💾 Backup Data</b><div style="font-size:13px;color:#64748b;margin-top:3px">Simpan salinan data aplikasi ke komputer/HP dalam format JSON.</div></div>
    <button type="button" class="secondary" id="backupDataBtn">💾 Backup Sekarang</button>
  </div>`;
  save.parentElement?.insertAdjacentElement("afterend",box);
  document.getElementById("backupDataBtn").onclick=backupAllData;
}

function backupAllData(){
  if(currentRole!=="admin"){toast("Hanya Admin yang dapat melakukan backup.");return;}
  const payload={
    app:"Absensi MTs Miftahul Ulum Pronojiwo",
    version:"v1.9",
    backupAt:new Date().toISOString(),
    students,
    classes,
    teachers,
    attendance,
    settings
  };
  const json=JSON.stringify(payload,null,2);
  const blob=new Blob([json],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob),a=document.createElement("a");
  const stamp=new Date().toISOString().replace(/[:.]/g,"-");
  a.href=url;a.download=`backup-absensi-${stamp}.json`;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  toast("Backup data berhasil diunduh.");
}


function ensureRestoreUI(){
  if(currentRole!=="admin") return;
  const save=document.getElementById("saveSettingsBtn");
  if(!save || document.getElementById("restoreDataBtn")) return;
  const box=document.createElement("div");
  box.id="restoreDataBox";
  box.style.cssText="margin-top:12px;padding:14px;border:1px solid #f0d9a6;border-radius:12px;background:#fffaf0";
  box.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
    <div><b>♻️ Pulihkan Backup</b><div style="font-size:13px;color:#64748b;margin-top:3px">Import file JSON hasil Backup. Hanya Admin yang dapat melakukan pemulihan.</div></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <input type="file" id="restoreDataFile" accept=".json,application/json" style="display:none">
      <button type="button" class="secondary" id="restoreDataBtn">♻️ Pilih Backup</button>
    </div>
  </div>`;
  save.parentElement?.insertAdjacentElement("afterend",box);
  document.getElementById("restoreDataBtn").onclick=()=>document.getElementById("restoreDataFile").click();
  document.getElementById("restoreDataFile").onchange=restoreBackupFile;
}

async function restoreBackupFile(ev){
  if(currentRole!=="admin") return;
  const file=ev.target.files?.[0];
  ev.target.value="";
  if(!file) return;
  try{
    const text=await file.text();
    const payload=JSON.parse(text);
    if(!payload || typeof payload!=="object" || !payload.students || !payload.classes || !payload.attendance){
      throw new Error("Format backup tidak dikenali.");
    }
    const ok=confirm("PERINGATAN! Pemulihan backup akan mengganti data Siswa, Kelas, Guru, Absensi, dan Pengaturan saat ini. Lanjutkan?");
    if(!ok) return;
    const restored={
      students:payload.students||{},
      classes:payload.classes||{},
      teachers:payload.teachers||{},
      attendance:payload.attendance||{},
      settings:payload.settings||settings
    };
    await db.ref().update(restored);
    students=restored.students;classes=restored.classes;teachers=restored.teachers;attendance=restored.attendance;settings={...settings,...restored.settings};
    $("schoolName").value=settings.schoolName||"";
    $("lateAfter").value=settings.lateAfter||"07:15";
    refreshClassOptions();renderDashboard();renderStudents();renderClasses();renderTeachers();renderAttendance();
    toast("Backup berhasil dipulihkan.");
  }catch(e){
    console.error(e);
    toast("Gagal memulihkan backup: "+(e.message||"format file tidak valid."));
  }
}

function applyRoleUI(){
  const adminOnly = [
    '[data-tab="students"]',
    '[data-tab="classes"]',
    '[data-tab="settings"]',
    '[data-tab="teachers"]'
  ];

  adminOnly.forEach(selector=>{
    const el=document.querySelector(selector);
    if(el) el.style.display = currentRole==="admin" ? "" : "none";
  });

  const dashboardTab=document.querySelector('[data-tab="dashboard"]');
  const scannerTab=document.querySelector('[data-tab="scanner"]');
  const attendanceTab=document.querySelector('[data-tab="attendance"]');

  if(dashboardTab) dashboardTab.style.display="";
  if(scannerTab) scannerTab.style.display="";
  if(attendanceTab) attendanceTab.style.display="";

  $("userEmail").textContent =
    `${auth.currentUser?.email||""} • ${currentRole==="admin"?"ADMIN":"PETUGAS"}`;
  ensureBackupUI();
  ensureRestoreUI();
  const backupBox=document.getElementById("backupDataBox");
  if(backupBox) backupBox.style.display=currentRole==="admin"?"":"none";
  const restoreBox=document.getElementById("restoreDataBox");
  if(restoreBox) restoreBox.style.display=currentRole==="admin"?"":"none";
}
async function loadAll(){
 const [ss,cs,ts,as,st]=await Promise.all([
   db.ref("students").once("value"), db.ref("classes").once("value"),
   db.ref("teachers").once("value"), db.ref("attendance").once("value"), db.ref("settings").once("value")
 ]);
 students=ss.val()||{}; classes=cs.val()||{}; teachers=ts.val()||{}; attendance=as.val()||{}; settings={...settings,...(st.val()||{})};
 $("schoolName").value=settings.schoolName;$("lateAfter").value=settings.lateAfter;
 refreshClassOptions();renderDashboard();
 listenRealtime();
}
function listenRealtime(){
 db.ref("students").on("value",s=>{students=s.val()||{};refreshClassOptions();renderStudents();renderDashboard()});
 db.ref("classes").on("value",s=>{classes=s.val()||{};refreshClassOptions();renderClasses();renderStudents()});
 db.ref("teachers").on("value",s=>{teachers=s.val()||{};renderTeachers();});
 db.ref("attendance").on("value",s=>{attendance=s.val()||{};renderDashboard();renderAttendance()});
 db.ref("settings").on("value",s=>{settings={...settings,...(s.val()||{})}});
}

function refreshClassOptions(){
 const opts=Object.values(classes).sort((a,b)=>a.name.localeCompare(b.name,"id")).map(c=>`<option value="${esc(c.name)}">${esc(c.name)}</option>`).join("");
 $("studentClass").innerHTML=opts;
 $("studentClassFilter").innerHTML='<option value="">Semua Kelas</option>'+opts;
 $("attendanceClassFilter").innerHTML='<option value="">Semua Kelas</option>'+opts;
}

function getAttendanceEntry(date,id){
 const raw=attendance[date]?.[id];
 if(!raw)return null;
 if(raw.masuk||raw.pulang)return raw;
 return {masuk:raw};
}
function getMasuk(entry){return entry?.masuk||entry||null;}
function getLatestTime(entry){return entry?.pulang?.time||getMasuk(entry)?.time||"";}

function renderDashboard(){
 const allStudents=Object.values(students);
 const day=attendance[today()]||{};
 const byId={};
 Object.entries(day).forEach(([id,raw])=>{byId[id]=raw;});
 let present=0,late=0,izin=0,sakit=0,alpa=0;
 Object.entries(day).forEach(([id,raw])=>{
   const a=getMasuk(raw), status=a?.status||"";
   if(status==="Hadir")present++;
   else if(status==="Terlambat")late++;
   else if(status==="Izin")izin++;
   else if(status==="Sakit")sakit++;
   else if(status==="Alpa")alpa++;
 });
 const recordedIds=new Set(Object.keys(day));
 alpa += allStudents.filter(s=>!recordedIds.has(s.id)).length;
 const total=allStudents.length;
 const hadirEfektif=present+late;
 const attendancePct=total ? Math.round((hadirEfektif/total)*100) : 0;
 $("statStudents").textContent=total;
 $("statPresent").textContent=present;
 $("statLate").textContent=late;
 $("statMissing").textContent=Math.max(0,alpa);
 const rows=Object.values(day).sort((a,b)=>(b?.masuk?.timestamp||b?.timestamp||0)-(a?.masuk?.timestamp||a?.timestamp||0)).slice(0,20);
 $("recentList").innerHTML=rows.length?`<table><thead><tr><th>Waktu</th><th>Nama</th><th>Kelas</th><th>Status</th><th>Pulang</th></tr></thead><tbody>${rows.map(raw=>{const a=getMasuk(raw),p=raw?.pulang;return `<tr><td>${esc(a?.time)}</td><td>${esc(a?.name)}</td><td>${esc(a?.className)}</td><td><span class="badge">${esc(a?.status)}</span></td><td>${esc(p?.time||"-")}</td></tr>`}).join("")}</tbody></table>`:"Belum ada absensi hari ini.";
 ensureDashboardStats({total,present,late,izin,sakit,alpa,attendancePct});
 ensureDashboardTrend();
}


function ensureDashboardTrend(){
 let box=$("dashboardTrendBox");
 if(!box){
   const target=$("dashboardExtraStats") || $("recentList");
   if(!target) return;
   injectDashboardStyle();
   box=document.createElement("section");
   box.id="dashboardTrendBox";
   if(target.id==="dashboardExtraStats") target.insertAdjacentElement("afterend",box); else target.parentNode.insertBefore(box,target);
 }
 const base=new Date();
 base.setHours(0,0,0,0);
 const days=[];
 for(let i=6;i>=0;i--){
   const d=new Date(base); d.setDate(base.getDate()-i);
   const key=d.toISOString().slice(0,10);
   const day=attendance[key]||{};
   let hadir=0,terlambat=0,izin=0,sakit=0;
   Object.values(day).forEach(raw=>{
     const a=getMasuk(raw); const st=a?.status||"";
     if(a?.type==="guru") return;
     if(st==="Hadir") hadir++; else if(st==="Terlambat") terlambat++; else if(st==="Izin") izin++; else if(st==="Sakit") sakit++;
   });
   days.push({key,label:d.toLocaleDateString("id-ID",{day:"2-digit",month:"2-digit"}),hadir,terlambat,izin,sakit,total:hadir+terlambat});
 }
 const max=Math.max(1,...days.map(x=>x.total));
 box.innerHTML=`<div class="dash-trend-head"><div><h3>Tren Kehadiran 7 Hari</h3><p>Jumlah siswa yang tercatat Hadir + Terlambat</p></div><b>${days.reduce((n,x)=>n+x.total,0)} tercatat</b></div><div class="dash-trend-chart">${days.map(x=>`<div class="dash-bar-col"><span class="dash-bar-value">${x.total}</span><div class="dash-bar-wrap"><div class="dash-bar" style="height:${Math.max(4,Math.round((x.total/max)*100))}%"></div></div><small>${x.label}</small></div>`).join("")}</div><div class="dash-trend-legend"><span>● Hadir ${days[6].hadir}</span><span>● Terlambat ${days[6].terlambat}</span><span>● Izin ${days[6].izin}</span><span>● Sakit ${days[6].sakit}</span></div>`;
}

function ensureDashboardStats(stats){
 let box=$("dashboardExtraStats");
 if(!box){
   const target=$("recentList");
   if(!target) return;
   injectDashboardStyle();
   box=document.createElement("section");
   box.id="dashboardExtraStats";
   target.parentNode.insertBefore(box,target);
 }
 const classRows=Object.values(classes).sort((a,b)=>a.name.localeCompare(b.name,"id")).map(c=>{
   const classStudents=Object.values(students).filter(s=>s.className===c.name);
   const ids=new Set(classStudents.map(s=>s.id));
   let hadir=0,terlambat=0,izin=0,sakit=0,alpa=0;
   Object.entries(attendance[today()]||{}).forEach(([id,raw])=>{
     if(!ids.has(id)) return;
     const st=getMasuk(raw)?.status||"";
     if(st==="Hadir")hadir++; else if(st==="Terlambat")terlambat++; else if(st==="Izin")izin++; else if(st==="Sakit")sakit++; else if(st==="Alpa")alpa++;
   });
   alpa+=Math.max(0,classStudents.length-hadir-terlambat-izin-sakit-alpa);
   const pct=classStudents.length?Math.round(((hadir+terlambat)/classStudents.length)*100):0;
   return {name:c.name,total:classStudents.length,hadir,terlambat,izin,sakit,alpa,pct};
 });
 box.innerHTML=`
   <div class="dash-extra-head"><div><h3>📊 Statistik Hari Ini</h3><p>${esc(today())} • Ringkasan kehadiran seluruh siswa</p></div><div class="dash-percent">${stats.attendancePct}% <span>hadir</span></div></div>
   <div class="dash-stat-grid">
     <div class="dash-stat"><b>${stats.total}</b><span>👥 Total Siswa</span></div>
     <div class="dash-stat"><b>${stats.present}</b><span>✅ Hadir</span></div>
     <div class="dash-stat"><b>${stats.late}</b><span>⏰ Terlambat</span></div>
     <div class="dash-stat"><b>${stats.izin}</b><span>📝 Izin</span></div>
     <div class="dash-stat"><b>${stats.sakit}</b><span>🤒 Sakit</span></div>
     <div class="dash-stat"><b>${stats.alpa}</b><span>❌ Alpa</span></div>
   </div>
   <div class="dash-class-wrap">
     <div class="dash-class-title">Rekap Berdasarkan Kelas</div>
     <div class="dash-class-table">${classRows.length?`<table><thead><tr><th>Kelas</th><th>Siswa</th><th>Hadir</th><th>Terlambat</th><th>Izin</th><th>Sakit</th><th>Alpa</th><th>Kehadiran</th></tr></thead><tbody>${classRows.map(r=>`<tr><td><b>${esc(r.name)}</b></td><td>${r.total}</td><td>${r.hadir}</td><td>${r.terlambat}</td><td>${r.izin}</td><td>${r.sakit}</td><td>${r.alpa}</td><td><b>${r.pct}%</b></td></tr>`).join("")}</tbody></table>`:`<div class="dash-empty">Belum ada kelas.</div>`}</div>
   </div>`;
}

function injectDashboardStyle(){
 if($("dashboardExtraStyle")) return;
 const style=document.createElement("style"); style.id="dashboardExtraStyle";
 style.textContent=`

 #dashboardTrendBox{margin:18px 0;padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;box-shadow:0 5px 18px rgba(0,0,0,.04)}
 .dash-trend-head{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}.dash-trend-head h3{margin:0;font-size:19px}.dash-trend-head p{margin:4px 0 0;color:#6b7280;font-size:12px}.dash-trend-head>b{font-size:13px}.dash-trend-chart{height:190px;display:flex;align-items:flex-end;justify-content:space-around;gap:8px;padding:8px 4px 0;border-bottom:1px solid #e5e7eb}.dash-bar-col{height:100%;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-width:30px}.dash-bar-value{font-size:11px;margin-bottom:4px;font-weight:700}.dash-bar-wrap{height:135px;width:100%;display:flex;align-items:flex-end;justify-content:center}.dash-bar{width:min(38px,70%);min-height:4px;border-radius:7px 7px 2px 2px;background:linear-gradient(180deg,#4b5563,#9ca3af)}.dash-bar-col small{font-size:10px;color:#6b7280;margin-top:6px}.dash-trend-legend{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;font-size:11px;color:#6b7280}
 #dashboardExtraStats{margin:18px 0;padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;box-shadow:0 5px 18px rgba(0,0,0,.04)}
 .dash-extra-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px}.dash-extra-head h3{margin:0;font-size:19px}.dash-extra-head p{margin:4px 0 0;color:#6b7280;font-size:12px}.dash-percent{font-size:24px;font-weight:800}.dash-percent span{font-size:11px;font-weight:500;color:#6b7280}
 .dash-stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:9px}.dash-stat{padding:13px 9px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa;text-align:center}.dash-stat b{display:block;font-size:21px}.dash-stat span{display:block;margin-top:4px;font-size:11px;color:#6b7280}.dash-class-wrap{margin-top:16px}.dash-class-title{font-weight:700;font-size:14px;margin-bottom:9px}.dash-class-table{overflow:auto;border:1px solid #e5e7eb;border-radius:11px}.dash-class-table table{width:100%;min-width:700px;border-collapse:collapse;font-size:12px}.dash-class-table th,.dash-class-table td{padding:9px;border-bottom:1px solid #edf0f2;text-align:center}.dash-class-table th{background:#f3f4f6}.dash-class-table td:first-child{text-align:left}.dash-empty{padding:18px;text-align:center;color:#6b7280}
 @media(max-width:600px){#dashboardExtraStats{padding:14px}.dash-extra-head h3{font-size:17px}.dash-percent{font-size:21px}}
 `; document.head.appendChild(style);
}

function ensureParentFields(){
 const form=$("studentForm");
 if(!form || $("studentParentName")) return;
 const wrap=document.createElement("div"); wrap.id="parentFieldsV15";
 wrap.style.cssText="display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));margin-top:10px";
 wrap.innerHTML=`<input id="studentParentName" placeholder="Nama Wali/Orang Tua"><input id="studentParentPhone" placeholder="No. WhatsApp Wali">`;
 const phone=$("studentPhone");
 if(phone && phone.parentElement) phone.parentElement.insertAdjacentElement("afterend",wrap); else form.appendChild(wrap);
}
ensureParentFields();

function ensureStudentCardTools(){
 const btn=document.getElementById("newStudentBtn");
 if(!btn || document.getElementById("printAllStudentCodesBtn"))return;
 const b=document.createElement("button");
 b.type="button"; b.className="secondary"; b.id="printAllStudentCodesBtn"; b.textContent="🖨️ Cetak Semua QR";
 b.style.marginLeft="8px";
 btn.insertAdjacentElement("afterend",b);
 b.onclick=printAllStudentCodes;
}

window.printAllStudentCodes=()=>{
 if(currentRole!=="admin")return toast("Hanya Admin yang dapat mencetak kartu siswa.");
 const cl=document.getElementById("studentClassFilter")?.value||"";
 const q=(document.getElementById("studentSearch")?.value||"").trim().toLowerCase();
 const arr=Object.values(students).filter(s=>(!cl||s.className===cl)&&(!q||[s.name,s.nis,s.code,s.phone,s.parentName,s.parentPhone].join(" ").toLowerCase().includes(q))).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"id"));
 if(!arr.length)return toast("Tidak ada siswa untuk dicetak.");
 const w=window.open("","_blank");
 if(!w)return toast("Popup diblokir. Izinkan popup untuk mencetak kartu siswa.");
 const school=esc(settings.schoolName||"MTs Miftahul Ulum Pronojiwo");
 const cards=arr.map((s,i)=>`<div class="card">
   <div class="cardHead"><div class="school">${school}</div><div class="label">KARTU ABSENSI SISWA</div></div>
   <div class="content">
     <div class="identity"><div class="name">${esc(s.name||"")}</div><div class="meta">NIS: ${esc(s.nis||"-")}</div><div class="meta">Kelas: <b>${esc(s.className||"-")}</b></div></div>
     <div class="qr" data-code="${esc(s.code||"")}"></div>
   </div>
   <div class="code">${esc(s.code||"")}</div>
   <div class="hint">Gunakan QR ini untuk absensi masuk dan pulang.</div>
 </div>`).join("");
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Kartu QR Siswa</title>
 <style>
 *{box-sizing:border-box}html,body{margin:0;padding:0;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#111827}
 body{padding:8mm}.toolbar{text-align:center;margin:0 0 8mm}.toolbar button{padding:10px 20px;border:0;border-radius:8px;background:#111827;color:#fff;font-weight:700;cursor:pointer}.toolbar span{margin-left:10px;font-size:12px;color:#555}
 .wrap{display:grid;grid-template-columns:repeat(2,1fr);gap:5mm}
 .card{height:62mm;border:1px solid #9ca3af;border-radius:4mm;padding:4mm;background:#fff;display:flex;flex-direction:column;justify-content:space-between;break-inside:avoid;page-break-inside:avoid;overflow:hidden}
 .cardHead{text-align:center;border-bottom:1px solid #d1d5db;padding-bottom:2mm}.school{font-size:10pt;font-weight:700;text-transform:uppercase}.label{font-size:7.5pt;letter-spacing:1px;margin-top:1mm;color:#4b5563}
 .content{display:flex;align-items:center;justify-content:space-between;gap:4mm;flex:1}.identity{flex:1;min-width:0}.name{font-size:13pt;font-weight:700;line-height:1.15;margin-bottom:2mm;word-break:break-word}.meta{font-size:8.5pt;margin:1.2mm 0}.qr{width:31mm;height:31mm;display:flex;align-items:center;justify-content:center;flex:0 0 31mm}.qr img{width:31mm;height:31mm}.code{text-align:center;font-size:9pt;font-weight:700;letter-spacing:1.5px;margin-top:1mm}.hint{text-align:center;font-size:6.5pt;color:#6b7280;margin-top:1.5mm}
 @page{size:A4 portrait;margin:8mm}@media print{body{padding:0}.toolbar{display:none}.wrap{gap:4mm 5mm}.card{height:62mm;border-color:#9ca3af}}
 @media(max-width:650px){body{padding:10px}.wrap{grid-template-columns:1fr}.card{height:auto;min-height:220px}}
 </style></head><body><div class="toolbar"><button onclick="window.print()">🖨️ Cetak Kartu</button><span>${arr.length} kartu • A4 • 8 kartu/halaman</span></div><div class="wrap">${cards}</div>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script><script>document.querySelectorAll('.qr').forEach(el=>new QRCode(el,{text:el.dataset.code,width:150,height:150,correctLevel:QRCode.CorrectLevel.M}));<\/script></body></html>`);
 w.document.close();
};

function renderStudents(){
 ensureParentFields();
 ensureStudentCardTools();
 const q=$("studentSearch").value.toLowerCase(), cl=$("studentClassFilter").value;
 const arr=Object.values(students).filter(s=>(!cl||s.className===cl)&&(!q||[s.name,s.nis,s.code,s.phone,s.parentName,s.parentPhone].join(" ").toLowerCase().includes(q))).sort((a,b)=>a.name.localeCompare(b.name,"id"));
 $("studentsTable").innerHTML=`<table><thead><tr><th>Nama</th><th>NIS</th><th>Kelas</th><th>Wali / WhatsApp</th><th>Barcode</th><th>Aksi</th></tr></thead><tbody>${arr.map(s=>`<tr><td>${esc(s.name)}</td><td>${esc(s.nis)}</td><td>${esc(s.className)}</td><td>${esc(s.parentName||"-")}<br><small>${esc(s.parentPhone||s.phone||"-")}</small></td><td><code>${esc(s.code)}</code></td><td><div class="actions"><button class="secondary" onclick="editStudent('${s.id}')">Edit</button><button class="secondary" onclick="printCode('${s.id}')">Barcode</button><button class="secondary" onclick="showStudentHistory('${s.id}')">Riwayat</button><button class="secondary" onclick="sendStudentWA('${s.id}')">WA</button><button class="secondary" onclick="deleteStudent('${s.id}')">Hapus</button></div></td></tr>`).join("")}</tbody></table>`;
}
$("studentSearch").oninput=renderStudents;$("studentClassFilter").onchange=renderStudents;
$("newStudentBtn").onclick=()=>{ ensureParentFields(); $("studentForm").classList.remove("hidden");$("studentId").value="";$("studentNis").value="";$("studentName").value="";$("studentPhone").value="";$("studentClass").selectedIndex=0;$("studentParentName").value="";$("studentParentPhone").value="" };
$("cancelStudentBtn").onclick=()=>$("studentForm").classList.add("hidden");
$("saveStudentBtn").onclick=async()=>{
 const id=$("studentId").value||db.ref("students").push().key, old=students[id], code=old?.code||("MTU-"+id.slice(-8).toUpperCase());
 ensureParentFields();
 const obj={id,nis:$("studentNis").value.trim(),name:$("studentName").value.trim(),className:$("studentClass").value,phone:$("studentPhone").value.trim(),parentName:$("studentParentName").value.trim(),parentPhone:$("studentParentPhone").value.trim(),code,updatedAt:Date.now()};
 if(!obj.name||!obj.className)return toast("Nama dan kelas wajib diisi.");
 await db.ref("students/"+id).set(obj); await logActivity(old?"EDIT_SISWA":"TAMBAH_SISWA", `${obj.name} • Kelas ${obj.className}`, id); $("studentForm").classList.add("hidden");toast("Data siswa tersimpan.");
};

function ensureStudentHistoryUI(){
  if($('studentHistoryModal')) return;
  const style=document.createElement('style');
  style.textContent=`
    #studentHistoryModal{position:fixed;inset:0;background:rgba(15,23,42,.55);z-index:9999;display:none;align-items:center;justify-content:center;padding:18px}
    #studentHistoryModal .sh-card{width:min(900px,100%);max-height:92vh;overflow:auto;background:#fff;border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.25);padding:20px}
    #studentHistoryModal .sh-head{display:flex;justify-content:space-between;align-items:flex-start;gap:12px;margin-bottom:14px}
    #studentHistoryModal .sh-title{font-size:20px;font-weight:800;color:#111827}
    #studentHistoryModal .sh-sub{font-size:13px;color:#64748b;margin-top:4px}
    #studentHistoryModal .sh-close{border:0;background:#eef2f7;border-radius:10px;padding:8px 12px;cursor:pointer;font-weight:700}
    #studentHistoryModal .sh-filters{display:flex;gap:10px;flex-wrap:wrap;align-items:end;margin-bottom:14px}
    #studentHistoryModal .sh-filters label{font-size:12px;color:#475569;font-weight:700}
    #studentHistoryModal input{display:block;margin-top:5px;padding:9px 10px;border:1px solid #cbd5e1;border-radius:9px}
    #studentHistoryModal .sh-actions{display:flex;gap:8px;flex-wrap:wrap}
    #studentHistoryModal .sh-summary{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;margin:12px 0}
    #studentHistoryModal .sh-stat{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:10px;text-align:center}
    #studentHistoryModal .sh-stat b{display:block;font-size:18px;color:#111827}
    #studentHistoryModal .sh-stat span{font-size:11px;color:#64748b}
    #studentHistoryModal table{width:100%;border-collapse:collapse;font-size:13px}
    #studentHistoryModal th,#studentHistoryModal td{padding:9px 7px;border-bottom:1px solid #e5e7eb;text-align:left}
    #studentHistoryModal th{background:#f8fafc;color:#475569}
    @media(max-width:650px){#studentHistoryModal .sh-summary{grid-template-columns:repeat(2,1fr)}}
    @media print{body>*:not(#studentHistoryModal){display:none!important}#studentHistoryModal{position:static!important;display:block!important;background:#fff!important;padding:0!important}#studentHistoryModal .sh-card{max-height:none;box-shadow:none;border-radius:0;padding:0}#studentHistoryModal .sh-close,#studentHistoryModal .sh-actions{display:none!important}}
  `;
  document.head.appendChild(style);
  const modal=document.createElement('div');
  modal.id='studentHistoryModal';
  modal.innerHTML=`<div class="sh-card">
    <div class="sh-head"><div><div class="sh-title" id="shTitle">Riwayat Absensi Siswa</div><div class="sh-sub" id="shSub"></div></div><button class="sh-close" type="button" id="shClose">Tutup</button></div>
    <div class="sh-filters"><label>Bulan<input type="month" id="shMonth"></label><div class="sh-actions"><button type="button" class="secondary" id="shShow">Tampilkan</button><button type="button" class="secondary" id="shPrint">Cetak</button></div></div>
    <div id="shSummary" class="sh-summary"></div><div id="shTable"></div>
  </div>`;
  document.body.appendChild(modal);
  $('shClose').onclick=()=>modal.style.display='none';
  modal.onclick=e=>{if(e.target===modal)modal.style.display='none'};
  $('shShow').onclick=renderStudentHistory;
  $('shMonth').onchange=renderStudentHistory;
  $('shPrint').onclick=()=>window.print();
}

let historyStudentId=null;
window.showStudentHistory=id=>{
  const s=students[id];
  if(!s)return;
  ensureStudentHistoryUI();
  historyStudentId=id;
  $('shMonth').value=new Date().toISOString().slice(0,7);
  $('studentHistoryModal').style.display='flex';
  renderStudentHistory();
};

function renderStudentHistory(){
  const s=students[historyStudentId];
  if(!s)return;
  const ym=$('shMonth').value||new Date().toISOString().slice(0,7);
  const [year,month]=ym.split('-').map(Number);
  const days=new Date(year,month,0).getDate();
  const rows=[];
  let hadir=0,terlambat=0,izin=0,sakit=0,alpa=0,pulang=0;
  for(let d=1;d<=days;d++){
    const date=`${year}-${String(month).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const entry=getAttendanceEntry(date,s.id);
    const m=getMasuk(entry);
    if(m){
      const st=m.status||'Hadir';
      if(st==='Hadir')hadir++; else if(st==='Terlambat')terlambat++; else if(st==='Izin')izin++; else if(st==='Sakit')sakit++;
      if(entry?.pulang?.time)pulang++;
      rows.push({date,status:st,masuk:m.time||'-',pulang:entry?.pulang?.time||'-'});
    }else{
      alpa++;
      rows.push({date,status:'Alpa',masuk:'-',pulang:'-'});
    }
  }
  $('shTitle').textContent=`Riwayat Absensi — ${s.name}`;
  $('shSub').textContent=`NIS: ${s.nis||'-'} • Kelas: ${s.className||'-'} • ${monthName(ym)}`;
  $('shSummary').innerHTML=`
    <div class="sh-stat"><b>${hadir}</b><span>Hadir</span></div>
    <div class="sh-stat"><b>${terlambat}</b><span>Terlambat</span></div>
    <div class="sh-stat"><b>${izin}</b><span>Izin</span></div>
    <div class="sh-stat"><b>${sakit}</b><span>Sakit</span></div>
    <div class="sh-stat"><b>${pulang}</b><span>Sudah Pulang</span></div>`;
  $('shTable').innerHTML=`<table><thead><tr><th>Tanggal</th><th>Status</th><th>Masuk</th><th>Pulang</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.date}</td><td>${esc(r.status)}</td><td>${esc(r.masuk)}</td><td>${esc(r.pulang)}</td></tr>`).join('')}</tbody></table><div style="margin-top:10px;font-size:12px;color:#64748b">Hari tanpa data absensi dihitung sebagai Alpa pada rekap ini.</div>`;
}

function monthName(ym){
  const [y,m]=ym.split('-').map(Number);
  return new Date(y,m-1,1).toLocaleDateString('id-ID',{month:'long',year:'numeric'});
}

window.editStudent=id=>{const s=students[id];if(!s)return;ensureParentFields();$("studentForm").classList.remove("hidden");$("studentId").value=id;$("studentNis").value=s.nis||"";$("studentName").value=s.name||"";$("studentPhone").value=s.phone||"";$("studentParentName").value=s.parentName||"";$("studentParentPhone").value=s.parentPhone||"";$("studentClass").value=s.className};
window.deleteStudent=async id=>{if(currentRole!=="admin")return toast("Hanya Admin yang dapat menghapus siswa.");const s=students[id];if(confirm("Hapus siswa?")){await db.ref("students/"+id).remove();await logActivity("HAPUS_SISWA", `${s?.name||id}`, id)}};
window.printCode = id => {
  const s = students[id];
  const w = window.open("", "_blank");

  const school = JSON.stringify(settings.schoolName);
  const name = JSON.stringify(s.name);
  const nis = JSON.stringify(s.nis);
  const cls = JSON.stringify(s.className);
  const code = JSON.stringify(s.code);

  w.document.write(`
    <!doctype html>
    <html>
    <head>
      <title>Kartu Siswa</title>
      <style>
        body {
          font-family: Arial;
          text-align: center;
          padding: 30px;
        }

        .card {
          width: 320px;
          margin: auto;
          border: 1px solid #ddd;
          border-radius: 16px;
          padding: 22px;
        }

        #qr {
          display: flex;
          justify-content: center;
          margin: 18px;
        }

        .code {
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        button {
          padding: 10px 18px;
          border: 0;
          border-radius: 8px;
          background: #111827;
          color: white;
        }

        @media print {
          button {
            display: none;
          }
        }
      </style>
    </head>

    <body>

      <div class="card">

        <h2 id="school"></h2>

        <h3 id="name"></h3>

        <p id="info"></p>

        <div id="qr"></div>

        <div id="code" class="code"></div>

        <p>Scan QR ini untuk absensi.</p>

        <button onclick="window.print()">Cetak</button>

      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script>

      <script>

        document.getElementById("school").textContent = ${school};

        document.getElementById("name").textContent = ${name};

        document.getElementById("info").textContent =
          "NIS: " + ${nis} + " | Kelas: " + ${cls};

        document.getElementById("code").textContent = ${code};

        new QRCode(
          document.getElementById("qr"),
          {
            text: ${code},
            width: 190,
            height: 190
          }
        );

      <\/script>

    </body>
    </html>
  `);

  w.document.close();
};

function renderClasses(){
 const arr=Object.values(classes).sort((a,b)=>a.name.localeCompare(b.name,"id"));
 $("classesTable").innerHTML=`<table><thead><tr><th>Kelas</th><th>Aksi</th></tr></thead><tbody>${arr.map(c=>`<tr><td>${esc(c.name)}</td><td><div class="actions"><button class="secondary" onclick="editClass('${c.id}')">Edit</button><button class="secondary" onclick="deleteClass('${c.id}')">Hapus</button></div></td></tr>`).join("")}</tbody></table>`;
}
$("newClassBtn").onclick=()=>{$("classForm").classList.remove("hidden");$("classId").value="";$("className").value=""};
$("cancelClassBtn").onclick=()=>$("classForm").classList.add("hidden");
$("saveClassBtn").onclick=async()=>{const name=$("className").value.trim();if(!name)return;const existingId=$("classId").value;const id=existingId||db.ref("classes").push().key;await db.ref("classes/"+id).set({id,name}); await logActivity(existingId?"EDIT_KELAS":"TAMBAH_KELAS", name, id); $("classForm").classList.add("hidden");toast("Kelas tersimpan")};
window.editClass=id=>{$("classForm").classList.remove("hidden");$("classId").value=id;$("className").value=classes[id].name};
window.deleteClass=async id=>{if(currentRole!=="admin")return toast("Hanya Admin yang dapat menghapus kelas.");const c=classes[id];if(confirm("Hapus kelas? Data siswa tidak ikut terhapus.")){await db.ref("classes/"+id).remove();await logActivity("HAPUS_KELAS", c?.name||id, id)}};

function ensureScanModeUI(){
 const reader=document.getElementById("reader");
 if(!reader)return;
 if(document.getElementById("scanPremiumStyle"))return;
 const st=document.createElement("style");st.id="scanPremiumStyle";st.textContent=`
 .scan-premium{background:linear-gradient(145deg,#ffffff,#f1f7f4);border:1px solid #dbe8e1;border-radius:24px;padding:16px;box-shadow:0 14px 35px rgba(20,80,55,.10);margin:10px 0 18px}
 .scan-clock{font-size:30px;font-weight:800;letter-spacing:1px;text-align:center;color:#174f3b;margin:2px 0 4px}
 .scan-hint{text-align:center;color:#6d7f77;font-size:12px;margin-bottom:14px}
 .scan-modes{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}
 .scan-mode{border:1px solid #d7e5de;background:#fff;border-radius:14px;padding:11px 8px;font-weight:700;font-size:12px;color:#416257;transition:.2s;cursor:pointer}
 .scan-mode.active{background:#176044;color:#fff;border-color:#176044;box-shadow:0 7px 18px rgba(23,96,68,.22);transform:translateY(-1px)}
 .scan-camera{overflow:hidden;border-radius:20px;background:#101815;min-height:280px;display:flex;align-items:center;justify-content:center}
 .scan-actions{display:flex;gap:8px;margin-top:12px}.scan-actions button{flex:1;border-radius:14px!important;padding:12px!important}
 .scan-result-premium{margin-top:12px;padding:14px;border-radius:16px;background:#fff;border:1px solid #e0ebe5;line-height:1.65;box-shadow:0 7px 20px rgba(20,80,55,.07)}
 @media(max-width:520px){.scan-premium{padding:12px;border-radius:20px}.scan-clock{font-size:27px}.scan-mode{font-size:11px;padding:10px 5px}}
 `;document.head.appendChild(st);
 const box=document.createElement("div");box.className="scan-premium";box.id="scanPremiumBox";
 box.innerHTML=`<div class="scan-clock" id="scanClock">--:--:--</div><div class="scan-hint">Arahkan kamera ke QR / barcode siswa atau guru</div><div class="scan-modes"><button type="button" id="scanModeMasuk" class="scan-mode">🟢 Siswa Masuk</button><button type="button" id="scanModePulang" class="scan-mode">🚪 Siswa Pulang</button><button type="button" id="scanModeGuruMasuk" class="scan-mode">👨‍🏫 Guru Masuk</button><button type="button" id="scanModeGuruPulang" class="scan-mode">👋 Guru Pulang</button></div></div>`;
 reader.parentElement.insertBefore(box,reader);
 reader.classList.add("scan-camera");
 const oldResult=document.getElementById("scanResult");if(oldResult)oldResult.classList.add("scan-result-premium");
 document.getElementById("scanModeMasuk").onclick=()=>setScanMode("masuk");
 document.getElementById("scanModePulang").onclick=()=>setScanMode("pulang");
 document.getElementById("scanModeGuruMasuk").onclick=()=>setScanMode("guru-masuk");
 document.getElementById("scanModeGuruPulang").onclick=()=>setScanMode("guru-pulang");
 setScanMode("masuk");
 if(!window.__scanClockTimer){
   const tick=()=>{const el=document.getElementById("scanClock");if(el)el.textContent=new Date().toLocaleTimeString("id-ID",{hour12:false})};tick();window.__scanClockTimer=setInterval(tick,1000);
 }
}
let scanMode="masuk";
function setScanMode(mode){
 scanMode=mode;
 const map={masuk:"scanModeMasuk",pulang:"scanModePulang","guru-masuk":"scanModeGuruMasuk","guru-pulang":"scanModeGuruPulang"};
 Object.values(map).forEach(id=>{const el=document.getElementById(id);if(el)el.classList.remove("active")});
 const active=document.getElementById(map[mode]);if(active)active.classList.add("active");
 const status=document.getElementById("scanStatus");
 if(status){status.style.display=mode==="masuk"?"":"none";if(mode!=="masuk")status.value="Hadir"}
 const save=document.getElementById("saveScanBtn");if(save)save.style.display="none";
 const msg=document.getElementById("scanMsg");
 if(msg)msg.textContent=`Siap scan — ${mode.replace("guru-","GURU ").toUpperCase()}. Data tersimpan otomatis.`;
}

function beep(ok=true){
 try{
   const C=window.AudioContext||window.webkitAudioContext;
   if(!C)return;
   const ctx=new C(),o=ctx.createOscillator(),g=ctx.createGain();
   o.frequency.value=ok?880:220;o.type="sine";g.gain.value=.05;o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+.12);
   setTimeout(()=>ctx.close(),250);
 }catch{}
 if(navigator.vibrate)navigator.vibrate(ok?[80]:[180,80,180]);
}
ensureScanModeUI();

$("startScanBtn").onclick=async()=>{
 ensureScanModeUI();
 if(scanner)return;
 scanner=new Html5Qrcode("reader");
 try{
  await scanner.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:250}},onScan);
  $("scanMsg").textContent=`Kamera aktif — mode ${scanMode.toUpperCase()}.`;
 }catch(e){$("scanMsg").textContent="Kamera gagal dibuka. Pastikan HTTPS dan izin kamera aktif.";scanner=null}
};
$("stopScanBtn").onclick=async()=>{if(scanner){try{await scanner.stop()}catch{};scanner.clear();scanner=null;$("scanMsg").textContent="Kamera dihentikan."}};
async function onScan(decoded){
 if(decoded===lastScanCode)return;
 lastScanCode=decoded;
 setTimeout(()=>lastScanCode=null,1800);
 try{
   if(scanMode.startsWith("guru-")){
     const g=Object.values(teachers).find(x=>x.code===decoded||x.nip===decoded||x.id===decoded);
     if(!g){beep(false);$("scanResult").innerHTML=`Kode guru <b>${esc(decoded)}</b> tidak ditemukan.`;return;}
     beep(true);
     const day=today(),id="guru_"+g.id,entry=getAttendanceEntry(day,id);
     let info=`<b>${esc(g.name)}</b><br>NIP: ${esc(g.nip||"-")}<br>Mode: <b>${scanMode.toUpperCase()}</b><br>Waktu: ${nowTime()}`;
     if(scanMode==="guru-pulang"&&entry?.masuk)info+=`<br>Masuk: ${esc(entry.masuk.time)}`;
     if(scanMode==="guru-pulang"&&entry?.pulang)info+=`<br><b>Sudah pulang: ${esc(entry.pulang.time)}</b>`;
     $("scanResult").innerHTML=info;
     if(scanMode==="guru-masuk"){
       if(entry)return toast("Guru ini sudah absen MASUK hari ini.");
       const data={masuk:{teacherId:g.id,name:g.name,nip:g.nip||"",phone:g.phone||"",status:"Hadir",time:nowTime(),date:day,timestamp:Date.now(),by:auth.currentUser?.email||"petugas",type:"guru"}};
       updateLocalAttendance(`attendance/${day}/${id}`,data);
       await queueOrWrite(`attendance/${day}/${id}`,data);
       await logActivity("GURU_MASUK", `${g.name} • ${g.nip||"-"}`, id); beep(true);toast(`Absensi GURU MASUK ${g.name} tersimpan.`);
     }else{
       if(!entry?.masuk)return toast("Guru belum melakukan absensi masuk.");
       if(entry.pulang)return toast("Guru ini sudah absen PULANG.");
       const pulangData={time:nowTime(),date:day,timestamp:Date.now(),by:auth.currentUser?.email||"petugas"};
       updateLocalAttendance(`attendance/${day}/${id}/pulang`,pulangData);
       await queueOrWrite(`attendance/${day}/${id}/pulang`,pulangData);
       await logActivity("GURU_PULANG", `${g.name} • ${g.nip||"-"}`, id); beep(true);toast(`Absensi GURU PULANG ${g.name} tersimpan.`);
     }
     renderTeacherAttendance();
     return;
   }

   const s=Object.values(students).find(x=>x.code===decoded||x.nis===decoded||x.id===decoded);
   if(!s){beep(false);$("scanResult").innerHTML=`Kode <b>${esc(decoded)}</b> tidak ditemukan.`;selectedStudent=null;return;}
   beep(true);
   selectedStudent=s;
   const entry=getAttendanceEntry(today(),s.id),masuk=getMasuk(entry),pulang=entry?.pulang;
   let info=`<b>${esc(s.name)}</b><br>NIS: ${esc(s.nis)}<br>Kelas: ${esc(s.className)}<br>Mode: <b>${scanMode.toUpperCase()}</b><br>Waktu: ${nowTime()}`;
   if(scanMode==="pulang"&&masuk)info+=`<br>Masuk: ${esc(masuk.time)} (${esc(masuk.status)})`;
   if(scanMode==="pulang"&&pulang)info+=`<br><b>Sudah pulang: ${esc(pulang.time)}</b>`;
   $("scanResult").innerHTML=info;
   if(scanMode==="masuk"){
     const late=settings.lateAfter && nowTime().slice(0,5)>settings.lateAfter;
     $("scanStatus").value=late?"Terlambat":"Hadir";
     if(entry)return toast("Siswa ini sudah absen MASUK hari ini.");
     const data={masuk:{studentId:s.id,name:s.name,nis:s.nis,className:s.className,status:$("scanStatus").value,time:nowTime(),date:today(),timestamp:Date.now(),by:auth.currentUser?.email||"petugas"}};
     updateLocalAttendance(`attendance/${today()}/${s.id}`,data);
     await queueOrWrite(`attendance/${today()}/${s.id}`,data);
     await logActivity("SISWA_MASUK", `${s.name} • ${s.className} • ${data.masuk.status}`, s.id); beep(true);toast(`Absensi MASUK ${s.name} tersimpan otomatis.`);
   }else{
     if(!entry?.masuk)return toast("Siswa belum melakukan absensi masuk.");
     if(entry.pulang)return toast("Siswa ini sudah absen PULANG.");
     const pulangData={time:nowTime(),date:today(),timestamp:Date.now(),by:auth.currentUser?.email||"petugas"};
     updateLocalAttendance(`attendance/${today()}/${s.id}/pulang`,pulangData);
     await queueOrWrite(`attendance/${today()}/${s.id}/pulang`,pulangData);
     await logActivity("SISWA_PULANG", `${s.name} • ${s.className}`, s.id); beep(true);toast(`Absensi PULANG ${s.name} tersimpan otomatis.`);
   }
   renderDashboard();
   renderAttendance();
 }catch(e){console.error(e);beep(false);toast("Gagal menyimpan absensi. Cek koneksi atau Rules Firebase.");}
}
function buildStudentWAText(s,status,waktu=""){
 const wali=s.parentName||"Bapak/Ibu Wali";
 return `Assalamu'alaikum ${wali}.\n\nABSENSI ${settings.schoolName}\nNama: ${s.name}\nKelas: ${s.className}\nStatus: ${status}\nTanggal: ${today()}\nWaktu: ${waktu||nowTime()}\n\nTerima kasih.`;
}
window.sendStudentWA=id=>{
 const s=students[id];if(!s)return;
 const phone=(s.parentPhone||s.phone||"").replace(/\D/g,"");
 if(!phone)return toast("Nomor WhatsApp wali belum diisi.");
 const entry=getAttendanceEntry(today(),id),m=getMasuk(entry);
 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(buildStudentWAText(s,m?.status||"Hadir",m?.time||nowTime()))}`,"_blank");
};
$("waScanBtn").onclick=()=>{
 if(!selectedStudent)return toast("Scan siswa terlebih dahulu.");
 const phone=(selectedStudent.parentPhone||selectedStudent.phone||"").replace(/\D/g,"");
 if(!phone)return toast("Nomor WhatsApp wali belum diisi.");
 const entry=getAttendanceEntry(today(),selectedStudent.id),m=getMasuk(entry);
 const status=m?.status||$("scanStatus").value||"Hadir";
 window.open(`https://wa.me/${phone}?text=${encodeURIComponent(buildStudentWAText(selectedStudent,status,m?.time||nowTime()))}`,"_blank");
};

function ensureDailyPrintButton(){
 const exportBtn=document.getElementById("exportBtn");
 if(!exportBtn || document.getElementById("printAttendanceBtn")) return;
 const btn=document.createElement("button");
 btn.type="button";
 btn.className="secondary";
 btn.id="printAttendanceBtn";
 btn.textContent="🖨️ Cetak Rekap";
 exportBtn.insertAdjacentElement("afterend",btn);
 btn.onclick=printDailyAttendance;
}

function printDailyAttendance(){
 const d=document.getElementById("dateFilter")?.value||today();
 const cl=document.getElementById("attendanceClassFilter")?.value||"";
 const st=document.getElementById("statusFilter")?.value||"";
 const arr=Object.values(attendance[d]||{})
   .map(raw=>({masuk:getMasuk(raw),pulang:raw?.pulang}))
   .filter(x=>x.masuk && (!x.masuk.type || x.masuk.type!=="guru"))
   .filter(x=>(!cl||x.masuk.className===cl)&&(!st||x.masuk.status===st))
   .sort((a,b)=>(a.masuk?.className||"").localeCompare(b.masuk?.className||"", "id") || (a.masuk?.name||"").localeCompare(b.masuk?.name||"", "id"));
 const rows=arr.map((x,i)=>`<tr><td>${i+1}</td><td>${esc(x.masuk?.name||"")}</td><td>${esc(x.masuk?.nis||"")}</td><td>${esc(x.masuk?.className||"")}</td><td>${esc(x.masuk?.status||"")}</td><td>${esc(x.masuk?.time||"-")}</td><td>${esc(x.pulang?.time||"-")}</td></tr>`).join("");
 const filterInfo=[cl?`Kelas: ${esc(cl)}`:"Semua Kelas",st?`Status: ${esc(st)}`:"Semua Status"].join(" • ");
 const w=window.open("","_blank","width=1000,height=800");
 if(!w)return toast("Popup diblokir browser. Izinkan popup untuk mencetak.");
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Rekap Absensi ${esc(d)}</title><style>
@page{size:A4 portrait;margin:12mm}body{font-family:Arial,sans-serif;color:#111;font-size:12px}h1{font-size:20px;margin:0 0 4px;text-align:center}h2{font-size:15px;margin:0 0 12px;text-align:center;font-weight:normal}.meta{margin:12px 0;display:flex;justify-content:space-between;gap:10px;border-bottom:1px solid #bbb;padding-bottom:8px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #555;padding:6px 5px}th{background:#eee;text-align:center}td:first-child{text-align:center;width:32px}td:nth-child(5),td:nth-child(6),td:nth-child(7){text-align:center}.footer{margin-top:28px;display:flex;justify-content:flex-end}.sign{width:220px;text-align:center;line-height:1.5}.sign-space{height:55px}</style></head><body><h1>${esc(settings.schoolName||"MTs Miftahul Ulum Pronojiwo")}</h1><h2>REKAP ABSENSI SISWA — ${esc(d)}</h2><div class="meta"><span>${filterInfo}</span><span>Total tercatat: ${arr.length} siswa</span></div><table><thead><tr><th>No</th><th>Nama</th><th>NIS</th><th>Kelas</th><th>Status</th><th>Masuk</th><th>Pulang</th></tr></thead><tbody>${rows||'<tr><td colspan="7" style="text-align:center">Tidak ada data absensi</td></tr>'}</tbody></table><div class="footer"><div class="sign">Mengetahui,<br>Kepala Madrasah<div class="sign-space"></div><b>________________________</b></div></div><script>window.onload=()=>{window.print();setTimeout(()=>window.close(),700)}<\/script></body></html>`);
 w.document.close();
}

function renderAttendance(){
 ensureDailyPrintButton();
 const d=$("dateFilter").value||today(),cl=$("attendanceClassFilter").value,st=$("statusFilter").value;
 const arr=Object.values(attendance[d]||{}).map(raw=>({raw,masuk:getMasuk(raw),pulang:raw?.pulang})).filter(x=>!x.masuk?.type||x.masuk.type!=="guru").filter(x=>(!cl||x.masuk?.className===cl)&&(!st||x.masuk?.status===st)).sort((a,b)=>(a.masuk?.time||"").localeCompare(b.masuk?.time||""));
 $("attendanceTable").innerHTML=`<table><thead><tr><th>Masuk</th><th>Nama</th><th>NIS</th><th>Kelas</th><th>Status</th><th>Pulang</th><th>Petugas</th></tr></thead><tbody>${arr.map(x=>`<tr><td>${esc(x.masuk?.time||"-")}</td><td>${esc(x.masuk?.name||"")}</td><td>${esc(x.masuk?.nis||"")}</td><td>${esc(x.masuk?.className||"")}</td><td>${esc(x.masuk?.status||"")}</td><td>${esc(x.pulang?.time||"-")}</td><td>${esc(x.masuk?.by||"")}</td></tr>`).join("")}</tbody></table>`;
}

$("dateFilter").value=today();$("dateFilter").onchange=renderAttendance;$("attendanceClassFilter").onchange=renderAttendance;$("statusFilter").onchange=renderAttendance;
$("exportBtn").onclick=()=>{
 const d=$("dateFilter").value||today(),rows=Object.values(attendance[d]||{}).map(raw=>({masuk:getMasuk(raw),pulang:raw?.pulang}));
 const head=["Tanggal","Masuk","Pulang","Nama","NIS","Kelas","Status","Petugas Masuk","Petugas Pulang"];
 const csv=[head,...rows.map(x=>[d,x.masuk?.time||"",x.pulang?.time||"",x.masuk?.name||"",x.masuk?.nis||"",x.masuk?.className||"",x.masuk?.status||"",x.masuk?.by||"",x.pulang?.by||""])].map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n");
 const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`rekap-absensi-${d}.csv`;a.click();URL.revokeObjectURL(url);
};


// ===== ABSENSI GURU =====
function ensureTeacherUI(){
 const app=document.getElementById("appView"); if(!app)return;
 const tabs=app.querySelector(".tabs");

 // Pastikan hanya ada SATU tombol Guru.
 const teacherTabs=[...app.querySelectorAll('.tab[data-tab="teachers"]')];
 const teacherTab=teacherTabs[0]||null;
 teacherTabs.slice(1).forEach(x=>x.remove());

 if(document.getElementById("teachers")){
   // Bersihkan panel Guru duplikat dari versi sebelumnya.
   const panels=[...app.querySelectorAll('.panel#teachers')];
   panels.slice(1).forEach(x=>x.remove());
   if(teacherTab){
     teacherTab.style.display=currentRole==="admin"?"":"none";
     teacherTab.onclick=()=>showTab("teachers");
   } else if(tabs){
     const b=document.createElement("button");
     b.type="button"; b.className="tab"; b.dataset.tab="teachers"; b.textContent="Guru";
     b.style.display=currentRole==="admin"?"":"none";
     b.onclick=()=>showTab("teachers");
     tabs.appendChild(b);
   }
   renderTeachers(); renderTeacherAttendance();
   return;
 }

 if(tabs){
   const b=document.createElement("button");
   b.type="button"; b.className="tab"; b.dataset.tab="teachers"; b.textContent="Guru";
   b.style.display=currentRole==="admin"?"":"none";
   tabs.appendChild(b);
   b.onclick=()=>showTab("teachers");
 }

 const panel=document.createElement("section"); panel.className="panel"; panel.id="teachers";
 panel.innerHTML=`<div class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div><h2>👨‍🏫 Data Guru</h2><p>Kelola guru dan kode QR/barcode absensi.</p></div><button type="button" id="newTeacherBtn">+ Tambah Guru</button></div><div id="teacherForm" class="hidden" style="margin-top:15px"><input type="hidden" id="teacherId"><div style="display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(180px,1fr))"><input id="teacherNip" placeholder="NIP"><input id="teacherName" placeholder="Nama guru"><input id="teacherPhone" placeholder="No. WhatsApp"><input id="teacherCode" placeholder="Kode / QR"></div><div style="margin-top:10px;display:flex;gap:8px"><button type="button" id="saveTeacherBtn">Simpan</button><button type="button" class="secondary" id="cancelTeacherBtn">Batal</button></div></div><div id="teachersTable" style="margin-top:18px"></div></div><div class="card" style="margin-top:16px"><h2>📋 Rekap Absensi Guru</h2><div style="display:flex;gap:8px;flex-wrap:wrap;align-items:end"><label>Tanggal<input type="date" id="teacherDateFilter"></label><button type="button" class="secondary" id="teacherRefreshBtn">Tampilkan</button><button type="button" class="secondary" id="teacherExportBtn">Export CSV</button></div><div id="teacherAttendanceTable" style="margin-top:14px"></div></div>`;
 app.appendChild(panel);
 document.getElementById("newTeacherBtn").onclick=()=>{document.getElementById("teacherForm").classList.remove("hidden");document.getElementById("teacherId").value="";document.getElementById("teacherNip").value="";document.getElementById("teacherName").value="";document.getElementById("teacherPhone").value="";document.getElementById("teacherCode").value=""};
 document.getElementById("cancelTeacherBtn").onclick=()=>document.getElementById("teacherForm").classList.add("hidden");
 document.getElementById("saveTeacherBtn").onclick=saveTeacher;
 document.getElementById("teacherRefreshBtn").onclick=renderTeacherAttendance;
 document.getElementById("teacherDateFilter").value=today();
 document.getElementById("teacherDateFilter").onchange=renderTeacherAttendance;
 document.getElementById("teacherExportBtn").onclick=exportTeacherAttendance;
 renderTeachers();renderTeacherAttendance();
}
async function saveTeacher(){
 if(currentRole!=="admin")return toast("Hanya Admin yang dapat mengelola guru.");
 const id=document.getElementById("teacherId").value||db.ref("teachers").push().key;
 const name=document.getElementById("teacherName").value.trim(),nip=document.getElementById("teacherNip").value.trim(),phone=document.getElementById("teacherPhone").value.trim(),code=document.getElementById("teacherCode").value.trim()||("GURU-"+id.slice(-8).toUpperCase());
 if(!name)return toast("Nama guru wajib diisi.");
 const wasEdit=!!document.getElementById("teacherId").value; await db.ref("teachers/"+id).set({id,name,nip,phone,code,updatedAt:Date.now()});
 await logActivity(wasEdit?"EDIT_GURU":"TAMBAH_GURU", `${name}${nip?" • NIP "+nip:""}`, id); document.getElementById("teacherForm").classList.add("hidden");toast("Data guru tersimpan.");renderTeachers();
}
function renderTeachers(){
 const arr=Object.values(teachers).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),"id"));
 const box=document.getElementById("teachersTable"); if(!box)return;
 box.innerHTML=`<table><thead><tr><th>Nama</th><th>NIP</th><th>Kode</th><th>Aksi</th></tr></thead><tbody>${arr.map(g=>`<tr><td>${esc(g.name)}</td><td>${esc(g.nip||"-")}</td><td>${esc(g.code)}</td><td><button type="button" class="secondary" onclick="editTeacher('${g.id}')">Edit</button> <button type="button" class="secondary" onclick="printTeacherCode('${g.id}')">QR</button> <button type="button" class="secondary" onclick="deleteTeacher('${g.id}')">Hapus</button></td></tr>`).join("")||`<tr><td colspan="4">Belum ada data guru.</td></tr>`}</tbody></table>`;
}
window.editTeacher=id=>{const g=teachers[id];if(!g)return;document.getElementById("teacherForm").classList.remove("hidden");document.getElementById("teacherId").value=id;document.getElementById("teacherNip").value=g.nip||"";document.getElementById("teacherName").value=g.name||"";document.getElementById("teacherPhone").value=g.phone||"";document.getElementById("teacherCode").value=g.code||""};
window.deleteTeacher=async id=>{if(currentRole!=="admin")return;const g=teachers[id];if(confirm("Hapus guru?")){await db.ref("teachers/"+id).remove();await logActivity("HAPUS_GURU", g?.name||id, id)}};
window.printTeacherCode=id=>{const g=teachers[id];if(!g)return;const w=window.open("","_blank");w.document.write(`<html><head><title>Kartu Guru</title><style>body{text-align:center;font-family:Arial;padding:30px}.card{width:320px;margin:auto;border:1px solid #ddd;border-radius:16px;padding:22px}</style></head><body><div class="card"><h2>${esc(settings.schoolName)}</h2><h3>${esc(g.name)}</h3><p>NIP: ${esc(g.nip||"-")}</p><div id="qr"></div><b>${esc(g.code)}</b><p>Scan QR ini untuk absensi guru.</p><button onclick="window.print()">Cetak</button></div><script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script><script>new QRCode(document.getElementById('qr'),{text:${JSON.stringify(g.code)},width:190,height:190});<\/script></body></html>`);w.document.close()};
function renderTeacherAttendance(){
 const d=document.getElementById("teacherDateFilter")?.value||today(),box=document.getElementById("teacherAttendanceTable");if(!box)return;
 const rows=Object.values(attendance[d]||{}).filter(raw=>raw?.masuk?.type==="guru").map(raw=>({masuk:raw.masuk,pulang:raw.pulang})).sort((a,b)=>(a.masuk?.time||"").localeCompare(b.masuk?.time||""));
 box.innerHTML=`<table><thead><tr><th>Masuk</th><th>Nama</th><th>NIP</th><th>Pulang</th><th>Petugas</th></tr></thead><tbody>${rows.map(x=>`<tr><td>${esc(x.masuk?.time||"-")}</td><td>${esc(x.masuk?.name||"")}</td><td>${esc(x.masuk?.nip||"")}</td><td>${esc(x.pulang?.time||"-")}</td><td>${esc(x.masuk?.by||"")}</td></tr>`).join("")||`<tr><td colspan="5">Belum ada absensi guru.</td></tr>`}</tbody></table>`;
}
function exportTeacherAttendance(){
 const d=document.getElementById("teacherDateFilter")?.value||today(),rows=Object.values(attendance[d]||{}).filter(raw=>raw?.masuk?.type==="guru");
 const head=["Tanggal","Masuk","Pulang","Nama","NIP","Petugas Masuk","Petugas Pulang"];const csv=[head,...rows.map(raw=>[d,raw.masuk?.time||"",raw.pulang?.time||"",raw.masuk?.name||"",raw.masuk?.nip||"",raw.masuk?.by||"",raw.pulang?.by||""])].map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n");const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`rekap-guru-${d}.csv`;a.click();URL.revokeObjectURL(url);
}

$("saveSettingsBtn").onclick=async()=>{settings.schoolName=$("schoolName").value.trim()||settings.schoolName;settings.lateAfter=$("lateAfter").value||"07:15";await db.ref("settings").set(settings); await logActivity("UBAH_PENGATURAN", `${settings.schoolName} • Batas terlambat ${settings.lateAfter}`); toast("Pengaturan disimpan")};
$("refreshDashboard").onclick=renderDashboard;
/* =========================
   REKAP BULANAN v1.2 - TAMPILAN RAPI
   ========================= */
(function initMonthlyRecap(){
  function monthNow(){ return today().slice(0,7); }

  function getMonthDates(month){
    const out=[];
    if(!/^\d{4}-\d{2}$/.test(month)) return out;
    const [y,m]=month.split('-').map(Number);
    const days=new Date(y,m,0).getDate();
    for(let d=1;d<=days;d++) out.push(`${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`);
    return out;
  }

  function monthlyRows(){
    const month=$("monthlyMonth")?.value || monthNow();
    const cls=$("monthlyClass")?.value || "";
    const dates=getMonthDates(month);
    return Object.values(students)
      .filter(s=>!cls || s.className===cls)
      .map(s=>{
        let hadir=0, terlambat=0, izin=0, sakit=0, pulang=0, tercatat=0;
        dates.forEach(day=>{
          const entry=getAttendanceEntry(day,s.id);
          const a=getMasuk(entry);
          if(!a) return;
          tercatat++;
          if(a.status==="Hadir") hadir++;
          if(a.status==="Terlambat") terlambat++;
          if(a.status==="Izin") izin++;
          if(a.status==="Sakit") sakit++;
          if(entry?.pulang?.time) pulang++;
        });
        const efektif=hadir+terlambat+izin+sakit;
        const persen=efektif ? Math.round(((hadir+terlambat)/efektif)*100) : 0;
        return {id:s.id,name:s.name,nis:s.nis,className:s.className,hadir,terlambat,izin,sakit,pulang,tercatat,persen};
      })
      .sort((a,b)=>a.name.localeCompare(b.name,"id"));
  }

  function renderMonthlyRecap(){
    const box=$("monthlyRecapTable");
    if(!box) return;
    const rows=monthlyRows();
    const total={hadir:0,terlambat:0,izin:0,sakit:0,pulang:0,tercatat:0};
    rows.forEach(r=>Object.keys(total).forEach(k=>total[k]+=r[k]||0));
    const totalEfektif=total.hadir+total.terlambat+total.izin+total.sakit;
    const totalPersen=totalEfektif ? Math.round(((total.hadir+total.terlambat)/totalEfektif)*100) : 0;

    $("monthlySummary").innerHTML=`
      <div class="monthly-card"><b>${rows.length}</b><span>Siswa</span></div>
      <div class="monthly-card"><b>${total.hadir}</b><span>Hadir</span></div>
      <div class="monthly-card"><b>${total.terlambat}</b><span>Terlambat</span></div>
      <div class="monthly-card"><b>${total.izin}</b><span>Izin</span></div>
      <div class="monthly-card"><b>${total.sakit}</b><span>Sakit</span></div>
      <div class="monthly-card"><b>${total.pulang}</b><span>Pulang</span></div>
      <div class="monthly-card"><b>${totalPersen}%</b><span>Kehadiran</span></div>`;

    box.innerHTML=`<div class="monthly-table-wrap"><table class="monthly-table"><thead><tr>
      <th>No</th><th>Nama</th><th>NIS</th><th>Kelas</th><th>Hadir</th><th>Terlambat</th><th>Izin</th><th>Sakit</th><th>Pulang</th><th>Tercatat</th><th>Kehadiran</th>
    </tr></thead><tbody>${rows.length?rows.map((r,i)=>`<tr>
      <td>${i+1}</td><td class="monthly-name">${esc(r.name)}</td><td>${esc(r.nis||"-")}</td><td><span class="monthly-class">${esc(r.className||"-")}</span></td>
      <td class="num hadir">${r.hadir}</td><td class="num terlambat">${r.terlambat}</td><td class="num izin">${r.izin}</td><td class="num sakit">${r.sakit}</td><td class="num pulang">${r.pulang}</td><td class="num">${r.tercatat}</td><td class="num persen">${r.persen}%</td>
    </tr>`).join(""):`<tr><td colspan="11" class="monthly-empty">Belum ada data rekap untuk pilihan bulan/kelas ini.</td></tr>`}</tbody></table></div>`;
  }

  function exportMonthlyRecap(){
    const month=$("monthlyMonth")?.value||monthNow(),rows=monthlyRows();
    const head=["Bulan","Nama","NIS","Kelas","Hadir","Terlambat","Izin","Sakit","Pulang","Hari Tercatat","Kehadiran"];
    const csv=[head,...rows.map(r=>[month,r.name,r.nis||"",r.className||"",r.hadir,r.terlambat,r.izin,r.sakit,r.pulang,r.tercatat,r.persen+"%"])]
      .map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n");
    const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");
    a.href=url;a.download=`rekap-bulanan-${month}.csv`;a.click();URL.revokeObjectURL(url);
  }

  function printMonthlyRecap(){
    const month=$("monthlyMonth")?.value||monthNow(),rows=monthlyRows();
    const w=window.open("","_blank");
    if(!w)return toast("Izinkan pop-up untuk mencetak rekap.");
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Rekap Bulanan ${esc(month)}</title><style>
      body{font-family:Arial,sans-serif;padding:20px;color:#111}h2{margin:0 0 4px}p{margin:0 0 16px;color:#555}
      table{width:100%;border-collapse:collapse;font-size:10px}th,td{border:1px solid #aaa;padding:6px;text-align:center}th{background:#eee}td:nth-child(2){text-align:left}
      @media print{button{display:none}}
    </style></head><body><h2>${esc(settings.schoolName)}</h2><p>Rekap Absensi Bulanan: ${esc(month)}</p><table><thead><tr><th>No</th><th>Nama</th><th>NIS</th><th>Kelas</th><th>Hadir</th><th>Terlambat</th><th>Izin</th><th>Sakit</th><th>Pulang</th><th>Tercatat</th><th>Kehadiran</th></tr></thead><tbody>
    ${rows.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.name)}</td><td>${esc(r.nis||"-")}</td><td>${esc(r.className||"-")}</td><td>${r.hadir}</td><td>${r.terlambat}</td><td>${r.izin}</td><td>${r.sakit}</td><td>${r.pulang}</td><td>${r.tercatat}</td><td>${r.persen}%</td></tr>`).join("")}
    </tbody></table><script>window.print();<\/script></body></html>`);
    w.document.close();
  }

  function injectMonthlyStyle(){
    if($("monthlyRecapStyle")) return;
    const style=document.createElement("style");
    style.id="monthlyRecapStyle";
    style.textContent=`
      #monthlyRecapBox{margin-top:24px;padding:20px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;box-shadow:0 6px 20px rgba(0,0,0,.05)}
      #monthlyRecapBox .monthly-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px}
      #monthlyRecapBox .monthly-title{margin:0;font-size:20px;font-weight:700}
      #monthlyRecapBox .monthly-subtitle{margin:4px 0 0;color:#6b7280;font-size:13px}
      #monthlyRecapBox .monthly-filter{display:flex;gap:10px;flex-wrap:wrap;align-items:end;padding:14px;border-radius:12px;background:#f7f8fa}
      #monthlyRecapBox .monthly-filter label{font-size:12px;font-weight:600;color:#4b5563}
      #monthlyRecapBox .monthly-filter input,#monthlyRecapBox .monthly-filter select{display:block;margin-top:5px;min-width:145px;padding:9px 10px;border:1px solid #d1d5db;border-radius:9px;background:#fff}
      #monthlyRecapBox .monthly-actions{display:flex;gap:8px;flex-wrap:wrap}
      #monthlyRecapBox .monthly-summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:9px;margin:14px 0}
      #monthlyRecapBox .monthly-card{padding:13px 10px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa;text-align:center}
      #monthlyRecapBox .monthly-card b{display:block;font-size:20px;line-height:1.1}
      #monthlyRecapBox .monthly-card span{display:block;margin-top:4px;font-size:11px;color:#6b7280}
      #monthlyRecapBox .monthly-table-wrap{overflow:auto;border:1px solid #e5e7eb;border-radius:12px}
      #monthlyRecapBox .monthly-table{width:100%;min-width:980px;border-collapse:collapse;font-size:12px}
      #monthlyRecapBox .monthly-table th{position:sticky;top:0;background:#f3f4f6;color:#374151;font-weight:700;white-space:nowrap}
      #monthlyRecapBox .monthly-table th,#monthlyRecapBox .monthly-table td{padding:10px 9px;border-bottom:1px solid #edf0f2;text-align:center}
      #monthlyRecapBox .monthly-table tbody tr:hover{background:#fafafa}
      #monthlyRecapBox .monthly-table .monthly-name{text-align:left;font-weight:600;min-width:180px}
      #monthlyRecapBox .monthly-class{display:inline-block;padding:3px 7px;border-radius:999px;background:#f0f1f3}
      #monthlyRecapBox .monthly-table .num{font-weight:600}
      #monthlyRecapBox .monthly-table .hadir{font-weight:700}
      #monthlyRecapBox .monthly-table .persen{font-weight:700}
      #monthlyRecapBox .monthly-empty{padding:25px!important;color:#6b7280}
      @media(max-width:600px){
        #monthlyRecapBox{padding:14px;border-radius:12px}
        #monthlyRecapBox .monthly-title{font-size:18px}
        #monthlyRecapBox .monthly-filter{align-items:stretch}
        #monthlyRecapBox .monthly-filter label{width:100%}
        #monthlyRecapBox .monthly-filter input,#monthlyRecapBox .monthly-filter select{width:100%;box-sizing:border-box}
        #monthlyRecapBox .monthly-actions{width:100%}
      }
    `;
    document.head.appendChild(style);
  }

  function ensureMonthlyUI(){
    if($("monthlyRecapBox")) return;
    const table=$("attendanceTable");
    if(!table) return;
    injectMonthlyStyle();
    const box=document.createElement("section");
    box.id="monthlyRecapBox";
    box.innerHTML=`
      <div class="monthly-head">
        <div><h3 class="monthly-title">📊 Rekap Bulanan</h3><p class="monthly-subtitle">Ringkasan kehadiran siswa berdasarkan bulan dan kelas.</p></div>
      </div>
      <div class="monthly-filter">
        <label>Bulan<input type="month" id="monthlyMonth" value="${monthNow()}"></label>
        <label>Kelas<select id="monthlyClass"><option value="">Semua Kelas</option></select></label>
        <div class="monthly-actions">
          <button type="button" class="secondary" id="monthlyRefreshBtn">Tampilkan</button>
          <button type="button" class="secondary" id="monthlyExportBtn">Export CSV</button>
          <button type="button" class="secondary" id="monthlyPrintBtn">Cetak</button>
        </div>
      </div>
      <div id="monthlySummary" class="monthly-summary"></div>
      <div id="monthlyRecapTable"></div>`;
    table.parentNode.insertBefore(box,table.nextSibling);

    const opts=Object.values(classes).sort((a,b)=>a.name.localeCompare(b.name,"id")).map(c=>`<option value="${esc(c.name)}">${esc(c.name)}</option>`).join("");
    $("monthlyClass").innerHTML='<option value="">Semua Kelas</option>'+opts;
    $("monthlyRefreshBtn").onclick=renderMonthlyRecap;
    $("monthlyMonth").onchange=renderMonthlyRecap;
    $("monthlyClass").onchange=renderMonthlyRecap;
    $("monthlyExportBtn").onclick=exportMonthlyRecap;
    $("monthlyPrintBtn").onclick=printMonthlyRecap;
    renderMonthlyRecap();
  }

  const oldRenderAttendance=window.renderAttendance;
  window.renderAttendance=function(){
    if(typeof oldRenderAttendance==="function") oldRenderAttendance();
    ensureMonthlyUI();
    renderMonthlyRecap();
  };

  const oldRefreshClassOptions=window.refreshClassOptions;
  if(typeof oldRefreshClassOptions==="function"){
    window.refreshClassOptions=function(){
      oldRefreshClassOptions();
      const select=$("monthlyClass");
      if(select){
        const current=select.value;
        select.innerHTML='<option value="">Semua Kelas</option>'+Object.values(classes).sort((a,b)=>a.name.localeCompare(b.name,"id")).map(c=>`<option value="${esc(c.name)}">${esc(c.name)}</option>`).join("");
        select.value=current;
      }
    };
  }

  setTimeout(ensureMonthlyUI,300);
})();

/* v2.1 - REKAP ABSENSI PER KELAS */
(function(){
  function classMonthNow(){ return new Date().toISOString().slice(0,7); }
  function classDaysInMonth(month){ const [y,m]=month.split('-').map(Number); return new Date(y,m,0).getDate(); }
  function classRecapRows(){
    const month=$("classRecapMonth")?.value||classMonthNow(), filter=$("classRecapFilter")?.value||"", days=classDaysInMonth(month), map={};
    Object.values(classes).forEach(c=>{const name=String(c.name||"");if(name&&(!filter||name===filter))map[name]={className:name,siswa:0,hadir:0,terlambat:0,izin:0,sakit:0,alpa:0,pulang:0,tercatat:0};});
    Object.values(students).forEach(s=>{const cls=String(s.className||"");if(!cls||filter&&cls!==filter)return;if(!map[cls])map[cls]={className:cls,siswa:0,hadir:0,terlambat:0,izin:0,sakit:0,alpa:0,pulang:0,tercatat:0};map[cls].siswa++;});
    for(let d=1;d<=days;d++){
      const date=month+'-'+String(d).padStart(2,'0');
      Object.values(students).forEach(s=>{const cls=String(s.className||"");if(!map[cls])return;const e=getAttendanceEntry(date,s.id),m=getMasuk(e);if(!m)return;map[cls].tercatat++;const st=String(m.status||"").toLowerCase();if(st==="hadir")map[cls].hadir++;else if(st==="terlambat")map[cls].terlambat++;else if(st==="izin")map[cls].izin++;else if(st==="sakit")map[cls].sakit++;else if(st==="alpa")map[cls].alpa++;if(e?.pulang)map[cls].pulang++;});
    }
    return Object.values(map).sort((a,b)=>a.className.localeCompare(b.className,'id')).map(r=>{const efektif=r.hadir+r.terlambat+r.izin+r.sakit+r.alpa;r.persen=efektif?Math.round(((r.hadir+r.terlambat)/efektif)*100):0;return r;});
  }
  function renderClassRecap(){
    if(!$("classRecapBox"))return;const rows=classRecapRows();
    const total=rows.reduce((a,r)=>{a.siswa+=r.siswa;a.hadir+=r.hadir;a.terlambat+=r.terlambat;a.izin+=r.izin;a.sakit+=r.sakit;a.alpa+=r.alpa;a.pulang+=r.pulang;a.tercatat+=r.tercatat;return a;},{siswa:0,hadir:0,terlambat:0,izin:0,sakit:0,alpa:0,pulang:0,tercatat:0});
    const efektif=total.hadir+total.terlambat+total.izin+total.sakit+total.alpa,persen=efektif?Math.round(((total.hadir+total.terlambat)/efektif)*100):0;
    $("classRecapSummary").innerHTML='<div class="class-card"><b>'+total.siswa+'</b><span>Siswa</span></div><div class="class-card"><b>'+total.hadir+'</b><span>Hadir</span></div><div class="class-card"><b>'+total.terlambat+'</b><span>Terlambat</span></div><div class="class-card"><b>'+total.izin+'</b><span>Izin</span></div><div class="class-card"><b>'+total.sakit+'</b><span>Sakit</span></div><div class="class-card"><b>'+total.alpa+'</b><span>Alpa</span></div><div class="class-card"><b>'+persen+'%</b><span>Kehadiran</span></div>';
    $("classRecapTable").innerHTML=rows.length?'<div class="class-table-wrap"><table class="class-table"><thead><tr><th>No</th><th>Kelas</th><th>Siswa</th><th>Hadir</th><th>Terlambat</th><th>Izin</th><th>Sakit</th><th>Alpa</th><th>Pulang</th><th>Tercatat</th><th>Kehadiran</th></tr></thead><tbody>'+rows.map((r,i)=>'<tr><td>'+(i+1)+'</td><td class="class-name">'+esc(r.className)+'</td><td>'+r.siswa+'</td><td>'+r.hadir+'</td><td>'+r.terlambat+'</td><td>'+r.izin+'</td><td>'+r.sakit+'</td><td>'+r.alpa+'</td><td>'+r.pulang+'</td><td>'+r.tercatat+'</td><td class="class-percent">'+r.persen+'%</td></tr>').join('')+'</tbody></table></div>':'<div class="class-empty">Belum ada data untuk periode tersebut.</div>';
  }
  function exportClassRecap(){
    const month=$("classRecapMonth")?.value||classMonthNow(),rows=classRecapRows(),head=["Bulan","Kelas","Jumlah Siswa","Hadir","Terlambat","Izin","Sakit","Alpa","Pulang","Hari Tercatat","Kehadiran"];
    const csv=[head,...rows.map(r=>[month,r.className,r.siswa,r.hadir,r.terlambat,r.izin,r.sakit,r.alpa,r.pulang,r.tercatat,r.persen+"%"])] .map(r=>r.map(v=>'"'+String(v??"").replaceAll('"','""')+'"').join(',')).join('\n');
    const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download='rekap-per-kelas-'+month+'.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
  }
  function printClassRecap(){
    const month=$("classRecapMonth")?.value||classMonthNow(),rows=classRecapRows(),w=window.open("","_blank");if(!w)return toast("Izinkan pop-up untuk mencetak rekap.");
    w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>Rekap Per Kelas '+esc(month)+'</title><style>body{font-family:Arial,sans-serif;padding:20px;color:#111}h2{margin:0 0 4px}p{margin:0 0 16px;color:#555}table{width:100%;border-collapse:collapse;font-size:10px}th,td{border:1px solid #999;padding:6px;text-align:center}th{background:#eee}td:nth-child(2){font-weight:700}@media print{button{display:none}}</style></head><body><h2>'+esc(settings.schoolName)+'</h2><p>Rekap Absensi Per Kelas: '+esc(month)+'</p><table><thead><tr><th>No</th><th>Kelas</th><th>Siswa</th><th>Hadir</th><th>Terlambat</th><th>Izin</th><th>Sakit</th><th>Alpa</th><th>Pulang</th><th>Tercatat</th><th>Kehadiran</th></tr></thead><tbody>'+rows.map((r,i)=>'<tr><td>'+(i+1)+'</td><td>'+esc(r.className)+'</td><td>'+r.siswa+'</td><td>'+r.hadir+'</td><td>'+r.terlambat+'</td><td>'+r.izin+'</td><td>'+r.sakit+'</td><td>'+r.alpa+'</td><td>'+r.pulang+'</td><td>'+r.tercatat+'</td><td>'+r.persen+'%</td></tr>').join('')+'</tbody></table><script>window.print();<\/script></body></html>');w.document.close();
  }
  function injectClassStyle(){if($("classRecapStyle"))return;const st=document.createElement("style");st.id="classRecapStyle";st.textContent='#classRecapBox{margin-top:20px;padding:20px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;box-shadow:0 6px 20px rgba(0,0,0,.04)}#classRecapBox .class-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:14px}.class-title{margin:0;font-size:20px}.class-subtitle{margin:4px 0 0;color:#6b7280;font-size:13px}.class-filter{display:flex;gap:10px;flex-wrap:wrap;align-items:end;padding:14px;border-radius:12px;background:#f7f8fa}.class-filter label{font-size:12px;font-weight:600;color:#4b5563}.class-filter input,.class-filter select{display:block;margin-top:5px;min-width:145px;padding:9px 10px;border:1px solid #d1d5db;border-radius:9px;background:#fff}.class-actions{display:flex;gap:8px;flex-wrap:wrap}.class-summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:9px;margin:14px 0}.class-card{padding:13px 10px;border:1px solid #e5e7eb;border-radius:12px;background:#fafafa;text-align:center}.class-card b{display:block;font-size:20px}.class-card span{font-size:11px;color:#6b7280}.class-table-wrap{overflow:auto;border:1px solid #e5e7eb;border-radius:12px}.class-table{width:100%;min-width:980px;border-collapse:collapse;font-size:12px}.class-table th,.class-table td{padding:10px 9px;border-bottom:1px solid #edf0f2;text-align:center}.class-table th{background:#f3f4f6;white-space:nowrap}.class-table .class-name{text-align:left;font-weight:700}.class-percent{font-weight:700}.class-empty{padding:24px;text-align:center;color:#6b7280}@media(max-width:600px){#classRecapBox{padding:14px}.class-filter{align-items:stretch}.class-filter label{width:100%}.class-filter input,.class-filter select{width:100%;box-sizing:border-box}.class-actions{width:100%}}';document.head.appendChild(st);}
  function ensureClassRecapUI(){
    if($("classRecapBox"))return;const anchor=$("monthlyRecapBox")||$("attendanceTable");if(!anchor)return;injectClassStyle();const box=document.createElement("section");box.id="classRecapBox";box.innerHTML='<div class="class-head"><div><h3 class="class-title">🏫 Rekap Absensi Per Kelas</h3><p class="class-subtitle">Ringkasan kehadiran setiap kelas berdasarkan bulan.</p></div></div><div class="class-filter"><label>Bulan<input type="month" id="classRecapMonth" value="'+classMonthNow()+'"></label><label>Kelas<select id="classRecapFilter"><option value="">Semua Kelas</option></select></label><div class="class-actions"><button type="button" class="secondary" id="classRecapShowBtn">Tampilkan</button><button type="button" class="secondary" id="classRecapExportBtn">Export CSV</button><button type="button" class="secondary" id="classRecapPrintBtn">Cetak</button></div></div><div id="classRecapSummary" class="class-summary"></div><div id="classRecapTable"></div>';anchor.parentNode.insertBefore(box,anchor.nextSibling);
    const fill=()=>{const sel=$("classRecapFilter"),cur=sel.value;sel.innerHTML='<option value="">Semua Kelas</option>'+Object.values(classes).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),'id')).map(c=>'<option value="'+esc(c.name)+'">'+esc(c.name)+'</option>').join('');sel.value=cur;};
    fill();$("classRecapShowBtn").onclick=renderClassRecap;$("classRecapMonth").onchange=renderClassRecap;$("classRecapFilter").onchange=renderClassRecap;$("classRecapExportBtn").onclick=exportClassRecap;$("classRecapPrintBtn").onclick=printClassRecap;renderClassRecap();
  }
  const prevRA=window.renderAttendance;window.renderAttendance=function(){if(typeof prevRA==='function')prevRA();ensureClassRecapUI();renderClassRecap();};
  const prevRC=window.refreshClassOptions;window.refreshClassOptions=function(){if(typeof prevRC==='function')prevRC();const sel=$("classRecapFilter");if(sel){const cur=sel.value;sel.innerHTML='<option value="">Semua Kelas</option>'+Object.values(classes).sort((a,b)=>String(a.name||"").localeCompare(String(b.name||""),'id')).map(c=>'<option value="'+esc(c.name)+'">'+esc(c.name)+'</option>').join('');sel.value=cur;}};
  setTimeout(ensureClassRecapUI,500);
})();

/* v2.4 - AKTIVITAS ABSENSI TERBARU */
(function(){
  function ensureRecentActivityUI(){
    if($('recentActivityBox')) return;
    const anchor=$('dashboardTrendBox')||$('dashboardExtraStats')||$('recentList');
    if(!anchor) return;
    if(!$('recentActivityStyle')){
      const st=document.createElement('style'); st.id='recentActivityStyle';
      st.textContent='#recentActivityBox{margin:18px 0;padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;box-shadow:0 5px 18px rgba(0,0,0,.04)}#recentActivityBox h3{margin:0 0 4px;font-size:19px}.recent-sub{margin:0 0 14px;color:#6b7280;font-size:13px}.recent-wrap{overflow:auto;border:1px solid #e5e7eb;border-radius:12px}.recent-table{width:100%;min-width:720px;border-collapse:collapse;font-size:12px}.recent-table th,.recent-table td{padding:9px 10px;border-bottom:1px solid #edf0f2;text-align:left}.recent-table th{background:#f3f4f6;white-space:nowrap}.recent-status{font-weight:700}.recent-empty{padding:22px;text-align:center;color:#6b7280}@media(max-width:600px){#recentActivityBox{padding:14px}}';
      document.head.appendChild(st);
    }
    const box=document.createElement('section'); box.id='recentActivityBox';
    box.innerHTML='<h3>🕘 Aktivitas Absensi Terbaru</h3><p class="recent-sub">Menampilkan hingga 10 absensi terakhir hari ini.</p><div id="recentActivityTable"></div>';
    anchor.parentNode.insertBefore(box,anchor.nextSibling);
    renderRecentActivity();
  }
  function renderRecentActivity(){
    if(!$('recentActivityTable')) return;
    const rows=[];
    const date=today();
    const day=attendance?.[date]||{};
    Object.entries(day).forEach(([id,e])=>{
      const m=getMasuk(e); if(!m||m.type==='guru') return;
      rows.push({time:m.time||'',name:m.name||students?.[id]?.name||id,nis:m.nis||students?.[id]?.nis||'',className:m.className||students?.[id]?.className||'',status:m.status||'',pulang:e?.pulang?.time||''});
    });
    Object.entries(day).forEach(([id,e])=>{
      const m=getMasuk(e); if(!m||m.type!=='guru') return;
      rows.push({time:m.time||'',name:m.name||id,nis:m.nip||'',className:'GURU',status:m.status||'Hadir',pulang:e?.pulang?.time||''});
    });
    rows.sort((a,b)=>String(b.time).localeCompare(String(a.time)));
    $('recentActivityTable').innerHTML=rows.length?'<div class="recent-wrap"><table class="recent-table"><thead><tr><th>No</th><th>Waktu</th><th>Nama</th><th>NIS/NIP</th><th>Kelas</th><th>Status</th><th>Pulang</th></tr></thead><tbody>'+rows.slice(0,10).map((r,i)=>'<tr><td>'+(i+1)+'</td><td>'+esc(r.time)+'</td><td><b>'+esc(r.name)+'</b></td><td>'+esc(r.nis)+'</td><td>'+esc(r.className)+'</td><td class="recent-status">'+esc(r.status)+'</td><td>'+esc(r.pulang)+'</td></tr>').join('')+'</tbody></table></div>':'<div class="recent-empty">Belum ada aktivitas absensi hari ini.</div>';
  }
  const prevRD=window.renderDashboard; window.renderDashboard=function(){if(typeof prevRD==='function')prevRD();ensureRecentActivityUI();renderRecentActivity();};
  const prevRA=window.renderAttendance; window.renderAttendance=function(){if(typeof prevRA==='function')prevRA();};
  setTimeout(ensureRecentActivityUI,700);
  setInterval(()=>{if(!$('appView')||$('appView').classList.contains('hidden'))return; if($('recentActivityBox'))renderRecentActivity();},15000);
})();
