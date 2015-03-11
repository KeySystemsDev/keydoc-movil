angular.module('starter.services', [])

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

.factory("MyService", function() {
  return {
    data: {}
  };
})   

.factory("login", function ($resource) {
    return $resource("http://keydoc.com.ve/movil/sesion/conectar", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("perfil_usuario", function ($resource) {
    return $resource("http://keydoc.com.ve/movil/configuracion/perfil", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

.factory("notificaciones", function ($resource) {
    return $resource("http://keydoc.com.ve/movil/index/notificaciones", //la url donde queremos consumir
        {}, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
});