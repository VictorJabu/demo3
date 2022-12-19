(function() {
    var loginFactory = function($http)
    {
        var factory = {};

        factory.getUserDetails = function(username)
        {
            console.log(username)
            return $http({method: 'GET', url: 'http://localhost:8080/getUserDetails', params: {username: username}});
        };
        
        return factory;
    };
    
angular.module('homeApp').factory('loginFactory', loginFactory);
    
}());