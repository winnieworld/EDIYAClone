const $beverageItem = document.querySelectorAll('.beverage-item');

$beverageItem.forEach((beverageItem) => {
  beverageItem.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'SPAN') {
      beverageItem.classList.remove('is-hidden');
    } else {
      beverageItem.classList.add('is-hidden');
    }
  });
});
