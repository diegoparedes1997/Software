var vHackersModule = angular.module('vHackersModule', ['ngRoute']);

//Se ejecuta antes de que corra la aplicacion
vHackersModule.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/inicio', {
      templateUrl: 'SPA/Prototipo-Prometeo/vistaPrincipal.html'
    })
    .when('/listaAlumnos', {
      templateUrl: 'SPA/Prototipo-Prometeo/vistaListarAlumnos.html'
    })
    .otherwise({
      redirectTo: '/inicio'
    })
}]);
//Se ejecuta mientras corre la aplicacion
// vHackersModule.run(function () {
//
// });
// vHackersModule.controller('HackersCtrl', ['$scope', '$http', function($scope, $http){
//   var ctrl = this;
//   ctrl.mensaje = "Hola Mundo";
//   ctrl.amigos = [];
//   ctrl.mensajeNuevo = "Go V-Hackers";
//   ctrl.probar = function () {
//     $http({
//         method: 'GET',
//         url: 'data/Hackers.json'
//      }).then(function (response) {
//       ctrl.amigos = response.data;
//     }, function (error) {
//
//     });
//   };
// }]);
