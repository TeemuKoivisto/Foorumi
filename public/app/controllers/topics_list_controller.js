FoorumApp.controller('TopicsListController', function ($scope, $http, $location, Api) {
    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
        $scope.fivetopics = topics.splice(-5, 5);
    })
    
    $scope.addTopic = function () {
        Api.addTopic($scope.newTopic).success(function (topic) {
            $location.path("topics/" + topic.id);
        });
    }
});
