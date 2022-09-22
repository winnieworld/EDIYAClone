let email_input = document.querySelector('#email');
let email_label = document.querySelector('.email');
let pwd_input = document.querySelector('#password');
let pwd_label = document.querySelector('.password');
let checkbox = document.querySelector('#checkbox');
let check_label = document.querySelector('.checkbox');
let login_btn = document.querySelector('.form-btn');
let eye = document.querySelector('.eye');

let pwdChecker = false;

document.addEventListener('DOMContentLoaded', () => {
  pwd_input.value = '';
  email.value = '';
});

const labelHoldP = (input) => {
  if (document.activeElement === input) {
    pwd_label.classList.add('label-active');
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
  if (email_input.checkValidity() && pwdChecker) {
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
    document.querySelector('.checkbox-container').style.paddingTop = '20px';
    pwdChecker = false;
  }
  if (/^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/.test(pwd_input.value) && pwd_input.value.length > 0) {
    document.querySelector('.warning-pwd').style.display = 'none';
    document.querySelector('.pwd-invalid').style.display = 'none';
    document.querySelector('.checkbox-container').style.paddingTop = '0px';
    pwdChecker = true;
  }
  if (pwd_input.value.length === 0) {
    document.querySelector('.warning-pwd').style.display = 'none';
    document.querySelector('.pwd-invalid').style.display = 'none';
    document.querySelector('.checkbox-container').style.paddingTop = '0px';
    pwdChecker = false;
  }
}

email_input.addEventListener('click', () => labelHoldE(email_input));
pwd_input.addEventListener('click', () => labelHoldP(pwd_input));
document.addEventListener('click', () => deFocus());
email_input.addEventListener('keyup', () => checkValE());
checkbox.addEventListener('click', () => checkBox());
check_label.addEventListener('click', () => checkBox());
email_input.addEventListener('keyup', () => loginActive());
pwd_input.addEventListener('keyup', () => loginActive());
pwd_input.addEventListener('keyup', () => pwdVal());
login_btn.addEventListener('click', () => location.href="/index.html");
