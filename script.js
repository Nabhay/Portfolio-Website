const nav = document.querySelector('.nav');
nav?.insertAdjacentHTML('beforeend', '<a href="journey.html">Journey</a><a href="resume.html">Resume</a>');
const page = location.pathname.split('/').filter(Boolean).pop() || 'index';
const current = page.endsWith('.html') ? page : `${page}.html`;
document.querySelectorAll('.nav a').forEach(a => { if(a.getAttribute('href') === current) a.setAttribute('aria-current', 'page'); });
document.querySelectorAll('.project-card').forEach((card, i) => {
 const url = ['https://github.com/nabhay/myeye','https://github.com/nabhay/LoadBalancer'][i];
 card.querySelector('.project-body').insertAdjacentHTML('beforeend', `<a class="inline-link" href="${url}" target="_blank" rel="noopener noreferrer">View source on GitHub</a>`);
});
document.querySelector('.home-about .inline-link')?.setAttribute('href', 'journey.html');
