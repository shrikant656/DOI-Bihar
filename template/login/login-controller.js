'use strict';

(function(){

    angular
        .module('routerApp')
        .controller('loginController', ['$location', 'AuthenticationService', 'FlashService','$scope',function($location, AuthenticationService, FlashService,$scope){

        var vm = this;

        vm.login = login;

        var winht = window.innerHeight-47;
        vm.fullWinHt ={'height':+winht+'px'};

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                console.log(vm.password);
                if (response.success) {
                    console.log(6);
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/app');
                } else {
                    console.log(7);
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };

    }]);



        angular.module('routerApp').directive('validPassword', function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.push(function(viewValue) { 
                    var isBlank = viewValue === '';
                    var invalidLen = !isBlank && (viewValue.length < 8 || viewValue.length > 20);
                    var isWeak = !isBlank && !invalidLen && !/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/.test(viewValue);
                    ctrl.$setValidity('isBlank', !isBlank);
                    ctrl.$setValidity('isWeak', !isWeak);
                    ctrl.$setValidity('invalidLen', !invalidLen);
                    scope.passwordGood = !isBlank && !isWeak && !invalidLen;
                    //return viewValue.split(',');
                    return viewValue;
                });
            }
        }
    })
    

})()