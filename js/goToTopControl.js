/* DOM 스크립트 코드 -------------------------------------------------------------- */

(function gotoTopControl(global) {
  'use strict';

  var displayTop = 100;
  var bodyNode = null;
  var buttonNode = null;
  var buttonNodeDisplayValue = '';
  var getComputedStyle = global.getComputedStyle;

  function main() {
    bodyNode = global.document.body;
    buttonNode = document.querySelector('.top-scroll-container');
    buttonNodeDisplayValue = getComputedStyle(buttonNode, null).display;
    buttonNode.addEventListener('click', handleGoToTop);
    handleDisplayGoToTop();
  }

  function handleGoToTop() {
    bodyNode.scrollIntoView({ behavior: 'smooth' });
  }

  function handleDisplayGoToTop() {
    if (global.scrollY > displayTop) {
      buttonNode.style.display = buttonNodeDisplayValue;
    } else {
      buttonNode.style.display = 'none';
    }
  }

  global.addEventListener('DOMContentLoaded', main);
  global.addEventListener('scroll', handleDisplayGoToTop);
})(window);

/* 객체 지향 JavaScript 코드 ------------------------------------------------------ */

(function goToTopControl() {
  'use strict';

  function init() {
    var appHeader = document.querySelector('header');

    new GoToTop({
      targetTop: appHeader.getBoundingClientRect().bottom,
    });
  }

  window.addEventListener('DOMContentLoaded', init);
});
