const nav = document.querySelector('.nav');
nav?.insertAdjacentHTML('beforeend', '<a href="journey.html">Journey</a><a href="resume.html">Resume</a>');
document.querySelectorAll('.nav a[href="contact.html"]').forEach(link => link.remove());
const page = location.pathname.split('/').filter(Boolean).pop() || 'index';
const current = page.endsWith('.html') ? page : `${page}.html`;
document.querySelectorAll('.nav a').forEach(a => { if(a.getAttribute('href') === current) a.setAttribute('aria-current', 'page'); });
document.querySelectorAll('.project-card').forEach((card, i) => {
 const url = ['https://github.com/nabhay/myeye','https://github.com/nabhay/LoadBalancer'][i];
 card.querySelector('.project-body').insertAdjacentHTML('beforeend', `<a class="inline-link" href="${url}" target="_blank" rel="noopener noreferrer">View source on GitHub</a>`);
});
document.querySelector('.home-about .inline-link')?.setAttribute('href', 'journey.html');

document.body.insertAdjacentHTML('beforeend', `
  <footer class="site-footer">
    <div class="shell site-footer-inner">
      <span>© ${new Date().getFullYear()} Nabhay Khanna</span>
      <nav aria-label="Footer navigation">
        <a href="https://github.com/Nabhay" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/nabhay-khanna" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </footer>
`);
