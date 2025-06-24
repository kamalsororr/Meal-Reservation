
function checkLogin() {
    const nationalId = document.getElementById("nationalIdInput").value.trim();
    const name = document.getElementById("nameInput").value.trim();
    const msg = document.getElementById("loginMessage");

    if (!nationalId || !name) {
        msg.innerText = "❌ يجب إدخال الاسم والرقم القومي";
        return;
    }

    // تحقق من وجود الرقم القومي داخل جدول NationalIDs
    firebase.database().ref("NationalIDs/" + nationalId).once("value", function(snapshot) {
        if (snapshot.exists()) {
            // الرقم موجود ✅
            localStorage.setItem("nationalId", nationalId);
            localStorage.setItem("userName", name);
            document.getElementById("userName").value = name;
            msg.innerText = "✅ تم تسجيل الدخول بنجاح";
            document.getElementById("login-section").style.display = "none";
            document.getElementById("reservation-section").style.display = "block";
        } else {
            // الرقم غير موجود ❌
            msg.innerText = "❌ الرقم القومي غير مسجل في النظام";
        }
    });
}

function submitReservation() {
    const nationalId = localStorage.getItem("nationalId");
    const name = localStorage.getItem("userName");
    const mealChecked = document.getElementById("mealCheck").checked;
    const msg = document.getElementById("reservationMessage");

    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 14) {
        msg.innerText = "❌ لا يمكن تعديل الحجز من الساعة 6 صباحًا حتى 2 ظهرًا.";
        return;
    }

    const day = now.getDate();

    firebase.database().ref("reservations/" + nationalId).set({
        name: name,
        ["day_" + day]: mealChecked
    }).then(() => {
        msg.innerText = "✅ تم الحجز بنجاح";
    }).catch(error => {
        msg.innerText = "حدث خطأ أثناء الحجز";
        console.error(error);
    });
}
