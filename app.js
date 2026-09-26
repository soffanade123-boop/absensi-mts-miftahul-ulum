const $=id=>document.getElementById(id);
let students={}, classes={}, attendance={}, settings={schoolName:"MTs Miftahul Ulum Pronojiwo",lateAfter:"07:15"};
let selectedStudent=null, scanner=null, lastScanCode=null;

const today=()=>new Date().toISOString().slice(0,10);
const nowTime=()=>new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
const esc=s=>String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const toast=m=>{const t=$("toast");t.textContent=m;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)};
const key=s=>String(s).replace(/[.#$/[\]]/g,"_");

function showTab(id){
 document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 $(id).classList.add("active");document.querySelector(`[data-tab="${id}"]`).classList.add("active");
 if(id==="dashboard") renderDashboard(); if(id==="students") renderStudents(); if(id==="classes") renderClasses(); if(id==="attendance") renderAttendance();
}
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>showTab(b.dataset.tab));

let currentRole = "petugas";
console.log("ROLE SAAT INI:", currentRole);

auth.onAuthStateChanged(async user => {

  if (user) {

    $("loginView").classList.add("hidden");
    $("appView").classList.remove("hidden");

    const roleSnap = await db.ref("roles/" + user.uid).once("value");
    const roleData = roleSnap.val();

    currentRole = roleData === "petugas" ? "petugas" : "admin";
    console.log("ROLE FIREBASE:", currentRole);

    document.querySelector('[data-tab="students"]').style.display =
      currentRole === "admin" ? "" : "none";

    document.querySelector('[data-tab="classes"]').style.display =
      currentRole === "admin" ? "" : "none";

    document.querySelector('[data-tab="settings"]').style.display =
      currentRole === "admin" ? "" : "none";

    $("userEmail").textContent =
      (user.email || "") + " • " +
      (currentRole === "admin" ? "ADMIN" : "PETUGAS");

    await loadAll();

  } else {

    $("loginView").classList.remove("hidden");
    $("appView").classList.add("hidden");

  }

});
$("loginBtn").onclick=async()=>{try{await auth.signInWithEmailAndPassword($("loginEmail").value,$("loginPassword").value)}catch(e){$("loginMsg").textContent=e.message}};
$("logoutBtn").onclick=()=>auth.signOut();

async function loadAll(){
 const snap=await db.ref().once("value"), d=snap.val()||{};
 students=d.students||{}; classes=d.classes||{}; attendance=d.attendance||{}; settings={...settings,...(d.settings||{})};
 $("schoolName").value=settings.schoolName;$("lateAfter").value=settings.lateAfter;
 refreshClassOptions();renderDashboard();
 listenRealtime();
}
function listenRealtime(){
 db.ref("students").on("value",s=>{students=s.val()||{};refreshClassOptions();renderStudents();renderDashboard()});
 db.ref("classes").on("value",s=>{classes=s.val()||{};refreshClassOptions();renderClasses();renderStudents()});
 db.ref("attendance").on("value",s=>{attendance=s.val()||{};renderDashboard();renderAttendance()});
 db.ref("settings").on("value",s=>{settings={...settings,...(s.val()||{})}});
}

function refreshClassOptions(){
 const opts=Object.values(classes).sort((a,b)=>a.name.localeCompare(b.name,"id")).map(c=>`<option value="${esc(c.name)}">${esc(c.name)}</option>`).join("");
 $("studentClass").innerHTML=opts;
 $("studentClassFilter").innerHTML='<option value="">Semua Kelas</option>'+opts;
 $("attendanceClassFilter").innerHTML='<option value="">Semua Kelas</option>'+opts;
}

function renderDashboard(){
 const ids=Object.keys(students), day=attendance[today()]||{};
 let present=0,late=0;
 Object.values(day).forEach(a=>{if(a.status==="Hadir")present++;if(a.status==="Terlambat")late++});
 $("statStudents").textContent=ids.length;$("statPresent").textContent=present;$("statLate").textContent=late;
 $("statMissing").textContent=Math.max(0,ids.length-present-late);
 const rows=Object.values(day).sort((a,b)=>(b.timestamp||0)-(a.timestamp||0)).slice(0,20);
 $("recentList").innerHTML=rows.length?`<table><thead><tr><th>Waktu</th><th>Nama</th><th>Kelas</th><th>Status</th></tr></thead><tbody>${rows.map(a=>`<tr><td>${esc(a.time)}</td><td>${esc(a.name)}</td><td>${esc(a.className)}</td><td><span class="badge">${esc(a.status)}</span></td></tr>`).join("")}</tbody></table>`:"Belum ada absensi hari ini.";
}

function renderStudents(){
 const q=$("studentSearch").value.toLowerCase(), cl=$("studentClassFilter").value;
 const arr=Object.values(students).filter(s=>(!cl||s.className===cl)&&(!q||[s.name,s.nis,s.code,s.phone].join(" ").toLowerCase().includes(q))).sort((a,b)=>a.name.localeCompare(b.name,"id"));
 $("studentsTable").innerHTML=`<table><thead><tr><th>Nama</th><th>NIS</th><th>Kelas</th><th>WhatsApp</th><th>Barcode</th><th>Aksi</th></tr></thead><tbody>${arr.map(s=>`<tr><td>${esc(s.name)}</td><td>${esc(s.nis)}</td><td>${esc(s.className)}</td><td>${esc(s.phone||"-")}</td><td><code>${esc(s.code)}</code></td><td><div class="actions"><button class="secondary" onclick="editStudent('${s.id}')">Edit</button><button class="secondary" onclick="printCode('${s.id}')">Barcode</button><button class="secondary" onclick="deleteStudent('${s.id}')">Hapus</button></div></td></tr>`).join("")}</tbody></table>`;
}
$("studentSearch").oninput=renderStudents;$("studentClassFilter").onchange=renderStudents;
$("newStudentBtn").onclick=()=>{ $("studentForm").classList.remove("hidden");$("studentId").value="";$("studentNis").value="";$("studentName").value="";$("studentPhone").value="";$("studentClass").selectedIndex=0 };
$("cancelStudentBtn").onclick=()=>$("studentForm").classList.add("hidden");
$("saveStudentBtn").onclick=async()=>{
 const id=$("studentId").value||db.ref("students").push().key, old=students[id], code=old?.code||("MTU-"+id.slice(-8).toUpperCase());
 const obj={id,nis:$("studentNis").value.trim(),name:$("studentName").value.trim(),className:$("studentClass").value,phone:$("studentPhone").value.trim(),code,updatedAt:Date.now()};
 if(!obj.name||!obj.className)return toast("Nama dan kelas wajib diisi.");
 await db.ref("students/"+id).set(obj);$("studentForm").classList.add("hidden");toast("Data siswa tersimpan.");
};
window.editStudent=id=>{const s=students[id];$("studentForm").classList.remove("hidden");$("studentId").value=id;$("studentNis").value=s.nis||"";$("studentName").value=s.name||"";$("studentPhone").value=s.phone||"";$("studentClass").value=s.className};
window.deleteStudent=async id=>{if(confirm("Hapus siswa?"))await db.ref("students/"+id).remove()};
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
$("saveClassBtn").onclick=async()=>{const name=$("className").value.trim();if(!name)return;const id=$("classId").value||db.ref("classes").push().key;await db.ref("classes/"+id).set({id,name});$("classForm").classList.add("hidden");toast("Kelas tersimpan")};
window.editClass=id=>{$("classForm").classList.remove("hidden");$("classId").value=id;$("className").value=classes[id].name};
window.deleteClass=async id=>{if(confirm("Hapus kelas? Data siswa tidak ikut terhapus."))await db.ref("classes/"+id).remove()};

$("startScanBtn").onclick=async()=>{
 if(scanner)return;
 scanner=new Html5Qrcode("reader");
 try{
  await scanner.start({facingMode:"environment"},{fps:10,qrbox:{width:250,height:250}},onScan);
  $("scanMsg").textContent="Kamera aktif.";
 }catch(e){$("scanMsg").textContent="Kamera gagal dibuka. Pastikan HTTPS dan izin kamera aktif.";scanner=null}
};
$("stopScanBtn").onclick=async()=>{if(scanner){try{await scanner.stop()}catch{};scanner.clear();scanner=null;$("scanMsg").textContent="Kamera dihentikan."}};
async function onScan(decoded){
 if(decoded===lastScanCode)return;lastScanCode=decoded;setTimeout(()=>lastScanCode=null,1800);
 const s=Object.values(students).find(x=>x.code===decoded||x.nis===decoded||x.id===decoded);
 if(!s){$("scanResult").innerHTML=`Kode <b>${esc(decoded)}</b> tidak ditemukan.`;selectedStudent=null;return}
 selectedStudent=s;$("scanResult").innerHTML=`<b>${esc(s.name)}</b><br>NIS: ${esc(s.nis)}<br>Kelas: ${esc(s.className)}<br>Waktu: ${nowTime()}`;
 const late=settings.lateAfter && nowTime().slice(0,5)>settings.lateAfter;$("scanStatus").value=late?"Terlambat":"Hadir";
}
$("saveScanBtn").onclick=async()=>{
 if(!selectedStudent)return toast("Scan siswa terlebih dahulu.");
 const day=today(), id=selectedStudent.id;
 const existing=attendance[day]?.[id];
 if(existing)return toast("Siswa ini sudah absen hari ini.");
 const status=$("scanStatus").value;
 const data={studentId:id,name:selectedStudent.name,nis:selectedStudent.nis,className:selectedStudent.className,status,time:nowTime(),date:day,timestamp:Date.now(),by:auth.currentUser?.email||"petugas"};
 await db.ref(`attendance/${day}/${id}`).set(data);toast("Absensi tersimpan.");renderDashboard();
};
$("waScanBtn").onclick=()=>{if(!selectedStudent?.phone)return toast("Nomor WhatsApp siswa belum diisi.");const text=`ABSENSI ${settings.schoolName}\nNama: ${selectedStudent.name}\nKelas: ${selectedStudent.className}\nStatus: ${$("scanStatus").value}\nTanggal: ${today()}\nWaktu: ${nowTime()}`;window.open(`https://wa.me/${selectedStudent.phone.replace(/\D/g,"")}?text=${encodeURIComponent(text)}`,"_blank")};

function renderAttendance(){
 const d=$("dateFilter").value||today(),cl=$("attendanceClassFilter").value,st=$("statusFilter").value;
 const arr=Object.values(attendance[d]||{}).filter(a=>(!cl||a.className===cl)&&(!st||a.status===st)).sort((a,b)=>(a.time||"").localeCompare(b.time||""));
 $("attendanceTable").innerHTML=`<table><thead><tr><th>Waktu</th><th>Nama</th><th>NIS</th><th>Kelas</th><th>Status</th><th>Petugas</th></tr></thead><tbody>${arr.map(a=>`<tr><td>${esc(a.time)}</td><td>${esc(a.name)}</td><td>${esc(a.nis)}</td><td>${esc(a.className)}</td><td>${esc(a.status)}</td><td>${esc(a.by)}</td></tr>`).join("")}</tbody></table>`;
}
$("dateFilter").value=today();$("dateFilter").onchange=renderAttendance;$("attendanceClassFilter").onchange=renderAttendance;$("statusFilter").onchange=renderAttendance;
$("exportBtn").onclick=()=>{
 const d=$("dateFilter").value||today(),rows=Object.values(attendance[d]||{});
 const head=["Tanggal","Waktu","Nama","NIS","Kelas","Status","Petugas"];
 const csv=[head,...rows.map(a=>[a.date,a.time,a.name,a.nis,a.className,a.status,a.by])].map(r=>r.map(v=>`"${String(v??"").replaceAll('"','""')}"`).join(",")).join("\n");
 const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`rekap-absensi-${d}.csv`;a.click();URL.revokeObjectURL(url);
};
$("saveSettingsBtn").onclick=async()=>{settings.schoolName=$("schoolName").value.trim()||settings.schoolName;settings.lateAfter=$("lateAfter").value||"07:15";await db.ref("settings").set(settings);toast("Pengaturan disimpan")};
$("refreshDashboard").onclick=renderDashboard;
