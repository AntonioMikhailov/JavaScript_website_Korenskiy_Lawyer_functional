export default function s6_appreciate(container) {
  const s6_container = document.querySelector(container);
  const containerMargin = getComputedStyle(s6_container);
  const sixLeftRow = document.querySelector('.s6-left__row');

  function leftRowMargin() {
    sixLeftRow.style.marginLeft = containerMargin.marginLeft;
  }
  leftRowMargin();
  window.addEventListener('resize', () => {
    leftRowMargin();
  });
};