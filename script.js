// Mengonfigurasi halaman untuk mengonfigurasi hak akses pengunjung
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.shiftKey && event.keyCode == 44) {
        event.preventDefault();
    } else if (event.ctrlKey && event.keyCode == 83) {
        event.preventDefault();
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 45) {
        event.preventDefault();
    }
});
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
        return false;
    }
}
document.addEventListener('contextmenu', event => event.preventDefault());

