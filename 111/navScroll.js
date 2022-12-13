export default function () {
  const link = document.querySelectorAll('a');
  const anchor = document.querySelector('.arrow-anchor');
  const headerRow = document.querySelector('.header-row');
  let scrollPos = 0;
  window.addEventListener('scroll', function () {
    let i = window.pageYOffset;
    let e = window.innerHeight;
    let documentScrollHeight = document.documentElement.scrollHeight;
    if ((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i || i + e == documentScrollHeight) {
      anchor.classList.add('anchor-active');
    } else {
      anchor.classList.remove('anchor-active');
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  });

  function smoothScroll(targetSelector) {
    const whereTo = document.querySelector(targetSelector);
    let startPosition = window.pageYOffset;
    let targetPosition = whereTo.offsetTop - 100;
    let distance = targetPosition - startPosition;
    let duration = 1000;
    let start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      window.scrollTo(0, easing(progress, startPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  }

  function easing(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }
  link.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      let targetPosition = item.getAttribute(`${'href'}`);
      document.querySelector('title').textContent = `BeautyWay – ${item.textContent}`;
      if (item.hasAttribute('data-link')) {
        smoothScroll(targetPosition);
      }
      if (item.hasAttribute('data-delay')) {
        setTimeout(() => {
          smoothScroll(targetPosition);
        }, 0);
      } else {
        smoothScroll(targetPosition);
      }
    });
  });
}