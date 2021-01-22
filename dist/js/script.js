"use strict"; //mobile menu

var mobileMenuButton = document.getElementById('mobileMenuButton');
var mobileMenuCloseButton = document.getElementById('mobileMenuCloseButton');
var mobileMenu = document.getElementById('mobileMenu');
var shadow = document.getElementById('shadow');
mobileMenuButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('header__ul_active');
  shadow.style.display = 'flex';
});
mobileMenuCloseButton.addEventListener('click', function () {
  mobileMenu.classList.toggle('header__ul_active');
  shadow.style.display = 'none';
}); //closing mobile menu on click to link

var mobileMenuLinks = Array.from(document.getElementsByClassName('header__link'));
mobileMenuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    mobileMenu.classList.remove('header__ul_active');
    shadow.style.display = 'none';
  });
});
shadow.addEventListener('click', function () {
  mobileMenu.classList.remove('header__ul_active');
  shadow.style.display = 'none';
}); //questions page

var questions = Array.from(document.getElementsByClassName('questions__item'));
questions.forEach(function (el) {
  var questionLink = el.getElementsByClassName('questions__title')[0];
  questionLink.addEventListener('click', function (question) {
    question.preventDefault();
    el.classList.toggle('questions__item_active');
  });
}); // select in footer, changing phone numbers, address and so on

var footerSelect = document.getElementById('footerCity');
var cityAddress = document.getElementById('cityAddress');
var cityPhone = document.getElementById('cityPhone');
var cityPhone2 = document.getElementById('cityPhone2'); // let cityPhone3 = document.getElementById('cityPhone3');
// let cityPhone4 = document.getElementById('cityPhone4');

footerSelect.addEventListener('change', function () {
  if (footerSelect.value === 'Novosibirsk') {
    cityAddress.textContent = 'ул. Новая Заря 2А корп.6'; // cityPhone.textContent = '8 (383) 280-41-71';

    cityPhone.textContent = '8-913-382-67-40';
    cityPhone2.textContent = '8-983-136-85-58'; // cityPhone4.textContent = '8-983-003-87-79';

    cityPhone.setAttribute('href', 'tel:+79133826740');
    cityPhone2.setAttribute('href', 'tel:+79831368558'); // cityPhone3.setAttribute('href', 'tel:+79831368558');
    // cityPhone4.setAttribute('href', 'tel:+79830038779');

    cityPhone2.style.visibility = 'visible'; // cityPhone3.style.visibility = 'visible';
    // cityPhone4.style.visibility = 'visible';

    cityPhone2.style.pointerEvents = 'auto'; // cityPhone3.style.pointerEvents = 'auto';
    // cityPhone4.style.pointerEvents = 'auto';
  } else if (footerSelect.value === 'Moscow') {
    cityAddress.textContent = 'р-н Некрасовка, ул.Вольская 1я, владение 23 стр.4';
    cityPhone.textContent = '8-985-804-72-82';
    cityPhone.setAttribute('href', 'tel:+79858047282');
    cityPhone2.style.visibility = 'hidden';
    cityPhone2.style.pointerEvents = 'none'; // cityPhone3.style.visibility = 'hidden';
    // cityPhone3.style.pointerEvents = 'none';
    // cityPhone4.style.visibility = 'hidden';
    // cityPhone4.style.pointerEvents = 'none';
  } else if (footerSelect.value === 'Yakutsk') {
    cityAddress.textContent = 'г. Якутск, ул. Пилотов, 22';
    cityPhone.textContent = '8 (4112) 23-14-04';
    cityPhone.setAttribute('href', 'tel:+74112231404');
    cityPhone2.style.visibility = 'visible';
    cityPhone2.style.pointerEvents = 'auto';
    cityPhone2.textContent = '8-914-300-38-19';
    cityPhone2.setAttribute('href', 'tel:+79143003819'); // cityPhone3.style.visibility = 'hidden';
    // cityPhone3.style.pointerEvents = 'none';
    // cityPhone4.style.visibility = 'hidden';
    // cityPhone4.style.pointerEvents = 'none';
  }
});