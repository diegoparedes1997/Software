var vHackersModule = angular.module('vHackersModule', ['ui.bootstrap', 'ngTable','ui.router','ui.router.stateHelper', 'localytics.directives']);

//Se ejecuta antes de que corra la aplicacion
vHackersModule.config(['$urlRouterProvider', 'stateHelperProvider',
function ($urlRouterProvider,stateHelperProvider) {
  $urlRouterProvider.otherwise("inicio/principal");
  stateHelperProvider
  .state({
      name: 'inicio',
      abstract: true,
      url: '/inicio',
      templateUrl: 'index.html',
      children:[
        {
          name: 'principal',
          url: '/principal',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaPrincipal.html'
        },
        {
          name: 'listaAlumnos',
          url: '/listaAlumnos',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaListarAlumnos.html'
        },
        {
          name: 'tabla',
          url: '/tabla',
          templateUrl: 'SPA/Prototipo-Prometeo/vistaTabla.html'
        },
        {
          name: 'calificacion',
          url: '/calificacion',
          templateUrl: 'SPA/Prototipo-Prometeo/Profesor/Evaluacion-Retroalimentacion/calificacionEntregable.html'
        },
        {
          name: 'profesor',
          url: '/profesor',
          templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaInicio.html'
        },
        {
          name: 'curso',
          url: '/curso',
          templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCurso.html'
        },
        {
          name:'gestion-proyecto',
          url: '/gestion-proyecto',
          templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaGestiónProyecto.html'
        },
        {
            name: 'evaluacion-herramienta',
            url: '/evaluacion-herramienta',
            templateUrl: 'SPA/Prototipo-Prometeo/Profesor/vistaCrearEntregable.html'
        },
        {
          name: 'gestion-usuarios',
          url: '/gestion-usuarios',
          templateUrl: 'SPA/Prototipo-Prometeo/Administrador/Gestion-usuarios/gestionUsuarios.html'
        }
      ]
    }, { keepOriginalNames: true });
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
