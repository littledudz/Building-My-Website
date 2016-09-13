angular.module("WebApp")

.controller('NavbarController', ['$scope', '$location', 'modals', function ($scope, $location, modals) {
    $scope.goToHomeView = () => { $location.path('/') };
    $scope.goToAboutView = () => { $location.path('/about') };
    $scope.goToResumeView = () => { $location.path('/resume') };
    $scope.goToProjectsView = () => { $location.path('/projects') };
    $scope.goToBlogView = () => { $location.path('/blog') };
    $scope.openModal = function () {
        var promise = modals.open(
            "openModal", {
                message: "Hello World!"
            }
        )
        promise.then(
            function resolve (response) {
                console.log ("Button prerssed")
            }, function reject () {
                console.warn("Modal rejected")
            }
        )
    }
    $scope.message = ( modals.params().message || "Whoa!" );
    $scope.close = modals.resolve;
    // $scope.isActive = function (destination) {
    //     return destination === $location.path()
    // }
}])

.controller('HomeViewController', ['$scope' ,'$location', function ($scope, $location) {

}])

.controller('AboutViewController', ['$scope', function ($scope) {
    
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
