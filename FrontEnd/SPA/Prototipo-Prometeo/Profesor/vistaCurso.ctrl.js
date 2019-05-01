angular.module('vHackersModule').controller('profesorCursoCtrl', ['$scope', 'profesorCursoService', '$uibModal',
function($scope, hackersService, $uibModal){
  var ctrl = this;
  ctrl.mensaje = "Ingeniería de Software";
  ctrl.alumnosLista = [];
  ctrl.alumnosListaModal = [];
  ctrl.mensajeNuevo = "Go V-Hackers";
  ctrl.probar = function () {
    hackersService.listarAlumnos().then(function (alumnosListaData) {
      ctrl.alumnosLista = alumnosListaData;
    });
  };

  ctrl.probarModal = function () {
    //En este caso el controlador del modal se debe declarar en el JSON que pasa como parametro de open
    var modalInstance = $uibModal.open({
      animation: false,
      templateUrl: 'SPA/Prototipo-Prometeo/modalListarAlumnos.html',
      controller: 'modalListarAlumnosCtrl as ctrl',
      size: 'lg',
      backdrop: true,
      keyboard: true,
      resolve: {
        parametrosModalListarAlumnos: function (){
          return "V Hackers"
        }
      }
    });

    //Recibo parametro de retorno
    modalInstance.result.then( function (parametroRetorno) {
      ctrl.alumnosLista.push(parametroRetorno);
    });
  };

  ctrl.swalProyecto = function () {
    swal("¡Bien hecho!", "El proyecto se creo exitosamente", "success");
  };

  ctrl.swalEntregable = function () {
    swal("¡Bien hecho!", "El entregable se creo exitosamente", "success");
  };
}]);
