// contact.js (لصفحة contact.html)

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#contact-form form');
    const thankMessage = document.getElementById('thankMessage');

    if (!form) return; 

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();

        // 1. التحقق من صحة البريد الإلكتروني (بقي كما هو)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح.');
            return;
        }

        // 2. التحقق من رقم الهاتف اليمني (تعبير منتظم أكثر شمولاً)
        // يبدأ بـ 7 متبوعاً بأي رقم (0-9) ثم 7 أرقام.
        // يشمل 70, 71, 73, 77, 78 وهكذا.
        const phonePattern = /^(?:\+967)?(7[0-9])\d{7}$/; 
        if (!phonePattern.test(phone)) {
            alert('يرجى إدخال رقم هاتف يمني صحيح مكون من 9 أرقام (يبدأ بـ 7).');
            return;
        }

        const formData = new FormData(form);

        // 3. 🛡️ جزء الإرسال المحفوظ: لن يتم تغيير هذا الجزء أبدًا.
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                thankMessage.style.display = 'block';
                form.reset();
                setTimeout(() => {
                    thankMessage.style.display = 'none';
                }, 5000);
            } else {
                alert('حدث خطأ أثناء الإرسال.');
            }
        })
        .catch(() => {
            alert('فشل الاتصال بالخادم. تحقق من اتصالك أو إعدادات نموذج الإرسال.');
        });
    });
});
