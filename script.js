const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const languageButton = document.querySelector('.language-toggle');
const translatable = document.querySelectorAll('[data-en][data-tr]');
let language = localStorage.getItem('btb-language') || 'en';

function applyLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;
  translatable.forEach(el => {
    const text = el.dataset[lang];
    if (text) el.textContent = text;
  });
  if (languageButton) languageButton.textContent = lang === 'en' ? 'TR' : 'EN';
  localStorage.setItem('btb-language', lang);
}

if (languageButton) {
  languageButton.addEventListener('click', () => {
    applyLanguage(language === 'en' ? 'tr' : 'en');
  });
}
applyLanguage(language);

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Bridge to Britain enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nTelephone: ${phone || 'Not provided'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:erman@bridgetobritain.co.uk?subject=${subject}&body=${body}`;
  });
}

const cookieBanner = document.getElementById('cookie-banner');
const cookieAccept = document.getElementById('cookie-accept');
if (cookieBanner && !localStorage.getItem('btb-cookie-choice')) {
  cookieBanner.classList.add('show');
}
if (cookieAccept) {
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem('btb-cookie-choice', 'accepted');
    cookieBanner.classList.remove('show');
  });
}
