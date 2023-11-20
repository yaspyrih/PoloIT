import ScrollReveal from 'scrollreveal';

export default function initScrollReveal() {
  ScrollReveal().reveal('.animated-card', {
    interval: 0,
    reset: true,
    delay: 400,
    distance: '20px',
    origin: 'bottom',
    easing: 'linear',
  });
}
