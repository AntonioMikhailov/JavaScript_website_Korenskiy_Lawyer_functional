export default function () {
  const anchor = document.querySelector('.anchor-wrapper');
  let scrollPos = 0;
 
  window.addEventListener('scroll', function () {
    let i = window.pageYOffset;
    let e = window.innerHeight;
    if (Math.floor(document.body.getBoundingClientRect().top) > scrollPos && i >= e) {
      anchor.classList.add('anchor-active');
    } else {
      anchor.classList.remove('anchor-active');
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
  });

  function smoothScrollAnchor(targetSelector) {
    const whereTo = document.querySelector(targetSelector);
    let startPosition = window.pageYOffset;
    let targetPosition = whereTo.offsetTop;
    let distance = targetPosition - startPosition;
    let duration = 1000;
    let start = null;
    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
      window.scrollTo(0, easingAnchor(progress, startPosition, distance, duration));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }
  }

  function easingAnchor(t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  }
  anchor.addEventListener('click', function () {
    smoothScrollAnchor('.header-wrapper');
    anchor.classList.remove('anchor-active');
    links.forEach(item => {
      item.classList.remove('active-navMenu');
    });
  });
  const links = document.querySelectorAll('a');
  links.forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
     
      if (item.hasAttribute('data-link')) {
       if (!item.hasAttribute('data-noTitleChange')) {
          document.querySelector('title').innerHTML = `${item.innerHTML} - Адвокат Коренский`;
        }
        let attr = item.getAttribute('href');
        smoothScrollAnchor(`${attr}`);
   
        links.forEach(item => {
          item.classList.remove('active-navMenu', 'active-mobile');
        });
        if (item.hasAttribute('data-nav')) {
          item.classList.add('active-navMenu');
        } else if (item.hasAttribute('data-mobile')) {
          item.classList.add('active-mobile');
        }
      }
    });
  });
}