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
                    if (response.success) {
                        FlashService.Success('Registration successful', true);
                        $location.path('/home');
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }]);

})();
