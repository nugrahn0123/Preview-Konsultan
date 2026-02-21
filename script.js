const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const bookingForm = document.getElementById("booking-form");
const bookingStatus = document.getElementById("booking-status");
const bookingDateInput = document.querySelector('input[name="date"]');

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) {
            return;
        }

        e.preventDefault();
        nav.classList.remove("active");
        target.scrollIntoView({ behavior: "smooth" });
    });
});

if (bookingDateInput) {
    const today = new Date();
    const timezoneOffset = today.getTimezoneOffset() * 60000;
    const localDate = new Date(today - timezoneOffset).toISOString().split("T")[0];
    bookingDateInput.min = localDate;
}

if (bookingForm && bookingStatus) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const name = formData.get("name")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();
        const date = formData.get("date")?.toString().trim();
        const time = formData.get("time")?.toString().trim();
        const service = formData.get("service")?.toString().trim();
        const note = formData.get("note")?.toString().trim();

        if (!name || !phone || !date || !time || !service || !note) {
            bookingStatus.textContent = "Mohon lengkapi semua data booking.";
            bookingStatus.classList.add("error");
            return;
        }

        const message = `Halo Arkana Legal, saya ingin booking konsultasi.%0A%0ANama: ${encodeURIComponent(name)}%0AWhatsApp: ${encodeURIComponent(phone)}%0ATanggal: ${encodeURIComponent(date)}%0AJam: ${encodeURIComponent(time)}%0ALayanan: ${encodeURIComponent(service)}%0AKebutuhan: ${encodeURIComponent(note)}`;
        const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;

        bookingStatus.textContent = "Booking berhasil disiapkan. Anda akan diarahkan ke WhatsApp...";
        bookingStatus.classList.remove("error");
        bookingForm.reset();

        setTimeout(() => {
            window.open(whatsappUrl, "_blank");
        }, 500);
    });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("is-visible");
    });
}
