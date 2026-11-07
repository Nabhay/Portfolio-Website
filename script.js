const nav = document.querySelector('.nav');
nav?.insertAdjacentHTML('beforeend', '<a href="journey.html">Journey</a><a href="resume.html">Resume</a>');
document.querySelectorAll('.nav a[href="contact.html"]').forEach(link => link.remove());
if (nav) {
  nav.id = 'primary-navigation';
  const menuButton = document.createElement('button');
  menuButton.className = 'menu-toggle';
  menuButton.type = 'button';
  menuButton.setAttribute('aria-label', 'Open menu');
  menuButton.setAttribute('aria-controls', nav.id);
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.innerHTML = '<span></span><span></span><span></span>';
  nav.before(menuButton);
  const closeMenu = () => {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
  };
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 601px)').addEventListener('change', closeMenu);
}
const page = location.pathname.split('/').filter(Boolean).pop() || 'index';
const current = page.endsWith('.html') ? page : `${page}.html`;
document.querySelectorAll('.nav a').forEach(a => { if(a.getAttribute('href') === current) a.setAttribute('aria-current', 'page'); });
document.querySelectorAll('.project-card').forEach((card, i) => {
 const url = ['https://github.com/nabhay/myeye','https://github.com/nabhay/LoadBalancer'][i];
 card.querySelector('.project-body').insertAdjacentHTML('beforeend', `<a class="inline-link" href="${url}" target="_blank" rel="noopener noreferrer">View source on GitHub</a>`);
});
document.querySelector('.preview-row:nth-child(3)')?.setAttribute('href', 'https://loadbalancer.khanna.app');
document.querySelector('.project-card:nth-child(2) .project-body')?.insertAdjacentHTML('beforeend', '<a class="inline-link" href="https://loadbalancer.khanna.app" target="_blank" rel="noopener noreferrer">Visit live site</a>');
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
