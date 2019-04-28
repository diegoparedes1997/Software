angular.module('vHackersModule').controller('modalListarAlumnosCtrl', modalListarAlumnosCtrl);

modalListarAlumnosCtrl = ['$scope', '$uibModalInstance','content', 'hackersService'];

function modalListarAlumnosCtrl ($scope, $uibModalInstance, content, hackersService){
  var ctrl = this;
  ctrl.alumnosLista = "";
  hackersService.listarAlumnos().then(function (alumnosListaData) {
    ctrl.alumnosLista = alumnosListaData;
  });
};
