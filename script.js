var myApp = angular.module("myList", []);
myApp.controller("myListController", function($scope){
$scope.items=["2","1","3"];
$scope.newItem = "";
$scope.pushItem = function(){
    if($scope.newItem !=""){
        $scope.items.push($scope.newItem);
        $scope.newItem = "";
    }

}
    $scope.removeItem = function(index){

            $scope.items.splice(index,1);



    }

});

