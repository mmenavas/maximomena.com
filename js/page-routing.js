var menaApp = angular.module('menaApp', ['ngRoute']);

// configure our routes
menaApp.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'pages/inicio.html',
            controller  : 'mainController'
        })

        .when('/biografia', {
            templateUrl : 'pages/biografia.html',
            controller  : 'biographyController'
        })

        .when('/curriculum-vitae', {
            templateUrl : 'pages/curriculum-vitae.html',
            controller  : 'curriculumVitaeController'
        })

        .when('/fotos', {
            templateUrl : 'pages/fotos.html',
            controller  : 'photosController'
        })

});

menaApp.controller('mainController', function($scope) {
});

menaApp.controller('biographyController', function($scope) {
});

menaApp.controller('curriculumVitaeController', function($scope) {

  // Accordion
  $('.accordion-navigation > a').on('click', function(e) {
    e.preventDefault();
    var active = $('.accordion-navigation .content.active');

    if (active.length) {
      if (active.prev()[0].hash === $(this)[0].hash) {
        active.removeClass('active');
      }
      else {
        active.toggleClass('active');
        $(this).next().toggleClass('active');
      }
    }
    else {
      $(this).next().addClass('active');
    }

  });

});

menaApp.controller('photosController', function($scope) {
});
