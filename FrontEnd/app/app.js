var vHackersModule = angular.module('vHackersModule', ['ngRoute', 'ui.bootstrap', 'ngTable']);

//Se ejecuta antes de que corra la aplicacion
vHackersModule.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/inicio', {
      templateUrl: 'SPA/Prototipo-Prometeo/vistaPrincipal.html'
    })
    .when('/listaAlumnos', {
      templateUrl: 'SPA/Prototipo-Prometeo/vistaListarAlumnos.html'
    })
    .when('/tabla' , {
      templateUrl: 'SPA/Prototipo-Prometeo/vistaTabla.html'
    })
    .when('/calificacion', {
      templateUrl: 'SPA/Prototipo-Prometeo/Profesor/Evaluacion-Retroalimentacion/calificacionEntregable.html'
<<<<<<< HEAD
    })
      .when('/Profesor' , {
        templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaInicio.html'
      })
      .when('/Profesor/Curso' , {
        templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCurso.html'
      })
      .when('/Profesor/GestionProyecto' , {
        templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaGestiónProyecto.html'
      })
      .when('/entregable' , {
          templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCrearEntregable.html'
=======
    })
    .when('/Profesor' , {
      templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaInicio.html'
    })
    .when('/Profesor/Curso' , {
      templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCurso.html'
    })
    .when('/Profesor/GestionProyecto' , {
      templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaGestiónProyecto.html'
    })
    .when('/entregable' , {
        templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCrearEntregable.html'
>>>>>>> 5f1a306881878c04140d6952b10f77e435321dce
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
