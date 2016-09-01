angular.module("WebApp")

.controller('NavbarController', ['$scope', '$location', function ($scope, $location) {
    $scope.goToHomeView = () => { $location.path('/') };
    $scope.goToAboutView = () => { $location.path('/profile') };
    $scope.goToAboutView = () => { $location.path('/resume') };
    $scope.goToProjectsView = () => { $location.path('/projects') };
    $scope.goToAboutView = () => { $location.path('/blog') };
    $scope.goToAboutView = () => { $location.path('/contact') };
    // $scope.isActive = function (destination) {
    //     return destination === $location.path()
    // }
}])

.controller('HomeViewController', ['$scope' ,'$location', function ($scope, $location) {

}])

.controller('ProfileViewController', ['$scope', function ($scope) {
    
}])

.controller('ResumeViewController', ['$scope', function ($scope) {
    
}])

.controller('ProjectsViewController', ['$scope', function ($scope) {
    
}])

.controller('BlogViewController', ['$scope', function ($scope) {
    
}])

.controller('ContactViewController', ['$scope', function ($scope) {
    
}])

.controller('FooterController', ['$scope', function ($scope) {
    
}]);
