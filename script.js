
function showMasage() {
    alert("Maaf pendaftaran sudah di tutup")
}

// JavaScript untuk menampilkan/menyembunyikan menu
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});