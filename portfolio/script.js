const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
};


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const msg = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msg.textContent = "Fill all fields!";
    msg.style.color = "red";
    return;
  }

  const validEmail = /^[^@]+@[^@]+\.[^@]+$/;
  if (!validEmail.test(email)) {
    msg.textContent = "Invalid email format.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
  this.reset();
});
