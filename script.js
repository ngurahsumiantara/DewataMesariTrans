// Mengambil elemen dengan id "menu-icon" dan menyimpannya ke dalam variabel menuIcon
const menuIcon = document.getElementById("menu-icon");

// Mengambil elemen dengan id "menu-list" dan menyimpannya ke dalam variabel menuList
const menuList = document.getElementById("menu-list");

// Mengambil semua elemen <a> yang berada di dalam elemen <li> di dalam menu-list
// dan menyimpannya dalam variabel menuLinks sebagai NodeList
const menuLinks = document.querySelectorAll('#menu-list li a');

// Menambahkan event listener pada menuIcon yang akan dipanggil saat elemen ini diklik
menuIcon.addEventListener("click", () => {
    // Menambahkan atau menghapus class "hidden" dari menuList
    // Jika class "hidden" ada, akan dihapus; jika tidak ada, akan ditambahkan
    menuList.classList.toggle("hidden");
});

// Menutup menu saat salah satu tautan di dalam menu diklik
menuLinks.forEach(link => {
    // Menambahkan event listener pada setiap tautan di menuLinks
    link.addEventListener("click", () => {
        // Menambahkan class "hidden" ke menuList saat tautan diklik, menyembunyikan menu
        menuList.classList.add("hidden");
    });
});
