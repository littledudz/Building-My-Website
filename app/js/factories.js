angular.module('WebApp')

.factory('Post', ['$resource', function ($resource) {
    return $resource( 'http://localhost:3000/api/posts/:id', { id: '@id' } )
}])