(function() {
    "use strict";
    angular.module("health").controller("homeCtrl", homeCtrl);
    angular.module("health").controller("prflCtrl", prflCtrl);
    angular.module("health").controller("accCtrl", accCtrl);
    homeCtrl.$inject = ['$scope'];

    function homeCtrl($scope) {
        $scope.name = "naieem";
        $scope.item = "";
        $scope.items = ["A", "List", "Of", "Items"];
        $scope.add = add;

        function add() {
              //debugger;
                // if ($scope.item == "") {
                //     //$scope.items.push($scope.item);
                // }
                // else {
                    $scope.items.push($scope.item);
                //}
        }
    }

    function prflCtrl() {
        this.name = "naieem";
    }

    function accCtrl() {
        this.name = "naieem";
    }
})();
