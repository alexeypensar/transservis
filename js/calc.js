//calculator
'use strict';


let length = 0;
let width = 0;
let height = 0;

// прайс - авто из Москвы в Якутск
const autoMY = [
    {
        minPrice: 1500,
        time: '12 - 13 дней'
    }

];


// прайс - контейнер из Москвы в Якутск
const containerMY = [
    {
        minPrice: 700,
        time: 'по запросу'
    }

];

// прайс - контейнер из Новосибирска в Якутск
const containerNY = [
    {
        minPrice: 500,
        time: 'по запросу'
    }

];

// прайс - авто из Новосибирска в Якутск
const autoNY = {
    minPrice: 1000,
    time: '8 - 9 дней',
    volumePrice: [6000, 5700, 5500, 5400, 5300, 5200],
    weightPrice: [28, 26, 25.5, 25, 24.5, 24]
};



let calc = function(type, weight, volume) {


    volume = +prompt('введите объём');
    weight = +prompt('введите вес');

    let factVolume = volume * 1.1;

    console.log('расчётный объём: ' + factVolume);

    let basePrice;

    let resultPrice = 0;


    // по объёму:
    if (weight / factVolume < 215) {

        basePrice = type.volumePrice;

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

        basePrice = type.weightPrice;

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

    if (resultPrice < type.minPrice) {
        resultPrice = type.minPrice;
        console.log('едем по минималке');
    }

    alert(resultPrice.toFixed());


};


calc(autoNY);