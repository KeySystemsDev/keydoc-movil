angular.module('starter.controllers', [])

.factory("profilelist", function ($resource) {
    return $resource("http://keydoc.com.ve/movil/citas/especialidades", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.controller("InitCtrl", function($scope, $state, MyService, login, profilelist) {
    console.log('InitCtrl');
    $scope.selected = "2";

      /*data = [{"cantidad_horario":"1","nombre_especialidad":"odontolog\u00eda","id_tipo_especialidad":"407","cantidad_doctores":"1"}];
      hola = [];
      for (var i=0; i < data.length; i++){
          //i === 0: arr[0] === undefined;
          //i === 1: arr[1] === 'hola';
          //i === 2: arr[2] === 'chau';
          hola.push({
            hola : data[0].nombre_especialidad,
            umg : data[0].cantidad_horario
          });
          //console.log(hola);
      }*/


    //////////////////////////////////////////////

    $scope.data = profilelist.query();
    console.log('resource');
    console.log($scope.data);

    data = [{"id_tipo":"1","id_maestro":"2","nombre_tipo":"lunes","id_tipo_dependiente":"0","habilitado_tipo":"1"}];
    console.log('local');
    console.log(data);

    angular.forEach($scope.data, function(datas) {
        console.log(datas);
        console.log('---------------');
    });
    //////////////////////////////////////////////

    $scope.profileslist = profilelist.get(function (response) {
    angular.forEach(response, function () {
        console.log($scope.profileslist[0].nombre_tipo);
        localStorage.setItem('dia', $scope.profileslist[0].nombre_tipo)
        });
    });

    $scope.login = function(user) {
        MyService.data.login = login.get(user, function (dato) {
            angular.forEach(dato, function () {
                console.log(MyService.data.login[0].correo_usuario);
                localStorage.setItem('correo_usuario', MyService.data.login[0].correo_usuario)
            });
        });
        
        $state.go('tab.citas');
    };
})
 
.controller("AppCtrl", function($scope, MyService) {
    console.log('AppCtrl');
    $scope.dato_session = MyService.data.login;
    console.log($scope.dato_session);
  
    $scope.correo_usuario = localStorage.getItem('correo_usuario');
    console.log($scope.correo_usuario);
    
    angular.forEach($scope.dato_session, function(dato_sessions) {
        //console.log(dato_sessions);
        //console.log('---------------');
    });

    $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
    
    //console.log($scope.todos);

    angular.forEach($scope.todos, function(todo) {
        //console.log(todo);
        //console.log('---------------');
        //localStorage.setItem("nombre", todo.text);
        //localStorage.setItem("boleano", todo.done);
    });
    
    hola = localStorage.getItem("nombre");
    lol = localStorage.getItem("boleano");
    //console.log(hola);
    //console.log(lol);
   
    
    
})

.controller('PerfilCtrl', function($scope, Citas) {
    $scope.citas = Citas.all();
  
  $scope.remove = function(cita) {
    Citas.remove(cita);
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
    
    dia = localStorage.getItem('dia');
    console.log(dia);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('NotificationCtrl', function($scope) {
    console.log('NotificationCtrl');
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
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
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

// ------ GRADIENTE -------
var colors = new Array(
  [62,35,255],
  [60,255,60],
  [255,35,98],
  [45,175,230],
  [255,0,255],
  [255,128,0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.009;

function updateGradient()
{
var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "#"+((r1 << 16) | (g1 << 8) | b1).toString(16);

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "#"+((r2 << 16) | (g2 << 8) | b2).toString(16);

 $('#gradient').css({
   //linear----
   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
   //Radial----
   //background: "-webkit-radial-gradient(50% 60%, circle, "+color1+", "+color2+")"}).css({
    //background: "-moz-radial-gradient(50% 60%, circle, "+color1+", "+color2+")"});

  step += gradientSpeed;
  if ( step >= 1 )
  {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];
    
    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    
  }
}

setInterval(updateGradient,100);
//-------------------------------------------------------------------------