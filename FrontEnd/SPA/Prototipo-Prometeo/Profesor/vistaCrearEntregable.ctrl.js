//-- Anderson
angular.module('vHackersModule').controller('entregableCtrl', ['$scope', 'entregableService', '$uibModal',
function($scope, entregableService, $uibModal){
  var ctrl = this;
  ctrl.tituloNuevo = "Nuevo Entregable";
  ctrl.tituloModificado= "Entregable";
  ctrl.filas=[1,2,3,4];
  ctrl.dias=['D','L','M','Mi','J','V','S'];
  ctrl.columnas=[1,2,3,4,5,6,7];
  ctrl.entregableM=[];
  // var d=new Date("5/11/2020");
  // $scope.entregable={nombEntrg: 'Entregable 1', fechaI:new Date("2/05/2019"), horaI:new Date("2/05/2019 20:08"),
  //                     descrEntrg: 'Entregable 1', fechaF:new Date("2/05/2019"),horaF:new Date("2/05/2019 20:08"),
  //                   puntaje: 200};





  $scope.init = function () {
    entregableService.entregableAlumno().then(function (entregableData) {
      ctrl.entregableM = entregableData[0];
      ctrl.entregableM[0].fechaEntrega=new Date(Date.now());
      ctrl.entregableM[0].descripcion="Entregable recibido con éxito";
    });
  };

  // ctrl.entregableM =function() { entregableService.entregableAlumno() };



  ctrl.swalEntregable = function (entregable) {
    entregable.id=0;
    entregable.tieneAlarma=1;
    console.log(angular.toJson(entregable));//Envio el json para crear el entregable
    entregable.nombre="";
    entregable.fechaEntrega="";
    entregable.horaEntrega="";
    entregable.fechaFin="";
    entregable.horaFin="";
    entregable.descripcion="";
    entregable.ponderacion="";
    swal("¡Bien hecho!", "El entregable se creo exitosamente" , "success");
  };

  ctrl.swalEntregableM = function (entregableM) {
    if (entregableM.id==0) {
      entregableM.id=0;
    }
    entregableM.tieneAlarma=1;
    console.log(angular.toJson(entregableM));//Envio el json para crear el entregable
    data=[{
      "id": entregableM.id,
      "nombre": entregableM.nombre,
      "fechaEntrega": entregableM.fechaEntrega,
      "tieneAlarma": 1,
      "ponderacion": entregableM.ponderacion
      }]
    entregableService.registroentregableAlumno(data).then(function () {
      ctrl.exitoso="Entregable enviado con éxito";
    });
    entregableM.nombre="";
    entregableM.fechaEntrega="";
    entregableM.horaEntrega="";
    entregableM.fechaFin="";
    entregableM.horaFin="";
    entregableM.descripcion="";
    entregableM.ponderacion="";
    swal("¡Bien hecho!", "El entregable se modificó exitosamente" , "success");
  };


}]);
