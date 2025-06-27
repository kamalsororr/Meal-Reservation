
# 🍽️ نظام حجز الوجبات - Meal Reservation 709

موقع ويب بسيط لحجز وجبات الأفراد باستخدام الرقم القومي والاسم، مع إمكانية حفظ البيانات في Firebase وعرض التقارير في Google Sheets.

---

## 📌 مميزات المشروع

- تسجيل الدخول باستخدام الرقم القومي والاسم.
- التحقق من صحة الرقم القومي باستخدام قاعدة بيانات Firebase.
- إمكانية الحجز أو إلغاء الحجز يوميًا.
- منع تعديل الحجز من الساعة 6 صباحًا حتى 2 ظهرًا.
- حفظ الحجوزات يوميًا في قاعدة بيانات Firebase.
- إمكانية عرض جميع الحجوزات في ملف Google Sheets.
- واجهة كاملة باللغة العربية مع تصميم عسكري وشعار الفوج "709 حرب إلكترونية".

---

## 🛠️ التقنيات المستخدمة

- **HTML / CSS / JavaScript**
- **Firebase Realtime Database**
- **Google Sheets API (Apps Script)**
- **GitHub Pages** لنشر الموقع

---

## 📦 طريقة التشغيل

### 1. تشغيل الموقع

- افتح الرابط:
  ```
  https://<username>.github.io/Meal-Reservation/
  ```

### 2. قاعدة البيانات Firebase

- يجب إنشاء قاعدة بيانات Realtime Database على Firebase.
- هيكل البيانات:
  ```json
  "reservation": {
    "NationalIDs": {
      "3020306501358": true
    },
    "3020306501358": {
      "name": "كمال سرور المحص",
      "day_24": true
    }
  }
  ```

### 3. عرض البيانات على Google Sheets

#### خطوات الربط:

1. افتح ملف Google Sheets.
2. من القائمة: **الامتدادات → Apps Script**.
3. الصق كود Google Apps Script الموجود في مجلد `scripts/`.
4. شغل الدالة `importReservationsFromFirebase`.
5. ستحصل على جدول منظم يحتوي على:
   ```
   الرقم القومي | الاسم | اليوم 1 | اليوم 2 | ... | اليوم 30
   ```

---

## 🔐 الأمان

- تأكد من ضبط صلاحيات Firebase Database (قواعد `Rules`) لمنع الوصول العام.
- لا تضع بيانات حساسة في ملفات `js` على GitHub بدون حماية.

---

## 📁 هيكل المجلد

```
Meal-Reservation/
│
├── index.html
├── style.css
├── script.js
├── firebase-config.js
├── images/
│   ├── background.jpg
│   └── logo.jpg
├── scripts/
│   └── google-sheets.gs  ← سكريبت Google Sheets
├── README.md
```

---

## 📞 الدعم

تم تطوير هذا المشروع لصالح **الفوج 709 حرب إلكترونية**  
لمزيد من التخصيص أو الدعم الفني، تواصل مع المطور عبر [GitHub](https://github.com/kamalsororr).
