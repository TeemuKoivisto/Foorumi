FoorumApp.controller('TopicsListController', function ($scope, $http, $location, Api) {
//    $scope.topics = Api.getTopics();

    Api.getTopics().success(function (topics) {
        $scope.topics = topics;
    })

//    console.log("topics on " + $scope.topics);

    $scope.addTopic = function () {
//        console.log("hei");
        Api.addTopic({
            name: $scope.newTopic.name,
            description: $scope.newTopic.description
        }).success(function (topic) {
            console.log($location.path() + " ja topic " + topic);
        });
    }

    $scope.postaa = function () {
        $http.post('/topics', $scope.newTopic).success(function (response) {
            console.log("postasin " + JSON.stringify(response));
        });
    }
});
