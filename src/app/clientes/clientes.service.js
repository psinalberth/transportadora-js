(function() {

	'use strict';

	angular.module('angularGulp').service('ClientesService', ClientesService);

	function ClientesService($resource) {
		return $resource('http://www.geonames.org/childrenJSON?geonameId=3469034', {}, {

			query: {method:'GET', isArray:false}
		});
	}
 
})();