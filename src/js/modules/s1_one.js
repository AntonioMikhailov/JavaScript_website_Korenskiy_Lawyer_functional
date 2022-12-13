export default function s1_one() {
  const oneSlideBlock = document.querySelectorAll('.s1-slideBlock ');
  const oneIndicatorItem = document.querySelectorAll('.s1-indicator__item');
  const onetextRow = document.querySelectorAll('.s1-textRow ');

  function ShowTextDelay() {
    oneSlideBlock[0].classList.add('s1-slideBlock__active');
    setTimeout(() => {
      onetextRow.forEach(item => {
        item.classList.remove('oneTextRow__show');
        onetextRow[SlideIndex - 1].classList.add('oneTextRow__show');
      });
    }, 500);
  }
  ShowTextDelay();
  let SlideIndex = 1;

  function showSlides(n) {
    if (n > oneSlideBlock.length) {
      SlideIndex = 1;
    }
    if (n < 1) {
      SlideIndex = oneSlideBlock.length;
    }
    oneSlideBlock.forEach(item => {
      item.classList.remove('s1-slideBlock__active');
      oneSlideBlock[SlideIndex - 1].classList.add('s1-slideBlock__active');
      setTimeout(() => {
        onetextRow.forEach(item => {
          item.classList.remove('oneTextRow__show');
          onetextRow[SlideIndex - 1].classList.add('oneTextRow__show');
        });
      }, 500);
    });
    oneIndicatorItem.forEach(item => {
      item.classList.remove('s1-indicator__active');
      oneIndicatorItem[SlideIndex - 1].classList.add('s1-indicator__active');
    });
  }
  let stopAutoSlaider;

  function autoSlidesShow() {
    stopAutoSlaider = setInterval(() => {
      showSlides(SlideIndex += 1);
    }, 7000);
  }
  autoSlidesShow();
  oneIndicatorItem.forEach((item, i) => {
    item.addEventListener('click', () => {
      clearInterval(stopAutoSlaider);
      oneSlideBlock.forEach(item => {
        item.classList.remove('s1-slideBlock__active');
        oneSlideBlock[i].classList.add('s1-slideBlock__active');
        oneIndicatorItem.forEach(item => {
          item.classList.remove('s1-indicator__active');
          oneIndicatorItem[i].classList.add('s1-indicator__active');
        });
      });
      setTimeout(() => {
        onetextRow.forEach(item => {
          item.classList.remove('oneTextRow__show');
          onetextRow[i].classList.add('oneTextRow__show');
        });
      }, 500);
    });
  });
  const slideBackgroundImage = document.querySelector('.s1-slideBlock');
  const oneSection = document.querySelector('.s1 ');
  const sectionOneHeight = getComputedStyle(slideBackgroundImage);

  function OneSectionHeight() {
    oneSection.style.height = sectionOneHeight.height;
  }
  OneSectionHeight();
  window.addEventListener('resize', () => {
    OneSectionHeight();
  });
  oneSection.addEventListener('mouseenter', () => {
    clearInterval(stopAutoSlaider);
  });
  oneSection.addEventListener('mouseleave', () => {
    autoSlidesShow();
  });
};