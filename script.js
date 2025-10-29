let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const typed= new Typed('.multiple-text',{
    strings: [" Undergraduate 🎓", "Computer Science Student" , " at University Of Gondar" , ],
    typeSpeed:100,
    backSpeed:100,
    backDelay: 1200,
    loop: true,
    });
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.replace('bx-moon', 'bx-sun');
  } else {
    darkModeIcon.classList.replace('bx-sun', 'bx-moon');
  }
}
darkModeIcon.onclick = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    darkModeIcon.classList.replace('bx-moon', 'bx-sun');
  } else {
    localStorage.setItem('theme', 'light');
    darkModeIcon.classList.replace('bx-sun', 'bx-moon');
  }
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  darkModeIcon.classList.replace('bx-moon', 'bx-sun');
}
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");
  const namePattern = /^[A-Za-z\s]{2,}$/;
  const phonePattern = /^(?:\+2519\d{8}|\+2517\d{8}|09\d{8}|07\d{8})$/;
  if (!namePattern.test(name)) {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Invalid name! Only letters and spaces allowed.";
    return;
  }
  if (!phonePattern.test(phone)) {
    formMessage.style.color = "red";
    formMessage.textContent = "❌ Phone must start with +2519, +2517, 09, or 07.";
    return;
  }
  formMessage.style.color = "green";
  formMessage.textContent = "✅ Message sent successfully! Thank You";
  document.getElementById("contactForm").reset();
});


