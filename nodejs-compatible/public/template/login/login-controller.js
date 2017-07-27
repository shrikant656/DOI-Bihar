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
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/app');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };

        vm.loginblk = true;
        vm.passwordblk = false;

        vm.forgetPwd = function(){
            console.log('forget pwd');
            vm.loginblk = false;
            vm.passwordblk = true;
        }
        vm.showlogin = function(){
            vm.loginblk = true;
            vm.passwordblk = false;
        }

    }]);
    

})()