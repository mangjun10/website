const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.cta,.contact',{delay:200, origin:'bottom'})


var icon = document.getElementById("nav_toggle");

// Mengecek apakah ada preferensi tema yang disimpan di localStorage
if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "light"); // Jika tidak, tetapkan tema default ke light
}

// Mengambil preferensi tema yang disimpan di localStorage
let localData = localStorage.getItem("theme");

// Berdasarkan preferensi tema, set tema dan ikon sesuai
if (localData == "light") {
    // Tema light
    icon.innerHTML = '<i class="bx bx-moon"></i>'; // Menggunakan ikon bulan untuk light theme
    document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
    // Tema dark
    icon.innerHTML = '<i class="bx bx-sun"></i>'; // Menggunakan ikon matahari untuk dark theme
    document.body.classList.add("dark-theme");
}

// Menangani perubahan tema saat ikon di klik
icon.onclick = function () {
    // Mengganti tema dan ikon sesuai dengan kondisi saat ini
    if (document.body.classList.contains("dark-theme")) {
        // Jika saat ini tema adalah dark, maka ganti ke light
        icon.innerHTML = '<i class="bx bx-moon"></i>'; // Menggunakan ikon bulan untuk light theme
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
    } else {
        // Jika saat ini tema adalah light, maka ganti ke dark
        icon.innerHTML = '<i class="bx bx-sun"></i>'; // Menggunakan ikon matahari untuk dark theme
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark");
    }
}
