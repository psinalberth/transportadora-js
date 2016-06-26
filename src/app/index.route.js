(function() {
  'use strict';

  angular
    .module('angularGulp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('fretes', {
        url: '/fretes',
        templateUrl: 'app/fretes/fretes.html',
        controller: 'FretesController',
        controllerAs: 'fretes'
      })

      .state('clientes', {
        url: '/clientes',
        templateUrl: 'app/clientes/clientes.html',
        controller: 'ClientesController',
        controllerAs: 'clientes'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
