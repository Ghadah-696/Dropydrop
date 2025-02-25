function setLanguage(language) {
    // قم بتعيين لغة العنصر الجذر (HTML) إلى اللغة المحددة
    document.documentElement.lang = language;

    // حدد جميع العناصر التي تحتوي على سمات data-lang-en و data-lang-ar
    var elements = document.querySelectorAll('[data-lang-en], [data-lang-ar]');
    
    // قم بتحديث محتوى العناصر بناءً على اللغة المحددة
    elements.forEach(function(element) {
        element.innerHTML = element.getAttribute('data-lang-' + language);
    });

    // تعديل اتجاه النص للعربية
    if (language === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}

// تعيين اللغة الافتراضية إلى العربية
setLanguage('ar');
// ***************************************

document.addEventListener("DOMContentLoaded", function() {
    // تحميل ملف header.html وتضمينه في الصفحة الرئيسية
    // fetch("header.html")
    //     .then(response => response.text())
        // .then(data => {
            // document.getElementById("header-container").innerHTML = data;
            
            // مراقبة التغييرات في DOM باستخدام MutationObserver
            const observer = new MutationObserver(() => {
                const menu = document.getElementById("menu");
                const action = document.getElementById("action");
                
                if (menu && action) {
                    menu.addEventListener('click', () => {
                        handleMenu();
                    });

                    function handleMenu() {
                        menu.classList.toggle("is-active");
                        action.classList.toggle("is-active");
                    }

                    observer.disconnect(); // إيقاف المراقبة بعد العثور على العناصر
                }
            });

            // مراقبة التغييرات في DOM
            // observer.observe(document.getElementById("nav-title"), { childList: false, subtree: true });
            observer.observe(document.getElementById("header-container"), { childList: true, subtree: true });

        // });
});

// script.js
// الحصول على عناصر الـ modal
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

// الحصول على جميع الصور المصغرة وإضافة حدث النقر
var images = document.getElementsByClassName("clickable-image");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
}

// إغلاق الـ modal عند النقر على علامة ×
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};

// ------------------------
// للتنقل بين الصور 
// ---------------------------
// script.js
$(document).ready(function() {
    showPage(1);
});

function showPage(page) {
    // إخفاء جميع الصور
    $('#gallery .col-sm-4').hide();

    // حساب العناصر لعرضها في كل صفحة
    var itemsPerPage = 3; // عدد الصور لكل صفحة
    var startItem = (page - 1) * itemsPerPage;
    var endItem = startItem + itemsPerPage;

    // عرض الصور المحددة للصفحة الحالية
    $('#gallery .col-sm-4').slice(startItem, endItem).show();
    // التأكد من أن المستخدم يبقى في نفس المكان
    $('html, body').animate({
        scrollTop: $('#gallery').offset().top
    }, 'fast');
}

// -------------------------projects.html

