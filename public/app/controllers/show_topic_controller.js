FoorumApp.controller('ShowTopicController', function($scope, $http, $routeParams, $location, Api){
    Api.getTopic($routeParams.id).success(function(topic) {
        $scope.topic = topic;
        console.log("topic on \n" + JSON.stringify(topic));
        $scope.messages = topic.Messages;
        $scope.fivelast = topic.Messages.splice(-5, 5);
    });
    
    
    
    $scope.addMessage = function() {
        $scope.message.TopicId = $routeParams.id;
//        /topics/:id/message
        console.log("lisään viestin " + JSON.stringify($scope.message));
        $http.post('/topics/:id/message', $scope.message).success(function (message) {
            console.log("msg tuli ");
        })
    }
});
