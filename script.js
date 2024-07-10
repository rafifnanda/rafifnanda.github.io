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

function checkNPM() {
    var validNPMs = ["10223083", "10223160", "10223171", "10223218", "10223248", "10223318", 
        "10223345", "10223378", "10223387", "12223015", "10223494", "10223558", 
        "10223589", "10223668", "10223743", "10223752", "10223833", "10223853", 
        "10223855", "11223004", "11223089", "11223185", "11223228", "11223366", 
        "11223388", "11223410", "11223480", "11223535", "11223563", "11223636", 
        "11223641", "11223687", "11223744", "11223777", "11223862", "11223881"
    ]; // Daftar NPM yang valid
    var npm = prompt("Ketikkan NPM agar bisa lanjut:");
    if (validNPMs.includes(npm)) {
        window.location.href = "/kelompok/rafif.html";
    } else {
        alert("NPM salah, coba lagi.");
    }
    
}

