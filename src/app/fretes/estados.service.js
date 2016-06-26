(function() {

	'use strict';

	angular.module('angularGulp').service('EstadosService', EstadosService);

	function EstadosService($resource) {
		return $resource('http://www.geonames.org/childrenJSON?geonameId=3469034', {}, {

			query: {method:'GET', isArray:false}
		});
	}
 
})();