export default function s1_hi(triggerSelector, mobileMenu) {
  const trigger = document.querySelector(triggerSelector);
  trigger.addEventListener('click', () => {
    trigger.classList.toggle('active-burger');
  });
  const mobile = document.querySelector(mobileMenu);
  trigger.addEventListener('click', () => {
    mobile.classList.toggle('showMobileMenu');
  });
  mobile.addEventListener('click', (e) => {
    if (e.target == mobile) {
      
      mobile.classList.remove('showMobileMenu');
      trigger.classList.remove('active-burger');
    }
  });
  const mobileItem = document.querySelectorAll('.mobile-menu__item');
  mobileItem.forEach(item => {
    item.addEventListener('click', () => {
      setTimeout(() => {
        mobile.classList.remove('showMobileMenu');
        trigger.classList.remove('active-burger');
      }, 500);
    });
  });
}