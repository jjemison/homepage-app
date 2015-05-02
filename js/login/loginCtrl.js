var app = angular.module('desktop');

app.controller('loginCtrl', function($scope){

    // Start as not visible but when button is tapped it will show as true 
    $scope.visible = false;
    $scope.editing = false;
    // Create the array to hold the list of Websites
    $scope.sections = [];
    console.log($scope.sections)

    // Create the function to remove the "sections" array
    $scope.removeSection=function(index){ 
      $scope.sections.splice(index,1);  
    } 
    // Create the function to create a new section
    $scope.createNewSection = function() {
    $scope.sections.push({})
    }
    // Create the function to create one default section to appear on first visit
    $scope.sections.push({})


})