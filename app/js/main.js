var app = angular.module('WebApp', ['ngRoute','ngResource']);

app.config (['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeViewController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutViewController'
    })
    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsViewController'
    })
    .otherwise ({
        redirectTo: '/'
    })
}]);