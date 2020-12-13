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

