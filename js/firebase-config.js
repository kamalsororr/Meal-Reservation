// استدعاء Firebase (تأكد أنك وضعت هذه السكربتات في index.html)
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js"></script>

// تكوين Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCwn5S3IPh5-b7_pld0ftBMkahUL_mqncA",
  authDomain: "mealreservation709.firebaseapp.com",
  databaseURL: "https://mealreservation709-default-rtdb.firebaseio.com/",
  projectId: "mealreservation709",
  storageBucket: "mealreservation709.appspot.com",
  messagingSenderId: "594633753192",
  appId: "1:594633753192:web:56b8963787aededb4a71dd",
  measurementId: "G-WPGXF3QF72"
};

// تهيئة التطبيق
firebase.initializeApp(firebaseConfig);

// الاتصال بقاعدة البيانات
const database = firebase.database();

// اختبار الاتصال (تقدر تحذفه بعد التجربة)
database.ref().once("value")
  .then(() => {
    console.log("✅ تم الاتصال بقاعدة بيانات Firebase بنجاح");
  })
  .catch((error) => {
    console.error("❌ فشل الاتصال بقاعدة البيانات:", error);
  });

