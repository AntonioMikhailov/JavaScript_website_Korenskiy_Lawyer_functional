export default function form(s13_form, s13_input, s13_textarea) {
  const form = document.querySelector(s13_form);
  const input = document.querySelectorAll(s13_input);
  const textarea = document.querySelector(s13_textarea);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numOfInputs =0; 
    input.forEach(item => {
      if (item.value.length > 0 && textarea.value.length > 0) {
        numOfInputs++;
        console.log(numOfInputs);
        if(numOfInputs == input.length) {
          form.lastElementChild.classList.remove('active-warn');
          form.lastElementChild.classList.add('active-form');
          form.lastElementChild.innerHTML = 'сообщение отправлено';
          console.log(numOfInputs);
          setTimeout(() => {
            //очищаем форму
            form.reset();
          }, 1500);
        }
      }
    });
    //если не заполнены ВСЕ поля
    input.forEach(item => {
      if (item.value.length == 0 || textarea.value.length == 0) {
        form.lastElementChild.innerHTML = 'заполните все поля';
     form.lastElementChild.classList.add('active-warn');
      }
    });
    //при вводе в поле после отправки  - очищаем кнопку  отправки
    form.addEventListener('input', (e) => {
      e.preventDefault();
      form.lastElementChild.classList.remove('active-form');
      form.lastElementChild.classList.remove('active-warn');
      form.lastElementChild.innerHTML = 'отправить сообщение';
    });
  });
}