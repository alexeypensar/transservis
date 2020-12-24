"use strict";




//questions page

let questions = Array.from(document.getElementsByClassName('questions__item'));
questions.forEach(function(el) {
    let questionLink = el.getElementsByClassName('questions__title')[0];
    questionLink.addEventListener('click', function(question) {
        question.preventDefault();
        el.classList.toggle('questions__item_active');
    });
});



// select in footer, changing phone numbers, address and so on

let footerSelect = document.getElementById('footerCity');

let cityAddress = document.getElementById('cityAddress');
let cityPhone = document.getElementById('cityPhone');
let cityPhone2 = document.getElementById('cityPhone2');
let cityPhone3 = document.getElementById('cityPhone3');
let cityPhone4 = document.getElementById('cityPhone4');




footerSelect.addEventListener('change', function (qualifiedName, value) {
    if (footerSelect.value === 'Novosibirsk') {
        cityAddress.textContent = 'ул. Новая Заря 2А корп.4';

        cityPhone.textContent = '8 (383) 280-41-71';
        cityPhone2.textContent = '8-913-382-67-40';
        cityPhone3.textContent = '8-983-136-85-58';
        cityPhone4.textContent = '8-983-003-87-79';

        cityPhone.setAttribute('href', 'tel:+73832804171');
        cityPhone2.setAttribute('href', 'tel:+79133826740');
        cityPhone3.setAttribute('href', 'tel:+79831368558');
        cityPhone4.setAttribute('href', 'tel:+79830038779');

        cityPhone2.style.visibility = 'visible';
        cityPhone3.style.visibility = 'visible';
        cityPhone4.style.visibility = 'visible';

        cityPhone2.style.pointerEvents = 'auto';
        cityPhone3.style.pointerEvents = 'auto';
        cityPhone4.style.pointerEvents = 'auto';



    }
    else if (footerSelect.value === 'Moscow') {
        cityAddress.textContent = 'г. Москва, Автомобильный проезд, 10, стр. 14';
        cityPhone.textContent = '8-985-804-72-82';
        cityPhone.setAttribute('href', 'tel:+79858047282');

        cityPhone2.style.visibility = 'hidden';
        cityPhone2.style.pointerEvents = 'none';
        cityPhone3.style.visibility = 'hidden';
        cityPhone3.style.pointerEvents = 'none';
        cityPhone4.style.visibility = 'hidden';
        cityPhone4.style.pointerEvents = 'none';


    }
    else if (footerSelect.value === 'Yakutsk') {
        cityAddress.textContent = 'г. Якутск, ул. Пилотов, 22';

        cityPhone.textContent = '8 (4112) 23-14-04';
        cityPhone.setAttribute('href', 'tel:+74112231404');
        cityPhone2.style.visibility = 'visible';
        cityPhone2.style.pointerEvents = 'auto';
        cityPhone2.textContent = '8-914-300-38-19';
        cityPhone2.setAttribute('href', 'tel:+79143003819');


        cityPhone3.style.visibility = 'hidden';
        cityPhone3.style.pointerEvents = 'none';
        cityPhone4.style.visibility = 'hidden';
        cityPhone4.style.pointerEvents = 'none';
    }
});


// todo во всех футерах и хэдерах на всех страницах всё проверить, дёрнуть с index.html

