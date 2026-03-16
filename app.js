async function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');

  btn.disabled = true;
  btn.textContent = 'Sending...';

  const res = await fetch('https://formspree.io/f/xgonndjb', {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (res.ok) {
    form.style.display = 'none';
    document.getElementById('form-success').style.display = 'block';
  } else {
    btn.disabled = false;
    btn.textContent = 'Send Interest Form';
    alert('Something went wrong. Please try again or email akandil249@student.fuhsd.org directly.');
  }
}

// Fade-in sections on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.card, .project-card, .member').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});
