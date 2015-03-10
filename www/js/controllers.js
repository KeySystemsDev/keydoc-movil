angular.module('starter.controllers', [])

.controller("InicioCtrl", function($scope, $state, MyService, login) {
    console.log('InicioCtrl');
    $scope.selected = "2";

    $scope.login = function(user) {
        MyService.data.login = login.get(user, function (dato) {
            angular.forEach(dato, function () {
                localStorage.setItem('correo_usuario', MyService.data.login[0].correo_usuario);
                localStorage.setItem('nombre_perfil', MyService.data.login[0].nombre_perfil);
                localStorage.setItem('id_usuario', MyService.data.login[0].id_usuario);
            });
        });
        
        $state.go('tab.citas');
    };
})
 
/*.controller("AppCtrl", function($scope, MyService) {
    console.log('AppCtrl');
    $scope.dato_session = MyService.data.login;
    //console.log($scope.dato_session);
})*/

.controller('PerfilCtrl', function($scope, Citas) {
    $scope.citas = Citas.all();
  
    $scope.remove = function(cita) {
        Citas.remove(cita);
    }

    $scope.correo_usuario = localStorage.getItem('correo_usuario');
    $scope.nombre_perfil = localStorage.getItem('nombre_perfil');

})

.controller('OpcionesCtrl', function($scope, $state) {

    $scope.desconectar = function(cita) {
        $state.go('initkey');
    }
})

.controller('SearchCtrl', function($scope, Doctores) {
    
    $scope.doctores = Doctores.all();

    $scope.playlists = [
        { title: 'Dr.Carlos Lorem iIpsum', id: 1 },
        { title: 'Dr.Diego Lorem iIpsum', id: 2 },
        { title: 'Dr.Manuel Lorem iIpsum', id: 3 },
        { title: 'Dr.Adrian Lorem iIpsum', id: 4 },
        { title: 'Dr.Bella Lorem iIpsum', id: 5 },
        { title: 'Dr.Karla Lorem iIpsum', id: 6 },
        { title: 'Dr.Ana Lorem iIpsum', id: 7 },
        { title: 'Dr.Ericka Lorem iIpsum', id: 8 }
    ];

})

.controller('NotificationCtrl', function($scope) {
    console.log('NotificationCtrl');

    $scope.correo_usuario = localStorage.getItem('correo_usuario');
    //console.log($scope.correo_usuario);
})

.controller('CitasCtrl', function($scope, Friends, Specialty) {
  $scope.friends = Friends.all();
  $scope.specialty = Specialty.all();
})

.controller('EstadosCtrl', function($scope, Estados) {
    $scope.estados = Estados.all();
})

.controller('MunicipiosCtrl', function($scope, Municipios) {
    $scope.municipios = Municipios.all();
})

.controller('DoctoresCtrl', function($scope, Doctores) {
    $scope.doctores = Doctores.all();
})

.controller('HorariosCtrl', function($scope, Horarios) {
    $scope.horarios = Horarios.all();
});