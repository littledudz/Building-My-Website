var app = angular.module('WebApp', ['ngRoute','ngResource']);

app.config (['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeViewController'
    })
    .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileViewController'
    })
    .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeViewController'
    })
    .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsViewController'
    })
    .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogViewController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactViewController'
    })
    .otherwise ({
        redirectTo: '/'
    })
}]);