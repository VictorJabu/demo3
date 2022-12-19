(function() {
    var updateBalanceFactory = function($http)
    {
        var factory = {};

        factory.getUserDetailsUsingPlayerId = function(playerId)
        {
            console.log(playerId)
            return $http({method: 'GET', url: 'http://localhost:8080/getUserDetailsUsingPlayerId', params: {playerId: playerId}});
        };

        factory.updateBalance = function (data)
        {
            console.log(data);
            return $http({
                method: 'POST',
                url: 'http://localhost:8080/updateBalance',
                data: data
            })
        };
        
        return factory;
    };
    
angular.module('homeApp').factory('updateBalanceFactory', updateBalanceFactory);
    
}());