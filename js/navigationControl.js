(function navigationControl() {
  'use strict';

  var apiAddress = '/api/navigation.json';

  var appNavigationNode = null;
  var openButtonNode = null;
  var closeButtonNode = null;

  function init() {
    fetchData((isDevelopmentMode() ? '' : '/EDIYA') + apiAddress);

    appNavigationNode = document.querySelector('.navigation');
    openButtonNode = document.querySelector('.buttonNone.buttonBurger');
    closeButtonNode = document.querySelector('.buttonNone.buttonClose');
  }

  function fetchData(api) {
    fetch(api)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        var navigationList = json.data;
        
        new Navigation(appNavigationNode, {
          list: navigationList,
          templateId: '#template-navigation-list',
          openButton: openButtonNode,
          closeButton: closeButtonNode,
          activeClass: 'is--active'
        });
      })
      .catch(function (error) {
        console.error(error.message);
      });
      
  }

  window.addEventListener('DOMContentLoaded', init);
})();
