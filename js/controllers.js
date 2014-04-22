
var ivodControllers = angular.module('ivodControllers',[]);

ivodControllers.controller('indexCtrl',['$scope','$routeParams',
    function($scope,$routeParams){

    
      $scope.eventdbRef = new Firebase("https://blacklist.firebaseIO.com/event");

      $scope.eventdbRef.on("child_added", function(d) {
        v = d.val();
        if($scope.eventId==v.id){
          v.color = getColor(v.category);
          $scope.event = v;
        console.log($scope.event);
        }
      });
   }
]);


