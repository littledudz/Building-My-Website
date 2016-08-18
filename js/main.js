angular.module('webApp', ['ngRoute','ngResource']);

config (['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templatUrl: 'views/home.html',
        controller: 'HomeViewController'
    })
    .when('/about', {
        templatUrl: 'views/about.html',
        controller: 'AboutViewController'
    })
    .when('/projects', {
        templatUrl: 'views/projects.html',
        controller: 'ProjectsViewController'
    })
    .otherwise ({
        redirectTo: '/'
    })
}]);