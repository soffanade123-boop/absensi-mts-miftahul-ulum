// ISI DENGAN KONFIGURASI WEB FIREBASE MILIK ANDA.
// Firebase Console -> Project settings -> Your apps -> Web app.
const firebaseConfig = {
  apiKey: "AIzaSyDGsRvOu6wkPPBQtoI2Rs0-9f4uH-PRNt0",
  authDomain: "absensi-mts-miftahul-ulum.firebaseapp.com",
  databaseURL: "https://absensi-mts-miftahul-ulum-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "absensi-mts-miftahul-ulum",
  storageBucket: "absensi-mts-miftahul-ulum.firebasestorage.app",
  messagingSenderId: "916877740988",
  appId: "1:916877740988:web:4cdb6bb503c56e808039b9",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();