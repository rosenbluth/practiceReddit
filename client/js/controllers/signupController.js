app.controller('signupController', ['$scope', '$http', function($scope, $http){
    $scope.view = {};
    $scope.view.test = 'booyah signup';
    $scope.user = {};
    $scope.signUp = function(userobj){
        $http.post('/api/users', userobj).then(function(response){
            console.log(response);
        });
    };
}]);
