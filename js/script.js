function checkLogin() {
    const nationalId = document.getElementById("nationalIdInput").value.trim();
    const name = document.getElementById("nameInput").value.trim();
    const msg = document.getElementById("loginMessage");

    console.log("🔍 التحقق من الرقم:", nationalId);

    firebase.database().ref("reservation/NationalIDs/" + nationalId)
        .once("value")
        .then(snapshot => {
            if (snapshot.exists()) {
                console.log("✅ الرقم موجود في Firebase");
                msg.innerText = "✅ تم تسجيل الدخول بنجاح";
                document.getElementById("login-section").style.display = "none";
                document.getElementById("reservation-section").style.display = "block";
                localStorage.setItem("nationalId", nationalId);
                localStorage.setItem("userName", name);
                document.getElementById("userName").value = name;
            } else {
                console.log("❌ الرقم غير موجود في Firebase");
                msg.innerText = "❌ الرقم القومي غير مسجل في النظام";
            }
        })
        .catch(err => {
            console.error("❌ خطأ أثناء العملية:", err);
            msg.innerText = "❌ حدث خطأ أثناء التحقق";
        });
}

function submitReservation() {
    const nationalId = localStorage.getItem("nationalId");
    const userName = localStorage.getItem("userName");
    const mealChecked = document.getElementById("mealCheck").checked;
    const msg = document.getElementById("reservationMessage");

    const now = new Date();
    const hour = now.getHours();

    // منع التعديل من 6 ص إلى 2 ظهرًا
    if (hour >= 6 && hour < 14) {
        msg.innerText = "❌ لا يمكن تعديل الحجز من الساعة 6 صباحًا حتى 2 ظهرًا.";
        return;
    }

    const day = now.getDate();
    const data = {
        name: userName,
        ["day_" + day]: mealChecked
    };

    firebase.database().ref("reservation/" + nationalId)
        .set(data)
        .then(() => {
            msg.innerText = "✅ تم الحجز بنجاح";
        })
        .catch(err => {
            msg.innerText = "❌ حدث خطأ أثناء الحجز";
            console.error(err);
        });
}
