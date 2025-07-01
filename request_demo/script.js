document.getElementById("demoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form elements
  const form = document.getElementById("demoForm");
  const successMessage = document.getElementById("successMessage");

  // Hide form and show success
  form.style.display = "none";
  successMessage.style.display = "block";
});

//Email modification
 (function () {
    emailjs.init("SGPJugSxYq-ehfd30"); //EmailJS public key
  })();

  document.getElementById("demoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    emailjs.sendForm("service_l5wsyzh", "template_ehucwug", this).then(
      function () {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("demoForm").reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "🚀 Submit Request";
      },
      function (error) {
        alert("Failed to send form. Try again later.");
        submitBtn.disabled = false;
        submitBtn.textContent = "🚀 Submit Request";
      }
    );
  });