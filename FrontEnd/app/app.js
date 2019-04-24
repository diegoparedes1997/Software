var vHackersModule = angular.module('vHackersModule', []);

//Se ejecuta antes de que corra la aplicacion
vHackersModule.config(function () {

});
//Se ejecuta mientras corre la aplicacion
// vHackersModule.run(function () {
//
// });
vHackersModule.controller('HackersCtrl', ['$scope', '$http', function($scope, $http){
  $scope.mensaje = "Hola Mundo";
  $scope.amigos = [];
  $scope.mensajeNUevo = "Go V-Hackers";
  $scope.probar = function () {
    $http({
        method: 'GET',
        url: 'data/Hackers.json'
     }).then(function (response) {
      $scope.amigos = response.data;
    }, function (error) {

    });
  };
}]);
