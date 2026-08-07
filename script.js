
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}});
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const languageButton=document.querySelector('.language-toggle');
const translatable=document.querySelectorAll('[data-en][data-tr]');
let currentLanguage=localStorage.getItem('btb-language')||'en';
function applyLanguage(lang){
  currentLanguage=lang;
  document.documentElement.lang=lang;
  translatable.forEach(el=>{const value=el.dataset[lang];if(value)el.textContent=value;});
  if(languageButton)languageButton.textContent=lang==='en'?'TR':'EN';
  localStorage.setItem('btb-language',lang);
}
if(languageButton){languageButton.addEventListener('click',()=>applyLanguage(currentLanguage==='en'?'tr':'en'));}
applyLanguage(currentLanguage);

const form=document.getElementById('contact-form');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const n=document.getElementById('name').value.trim();
    const em=document.getElementById('email').value.trim();
    const ph=document.getElementById('phone').value.trim();
    const msg=document.getElementById('message').value.trim();
    location.href=`mailto:erman@bridgetobritain.co.uk?subject=${encodeURIComponent('Bridge to Britain enquiry from '+n)}&body=${encodeURIComponent(`Name: ${n}\nEmail: ${em}\nTelephone: ${ph}\n\n${msg}`)}`;
  });
}
