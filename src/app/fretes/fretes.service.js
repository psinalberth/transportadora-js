(function() {

	'use strict';

	angular.module('angularGulp').service('FretesService', FretesService);

	function FretesService($resource) {
		return $resource('http://www.geonames.org/childrenJSON?geonameId=3469034', {}, {

			query: {method:'GET', isArray:false}
		});
	}
 
})();