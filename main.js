import './style.scss'

const slider = document.querySelector('.slider');
const sliderValue = document.getElementById('slider-lenght');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const strength = document.querySelector('.strength-status');
const rect1 = document.getElementById('rectangle_one');
const rect2 = document.getElementById('rectangle_two');
const rect3 = document.getElementById('rectangle_three');
const rect4 = document.getElementById('rectangle_four');
const generate = document.getElementById('gen_button');
const copyButton = document.getElementById('copy');
const passwordField = document.querySelector('.password_field');
const ProgressBar = document.getElementById('ProgressBar');

const generatePassword = () => {
  const length = slider.value;
  const hasUppercase = uppercase.checked;
  const hasLowercase = lowercase.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;

  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=<>?/';

  let characters = '';

  if (hasUppercase) characters += uppercaseChars;
  if (hasLowercase) characters += lowercaseChars;
  if (hasNumbers) characters += numberChars;
  if (hasSymbols) characters += symbolChars;

  let generatedPassword = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    generatedPassword += characters.charAt(randomIndex);
  }

  passwordField.value = generatedPassword;
};

const updateStrength = () => {
  const length = slider.value;
  const hasUppercase = uppercase.checked;
  const hasLowercase = lowercase.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;

  const strengthValue = calculateStrength(length, hasUppercase, hasLowercase, hasNumbers, hasSymbols);

  strength.textContent = strengthValue.label;
  rect1.style.backgroundColor = strengthValue.color;
  rect2.style.backgroundColor = strengthValue.label === 'TOO WEAK!' ? 'transparent' : strengthValue.color;
  rect3.style.backgroundColor = strengthValue.label === 'TOO WEAK!' || strengthValue.label === 'WEAK' ? 'transparent' : strengthValue.color;
  rect4.style.backgroundColor = strengthValue.label === 'STRONG' ? strengthValue.color : 'transparent';
};


const calculateStrength = (length, hasUppercase, hasLowercase, hasNumbers, hasSymbols) => {
  // Lógica para determinar la fortaleza de la contraseña según los parámetros
  // Puedes ajustar estas condiciones según tus criterios de fortaleza
  const totalConditions = (hasUppercase ? 1 : 0) + (hasLowercase ? 1 : 0) + (hasNumbers ? 1 : 0) + (hasSymbols ? 1 : 0);
  const lengthCondition = length >= 8 ? 1 : 0;

  const strengthLevel = totalConditions + lengthCondition;

  switch (strengthLevel) {
    case 0:
    case 1:
      return { label: 'TOO WEAK!', color: '#F64A4A' };
    case 2:
      return { label: 'WEAK', color: '#FB7C58' };
    case 3:
      return { label: 'MEDIUM', color: '#F8CD65' };
    default:
      return { label: 'STRONG', color: '#A4FFAF' };
  }
};

generate.addEventListener('click', generatePassword);
copyButton.addEventListener('click', () => {
  passwordField.select();
  document.execCommand('copy');
});

slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
  updateStrength();
});

uppercase.addEventListener('change', updateStrength);
lowercase.addEventListener('change', updateStrength);
numbers.addEventListener('change', updateStrength);
symbols.addEventListener('change', updateStrength);

// Inicialización
generatePassword();
updateStrength();
updateSliderBar();

