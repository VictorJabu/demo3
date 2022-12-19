app.controller('LoginController', function ($scope, loginFactory, viewBalanceFactory, configSettings) {
        $scope.authenticate = function(){
        $scope.username = document.getElementById("username").value;
        if($scope.username === undefined || $scope.username === '')
            {
                alert('Please enter your pin')
                document.getElementById("authenticate").href="#/";
            }else{
        console.log('authenticating');
            var promise = loginFactory.getUserDetails($scope.username);
            promise.then(function(playerDetails) {
                $scope.playerDetails = playerDetails;
                if(playerDetails.data === "" || playerDetails.data === undefined){
                    document.getElementById("authenticate").href="#/";
                    throw 400;
                }else{
                    configSettings.someElseSetting = playerDetails.data.name + " " + playerDetails.data.surname;
                    configSettings.playerId = playerDetails.data.id;
                    document.getElementById("authenticate").href="#/home";
                }
            })
        }
    }
});
