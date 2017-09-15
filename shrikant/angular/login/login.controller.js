(function () {
    'use strict';

    angular
        .module('routerApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$state', 'AuthenticationService', 'FlashService','$scope'];
    function LoginController( $state, AuthenticationService, FlashService,$scope) {
        var vm = this;

        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    //$location.path('/home');
                    //console.log(vm.username);
                    switch (vm.username) {
                        case 'admin':
                        $state.go('home');
                        break;

                        case 'about':
                        $state.go('about');
                        break;
                    }
                    //$state.go('home');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
