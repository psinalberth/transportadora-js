(function() {

	'use strict';

	angular.module('angularGulp').controller('ClientesController', ClientesController);

	function ClientesController(ClientesService, EstadosService, CidadesService, EnderecosService, $log, $scope, $mdDialog, $document, $mdMedia) {

		var vm = this;

		vm.clientes = [];

		vm.cliente = {

			nome: '',
			cep: '',
			logradouro: '',
			numero: '',
			uf: '',
			cidade: '',
			telefone: ''
		};

		vm.persist = new ClientesService();
		vm.edit = false;

		vm.editar = function(ev, cliente) {

			vm.cliente = cliente;

			$mdDialog.show({

				controller: function() {

					var vm = this;

					vm.cliente = cliente;

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

					if (!cliente) {
						vm.edit = false;
					} else {
						vm.edit = true;
					}

					vm.salvar = function(cliente) {
						vm.save(cliente);
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

					vm.limparEndereco = function(cliente) {

						cliente.logradouro = '';
						cliente.cidade = '';
						cliente.bairro = '';
						cliente.estado = '';
						cliente.complemento = '';
					}

					vm.loadEndereco = function(cliente, value) {

						if (value.length == 8) {

							EnderecosService.query({cep: value}, function(response){
								console.log(response);
								cliente.logradouro = response.logradouro;
								cliente.cidade = response.localidade;
								cliente.bairro = response.bairro;
								cliente.estado = response.uf;
								cliente.complemento = response.complemento;
							});
						} else {

							vm.limparEndereco(cliente);
						}
					}

					vm.loadCidades = function(value) {
						CidadesService.query({geonameId: value}, function(response) {
							vm.cidades = response.geonames;
						});
					}
				},
				controllerAs: 'clientes',
				templateUrl: 'app/clientes/clientes.form.tmpl.html',
				parent: angular.element($document.body),
				targetEvent: ev,
				clickOutsideToClose: false,
          		escapeToClose:true,
          		fullscreen: $mdMedia('sm') && vm.customFullscreen
		});
	}
}

})();