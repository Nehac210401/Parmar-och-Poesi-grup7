emailjs.init("RdfgnCafiAV4oe-wm"); // from EmailJS dashboard

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const submitBtn = form.querySelector('.submit-btn');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.textContent = "Skickar...";

        emailjs.sendForm('service_gnswu87', 'tempelate_nedreif', form)
            .then(() => {
                alert("Tack! Ditt meddelande har skickats.");
                form.reset();
            })
            .catch((err) => {
                alert("Något gick fel. Försök igen senare.");
                console.error(err);
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = "Send Message";
            });
    });
});