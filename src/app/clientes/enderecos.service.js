(function() {

	'use strict';

	angular.module('angularGulp').service('EnderecosService', EnderecosService);

	function EnderecosService($resource) {
		return $resource('https://viacep.com.br/ws/:cep/json/', {}, {

			query: {method:'GET', isArray:false}
		});
	}
 
})();