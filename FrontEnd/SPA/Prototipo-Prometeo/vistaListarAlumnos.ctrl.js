angular.module('vHackersModule').controller('hackersCtrl', ['$scope', 'hackersService', '$uibModal',
function($scope, hackersService, $uibModal){
  var ctrl = this;
  ctrl.mensaje = "Hola Mundo";
  ctrl.alumnosLista = [];
  ctrl.alumnosListaModal = [];
  ctrl.mensajeNuevo = "Go V-Hackers";
  ctrl.probar = function () {
    hackersService.listarAlumnos().then(function (alumnosListaData) {
      ctrl.alumnosLista = alumnosListaData;
    });
  };

  ctrl.probarModal = function () {
    var modalInstance = $uibModal.open({
      animation: false,
      templateUrl: 'SPA/Prototipo-Prometeo/modalListarAlumnos.html',
      controller: 'modalListarAlumnosCtrl as ctrl',
      size: 'lg',
      backdrop: true,
      keyboard: true,
      resolve: {
        content: function (){
          return "V Hackers"
        }
      }
    });
  };

  ctrl.probarSwal = function () {
    swal("¡Felicidades!", "Has ejecutado un swal", "success");
  };
}]);
