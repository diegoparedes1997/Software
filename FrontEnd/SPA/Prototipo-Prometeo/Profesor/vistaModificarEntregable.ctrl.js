//-- Anderson
angular.module('vHackersModule').controller('entregableMCtrl', ['$scope', 'gestiónProyectoService', '$uibModal',
function($scope, gestiónProyectoService, $uibModal){
  var ctrl = this;
  var entregable=this;
  ctrl.titulo = "Modificar Entregable";
  ctrl.alumnosLista = [];
  ctrl.alumnosListaModal = [];
  $scope.columnas=[1,2,3,4,5,6,7];
  $scope.filas=[1,2,3,4];
  ctrl.dias=['D','L','M','Mi','J','V','S'];
  // var d=new Date("5/11/2020");
  $scope.entregable={nombEntrg: 'Entregable 1', fechaI:new Date("2/05/2019"), horaI:new Date("2/05/2019 20:08"),
                      descrEntrg: 'Entregable 1', fechaF:new Date("2/05/2019"),horaF:new Date("2/05/2019 20:08"),
                    puntaje: 200};





  ctrl.probar = function () {
    gestiónProyectoService.listarAlumnos().then(function (alumnosListaData) {
      ctrl.alumnosLista = alumnosListaData;
    });
  };

  ctrl.probarModal = function () {
    //En este caso el controlador del modal se debe declarar en el JSON que pasa como parametro de open
    var modalInstance = $uibModal.open({
      animation: false,
      templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCrearEntregable.html',
      controller: 'entregableCtrl as ctrl',
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
  ctrl.swalEntregable = function (entregable) {
    console.log(angular.toJson(entregable));//Envio el json para crear el entregable
    entregable.nombEntrg="";
    entregable.fechaI="";
    entregable.horaI="";
    entregable.fechaF="";
    entregable.horaF="";
    entregable.descrEntrg="";
    entregable.puntaje="";
    swal("¡Bien hecho!", "El entregable se creo exitosamente" , "success");
  };


}]);
