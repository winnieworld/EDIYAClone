let email_input = document.querySelector('#email');
let email_label = document.querySelector('.email');
let pwd_input = document.querySelector('#password');
let pwd_label = document.querySelector('.password');
let pwd_input2 = document.querySelector('#password2');
let pwd_label2 = document.querySelector('.password2');
let login_btn = document.querySelector('.form-btn');
let eye = document.querySelector('.eye');

let pwdChecker = false;

document.addEventListener('DOMContentLoaded', () => {
  pwd_input.value = '';
  pwd_input2.value = '';
  email.value = '';
});

const labelHoldP = (input) => {
  if (document.activeElement === input) {
    pwd_label.classList.add('label-active');
    email_input.value ? null : email_label.classList.remove('label-active');
  }
};

const labelHoldP2 = (input) => {
  if (document.activeElement === input) {
    pwd_label2.classList.add('label-active');
    email_input.value ? null : email_label.classList.remove('label-active');
  }
};

const labelHoldE = (input) => {
  if (document.activeElement === input) {
    email_label.classList.add('label-active');
    pwd_input.value ? null : pwd_label.classList.remove('label-active');
  }
};

const deFocus = () => {
  (email_input.value === '' && document.activeElement !== email_input) && email_label.classList.remove('label-active');
  (pwd_input.value === '' && document.activeElement !== pwd_input) && pwd_label.classList.remove('label-active');
  (pwd_input2.value === '' && document.activeElement !== pwd_input2) && pwd_label2.classList.remove('label-active');
};

const checkValE = () => {
  if (email_input.value !== '' && email_input.checkValidity()) {
    document.querySelector('.success').style.display = 'block';
  }
  else if (email_input.value === '' || !email_input.checkValidity()) document.querySelector('.success').style.display = 'none';
};

const checkBox = () => {
  if (checkbox.classList.contains('checked')) checkbox.classList.remove('checked');
  else checkbox.classList.add('checked');
};

const loginActive = () => {
  if (email_input.checkValidity() && pwdChecker && pwd_input2.value === pwd_input.value) {
    login_btn.classList.add('is--active');
    login_btn.removeAttribute('disabled');
  }
  else {
    login_btn.classList.remove('is--active');
    login_btn.setAttribute('disabled', 'true');
  }
}

const pwdVal = () => {
  if (!/^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/.test(pwd_input.value) && pwd_input.value.length > 0) {
    document.querySelector('.warning-pwd').style.display = 'block';
    document.querySelector('.pwd-invalid').style.display = 'block';
    pwdChecker = false;
  }
  if (/^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/.test(pwd_input.value) && pwd_input.value.length > 0) {
    document.querySelector('.warning-pwd').style.display = 'none';
    document.querySelector('.pwd-invalid').style.display = 'none';
    pwdChecker = true;
  }
  if (pwd_input.value.length === 0) {
    document.querySelector('.warning-pwd').style.display = 'none';
    document.querySelector('.pwd-invalid').style.display = 'none';
    pwdChecker = false;
  }
}

const pwdVal2 = () => {
  if (pwd_input2.value !== pwd_input.value) {
    document.querySelector('.pwd-invalid2').style.display = 'block';
  }
  else {
    document.querySelector('.pwd-invalid2').style.display = 'none';    
  }
}

email_input.addEventListener('click', () => labelHoldE(email_input));
pwd_input.addEventListener('click', () => labelHoldP(pwd_input));
pwd_input2.addEventListener('click', () => labelHoldP2(pwd_input2));
document.addEventListener('click', () => deFocus());
email_input.addEventListener('keyup', () => checkValE());
pwd_input2.addEventListener('keyup', () => loginActive());
pwd_input.addEventListener('keyup', () => pwdVal());
login_btn.addEventListener('click', () => location.href="/index.html");
pwd_input2.addEventListener('keyup', () => pwdVal2());

