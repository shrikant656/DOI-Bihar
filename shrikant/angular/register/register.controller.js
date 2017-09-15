(function () {
    'use strict';

    angular
        .module('routerApp')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService','$state'];
    function RegisterController(UserService, $location, $rootScope, FlashService,$state) {
        var vm = this;

        vm.register = register;
        //vm.logout = true;
        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $state.go('login');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
