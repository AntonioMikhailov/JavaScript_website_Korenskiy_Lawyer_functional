export default function () {
  const commentRow = document.querySelector('.s11-row ');
  const indicatorItem = document.querySelectorAll('.s11-indicator__item');
  const mediaWidth = window.matchMedia("(max-width: 768px)");
  // Добавляем индикаторы для мобилки 
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
  // Промотка комментов
  indicatorItem.forEach((item, i) => {
    let width = getComputedStyle(commentRow).width + 'px';
    let offset = (+width.replace(/\D/g, '')); // 

    let slideTo = i;
    item.addEventListener('click', () => {
      // Для мобилки - 6 индикаторов
      if (mediaWidth.matches) {
        commentRow.style.transform = `translate(-${offset * slideTo}px)`;
        indicatorItem.forEach(item => {
          item.classList.remove('s11-indicator__active');
          indicatorItem[i].classList.add('s11-indicator__active');
        });
      } else {
        // Для больших экранов 3 индикатора
        if (i == 0) {
          commentRow.style.transform = `translate(-${offset * slideTo}px)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[0].classList.add('s11-indicator__active');
          });
        }
        if (i == 1) {
          //commentRow.style.transform =`translate(-66%)`; // на 2/3
          commentRow.style.transform = `translate(-${offset * 2/3}px)`;
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[1].classList.add('s11-indicator__active');
          });
        }
        if (i == 2) {
          // commentRow.style.transform =`translate(-100%)`;
          commentRow.style.transform = `translate(-${offset}px)`;
        
          indicatorItem.forEach(item => {
            item.classList.remove('s11-indicator__active');
            indicatorItem[2].classList.add('s11-indicator__active');
          });
        }
      }
    });
  });
}; //