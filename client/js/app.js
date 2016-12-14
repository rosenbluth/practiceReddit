
const app = angular.module('practiceReddit', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '../partials/home.html',
    controller: './controllers/homeController'

  }).otherwise('/')
  })
