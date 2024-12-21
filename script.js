document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        alert(`Thank you for reaching out, ${name}! I will get back to you at ${email} soon.`);
        form.reset();
      } else {
        alert("Please fill in all the fields before submitting.");
      }
    });
  });
  