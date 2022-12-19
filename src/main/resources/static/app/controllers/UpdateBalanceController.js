app.controller('UpdateBalanceController', function ($scope, updateBalanceFactory, configSettings) {

    function init() {
        var promise = updateBalanceFactory.getUserDetailsUsingPlayerId(configSettings.playerId);
        promise.then(function(userDetails) {
            $scope.userDetails = userDetails;
        })
    }

    init();

    $scope.updateBalance = function (){
        $scope.userDetails.data.balance = $scope.amount;

        updateBalanceFactory.updateBalance($scope.userDetails.data).success(function (sale) {

        });

        document.getElementById("updateBalance").href="#/home";
    }
});