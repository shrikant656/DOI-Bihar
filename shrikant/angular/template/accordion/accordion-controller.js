'use strict';

(function(){

    angular.module('routerApp').controller('AccordionDemoCtrl', function ($scope) {
	  $scope.oneAtATime = true;

	  $scope.groups = [
                    {
                      title: 'Dynamic Group Header - 1',
                      content: 'Dynamic Group Body - 1',
                      opened: true
                    },
                    {
                      title: 'Dynamic Group Header - 2',
                      content: 'Dynamic Group Body - 2',
                      opened: true
                    },
                    {
                      title: 'Dynamic Group Header - 3',
                      content: 'Dynamic Group Body - 3',
                      opened: true
                    }
                  ];

    $scope.expand = function (event) {

        var $this = $(event.target);
        $this.closest('li').toggleClass('activetab').find('.detail').slideToggle(300)
            .end().siblings('li').removeClass('activetab').find('.detail').slideUp(300);

    };


	});

})()