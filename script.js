const toggleBtn = document.getElementById("darkToggle");
    toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }
});

const form = document.getElementById("contact");
const namaInput = document.getElementById("nama");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    const nama = namaInput.value;
    message.textContent = `Halo ${nama}, pesan Anda berhasil terkirim!`;
    message.style.marginTop = "15px";
    message.style.fontWeight = "600";
    message.style.color = "#1e40af";
    form.reset();
});