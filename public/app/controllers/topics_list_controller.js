FoorumApp.controller('TopicsListController', function ($scope, $http, $location, Api) {
    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
        $scope.fivetopics = $scope.topics.splice(-5, 5);
    })
    
    $scope.addTopic = function () {
        $http.post('/topics', $scope.newTopic).success(function (topic) {
//            console.log("postasin " + JSON.stringify($location.path()));
//            $scope.kives = JSON.stringify(topic);
            $location.path("topics/" + topic.id);
        })
//        Api.addTopic($scope.newTopic).success(function (topic) {
//            $scope.kives = JSON.stringify(topic);
//            console.log("hei homo");
//        });
    }
});
