import {addOffsetMargin, removeOffsetMargin} from "./marginOffset.js";
export default function s1_hi(triggerSelector, mobileMenu) {
  const mobile = document.querySelector(mobileMenu);
  const trigger = document.querySelector(triggerSelector);
  trigger.addEventListener('click', () => {
    trigger.classList.toggle('active-burger');
    mobile.classList.toggle('showMobileMenu');
  addOffsetMargin();
  });
  mobile.addEventListener('click', (e) => {
    if (e.target == mobile) {
      mobile.classList.remove('showMobileMenu');
      trigger.classList.remove('active-burger');
      removeOffsetMargin();
    }
  });
  const mobileItem = document.querySelectorAll('.mobile-menu__item');
  mobileItem.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        mobile.classList.remove('showMobileMenu');
        trigger.classList.remove('active-burger');
        removeOffsetMargin();
      }, 500);
    });
  });
}