angular.module('vHackersModule').controller('hackersCtrl', ['$scope', 'hackersService',
function($scope, hackersService){
  var ctrl = this;
  ctrl.mensaje = "Hola Mundo";
  ctrl.alumnosLista = [];
  ctrl.mensajeNuevo = "Go V-Hackers";
  ctrl.probar = function () {
    hackersService.listarAlumnos().then(function (alumnosListaData) {
      ctrl.alumnosLista = alumnosListaData;
    });
    // $http({
    //     method: 'GET',
    //     url: 'data/Hackers.json'
    //  }).then(function (response) {
    //   ctrl.amigos = response.data;
    // }, function (error) {
    //
    // });
  };
}]);
