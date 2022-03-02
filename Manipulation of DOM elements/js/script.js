const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

function getInputValue() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  alert("Username is: " + username, "Password is: " + password);
}


form.addEventListener('submit', (e) => {
e.preventDefault();

checkInputs();
});

function checkInputs() {
 const usernameValue = username.value.trim();
 const passwordValue = password.value.trim();

 if(usernameValue === '') {
   setErrorFor(username, 'Please, enter username.');
 }else if(usernameValue !== 'user_name') {
   setErrorFor(password, 'Please, enter valid username.');
 } else {
   setSuccessFor(username);
}
   

if(passwordValue === '') {
  setErrorFor(password, 'Please, enter password.');
} else if(passwordValue.length > 9) {
  setErrorFor(password, 'Please, enter valid password.');
} else {
  setSuccessFor(password);
}

}

function setErrorFor(input, message) {
const formContol = input.parentElement;
const small = formContol.querySelector('small');

small.innerText = message;

formContol.className = 'form-control error';
}

function setSuccessFor(input) {
  const formContol = input.parentElement;
  formContol.className = 'form-control success';
}

