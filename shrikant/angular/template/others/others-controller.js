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

      $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
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

        /*modalInstance.result.then(function (selectedItem) {
          $ctrl.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });*/
      };

      /*$ctrl.openComponentModal = function () {
        var modalInstance = $uibModal.open({
          animation: $ctrl.animationsEnabled,
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
      };*/

      /*$ctrl.openMultipleModals = function () {
        $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title-bottom',
          ariaDescribedBy: 'modal-body-bottom',
          templateUrl: 'stackedModal.html',
          size: 'sm',
          controller: function($scope) {
            $scope.name = 'bottom';  
          }
        });

        $uibModal.open({
          animation: $ctrl.animationsEnabled,
          ariaLabelledBy: 'modal-title-top',
          ariaDescribedBy: 'modal-body-top',
          templateUrl: 'stackedModal.html',
          size: 'sm',
          controller: function($scope) {
            $scope.name = 'top';  
          }
        });
      };*/

      /*$ctrl.toggleAnimation = function () {
        $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
      };*/

    });

    angular.module('routerApp').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
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