(function() {
    var viewBalanceFactory = function($http)
    {
        var factory = {};

        factory.getUserDetailsUsingPlayerId = function(playerId)
        {
            console.log(playerId)
            return $http({method: 'GET', url: 'http://localhost:8080/getUserDetailsUsingPlayerId', params: {playerId: playerId}});
        };

        return factory;
    };

    angular.module('homeApp').factory('viewBalanceFactory', viewBalanceFactory);

}());




