angular.module('starter.controllers', [])

.controller("InicioCtrl", function($scope, $state, MyService, login) {
    console.log('InicioCtrl');
    $scope.selected = "2";

    $scope.login = function(user) {
        MyService.data.login = login.get(user, function (dato) {
            angular.forEach(dato, function () {                
                localStorage.setItem('id_usuario', MyService.data.login[0].id_usuario);
                localStorage.setItem('id_grupo', MyService.data.login[0].id_grupo);
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

.controller('PerfilCtrl', function($scope, perfil_usuario) {
 
    $scope.perfil_usuario = perfil_usuario.get({'id_usuario': localStorage.getItem('id_usuario')}, function (dato) {
            angular.forEach(dato, function () {
                localStorage.setItem('correo_usuario', $scope.perfil_usuario[0].correo_usuario);
                localStorage.setItem('nombre_perfil', $scope.perfil_usuario[0].nombre_perfil);
                localStorage.setItem('telefono_perfil', $scope.perfil_usuario[0].telefono_perfil);
                localStorage.setItem('url_imagen_perfil', $scope.perfil_usuario[0].url_imagen_perfil);
                localStorage.setItem('direccion_perfil', $scope.perfil_usuario[0].direccion_perfil);
            });
        });

    $scope.correo_usuario = localStorage.getItem('correo_usuario');
    $scope.nombre_perfil = localStorage.getItem('nombre_perfil');
    $scope.telefono_perfil = localStorage.getItem('telefono_perfil');
    $scope.url_imagen_perfil = localStorage.getItem('url_imagen_perfil');
    $scope.direccion_perfil = localStorage.getItem('direccion_perfil');

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

.controller('NotificationCtrl', function($scope, notificaciones, MyService) {
    console.log('NotificationCtrl');

    $scope.notificacion = notificaciones.get( {'id_grupo': localStorage.getItem('id_grupo'), 
                                               'id_usuario': localStorage.getItem('id_usuario')}, function (dato) {
            angular.forEach(dato, function () {

            });
        });

    $scope.id_cita = function(id_cita) {
        MyService.id_cita = id_cita;
    }

})

.controller('NotificationDetalleCtrl', function($scope, $stateParams, MyService, notificacion_detalle) {
    console.log('NotificationDetalleCtrl');

    var id_cita = MyService.id_cita;

    $scope.notificacion_detalle = notificacion_detalle.get({'id_cita': id_cita});

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