angular.module("WebApp")

// .controller('NavbarController', ['$scope', '$location', function ($scope, $location) {
//     $scope.goToHomeView = () => { $location.path('/') };
//     $scope.goToAboutView = () => { $location.path('/about') };
//     $scope.goToProjectsView = () => { $location.path('/projects') };
//     $scope.isActive = function (destination) {
//         return destination === $location.path()
//     }
// }])

.controller('HomeViewController', ['$scope' ,'$location', function ($scope, $location) {
    $scope.goToAboutView = () => { $location.path('/about') };
    $scope.goToProjectsView = () => { $location.path('/projects') };
    $scope.title= "Hello World";
}])

.controller('AboutViewController', ['$scope', function ($scope) {
    
}])

.controller('ProjectsViewController', ['$scope', function ($scope) {
    
}])

.controller('FooterController', ['$scope', function ($scope) {
    
}]);
