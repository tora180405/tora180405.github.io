// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// //hamburger button
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// // klik di luar hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});


// pindah posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}

// //form
// const form = document.querySelector("#form-action");
// import Swal from 'sweetalert2';

// form.addEventListener("submit", async function(e) {
//     e.preventDefault();  // Prevent default behavior

//     // Mengambil data dari form
//     const formData = new FormData(this);

//     try {
//         // Kirim data menggunakan Fetch API
//         const response = await fetch(this.action, {
//             method: this.method,
//             body: formData,
//             headers: {
//                 'Accept': 'application/json'
//             }
//         });

//         if (response.ok) {
//             // Menggunakan SweetAlert2 untuk menampilkan pesan sukses
//             Swal.fire({
//                 title: 'Success!',
//                 text: 'Message sent successfully!',
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             });
//             this.reset();  // Reset form setelah berhasil
//         } else {
//             // Menggunakan SweetAlert2 untuk menampilkan pesan error
//             Swal.fire({
//                 title: 'Error!',
//                 text: 'Oops! Something went wrong.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         }
//     } catch (error) {
//         // Menggunakan SweetAlert2 untuk menampilkan pesan error jaringan
//         Swal.fire({
//             title: 'Network Error!',
//             text: 'Please try again later.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });