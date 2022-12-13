
import nav from "./modules/nav-js.js";
import s0_hi from "./modules/s0_hi.js";
import s1_one from "./modules/s1_one.js";
import s5_timeline from "./modules/s5_timeline.js";
import s6_appreciate from "./modules/s6_appreciate.js";
import s9_accordion from "./modules/s9_accordion.js";
import s11_comments from "./modules/s11_comments.js";
import s13_form from "./modules/s13_form.js";


window.addEventListener('DOMContentLoaded', () => {
 
  // модули
  nav();
  s0_hi('.s0-burger__button', '.mobile-menu');
  s1_one();
  s5_timeline();
  s6_appreciate('.container');
  s9_accordion();
  s11_comments();
  s13_form('form','input', 'textarea' );


});