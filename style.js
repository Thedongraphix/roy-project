// Form validation on submit
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting if validation fails

  // Check if fields are empty
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    alert('Please fill out all fields.');
    return;
  }

  // Optionally, you can add more specific checks for email format
  if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // If everything is valid, show a success message or submit the form
  alert('Message sent successfully!');
  form.reset(); // Reset form fields after successful submission
});

// Simple email validation (basic check)
function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Smooth scrolling for anchor links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Remove the "#" from href
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 50, // Adjust the offset (e.g., for fixed navbars)
      behavior: 'smooth'
    });
  });
});

// Mobile menu toggle (Optional)
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav');

if (menuToggle) {
  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });
}
