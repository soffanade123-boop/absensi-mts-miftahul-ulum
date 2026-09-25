// app.js
import { db, auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

let currentUser = null;
let currentRole = "admin";
let scanner = null;
let scanRunning = false;

const $ = (id) => document.getElementById(id);

const isAdmin = () => currentRole === "admin";

/* =========================
   AUTH
========================= */

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    currentUser = null;
    currentRole = "admin";
    showLogin();
    return;
  }

  currentUser = user;

  try {
    const roleSnap = await db.ref("roles/" + user.uid).once("value");
    const roleData = roleSnap.val();

    // FIX:
    // Hanya UID yang benar-benar mempunyai role "petugas"
    // yang dianggap sebagai petugas.
    currentRole =
      roleData?.role === "petugas"
        ? "petugas"
        : "admin";

  } catch (error) {
    console.error("Gagal membaca role:", error);

    // Jika gagal membaca role, jangan menganggap petugas
    currentRole = "admin";
  }

  showApp();
  applyRoleUI();
  loadDashboard();
});

/* =========================
   LOGIN / LOGOUT
========================= */

function showLogin() {
  const loginPage = $("loginPage");
  const appPage = $("appPage");

  if (loginPage) loginPage.style.display = "";
  if (appPage) appPage.style.display = "none";
}

function showApp() {
  const loginPage = $("loginPage");
  const appPage = $("appPage");

  if (loginPage) loginPage.style.display = "none";
  if (appPage) appPage.style.display = "";
}

const loginForm = $("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = $("loginEmail")?.value.trim();
    const password = $("loginPassword")?.value;

    if (!email || !password) {
      alert("Email dan password wajib diisi.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      alert("Login gagal: " + error.message);
    }
  });
}

const logoutBtn = $("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
  });
}

/* =========================
   ROLE UI
========================= */

function applyRoleUI() {
  const adminOnly = [
    '[data-tab="students"]',
    '[data-tab="classes"]',
    '[data-tab="settings"]'
  ];

  adminOnly.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.style.display = isAdmin() ? "" : "none";
    });
  });

  // Tampilkan informasi role
  const roleLabel = $("userRole");

  if (roleLabel && currentUser) {
    roleLabel.textContent =
      currentRole === "admin"
        ? "ADMIN"
        : "PETUGAS";
  }

  const emailLabel = $("userEmail");

  if (emailLabel && currentUser) {
    emailLabel.textContent = currentUser.email || "";
  }
}

/* =========================
   TAB NAVIGATION
========================= */

document.querySelectorAll("[data-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.tab;

    // Petugas tidak boleh membuka halaman admin
    if (
      currentRole === "petugas" &&
      ["students", "classes", "settings"].includes(tab)
    ) {
      alert("Menu ini hanya dapat diakses oleh Admin.");
      return;
    }

    showTab(tab);
  });
});

function showTab(tabName) {
  if (
    currentRole === "petugas" &&
    ["students", "classes", "settings"].includes(tabName)
  ) {
    tabName = "dashboard";
  }

  document.querySelectorAll(".tab-page").forEach((page) => {
    page.style.display = "none";
  });

  const target = document.querySelector(
    `[data-page="${tabName}"]`
  );

  if (target) {
    target.style.display = "";
  }

  document.querySelectorAll("[data-tab]").forEach((btn) => {
    btn.classList.toggle(
      "active",
      btn.dataset.tab === tabName
    );
  });

  if (tabName === "dashboard") loadDashboard();
  if (tabName === "students") renderStudents();
  if (tabName === "classes") renderClasses();
  if (tabName === "attendance") renderAttendance();
}

/* =========================
   DASHBOARD
========================= */

async function loadDashboard() {
  try {
    const snap = await db.ref("students").once("value");
    const data = snap.val() || {};

    const total = Object.keys(data).length;

    const totalEl = $("totalStudents");

    if (totalEl) {
      totalEl.textContent = total;
    }

    const today = new Date();
    const dateKey = formatDate(today);

    const attSnap = await db
      .ref("attendance/" + dateKey)
      .once("value");

    const attendance = attSnap.val() || {};

    let hadir = 0;
    let terlambat = 0;
    let izin = 0;
    let sakit = 0;
    let alpa = 0;

    Object.values(attendance).forEach((item) => {
      switch (item.status) {
        case "Hadir":
          hadir++;
          break;
        case "Terlambat":
          terlambat++;
          break;
        case "Izin":
          izin++;
          break;
        case "Sakit":
          sakit++;
          break;
        case "Alpa":
          alpa++;
          break;
      }
    });

    setText("hadirToday", hadir);
    setText("terlambatToday", terlambat);
    setText("izinToday", izin);
    setText("sakitToday", sakit);
    setText("alpaToday", alpa);

  } catch (error) {
    console.error("Dashboard error:", error);
  }
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

/* =========================
   STUDENTS
========================= */

let studentsCache = {};

async function renderStudents() {
  if (!isAdmin()) return;

  try {
    const snap = await db.ref("students").once("value");
    studentsCache = snap.val() || {};

    const tbody = $("studentsTableBody");

    if (!tbody) return;

    tbody.innerHTML = "";

    Object.entries(studentsCache).forEach(([id, student]) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${escapeHtml(student.id || id)}</td>
        <td>${escapeHtml(student.name || "")}</td>
        <td>${escapeHtml(student.className || "")}</td>
        <td>${escapeHtml(student.code || "")}</td>
        <td>
          <button data-edit="${id}">Edit</button>
          <button data-delete="${id}">Hapus</button>
          <button data-qr="${id}">QR</button>
        </td>
      `;

      tbody.appendChild(tr);
    });

    tbody.querySelectorAll("[data-edit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        editStudent(btn.dataset.edit);
      });
    });

    tbody.querySelectorAll("[data-delete]").forEach((btn) => {
      btn.addEventListener("click", () => {
        deleteStudent(btn.dataset.delete);
      });
    });

    tbody.querySelectorAll("[data-qr]").forEach((btn) => {
      btn.addEventListener("click", () => {
        printStudentQR(btn.dataset.qr);
      });
    });

  } catch (error) {
    console.error(error);
  }
}

async function saveStudent(studentId, studentData) {
  if (!isAdmin()) {
    alert("Hanya Admin yang dapat mengelola siswa.");
    return;
  }

  await db.ref("students/" + studentId).set(studentData);

  await renderStudents();
  await loadDashboard();
}

async function deleteStudent(id) {
  if (!isAdmin()) return;

  const student = studentsCache[id];

  if (!student) return;

  if (!confirm(
    `Hapus siswa "${student.name}"?`
  )) {
    return;
  }

  await db.ref("students/" + id).remove();

  await renderStudents();
  await loadDashboard();
}

function editStudent(id) {
  if (!isAdmin()) return;

  const student = studentsCache[id];

  if (!student) return;

  setValue("studentId", student.id || id);
  setValue("studentName", student.name || "");
  setValue("studentClass", student.className || "");
  setValue("studentCode", student.code || "");

  showTab("students");
}

/* =========================
   CLASSES
========================= */

let classesCache = {};

async function renderClasses() {
  if (!isAdmin()) return;

  try {
    const snap = await db.ref("classes").once("value");
    classesCache = snap.val() || {};

    const tbody = $("classesTableBody");

    if (!tbody) return;

    tbody.innerHTML = "";

    Object.entries(classesCache).forEach(([id, item]) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${escapeHtml(item.id || id)}</td>
        <td>${escapeHtml(item.name || "")}</td>
        <td>
          <button data-delete-class="${id}">
            Hapus
          </button>
        </td>
      `;

      tbody.appendChild(tr);
    });

    tbody
      .querySelectorAll("[data-delete-class]")
      .forEach((btn) => {
        btn.addEventListener("click", () => {
          deleteClass(btn.dataset.deleteClass);
        });
      });

  } catch (error) {
    console.error(error);
  }
}

async function saveClass(id, name) {
  if (!isAdmin()) {
    alert("Hanya Admin yang dapat mengelola kelas.");
    return;
  }

  await db.ref("classes/" + id).set({
    id,
    name
  });

  renderClasses();
}

async function deleteClass(id) {
  if (!isAdmin()) return;

  if (!confirm("Hapus kelas ini?")) {
    return;
  }

  await db.ref("classes/" + id).remove();

  renderClasses();
}

/* =========================
   QR CODE
========================= */

function printStudentQR(id) {
  if (!isAdmin()) {
    alert("Hanya Admin yang dapat mencetak QR.");
    return;
  }

  const student = studentsCache[id];

  if (!student) return;

  const qr = document.createElement("div");

  new QRCode(qr, {
    text: student.code,
    width: 300,
    height: 300
  });

  const win = window.open("", "_blank");

  win.document.write(`
    <html>
      <head>
        <title>QR ${escapeHtml(student.name)}</title>
      </head>
      <body style="text-align:center;font-family:Arial">
        <h2>${escapeHtml(student.name)}</h2>
        <p>${escapeHtml(student.className)}</p>
        ${qr.innerHTML}
        <p>${escapeHtml(student.code)}</p>
        <script>
          window.print();
        <\/script>
      </body>
    </html>
  `);

  win.document.close();
}

/* =========================
   SCANNER
========================= */

async function startScanner() {
  if (scanRunning) return;

  const container = $("reader");

  if (!container) {
    alert("Area scanner tidak ditemukan.");
    return;
  }

  try {
    scanner = new Html5Qrcode("reader");

    await scanner.start(
      {
        facingMode: "environment"
      },
      {
        fps: 10,
        qrbox: 250
      },
      async (decodedText) => {
        await handleScan(decodedText);
      },
      () => {}
    );

    scanRunning = true;

  } catch (error) {
    console.error(error);
    alert("Kamera tidak dapat dibuka.");
  }
}

async function stopScanner() {
  if (!scanner || !scanRunning) return;

  try {
    await scanner.stop();
    await scanner.clear();
  } catch (error) {
    console.error(error);
  }

  scanner = null;
  scanRunning = false;
}

async function handleScan(code) {
  const studentsSnap = await db
    .ref("students")
    .orderByChild("code")
    .equalTo(code)
    .once("value");

  const students = studentsSnap.val();

  if (!students) {
    alert("QR siswa tidak ditemukan.");
    return;
  }

  const studentId = Object.keys(students)[0];
  const student = students[studentId];

  await recordAttendance(studentId, student);
}

/* =========================
   ATTENDANCE
========================= */

async function recordAttendance(studentId, student) {
  const now = new Date();

  const dateKey = formatDate(now);

  const existing = await db
    .ref(`attendance/${dateKey}/${studentId}`)
    .once("value");

  if (existing.exists()) {
    alert(
      `${student.name} sudah melakukan absensi hari ini.`
    );
    return;
  }

  const settingsSnap = await db
    .ref("settings")
    .once("value");

  const settings = settingsSnap.val() || {};

  const lateAfter = settings.lateAfter || "07:30";

  const currentTime =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  const status =
    currentTime > lateAfter
      ? "Terlambat"
      : "Hadir";

  const data = {
    studentId,
    name: student.name,
    className: student.className,
    code: student.code,
    status,
    time: currentTime,
    timestamp: Date.now(),
    recordedBy: currentUser?.email || ""
  };

  await db
    .ref(`attendance/${dateKey}/${studentId}`)
    .set(data);

  alert(
    `Absensi berhasil!\n\n${student.name}\n${status}\n${currentTime}`
  );

  loadDashboard();
}

/* =========================
   ATTENDANCE RECORD
========================= */

async function renderAttendance() {
  const tbody = $("attendanceTableBody");

  if (!tbody) return;

  const dateInput = $("attendanceDate");

  const dateKey =
    dateInput?.value || formatDate(new Date());

  try {
    const snap = await db
      .ref("attendance/" + dateKey)
      .once("value");

    const data = snap.val() || {};

    tbody.innerHTML = "";

    Object.values(data).forEach((item) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${escapeHtml(item.name || "")}</td>
        <td>${escapeHtml(item.className || "")}</td>
        <td>${escapeHtml(item.status || "")}</td>
        <td>${escapeHtml(item.time || "")}</td>
      `;

      tbody.appendChild(tr);
    });

  } catch (error) {
    console.error(error);
  }
}

/* =========================
   CSV EXPORT
========================= */

async function exportAttendanceCSV() {
  const dateInput = $("attendanceDate");

  const dateKey =
    dateInput?.value || formatDate(new Date());

  const snap = await db
    .ref("attendance/" + dateKey)
    .once("value");

  const data = snap.val() || {};

  let csv =
    "Tanggal,NIS,Nama,Kelas,Status,Jam\n";

  Object.values(data).forEach((item) => {
    csv += [
      dateKey,
      csvEscape(item.studentId || ""),
      csvEscape(item.name || ""),
      csvEscape(item.className || ""),
      csvEscape(item.status || ""),
      csvEscape(item.time || "")
    ].join(",") + "\n";
  });

  const blob = new Blob(
    ["\ufeff" + csv],
    {
      type: "text/csv;charset=utf-8;"
    }
  );

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = `rekap-absensi-${dateKey}.csv`;

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}

/* =========================
   SETTINGS
========================= */

async function loadSettings() {
  const snap = await db.ref("settings").once("value");

  const settings = snap.val() || {};

  setValue(
    "lateAfter",
    settings.lateAfter || "07:30"
  );
}

async function saveSettings() {
  if (!isAdmin()) {
    alert("Hanya Admin yang dapat mengubah pengaturan.");
    return;
  }

  const lateAfter =
    $("lateAfter")?.value || "07:30";

  await db.ref("settings").set({
    lateAfter
  });

  alert("Pengaturan berhasil disimpan.");
}

/* =========================
   WHATSAPP
========================= */

function sendWhatsApp(message, phone = "") {
  const text = encodeURIComponent(message);

  let url;

  if (phone) {
    const cleanPhone = phone.replace(/\D/g, "");

    url =
      `https://wa.me/${cleanPhone}?text=${text}`;
  } else {
    url =
      `https://wa.me/?text=${text}`;
  }

  window.open(url, "_blank");
}

/* =========================
   EVENT BINDINGS
========================= */

const startScannerBtn = $("startScanner");

if (startScannerBtn) {
  startScannerBtn.addEventListener(
    "click",
    startScanner
  );
}

const stopScannerBtn = $("stopScanner");

if (stopScannerBtn) {
  stopScannerBtn.addEventListener(
    "click",
    stopScanner
  );
}

const exportBtn = $("exportCSV");

if (exportBtn) {
  exportBtn.addEventListener(
    "click",
    exportAttendanceCSV
  );
}

const refreshAttendanceBtn =
  $("refreshAttendance");

if (refreshAttendanceBtn) {
  refreshAttendanceBtn.addEventListener(
    "click",
    renderAttendance
  );
}

const saveSettingsBtn =
  $("saveSettings");

if (saveSettingsBtn) {
  saveSettingsBtn.addEventListener(
    "click",
    saveSettings
  );
}

const attendanceDate =
  $("attendanceDate");

if (attendanceDate) {
  attendanceDate.value =
    formatDate(new Date());

  attendanceDate.addEventListener(
    "change",
    renderAttendance
  );
}

/* =========================
   REALTIME LISTENERS
========================= */

db.ref("students").on("value", () => {
  if (isAdmin()) {
    renderStudents();
  }

  loadDashboard();
});

db.ref("classes").on("value", () => {
  if (isAdmin()) {
    renderClasses();
  }
});

db.ref("settings").on("value", () => {
  loadSettings();
});

function formatDate(date) {
  const year = date.getFullYear();

  const month =
    String(date.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(date.getDate())
      .padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function setValue(id, value) {
  const el = $(id);

  if (el) {
    el.value = value;
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function csvEscape(value) {
  const text = String(value ?? "");

  if (
    text.includes(",") ||
    text.includes('"') ||
    text.includes("\n")
  ) {
    return `"${text.replaceAll('"', '""')}"`;
  }

  return text;
}

/* =========================
   INITIAL LOAD
========================= */

loadSettings();
