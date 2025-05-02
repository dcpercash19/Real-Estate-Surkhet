// Smooth scroll for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Inquiry form submission handler (simulate sending inquiry)
document.getElementById('inquiry-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedbackEl = document.getElementById('inquiry-feedback');
    feedbackEl.style.color = 'green';
    feedbackEl.textContent = 'Thank you for your inquiry! We will get back to you soon.';
    this.reset();
    setTimeout(() => {
        feedbackEl.textContent = '';
    }, 5000);
});
