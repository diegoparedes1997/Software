var vHackersModule = angular.module('vHackersModule', ['ui.router', 'ui.router.stateHelper', 'ui.bootstrap', 'ngTable', 'angular.chosen']);

//Se ejecuta antes de que corra la aplicacion
vHackersModule.config([
  '$urlRouterProvider',
  'stateHelperProvider',
  function($urlRouterProvider, stateHelperProvider) {
    $urlRouterProvider.otherwise('raiz.inicio');
    stateHelperProvider
    .state({
      name: 'raiz',
      abstract: true,
      url: '/raiz',
      templateUrl: 'SPA/raiz.html',
      children: [
        {
          name: 'inicio',
          url : '/inicio',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaPrincipal.html'
        },
        {
          name: 'listaAlumnos',
          url : '/listaAlumnos',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaListarAlumnos.html'
        },
        {
          name: 'tabla',
          url : '/tabla',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaTabla.html'
        },
        {
          name: 'listaAlumnos',
          url : '/listaAlumnos',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaListarAlumnos.html'
        },
        {
          name: 'gestion-usuarios',
          url : '/gestion-usuarios',
          templateUrl: 'SPA/Prototipo-Prometeo/Administrador/Gestion-usuarios/gestionUsuarios.html'
        }]
      });
}]);

// vHackersModule.config(['$routeProvider', function ($routeProvider) {
//   $routeProvider
//     .when('/inicio', {
//       templateUrl: 'SPA/Prototipo-Prometeo/vistaPrincipal.html'
//     })
//     .when('/listaAlumnos', {
//       templateUrl: 'SPA/Prototipo-Prometeo/vistaListarAlumnos.html'
//     })
//     .when('/tabla' , {
//       templateUrl: 'SPA/Prototipo-Prometeo/vistaTabla.html'
//     })
//     .when('/gestion-usuarios' , {
//       templateUrl: 'SPA/Prototipo-Prometeo/Administrador/Gestion-usuarios/gestionUsuarios.html'
//     })
//     .when('/calificacion', {
//       templateUrl: 'SPA/Prototipo-Prometeo/Profesor/Evaluacion-Retroalimentacion/calificacionEntregable.html'
//     })
//       .when('/Profesor' , {
//         templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaInicio.html'
//       })
//       .when('/Profesor/Curso' , {
//         templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCurso.html'
//       })
//       .when('/Profesor/GestionProyecto' , {
//         templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaGestiónProyecto.html'
//       })
//       .when('/entregable' , {
//           templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCrearEntregable.html'
//     })
//     .when('/Profesor' , {
//       templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaInicio.html'
//     })
//     .when('/Profesor/Curso' , {
//       templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCurso.html'
//     })
//     .when('/Profesor/GestionProyecto' , {
//       templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaGestiónProyecto.html'
//     })
//     .when('/entregable' , {
//         templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCrearEntregable.html'
//     })
//     .otherwise({
//       redirectTo: '/inicio'
//     })
// }]);
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
