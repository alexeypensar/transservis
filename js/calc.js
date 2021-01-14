//calculator
'use strict';

// прайс - авто из Москвы в Якутск
const autoMY = {
    volumeToWeight: 215,
    minPrice: 1500,
    time: '12 - 13 дней',
    volumePrice: [9600, 9200, 8900, 8700, 8600, 8500],
    weightPrice: [44, 42.5, 41, 40, 39.5, 39]
};

// прайс - авто из Новосибирска в Якутск
const autoNY = {
    volumeToWeight: 215,
    minPrice: 1000,
    time: '8 - 9 дней',
    volumePrice: [6000, 5700, 5500, 5400, 5300, 5200],
    weightPrice: [28, 26, 25.5, 25, 24.5, 24]
};


// прайс - контейнер из Москвы в Якутск
const containerMY = {
    volumeToWeight: 280,
    minPrice: 700,
    time: 'по запросу',
    volumePrice: [6200, 6000, 5600, 5400, 6000, 5600, 5400, 5300, 5600, 5400, 5300, 5250, 5400, 5300, 5250, 5200],
    weightPrice: [16, 17, 18, 19, 15.8, 16.5, 17, 18, 15.5, 16, 16.5, 17, 15, 15.5, 15.8, 16]
};

// прайс - контейнер из Новосибирска в Якутск
const containerNY = {
    volumeToWeight: 280,
    minPrice: 500,
    time: 'по запросу',
    volumePrice: [4800, 4700, 4600, 4500, 4700, 4600, 4500, 4450, 4600, 4500, 4450, 4425, 4500, 4450, 4425, 4400],
    weightPrice: [15, 16, 17, 18, 14.8, 15.15, 16, 17, 14.5, 14.8, 15.5, 16, 14, 14.5, 14.8, 15]
};







// weight.addEventListener('change', function() {
//     console.log(weight.value);
// })
//
// console.log(weight);


let calcFrom = document.getElementById('calcFrom');
let calcTo = document.getElementById('calcTo');

let calcButton = document.getElementById('calcButton');
let calcResults = document.getElementById('calcResults');
let calcAutoPrice = document.getElementById('calcAutoPrice');
let calcAutoTime = document.getElementById('calcAutoTime');
let calcContainerPrice = document.getElementById('calcContainerPrice');

let calcWeight = document.getElementById('calcWeight');
let calcVolume = document.getElementById('calcVolume');


// let length = 0;
// let width = 0;
// let height = 0;



// калькулятор для автоперевозок:

let calcAuto = function (type, weight, volume) {
    weight = +calcWeight.value;
    volume = +calcVolume.value;

    // this.weight = weight;
    // this.volume = volume;

    // volume = +prompt('введите объём');
    // weight = +prompt('введите вес');

    let factVolume = (volume * 1.1).toFixed(2);

    // console.log('расчётный объём: ' + factVolume);

    let basePrice;

    let resultPrice = 0;


    // по объёму:
    if (weight / factVolume < type.volumeToWeight) {

        basePrice = type.volumePrice;

        // console.log('по объёму');

        if (factVolume < 1) {
            resultPrice = factVolume * basePrice[0];
        } else if (factVolume >= 1 && factVolume < 3) {
            resultPrice = factVolume * basePrice[1];
        } else if (factVolume >= 3 && factVolume < 5) {
            resultPrice = factVolume * basePrice[2];
        } else if (factVolume >= 5 && factVolume < 10) {
            resultPrice = factVolume * basePrice[3];
        } else if (factVolume >= 10 && factVolume < 15) {
            resultPrice = factVolume * basePrice[4];
        } else if (factVolume >= 15) {
            resultPrice = factVolume * basePrice[5];
        }
    }

    // по весу:
    else {

        basePrice = type.weightPrice;

        // console.log('по весу');

        if (weight < 200) {
            resultPrice = weight * basePrice[0];
        } else if (weight >= 200 && weight < 600) {
            resultPrice = weight * basePrice[1];
        } else if (weight >= 600 && weight < 1000) {
            resultPrice = weight * basePrice[2];
        } else if (weight >= 1000 && weight < 2000) {
            resultPrice = weight * basePrice[3];
        } else if (weight >= 2000 && weight < 3000) {
            resultPrice = weight * basePrice[4];
        } else if (weight >= 3000) {
            resultPrice = weight * basePrice[5];
        }
    }

    if (resultPrice < type.minPrice) {
        resultPrice = type.minPrice;
        // console.log('едем по минималке');
    }

    calcAutoPrice.innerText = resultPrice.toFixed().toString();
    calcAutoTime.innerText = type.time;




};

// калькулятор для контейнерных перевозок:
let calcContainer = function (type, weight, volume) {

    weight = +calcWeight.value;
    volume = +calcVolume.value;



    let factVolume = (volume * 1.1).toFixed(2);


    let basePrice;

    let resultPrice = 0;

    let factVolumeToWeight = weight / factVolume;




    // по объёму:
    if (factVolumeToWeight < type.volumeToWeight) {

        basePrice = type.volumePrice;

        // console.log('по объёму');

        if (factVolume <= 2 && factVolumeToWeight > 240) {
            resultPrice = factVolume * basePrice[0];
        }
        else if (factVolume <= 2 && factVolumeToWeight > 200 && factVolumeToWeight <= 240) {
            resultPrice = factVolume * basePrice[1];
        }
        else if (factVolume <= 2 && factVolumeToWeight > 160 && factVolumeToWeight <= 200) {
            resultPrice = factVolume * basePrice[2];
        }
        else if (factVolume <= 2 && factVolumeToWeight <= 160) {
            resultPrice = factVolume * basePrice[3];
        }

        else if (factVolume > 2 && factVolume <= 4 && factVolumeToWeight > 240) {
            resultPrice = factVolume * basePrice[4];
        }
        else if (factVolume > 2 && factVolume <= 4 && factVolumeToWeight > 200 && factVolumeToWeight <= 240) {
            resultPrice = factVolume * basePrice[5];
        }
        else if (factVolume > 2 && factVolume <= 4 && factVolumeToWeight > 160 && factVolumeToWeight <= 200) {
            resultPrice = factVolume * basePrice[6];
        }
        else if (factVolume > 2 && factVolume <= 4 && factVolumeToWeight <= 160) {
            resultPrice = factVolume * basePrice[7];
        }

        else if (factVolume > 4 && factVolume <= 12 && factVolumeToWeight > 240) {
            resultPrice = factVolume * basePrice[8];
        }
        else if (factVolume > 4 && factVolume <= 12 && factVolumeToWeight > 200 && factVolumeToWeight <= 240) {
            resultPrice = factVolume * basePrice[9];
        }
        else if (factVolume > 4 && factVolume <= 12 && factVolumeToWeight > 160 && factVolumeToWeight <= 200) {
            resultPrice = factVolume * basePrice[10];
        }
        else if (factVolume > 4 && factVolume <= 12 && factVolumeToWeight <= 160) {
            resultPrice = factVolume * basePrice[11];
        }

        else if (factVolume > 12  && factVolumeToWeight > 240) {
            resultPrice = factVolume * basePrice[12];
        }
        else if (factVolume > 12  && factVolumeToWeight > 200 && factVolumeToWeight <= 240) {
            resultPrice = factVolume * basePrice[13];
        }
        else if (factVolume > 12  && factVolumeToWeight > 160 && factVolumeToWeight <= 200) {
            resultPrice = factVolume * basePrice[14];
        }
        else if (factVolume > 12  && factVolumeToWeight <= 160) {
            resultPrice = factVolume * basePrice[15];
        }

    }

    // по весу:
    else {

        basePrice = type.weightPrice;

        // console.log('по весу');

        if (weight <= 500 && factVolumeToWeight > 400) {
            resultPrice = weight * basePrice[0];
        }
        else if (weight <= 500 && factVolumeToWeight > 360 && factVolumeToWeight <= 400) {
            resultPrice = weight * basePrice[1];
        }
        else if (weight <= 500 && factVolumeToWeight > 320 && factVolumeToWeight <= 360) {
            resultPrice = weight * basePrice[2];
        }
        else if (weight <= 500 && factVolumeToWeight <= 320) {
            resultPrice = weight * basePrice[3];
        }

        else if (weight > 500 && weight <= 1000 && factVolumeToWeight > 400) {
            resultPrice = weight * basePrice[4];
        }
        else if (weight > 500 && weight <= 1000 && factVolumeToWeight > 360 && factVolumeToWeight <= 400) {
            resultPrice = weight * basePrice[5];
        }
        else if (weight > 500 && weight <= 1000 && factVolumeToWeight > 320 && factVolumeToWeight <= 360) {
            resultPrice = weight * basePrice[6];
        }
        else if (weight > 500 && weight <= 1000 && factVolumeToWeight <= 320) {
            resultPrice = weight * basePrice[7];
        }

        else if (weight > 1000 && weight <= 3000 && factVolumeToWeight > 400) {
            resultPrice = weight * basePrice[8];
        }
        else if (weight > 1000 && weight <= 3000 && factVolumeToWeight > 360 && factVolumeToWeight <= 400) {
            resultPrice = weight * basePrice[9];
        }
        else if (weight > 1000 && weight <= 3000 && factVolumeToWeight > 320 && factVolumeToWeight <= 360) {
            resultPrice = weight * basePrice[10];
        }
        else if (weight > 1000 && weight <= 3000 && factVolumeToWeight <= 320) {
            resultPrice = weight * basePrice[11];
        }

        else if (weight > 3000  && factVolumeToWeight > 400) {
            resultPrice = weight * basePrice[12];
        }
        else if (weight > 3000  && factVolumeToWeight > 360 && factVolumeToWeight <= 400) {
            resultPrice = weight * basePrice[13];
        }
        else if (weight > 3000  && factVolumeToWeight > 320 && factVolumeToWeight <= 360) {
            resultPrice = weight * basePrice[14];
        }
        else if (weight > 3000  && factVolumeToWeight <= 320) {
            resultPrice = weight * basePrice[15];
        }
    }

    if (resultPrice < type.minPrice) {
        resultPrice = type.minPrice;
        // console.log('едем по минималке');
    }

    // alert(resultPrice.toFixed());


    calcContainerPrice.innerText = resultPrice.toFixed().toString();

};


// calcAuto(autoMY);

// calcContainer(containerMY);




calcButton.addEventListener('click', function() {

    let calcTest = [calcFrom, calcTo, calcWeight, calcVolume];
    let calcTestErrors = 0;

    for (let i = 0; i < calcTest.length; i++) {

        if (calcTest[i].value === '') {
            // calcTest[i].style.border = '1px solid red';
            calcTestErrors += 1;
        }
    }

    if (calcTestErrors === 0) {

        
        if (calcFrom.value === 'Novosibirsk') {
            calcAuto(autoNY);
            calcContainer(containerNY);
        }

        else if (calcFrom.value === 'Moscow') {
            calcAuto(autoMY);
            calcContainer(containerMY);
        }

        calcResults.style.display = 'block';
        calcResults.scrollIntoView();
    }

    else {
        alert('Заполните все поля');
    }




});