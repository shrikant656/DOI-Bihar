'use strict';

(function(){

angular.module('routerApp').controller('feedbackController', function ($scope,$log,SweetAlert) {

        $scope.formData = [];
        
        $scope.submitForm = function(){}
       
          $scope.save = function(list) {
            if ($scope.userForm.$valid) {
                
                $scope.formData.push(this.user);

            } else {
              SweetAlert.swal({   
                title: "Error!",   
                text: "There are invalid fields!",   
                type: "warning"
            })
            }
          };

      
          $scope.reset = function() {
            $scope.user = {  };
          };


        });
    

})()