app.controller('HomeController', function ($scope, configSettings) {

    function init() {
        console.log(configSettings.someElseSetting);
        $scope.someElseSetting = configSettings.someElseSetting;
    }
    init()
});