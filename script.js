
const cars = [
    {
        id:1,
        carName: 'Mercedes-Benz S-Class',
        img:'./Images/mercedes.jpg',
        carSteeringImg:'./Images/mercedes-steering.jpg',
        carWheelImg:'./Images/mercedes-wheel.jpg',
        carLogoImg:'./Images/mercedes-logo.jpg',
        carDesc: 'The Mercedes-Benz S-Class combines luxurious elegance with advanced technology, setting the benchmark for premium sedans.',
        hourPrice:49,
        dailyPrice:979,
        monthlyPrice:98989,

        fuelType:'petrol/diesel',
        seat:5,
        average:'10 - 15 km/l',

    },
    {
        id:2,
        carName: 'BMW 7 Series',
        img:'./Images/bmw.jpg',
        carSteeringImg:'./Images/bmw-steering.jpg',
        carWheelImg:'./Images/bmw-wheel.jpg',
        carLogoImg:'./Images/bmw-back.jpg',
        carDesc: 'The BMW 7 Series epitomizes luxury and performance, offering cutting-edge technology and an exceptional driving experience.',
        hourPrice:19,
        dailyPrice:379,
        monthlyPrice:7599,
        fuelType:'petrol/diesel',
        seat:5,
        average:'12 - 17 km/l',



    },
    {
        id:3,
        carName: 'Audi A8',
        img:'./Images/audi.jpg',
        carSteeringImg:'./Images/audi-steering.jpg',
        carWheelImg:'./Images/audi-wheel.jpg',
        carLogoImg:'./Images/audi-logo.jpg',
        carDesc: 'The Audi A8 blends refined luxury with innovative technology, delivering a sophisticated and dynamic driving experience.',
        hourPrice:29,
        dailyPrice:599,
        monthlyPrice:11599,
        fuelType:'petrol/diesel',
        seat:5,
        average:'12 - 18 km/l',


    },
    {
        id:4,
        carName: 'Tesla Model S',
        img:'./Images/tesla.jpg',
        carSteeringImg:'./Images/tesla-back.jpg',
        carWheelImg:'./Images/tesla-charge.jpg',
        carLogoImg:'./Images/tesla-logo.jpg',
        carDesc: 'The Tesla Model S offers cutting-edge electric performance, futuristic technology, and unmatched efficiency in a sleek, luxurious package.',
        hourPrice:35,
        dailyPrice:699,
        monthlyPrice:13249,
        fuelType:'Electric',
        seat:5,
        average:'2 - 3 km/kWh',


    },
    {
        id:5,
        carName: 'Porsche Panamera',
        img:'./Images/porsche.jpg',
        carSteeringImg:'./Images/porsche-steering.jpg',
        carWheelImg:'./Images/porsche-back.jpg',
        carLogoImg:'./Images/porsche-logo.png',
        carDesc: 'The Porsche Panamera combines high-performance driving with luxury and versatility, offering a unique blend of sports car dynamics and executive comfort.',
        hourPrice:39,
        dailyPrice:799,
        monthlyPrice:15599,
        fuelType:'petrol/diesel',
        seat:4,
        average:'11 - 17 km/l',


    },
    {
        id:6,
        carName: 'Rolls Royce Phantom',
        img:'./Images/rolls-royce.jpg',
        carSteeringImg:'./Images/Rolls-Royce-steering.jpg',
        carWheelImg:'./Images/rolls-royce-wheel.jpg',
        carLogoImg:'./Images/rolls-royce-logo.jpg',
        carDesc: 'The Rolls-Royce Phantom epitomizes ultimate luxury and craftsmanship, providing an unmatched driving experience with its opulent design and advanced features.',
        hourPrice:49,
        dailyPrice:979,
        monthlyPrice:19549,
        fuelType:'petrol',
        seat:4,
        average:'5 - 8 km/l',


    },
]


const slider = document.querySelector('.slider')
const carLinks = document.querySelectorAll('.car-link')
const carName = document.querySelector('.car-name')
const carDesc = document.querySelector('.car-desc')

const hourlyPrice = document.querySelector('.hourly-price')
const dailyPrice = document.querySelector('.daily-price')
const monthlyPrice = document.querySelector('.monthly-price')

const carImg = document.querySelector('.main-car_img')
const carSteeringImg = document.querySelector('.car-steering_img')
const carWheelImg = document.querySelector('.car-wheel_img')
const carLogoImg = document.querySelector('.car-logo_img')

carLinks.forEach((car, index)=>{
    car.addEventListener('click', () => {

        choosenCar = cars[index];

        carName.textContent = choosenCar.carName;
        carDesc.textContent = choosenCar.carDesc;

        hourlyPrice.textContent = '$ ' + choosenCar.hourPrice + ' /hour';
        dailyPrice.textContent = '$ ' + choosenCar.dailyPrice + ' /day';
        monthlyPrice.textContent = '$ ' + choosenCar.monthlyPrice + ' /month';

        carImg.src = choosenCar.img;
        carSteeringImg.src = choosenCar.carSteeringImg;
        carWheelImg.src = choosenCar.carWheelImg;
        carLogoImg.src = choosenCar.carLogoImg;

    })

});

