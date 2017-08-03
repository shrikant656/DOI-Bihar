'use strict';

(function(){

    angular.module('routerApp').controller('opinionController', ['$scope',function ($scope) {

    $scope.labels = ['1st Qtr','2nd Qtr','3rd Qtr'];
    $scope.data = [8,3,2];
    $scope.colors = ['#ec3e40','#ff9b2b','#f5d800','#377fc7'];
    $scope.options = {
      legend: { display: true,position: "right" },
        
    };

    $('#opn-submit').click(function(){
    	$('#opinionResult').show();
    	$('.opn-optionsblk').hide();
    })




    }])
    

})()