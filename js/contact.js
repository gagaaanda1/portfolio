const contactForm = document.getElementById("contact-form");
const formHint = document.getElementById("form-hint");

// Ganti dengan alamat email aktif Anda.
const contactEmail = "hardikaangganugraha@gmail.com";

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const message = String(formData.get("message")).trim();

    const subject = encodeURIComponent(`Pesan portofolio dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`
    );

    if (formHint) formHint.textContent = "Membuka aplikasi email...";
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  });
}
