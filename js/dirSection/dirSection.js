var app = angular.module('desktop');

app.directive('dirSection', function(){
  return {
    restrict: "E",
    templateUrl: 'js/dirSection/dirSection.html',
    link: function(scope){
      console.log(scope);
    },
    controller: function($scope, fb, $firebaseArray){
      var ref = new Firebase(fb);
  
      //$scope.item
      $scope.item.websites = $firebaseArray(ref);
      $scope.visible = false;
      $scope.editing = false;

      // Create the function to push the data into the "sections" array
      $scope.newListItem = function(){
        $scope.item.websites.$add({
          name: $scope.siteName,
          url: $scope.url
        })
        console.log($scope.item.websites)

        $scope.siteName = ''
        $scope.url = '';
      }
      // Create the function to remove an item from "sections" list
      $scope.remove = function(item) {
        var i = $scope.item.websites.indexOf(item)
        $scope.item.websites.splice(i,1)
      }    
    }
  }
});