// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Init key 
  .state('initkey', {
       url: "/init-key",
       abstract: false,
       templateUrl: "templates/init-key.html",
       controller: 'InitKey'
  })

  // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

    .state('tab.citas', {
        url: '/citas',
        views: {
            'tab-citas': {
                templateUrl: 'templates/tab-citas.html',
                controller: 'CitasCtrl'
            }
        }
    })
    .state('tab.estados', {
        url: '/estados',
        views: {
            'tab-citas':{
                templateUrl: 'templates/estados.html',
                controller: 'EstadosCtrl'
            }
        }
    })
    .state('tab.municipios', {
        url: '/municipios',
        views: {
            'tab-citas':{    
                templateUrl: 'templates/municipios.html',
                controller: 'MunicipiosCtrl'
            }
        }
    })
    .state('tab.doctores', {
        url: '/doctores',
        views:{
            'tab-citas':{
                templateUrl: 'templates/doctores.html',
                controller: 'DoctoresCtrl'
            } 
        }    
    })
    .state('tab.horarios', {
        url: '/horarios',
        views:{
            'tab-citas':{
                templateUrl: 'templates/horarios.html',
                controller: 'HorariosCtrl'
            }
        }
    })

  .state('tab.perfil', {
      url: '/perfil',
        views: {
            'tab-perfil': {
            templateUrl: 'templates/tab-perfil.html',
            controller: 'PerfilCtrl'
            }
        }
  })

  

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })

    .state('tab.notification', {
      url: '/notification',
      views: {
        'tab-notification': {
          templateUrl: 'templates/tab-notification.html',
          controller: 'NotificationCtrl'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/init-key');

});
