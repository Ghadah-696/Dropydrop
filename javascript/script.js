// script.js (لصفحة index.html)

// 1. **وحدة معرض الصور (Gallery Paging - jQuery)**
$(document).ready(function() {
    // هذه الدالة ستعمل الآن لأن jQuery محمل في HTML
    showPage(1); 
});

function showPage(page) {
    var $gallery = $('#gallery');

    // تحقق من وجود عنصر #gallery قبل المتابعة
    if ($gallery.length === 0) {
        console.error("العنصر بمعرّف #gallery غير موجود في الصفحة.");
        return; // توقف عن تنفيذ الدالة
    }
    
    // في حال قررت استخدام الـ Paging بدلاً من Swiper
    // إذا كنت تستخدم Swiper.js لقسم المشاريع، فقد لا تحتاج هذا الكود! 
    
    // إخفاء جميع العناصر التي كانت تستخدم للتنقل بين الصفحات
    // بما أنك حولت المشاريع إلى Swiper، هذا الكود قد يكون قديماً.
    $gallery.find('.col-sm-4').hide();

    // حساب العناصر لعرضها في كل صفحة (إذا كنت لا تزال تريد استخدام الـ Paging)
    var itemsPerPage = 3; 
    var startItem = (page - 1) * itemsPerPage;
    var endItem = startItem + itemsPerPage;

    // عرض العناصر المحددة للصفحة الحالية
    $gallery.find('.col-sm-4').slice(startItem, endItem).show();
    
    // التأكد من أن المستخدم يبقى في نفس المكان (تمت إضافة فحص الأمان)
    $('html, body').animate({
        scrollTop: $gallery.offset().top
    }, 'fast');
}

// ----------------------------------------------------

// 2. **وحدة Modal/Lightbox (عرض الصور)**
// هذه الدالة تعمل على جميع الصور التي تحمل فئة "clickable-image"
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");

var images = document.getElementsByClassName("clickable-image");
Array.from(images).forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    };
});

var span = document.getElementsByClassName("close")[0];
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    };
}
