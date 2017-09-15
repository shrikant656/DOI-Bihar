'use strict';

(function(){

/*---------------------------------------Dropdown---------------------------------------*/
    angular.module('routerApp').controller('AboutCtrl', function ($scope,$log) {
	  
		//this.name = 'hello';
	    var cntrl = this;
	    cntrl.name = 'shrikant';
	    cntrl.phones = [
	    {
	      name: 'Nexus S',
	      done: true
	    }, {
	      name: 'Apple',
	      done: false
	    }, {
	      name: 'MOTOROLA XOOM™',
	      done: false
	    }
	  ];

	  cntrl.addphones = function(){
	    cntrl.phones.push({name: cntrl.addphone,done: false})
	    cntrl.addphone = '';
	  }
	  cntrl.phonesPending = function(){
	    var count = 0;
	    angular.forEach(cntrl.phones, function(phes){
	      count += phes.done ? 0 : 1;
	    })
	    return count;
	  }
	  cntrl.deletePhone = function(i){
	    cntrl.phones.splice(i,1);
	  } 

	});

})()