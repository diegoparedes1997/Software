angular.module('vHackersModule').controller('hackersCtrl', ['$scope', 'hackersService',
function($scope, hackersService){
  var ctrl = this;
  ctrl.mensaje = "Hola Mundo";
  ctrl.amigos = [];
  ctrl.mensajeNuevo = "Go V-Hackers";
  ctrl.probar = function () {
    ctrl.amigos = hackersService.listarAlumnos();
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
