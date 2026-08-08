
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => mainNav.classList.toggle('open'));
  mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => mainNav.classList.remove('open')));
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const languageButton = document.querySelector('.language-toggle');
const translatable = document.querySelectorAll('[data-en][data-tr]');
let currentLanguage = localStorage.getItem('btb-language') || 'en';

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  translatable.forEach(el => {
    const value = el.dataset[lang];
    if (value) el.textContent = value;
  });
  if (languageButton) languageButton.textContent = lang === 'en' ? 'TR' : 'EN';
  localStorage.setItem('btb-language', lang);
}
if (languageButton) {
  languageButton.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'tr' : 'en'));
}
applyLanguage(currentLanguage);

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';
    const subject = encodeURIComponent(`Bridge to Britain enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTelephone: ${phone}\n\n${message}`);
    window.location.href = `mailto:erman@bridgetobritain.co.uk?subject=${subject}&body=${body}`;
  });
}
