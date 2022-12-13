export default function timeline() {
  const s5Right = document.querySelector('.s5-right');
  const s5Timeline = document.querySelectorAll('.s5-item__timeline');
  window.addEventListener('scroll', () => {
    let timelineTopOffset = s5Right.getBoundingClientRect().top;
    if (timelineTopOffset < window.innerHeight - 100) {
      s5Timeline.forEach(item => {
        item.classList.add('timeline-active');
      });
    }
  });
};