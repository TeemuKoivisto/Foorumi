FoorumApp.controller('TestiController', function($scope, $http, $routeParams, Api){
    $http.get('/topics').success(function(topics) {
        $scope.topics = topics.splice(-10, 10);
    });
    
    $http.get('/messages').success(function(msgs) {
        $scope.messages = msgs.splice(-10, 10);
    });
    
    $http.get('/messages/reply').success(function(reply) {
        $scope.replies = reply.splice(-10, 10);
    });
    
    $http.get('/users').success(function(users) {
        $scope.users = users.splice(-10, 10);
    });
});
