import css from "./css/style.css";
import menu from './menu.json';
import menuTemplate from './templates/menu.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menus = menuTemplate(menu);

document.querySelector('.js-menu').innerHTML = menus;


const themeSwitch = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('checkbox') === Theme.DARK) {
  themeSwitch.checked = true;
} else {
  themeSwitch.checked = false
};

if (themeSwitch.checked) {
  document.body.classList.add(Theme.DARK)
} else {
  document.body.classList.add(Theme.LIGHT)
};
 

themeSwitch.addEventListener('change', (e) => {
  localStorage.setItem('checkbox', e.target.checked ? Theme.DARK : Theme.LIGHT)
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
})