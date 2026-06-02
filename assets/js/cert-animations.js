(function () {
  const reveal = () => {
    const items = document.querySelectorAll('.cert-benefit-item');
    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('in-view'));
      return;  
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', reveal);
  } else {
    reveal();
  }
})();