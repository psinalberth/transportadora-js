(function() {

	'use strict';

	angular.module('angularGulp').controller('FretesController', FretesController);

	function FretesController(FretesService, EstadosService, CidadesService, $log, $scope, $mdDialog, $document, $mdMedia) {

		var vm = this;

		vm.cidades = [];

		vm.frete = {

			cliente: '',
			valor: '',
			cidade: ''
		};

		vm.persist = new FretesService();
		vm.edit = false;

		vm.editar = function(ev, frete) {

			vm.frete = frete;

			$mdDialog.show({

				controller: function() {

					var vm = this;

					vm.frete = frete;
					vm.estados = [];
					vm.cidades = [];

					vm.estado = {
						geonameId: '',
						name: '',
						countryId: ''
					};

					vm.cidade = {
						geonameId: '',
						name: '',
						adminName1: '',
						countryId: ''
					}

					if (!frete) {
						vm.edit = false;
					} else {
						vm.edit = true;
					}

					vm.salvar = function(frete) {
						vm.save(frete);
						cancel();
					}

					vm.cancel = function() {
						$mdDialog.cancel();
					}

					vm.loadEstados = function() {
						EstadosService.query({}, function(response) {
							vm.estados = response.geonames;
						});
					}

					vm.loadCidades = function(value) {
						CidadesService.query({geonameId: value}, function(response) {
							vm.cidades = response.geonames;
						});
					}
				},
				controllerAs: 'fretes',
				templateUrl: 'app/fretes/fretes.form.tmpl.html',
				parent: angular.element($document.body),
				targetEvent: ev,
				clickOutsideToClose: false,
          		escapeToClose:true,
          		fullscreen: $mdMedia('sm') && vm.customFullscreen
		});
	}
}

})();