var vHackersModule = angular.module('vHackersModule', []);

//Se ejecuta antes de que corra la aplicacion
vHackersModule.config(function () {

});
//Se ejecuta mientras corre la aplicacion
// vHackersModule.run(function () {
//
// });
vHackersModule.controller('HackersCtrl', ['$scope', '$http', function($scope, $http){
  var ctrl = this;
  ctrl.mensaje = "Hola Mundo";
  ctrl.amigos = [];
  ctrl.mensajeNuevo = "Go V-Hackers";
  ctrl.Team=['Anderson', 'Carlos' , 'Diego' , 'Gustavo'];
  ctrl.probar = function () {
    $http({
        method: 'GET',
        url: 'data/Hackers.json'
     }).then(function (response) {
      ctrl.amigos = response.data;
    }, function (error) {

    });


  };
}]);
