angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'img/ionic.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * A simple example service that returns some data.
*/
.factory('Specialty', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var specialty = [{
    id: 0,
    name: 'Especialidad 1',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 1,
    name: 'Especialidad 2',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 2,
    name: 'Especialidad 3',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 3,
    name: 'Especialidad 4',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 4,
    name: 'Especialidad 5',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }];


  return {
    all: function() {
      return specialty;
    },
    get: function(specialtyId) {
      // Simple index lookup
      return specialty[specialtyId];
    }
  }
})

/**
 * A simple example service that returns some data.
*/
.factory('Estados', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var estados = [{
    id: 0,
    name: 'estados 1',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 1,
    name: 'estados 2',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 2,
    name: 'estados 3',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 3,
    name: 'estados 4',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 4,
    name: 'estados 5',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }];


  return {
    all: function() {
      return estados;
    },
    get: function(estadosId) {
      // Simple index lookup
      return estados[estadosId];
    }
  }
})

/**
 * A simple example service that returns some data.
*/
.factory('Municipios', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var municipios = [{
    id: 0,
    name: 'municipios 1',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 1,
    name: 'municipios 2',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 2,
    name: 'municipios 3',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 3,
    name: 'municipios 4',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 4,
    name: 'municipios 5',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }];


  return {
    all: function() {
      return municipios;
    },
    get: function(municipiosId) {
      // Simple index lookup
      return municipios[municipiosId];
    }
  }
})

/**
 * A simple example service that returns some data.
*/
.factory('Doctores', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var doctores = [{
    id: 0,
    name: 'doctores 1',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/upload.png'
  }, {
    id: 1,
    name: 'doctores 2',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/upload.png'
  }, {
    id: 2,
    name: 'doctores 3',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/upload.png'
  }, {
    id: 3,
    name: 'doctores 4',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/upload.png'
  }, {
    id: 4,
    name: 'doctores 5',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/upload.png'
  }];


  return {
    all: function() {
      return doctores;
    },
    get: function(doctoresId) {
      // Simple index lookup
      return doctores[doctoresId];
    }
  }
})

/**
 * A simple example service that returns some data.
*/
.factory('Horarios', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var horarios = [{
    id: 0,
    name: 'horarios 1',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 1,
    name: 'horarios 2',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 2,
    name: 'horarios 3',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 3,
    name: 'horarios 4',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }, {
    id: 4,
    name: 'horarios 5',
    summary: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    icons: 'img/ionic.png'
  }];


  return {
    all: function() {
      return horarios;
    },
    get: function(horariosId) {
      // Simple index lookup
      return horarios[horariosId];
    }
  }
})

/**
 * A simple example service that returns some data.
*/
.factory('Citas', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var citas = [{
    id: 0,
    name: 'cita 1',
    doctor: 'Doctor 1',
    icons: 'img/ionic.png',
    hora: 'x:xx',
    fecha: 'xx/xx/xx'
  }, {
    id: 1,
    name: 'cita 2',
    doctor: 'Doctor 2',
    icons: 'img/ionic.png',
    hora: 'x:xx',
    fecha: 'xx/xx/xx'
  }, {
    id: 2,
    name: 'cita 3',
    doctor: 'Doctor 3',
    icons: 'img/ionic.png',
    hora: 'x:xx',
    fecha: 'xx/xx/xx'
  }, {
    id: 3,
    name: 'cita 4',
    doctor: 'Doctor 4',
    icons: 'img/ionic.png',
    hora: 'x:xx',
    fecha: 'xx/xx/xx'
  }, {
    id: 4,
    name: 'cita 5',
    doctor: 'Doctor 5',
    icons: 'img/ionic.png',
    hora: 'x:xx',
    fecha: 'xx/xx/xx'
  }];


  return {
    all: function() {
      return citas;
    },
    remove: function(cita) {
      citas.splice(citas.indexOf(cita), 1);
    },
    get: function(citasId) {
      // Simple index lookup
      return citas[citasId];
    }
  }
});    
