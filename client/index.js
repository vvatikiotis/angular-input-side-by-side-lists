(function(angular) {
    "use strict";
    var resinApp = angular.module("resinApp", []);

    resinApp.controller("ListsController", function($scope) {
        $scope.entry = {text: null};

        $scope.leftList = [];
        $scope.rightList = [];

        $scope.createEntry = function() {
            console.dir($scope.entry.text);

            $scope.leftList.push($scope.entry.text);
        };

        $scope.moveItemRight = function(idx) {
            var item = $scope.leftList[idx];
            $scope.leftList.splice(idx, 1);
            $scope.rightList.push(item);
            console.dir(item);
        };

        $scope.moveItemLeft = function(idx) {
            var item = $scope.rightList[idx];
            $scope.rightList.splice(idx, 1);
            $scope.leftList.push(item);
            console.dir(item);
        }

    });

})(angular);
