//calculator
'use strict';


let minPrice = 0;
let time = 0;
//
// let weight = 0;
// let volume = 0;

let length = 0;
let width = 0;
let height = 0;

let fromTo = '';








const autoMY = [
    {
        minPrice: 1500,
        time: '12 - 13 дней'
    }

];



// const autoNY = [
//     {
//         fromTo: 'NY',
//         minPrice: 1000,
//         time: '8 - 9 дней'
//     },
//     {
//         1: 6000,
//         3: 5700,
//         5: 5500,
//         10: 5400,
//         15: 5300,
//         16: 5200
//     },
//     {
//         200: 28,
//         600: 26,
//         1000: 25.5,
//         2000: 25,
//         3000: 24.5,
//         3001: 24
//     }
// ];

const containerMY = [
    {
        minPrice: 700,
        time: 'по запросу'
    }

];

const containerNY = [
    {
        minPrice: 500,
        time: 'по запросу'
    }

];


const autoNY = {
    fromTo: 'NY',
    minPrice: 1000,
    time: '8 - 9 дней',
    volumePrice: [6000, 5700, 5500, 5400, 5300, 5200],
    weightPrice: [28, 26, 25.5, 25, 24.5, 24]
};

let volume = prompt('введите объём');
let weight = prompt('введите вес');

let calc = function(weight, volume, fromTo) {
    let factVolume = volume * 1.1;

    let basePrice;

    if (weight/factVolume < 215) {
        // считаем по объему
        basePrice = autoNY.volumePrice;
    }
    else {
        // считаем по весу
        basePrice = autoNY.weightPrice;
    }

    let resultPrice = 0;

    


};
