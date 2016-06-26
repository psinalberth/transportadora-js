(function() {

	'use strict';

	angular.module('angularGulp').service('CidadesService', CidadesService);

	function CidadesService($resource) {
		return $resource('http://www.geonames.org/childrenJSON?geonameId=:geonameId', {}, {

			query: {method:'GET', isArray:false}
		});
	}
 
})();