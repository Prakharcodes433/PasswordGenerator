const characters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
  '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|',
  ';', ':', '\'', '"', ',', '<', '.', '>', '/', '?',
  '`', '~', ' ',
  '£', '€', '¥', '¢', 
  '§', '©', '®', '™',
  '÷', '×', '°', '±', 
];


function generatePassword(length) {
  let result = '';

  for (let i = 0; i < length; i++) {
  
    const randomIndex = Math.floor(Math.random() * characters.length);
   
    result += characters[randomIndex];
  }
  return result;
}

function getPassword () {
  let passcontainer = document.querySelector(".password-container");
  passcontainer.style.visibility = "visible";
  const myNewPassword = generatePassword(16);
 let passfield1 = document.getElementById('pass-field-1');
 passfield1.innerText = myNewPassword;
 const myNewPassword2 = generatePassword(16);
 let passfield2 = document.getElementById('pass-field-2');
 passfield2.innerText = myNewPassword2;
}


  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast();
    });
  }
}

function showToast() {
  const toast = document.getElementById("snackbar");
  toast.className = "show";
  
  setTimeout(function() {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}


