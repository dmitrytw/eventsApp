var app = angular.module('navigation-module', ['ui.bootstrap']);

app.controller('NavBarCtrl', ['$scope', function($scope) {
    $scope.isCollapsed = true;
}]);