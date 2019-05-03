angular.module('vHackersModule').controller('calificacionCtrl', calificacionCtrl);

calificacionCtrl.$inject = ['$scope','NgTableParams','herramientaEvaluacionServicio'];

function calificacionCtrl ($scope, NgTableParams,herramientaEvaluacionServicio){
  var ctrl = this;
  ctrl.titulo = "Exposición de Arquitectura de microservicios";
  ctrl.retroalimentacion = "";
  ctrl.puntajeMax = 20;
  ctrl.puntaje = 0;
  ctrl.id = 0;
  ctrl.herramientaEvaluacion = [];
  ctrl.obtenerHerramientaEvaluacion = function () {
    herramientaEvaluacionServicio.obtenerHerramientaEvaluacion().then(function (herramientaEvaluacion) {
      ctrl.herramientaEvaluacion = herramientaEvaluacion;
    });
  };

  ctrl.evaluacion =
  {
  "id": ctrl.id,
  "nota": ctrl.puntaje,
  "retroalimentacion" : ctrl.retroalimentacion
  };

  ctrl.enviarCalificacion = function() {
    herramientaEvaluacionServicio.enviarCalificacion(ctrl.enviarCalificacion);
  };

  ctrl.sumarPuntaje = function(value){
    ctrl.puntaje += parseInt(value);
  };

  ctrl.init = function (){
    ctrl.obtenerHerramientaEvaluacion();
  };
  ctrl.init();
}
