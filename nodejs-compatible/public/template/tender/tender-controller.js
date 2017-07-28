'use strict';

(function(){

    angular.module('routerApp').controller('tenderController', ['$scope','filterFilter',function ($scope,filterFilter) {
    	$scope.title="Tenders";

    	

    	$scope.items = [
    		{ 
				title: 'Aix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'Bix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Cix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'dix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'eix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'fix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'gix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'hix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'iix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'jix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'kix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'lix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'mix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'nix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'oix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'pix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'qix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'rix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'six laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'Bix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'tix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'uix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'vix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'wix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'xix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'yix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'zix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Aix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'Bix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Cix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Aix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'Bix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Cix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Aix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }, 
    		{ 
				title: 'Bix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 },
    		 { 
				title: 'Cix laning and Strengthening of NH-248A from existing km 2.740 (Rajiv Chowk) to km 11.682 in Gurugram under NHDP Phase-IV on Hybrid Annuity Mode in the State of Haryana',
				tenderID: '2017_NHAI_1738_1',
				organisation: 'National Highways Authority of India||Head Office - NHAI||Technical - NHAI',
				openingDate: '05/09/2017 11:30 AM',
				closingDate: '05/09/2017 11:30 AM',
				status:'Status'
    		 }
    	];

    	// create empty search model (object) to trigger $watch on update
		  $scope.search = {};

		  $scope.resetFilters = function () {
		    // needs to be a function or it won't trigger a $watch
		    $scope.search = {};
		  };

		  // pagination controls
		  $scope.currentPage = 1;
		  $scope.totalItems = $scope.items.length;
		  $scope.entryLimit = 8; // items per page
		  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);

		  // $watch search to update pagination
		  $scope.$watch('search', function (newVal, oldVal) {
		    $scope.filtered = filterFilter($scope.items, newVal);
		    //console.log($scope.filtered);
		    $scope.totalItems = $scope.filtered.length;
		    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
		    $scope.currentPage = 1;
		  }, true);
    	

    }])
    

})()