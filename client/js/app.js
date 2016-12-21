const app = angular.module('practiceReddit', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../partials/home.html',
            controller: 'homeController'

        }).when('/signup', {
            templateUrl: '../partials/signup.html',
            controller: 'signupController'

        });
        $locationProvider.html5Mode(true)
})
