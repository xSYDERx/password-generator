import './style.scss'

const slider = document.querySelector('.slider');
const sliderValue = document.querySelector('.slider-lenght');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const strenght = document.querySelector('.strenght-status');
const rect1 = document.getElementById('rectangle_one');
const rect2 = document.getElementById('rectangle_two');
const rect3 = document.getElementById('rectangle_three');
const rect4 = document.getElementById('rectangle_four');
const generate = document.getElementById('gen_button');


CHARACTER_SETS = {
    uppercase: ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 26],
    lowercase: ['abcdefghijklmnopqrstuvwxyz', 26],
    numbers: ['1234567890', 10],
    symbols: ['!@#$%^&*()', 10],
  }

getSliderVal = () => {
    sliderValue.textContent = slider.value;
  }


styleRangeSlider = () => {
    const min = slider.min;
    const max = slider.max;
    const val = slider.value;

    slider.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

slider.addEventListener('input', () => {
  debugger
    getSliderVal();
    styleRangeSlider();
});