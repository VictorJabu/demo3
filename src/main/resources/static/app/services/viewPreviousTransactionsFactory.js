(function() {
    var viewPreviousTransactionsFactory = function($http)
    {
        var factory = {};

        factory.getTransactions = function(playerId)
        {
            console.log(playerId)
            return $http({method: 'GET', url: 'http://localhost:8080/getTransactions', params: {playerId: playerId}});
        };
        
        return factory;
    };

    angular.module('homeApp').factory('viewPreviousTransactionsFactory', viewPreviousTransactionsFactory);

}());