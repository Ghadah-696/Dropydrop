// javascript/contact.js

document.addEventListener("DOMContentLoaded", function () {
    // 1. استرجاع العناصر
    const form = document.querySelector('#contact-form form');
    const thankMessage = document.getElementById('thankMessage');
    
    // 2. إذا لم يتم العثور على النموذج، توقف
    if (!form) return; 

    // 3. معالج حدث الإرسال
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        
        // 4. التحقق من الصحة (Validation) - هذا الجزء يحافظ على الاحترافية
        const email = form.querySelector('input[name="email"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^(?:\+967)?(7[0-9])\d{7}$/; 

        if (!emailPattern.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح.');
            return;
        }

        if (!phonePattern.test(phone)) {
            alert('يرجى إدخال رقم هاتف يمني صحيح مكون من 9 أرقام (يبدأ بـ 7).');
            return;
        }
        // نهاية التحقق

        const formData = new FormData(form);

        // 5. 🛡️ كود الإرسال الآمن (المحفوظ)
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
            alert('فشل الاتصال بالخادم.');
        });
    });
});
