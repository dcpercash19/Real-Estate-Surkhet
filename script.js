document.getElementById('inquiryForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name && email && message) {
      document.getElementById('formResponse').textContent = "Thank you! We will contact you shortly.";
      this.reset();
    } else {
      document.getElementById('formResponse').textContent = "Please fill in all the fields.";
    }
  });
  
  document.getElementById("inquiry-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
    const status = document.getElementById("form-status");
  
    fetch("https://formspree.io/f/mgvkaory", {  // Replace with your Formspree endpoint
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your message! We'll be in touch soon.";
        form.reset();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form.";
          }
        });
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form.";
    });
  });
