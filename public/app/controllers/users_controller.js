FoorumApp.controller('UsersController', function($scope, $http, $location, Api){
  // Toteuta kontrolleri tähän
    $scope.login = function() {
        Api.login($scope.user).success(function(user) {
            console.log("login");
//            $location.path('/');
        })
        .error(function() {
            console.log("feilas login");
            $scope.errormsg = "väärä käyttis tai salasana";
        })
    }
    
    $scope.register = function() {
        Api.register($scope.user)
        .success(function(user) {
            console.log("register");
//            $location.path('/');
        })
        .error(function() {
            console.log("feilas register");
            $scope.errormsg = "käyttäjänimi jo varattu";
        })
    }
});
