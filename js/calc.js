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

// let fromTo = '';








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



// let fromTo = NY;

let calc = function(weight, volume) {

    volume = prompt('введите объём');
    weight = prompt('введите вес');

    let factVolume = volume * 1.1;

    let basePrice;

    let resultPrice = 0;


    // по объёму:
    if (weight / factVolume < 215) {

        basePrice = autoNY.volumePrice;

        console.log('по объёму');

        if (factVolume < 1) {
            resultPrice = factVolume * basePrice[0];
        }
        else if (factVolume >= 1 && factVolume < 3) {
            resultPrice = factVolume * basePrice[1];
        }
        else if (factVolume >= 3 && factVolume < 5) {
            resultPrice = factVolume * basePrice[2];
        }
        else if (factVolume >= 5 && factVolume < 10) {
            resultPrice = factVolume * basePrice[3];
        }
        else if (factVolume >= 10 && factVolume < 15) {
            resultPrice = factVolume * basePrice[4];
        }
        else if (factVolume >= 15) {
            resultPrice = factVolume * basePrice[5];
        }
    }

    // по весу:
    else {

        basePrice = autoNY.weightPrice;

        console.log('по весу');

        if (weight < 200) {
            resultPrice = weight * basePrice[0];
        }
        else if (weight >= 200 && weight < 600) {
            resultPrice = weight * basePrice[1];
        }
        else if (weight >= 600 && weight < 1000) {
            resultPrice = weight * basePrice[2];
        }
        else if (weight >= 1000 && weight < 2000) {
            resultPrice = weight * basePrice[3];
        }
        else if (weight >= 2000 && weight < 3000) {
            resultPrice = weight * basePrice[4];
        }
        else if (weight >= 3000) {
            resultPrice = weight * basePrice[5];
        }
    }

    if (resultPrice < autoNY.minPrice) {
        resultPrice = autoNY.minPrice;
        console.log('едем по минималке');
    }

    alert(resultPrice.toFixed());

    
};


calc();