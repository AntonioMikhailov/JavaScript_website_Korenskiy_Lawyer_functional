export default function accordion() {
  //компенсация сдвига в модуле nav
  const s9TitleRow = document.querySelectorAll('.s9-item__titleRow');

  s9TitleRow.forEach((item) => {
    //Сначала открываем первый аккорд.
    s9TitleRow[0].nextElementSibling.style.maxHeight = s9TitleRow[0].nextElementSibling.scrollHeight + 'px' ;
    s9TitleRow[0].classList.add('s9-showText');
   //до иконки добираемся - надо делать два вложения внутрь т.к тег <a></a>  и внутри H3
  s9TitleRow[0].firstElementChild.firstElementChild.classList.add('s9-item_activeIcon');
  //По клику на title получаем его через this  + добавляем класс, который тут же добавляется к дочернему элементу
    item.addEventListener('click', function () {
      this.classList.toggle('s9-showText');
      this.firstElementChild.firstElementChild.classList.toggle('s9-item_activeIcon');
      console.log( this.firstElementChild);
      if (this.classList.contains('s9-showText')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });
}