//El $q aún se está evaluando si se va a emplear
angular.module("vHackersModule").service('hackersService', ['$q', '$http',
function($q, $http) {

  var servicio = this;

  servicio.listarAlumnos = function(){

    var $defer = $q.defer();
    $http({
        method: 'GET',
        url: 'data/Hackers.json'
     }).then(function (respuesta) {
       $defer.resolve(respuesta.data);
     }).catch(function (error) {
       $defer.reject(error);
     });
    return $defer.promise;
  }

}]);
