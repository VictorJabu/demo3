app.controller('ViewBalanceController', function ($scope, viewBalanceFactory, configSettings) {

    function init() {
        console.log("Inside the View Balance");
        var promise = viewBalanceFactory.getUserDetailsUsingPlayerId(configSettings.playerId);
        promise.then(function(userDetails) {
            $scope.userDetails = userDetails;
            initializeValue(userDetails.data.balance);

        })
    }

    init();
    function initializeValue(value){
        $scope.amount = value;
    }

});