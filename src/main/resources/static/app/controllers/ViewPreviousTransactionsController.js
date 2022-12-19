app.controller('ViewPreviousTransactionsController', function ($scope, viewPreviousTransactionsFactory, configSettings) {
    function init() {
        console.log("We're in the transactions page")
        $scope.transactionalBalance = viewPreviousTransactionsFactory.getTransactions(configSettings.playerId).success(function (transactionalBalance) {
            $scope.transactionalBalance = transactionalBalance;
            console.log($scope.transactionalBalance);
        })
            .error(function (data, status, headers, config) {
                //Handle Errors
            });
    }
    init()
});