// document.addEventListener("DOMContentLoaded", function() {
//     fetch("includes/header.html")
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector("header").innerHTML = data;
//         });

//     fetch("includes/footer.html")
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector("footer").innerHTML = data;
//         });
// });
// document.addEventListener("DOMContentLoaded", function() {
//     fetch("includes/header.html")
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             return response.text();
//         })
//         .then(data => {
//             document.getElementById("header-container").innerHTML = data;
//         })
        
//         .catch(error => {
//             console.error('Error fetching header:', error);
//         });
//     // .then(data => {
//     //     document.getElementById(id="header-container").innerHTML = data;
        
//     //     // مراقبة التغييرات في DOM باستخدام MutationObserver
//     //     const observer = new MutationObserver(() => {
//     //         const menu = document.getElementById("menu");
//     //         const action = document.getElementById("action");
            
//     //         if (menu && action) {
//     //             menu.addEventListener('click', () => {
//     //                 handleMenu();
//     //             });

//     //             function handleMenu() {
//     //                 menu.classList.toggle("is-active");
//     //                 action.classList.toggle("is-active");
//     //             }

//     //             observer.disconnect(); // إيقاف المراقبة بعد العثور على العناصر
//     //         }
//     //     });

//     //     // مراقبة التغييرات في DOM
//     //     observer.observe(document.getElementById("header-container"), { childList: true, subtree: true });
//     // });

    fetch("includes/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching footer:', error);
        });
});
