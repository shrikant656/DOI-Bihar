(function () {
    'use strict';

    angular
        .module('routerApp')
        .controller('RegisterController', ['UserService', '$location', '$rootScope', 'FlashService',function(UserService, $location, $rootScope, FlashService){

        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    console.log(1);
                    if (response.success) {
                        console.log(2);
                        FlashService.Success('Registration successful', true);
                        $location.path('/home');

                    } else {
                        console.log(3);
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }]);


        angular.module('routerApp').controller('formController', function ($scope,$log,SweetAlert) {

        $scope.formData = [];
        
        $scope.submitForm = function(){}
       
          $scope.save = function(list) {
            if ($scope.userForm.$valid) {
                
                $scope.formData.push(this.user);

            } else {
              alert("There are invalid fields");
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

    

    //Directives
    angular.module('routerApp').directive('allowPattern', function () {
        return {
            restrict: "A",
            compile: function(tElement, tAttrs) {
                return function(scope, element, attrs) {
            // I handle key events
                    element.bind("keypress", function(event) {
                        var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
                        var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.
              
              // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
                        if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
                            event.preventDefault();
                            return false;
                        }
              
                    });
                };
            }
        };
    });

})();
