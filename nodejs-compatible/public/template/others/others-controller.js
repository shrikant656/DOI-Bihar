'use strict';

(function(){

/*---------------------------------------Dropdown---------------------------------------*/
    angular.module('routerApp').controller('others', function ($scope,$log) {
	  
      $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
      ];

      $scope.status = {
        isopen: false
      };

      $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
      };

      $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
      };

	});

/*--------------------------------------------Modal----------------------------------------*/
    angular.module('routerApp').controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
      var $ctrl = this;
      $ctrl.items = ['item1', 'item2', 'item3'];

      /*$ctrl.open = function (size, parentSelector) {
        var parentElem = parentSelector ? 
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: '$ctrl',
          size: size,
          appendTo: parentElem,
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };*/

      $ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
          animation: true,
          component: 'modalComponent',
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          $log.info('modal-component dismissed at: ' + new Date());
        });
      };

    });

    /*angular.module('routerApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
      var $ctrl = this;
      $ctrl.items = items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };

      $ctrl.ok = function () {
        $uibModalInstance.close($ctrl.selected.item);
      };

      $ctrl.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    });*/

    // Please note that the close and dismiss bindings are from $uibModalInstance.

    angular.module('routerApp').component('modalComponent', {
      templateUrl: 'myModalContent.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: function () {
        var $ctrl = this;

        $ctrl.$onInit = function () {
          $ctrl.items = $ctrl.resolve.items;
          $ctrl.selected = {
            item: $ctrl.items[0]
          };
        };

        $ctrl.ok = function () {
          $ctrl.close({$value: $ctrl.selected.item});
        };

        $ctrl.cancel = function () {
          $ctrl.dismiss({$value: 'cancel'});
        };
      }
    });

    /*--------------------------------------------Pagination--------------------------------------*/

    angular.module('routerApp').controller('PaginationDemoCtrl', function ($scope, $log) {
      
      $scope.maxSize = 5;
      $scope.bigTotalItems = 200;
      $scope.bigCurrentPage = 1;

      $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.bigCurrentPage);
      };

      $scope.alertMe = function(){
        alert(1);
      }
    });

})()