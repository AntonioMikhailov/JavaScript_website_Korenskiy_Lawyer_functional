export default function () {
  const commentRow = document.querySelector('.s11-row ');
  const indicatorItem = document.querySelectorAll('.s11-indicator__item');
  const mediaWidth = window.matchMedia("(max-width: 768px)");

  function addIndicators() {
    if (mediaWidth.matches) {
      indicatorItem.forEach(item => {
        item.classList.remove('s11-hide__indicator');
      });
    } else {
      indicatorItem.forEach((item, i) => {
        indicatorItem[3].classList.add('s11-hide__indicator');
        indicatorItem[4].classList.add('s11-hide__indicator');
        indicatorItem[5].classList.add('s11-hide__indicator');
      });
    }
  }
  addIndicators();
  window.addEventListener('resize', () => {
    addIndicators();
  });
  indicatorItem.forEach((item, i) => {
    item.addEventListener('click', () => {
      if (mediaWidth.matches) {
        if (i == 0) {
          commentRow.style.transform = `translate(0%)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[0].classList.add('s11-indicator__active');
          });
        }
        if (i == 1) {
          commentRow.style.transform = `translate(-100%)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[1].classList.add('s11-indicator__active');
          });
        }
        if (i == 2) {
          commentRow.style.transform = `translate(-200%)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[2].classList.add('s11-indicator__active');
          });
        }
        indicatorItem.forEach(item => {
          if (i == 3) {
            commentRow.style.transform = `translate(-300%)`;
            indicatorItem.forEach(item => {
              item.classList.remove('s11-indicator__active');
              indicatorItem[3].classList.add('s11-indicator__active');
            });
          }
          if (i == 4) {
            commentRow.style.transform = `translate(-400%)`;
            indicatorItem.forEach(item => {
              item.classList.remove('s11-indicator__active');
              indicatorItem[4].classList.add('s11-indicator__active');
            });
          }
          if (i == 5) {
            commentRow.style.transform = `translate(-500%)`;
            indicatorItem.forEach(item => {
              item.classList.remove('s11-indicator__active');
              indicatorItem[5].classList.add('s11-indicator__active');
            });
          }
        });
      } else {
        if (i == 0) {
          commentRow.style.transform = `translate(0%)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[0].classList.add('s11-indicator__active');
          });
        }
        if (i == 1) {
          commentRow.style.transform = `translate(-66%)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[1].classList.add('s11-indicator__active');
          });
        }
        if (i == 2) {
          commentRow.style.transform = `translate(-100%)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[2].classList.add('s11-indicator__active');
          });
        }
      }
    });
  });
};