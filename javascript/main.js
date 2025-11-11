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
            includeHTML();
          }
        }
        xhr.open("GET", file, true);
        xhr.send();
        return;
      }
    }
  }
  
  function includeHead() {
    const head = document.getElementsByTagName('head')[0];
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 ) {
        if (this.status == 200) {
          head.innerHTML = this.responseText;
        } else {
          console.error("Error loading head.html:", this.status, this.statusText);
        }
    }
  }
    // xhr.open("GET", "includes/head.html", true);
    // xhr.send();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    includeHead();
    includeHTML();
  });

  // slider

  // const swiper = new Swiper('.swiper', {
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false,
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
  
// تأثير fade
  const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade', // ← هنا السحر
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
  
