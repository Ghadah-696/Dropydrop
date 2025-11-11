// main.js

// 🚨 وظيفة تضمين HTML (لا تستخدمها لـ <head>! ويفضل استخدام Fetch بدلاً من XHR)
// سنبقيها مؤقتاً طالما تعمل، لكن يجب التأكد أنك شغلتها عبر خادم محلي.
function includeHTML() {
    let z, i, elmnt, file, xhr;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("include-html");
        if (file) {
            xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    elmnt.innerHTML = this.responseText;
                    elmnt.removeAttribute("include-html");
                    includeHTML(); // استدعاء تكراري للبحث عن وسوم جديدة
                }
            }
            xhr.open("GET", file, true);
            xhr.send();
            return;
        }
    }
}

// ❌ تم إزالة دالة includeHead بالكامل لتفادي مسح كل روابط CSS و JS في الصفحة.
// يجب تضمين كل روابط <head> في ملف index.html مباشرة.

// ----------------------------------------------------------------------

// 1. وظيفة تغيير اللغة (Language Toggler) - تم نقلها من script.js
function setLanguage(language) {
    document.documentElement.lang = language;
    var elements = document.querySelectorAll('[data-lang-en], [data-lang-ar]');

    elements.forEach(function(element) {
        var newContent = element.getAttribute('data-lang-' + language);
        if (newContent) {
             element.innerHTML = newContent;
        }
    });
    document.body.style.direction = (language === 'ar') ? 'rtl' : 'ltr';
}
setLanguage('ar');

// ----------------------------------------------------------------------

// 2. قائمة التنقل (Navbar Menu Toggler) - تم نقلها من script.js
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const action = document.getElementById("action");

    if (menu && action) {
        menu.addEventListener('click', handleMenu);
    }

    function handleMenu() {
        menu.classList.toggle("is-active");
        action.classList.toggle("is-active");
    }

    // تشغيل وظيفة تضمين HTML بعد تحميل DOM
    includeHTML(); 
});

// ----------------------------------------------------------------------

// 3. تهيئة شريط التمرير الرئيسي (Hero Swiper)
const heroSwiper = new Swiper('.swiper:not(.myProjectsSwiper)', {
    // استخدم فئة مخصصة أو :not(.myProjectsSwiper) لضمان عدم تضارب تهيئة شريط المشاريع
    loop: true,
    effect: 'fade', 
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// ----------------------------------------------------------------------

// 4. تهيئة شريط تمرير المشاريع (Projects Swiper) - لتهيئة الشريط المتحرك الجديد
var projectsSwiper = new Swiper('.myProjectsSwiper', {
    direction: 'horizontal',
    rtl: true,
    loop: true, 

    slidesPerView: 1, 
    spaceBetween: 30, 
    
    // إعدادات الاستجابة (Responsive)
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    
    // عناصر التحكم
    navigation: {
        nextEl: '.project-next',
        prevEl: '.project-prev',
    },
    pagination: {
        el: '.project-pagination',
        clickable: true,
    }
});
