const charSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:\'",.<>?/\\|`~'
};

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const lengthSlider = document.getElementById('length');
const lengthDisplay = document.getElementById('lengthDisplay');
const notification = document.getElementById('notification');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

lengthSlider.addEventListener('input', (e) => {
  lengthDisplay.textContent = e.target.value;
});

function getSelectedCharacters() {
  let characters = '';
  
  if (document.getElementById('uppercase').checked) {
    characters += charSets.uppercase;
  }
  if (document.getElementById('lowercase').checked) {
    characters += charSets.lowercase;
  }
  if (document.getElementById('numbers').checked) {
    characters += charSets.numbers;
  }
  if (document.getElementById('symbols').checked) {
    characters += charSets.symbols;
  }
  
  return characters || (charSets.uppercase + charSets.lowercase + charSets.numbers);
}

function generatePassword(length, characters) {
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  
  return result;
}

function generatePasswords() {
  const length = parseInt(document.getElementById('length').value);
  const characters = getSelectedCharacters();
  
  const password1 = generatePassword(length, characters);
  const password2 = generatePassword(length, characters);
  
  document.getElementById('password1').textContent = password1;
  document.getElementById('password2').textContent = password2;
}

function copyPassword(elementId) {
  const element = document.getElementById(elementId);
  const text = element.textContent;
  
  if (text && !text.includes('Click')) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification();
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
}

function showNotification() {
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2500);
}

function scrollTo(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
    e.preventDefault();
    generatePasswords();
  }
  
  if ((e.ctrlKey || e.metaKey) && e.key === '1') {
    e.preventDefault();
    copyPassword('password1');
  }
  
  if ((e.ctrlKey || e.metaKey) && e.key === '2') {
    e.preventDefault();
    copyPassword('password2');
  }
});

window.addEventListener('load', () => {
  generatePasswords();
});
