FoorumApp.controller('ShowMessageController', function($scope, $http, $routeParams, Api){
    Api.getMessage($routeParams.id).success(function(message) {
        console.log("message on " + JSON.stringify(message));
        $scope.message = message;
    })
    
//    $http.get('/messages/' + $routeParams.id, $routeParams.id);
//    $http.get('/messages').success(function(msgs) {
//        console.log("messages are \n" + JSON.stringify(msgs));
//    });
    
    $scope.addReply = function() {
        $scope.newReply.MessageId = $routeParams.id;
        Api.addReply($scope.newReply).success(function(reply){
            console.log("tuli takas reply " + JSON.stringify(reply));
            $scope.message.Replies.push(reply);
        })
    }
});
