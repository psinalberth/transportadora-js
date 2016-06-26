(function(){
  'use strict';

  angular
    .module('angularGulp')
    .controller('UIController', UIController);

    /** @ngInject */
    function UIController($mdDialog){
      var vm = this;
      var originatorEv;

      vm.openMenu = function($mdOpenMenu, ev){
        originatorEv = ev;
        $mdOpenMenu(ev);
      }
    }
})();