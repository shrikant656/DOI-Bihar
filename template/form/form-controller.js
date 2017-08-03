'use strict';

(function(){

/*---------------------------------------Dropdown---------------------------------------*/
    angular.module('app').controller('formController', function ($scope,$log,SweetAlert) {

    	$scope.formData = [];
        $scope.fruit = [];
        $scope.selectedFruits = {};
    	$scope.submitForm = function(){}
	   
          $scope.save = function(list) {
    	    if ($scope.userForm.$valid) {
    	    	//console.log($scope.userForm.selectedFruits);
                $scope.formData.push(this.user);

                angular.forEach($scope.userForm.selectedFruits, function (value, key) {
                    if(value == true){
                        $scope.fruit.push(key);
                    }
                });
                $scope.t = [{'fruits':$scope.fruit}]
                //console.log($scope.fruit);
                Array.prototype.push.apply($scope.formData,$scope.t);

    	    } else {
    	      alert("There are invalid fields");
    	    }
    	  };

	  
	  $scope.reset = function() {
	    $scope.user = {  };
	  };

       
          $scope.fruits = [{
            'name': 'Apple',
            'id': 1
          }, {
            'name': 'Orange',
            'id': 2
          }, {
            'name': 'Banana',
            'id': 3
          }, {
            'name': 'Mango',
            'id': 4
          }];
          

          /**/
          $scope.list=[
            { name:'Computer Architecture' }, 
            { name:'Advanced Composite Materials'}, 
            { name:'Stategies Unplugged' }, 
            { name:'Teaching Science' }, 
            { name:'Challenging Times' }];

	   $scope.countryList = [
	     { CountryId: 1, Name: 'India' },
	     { CountryId: 2, Name: 'USA' }
	    ];
	 
	   $scope.cityList = [];
	   
	   $scope.$watch('user.country', function (newVal,oldVal) {
	 
	   if (newVal == 1)
	     $scope.cityList = [
	     { CountryId: 1, CityId: 1, Name: 'Noida' },
	     { CountryId: 1, CityId: 2, Name: 'Delhi' }];
	     else if (newVal == 2)
	     $scope.cityList = [
	     { CountryId: 2, CityId: 3, Name: 'Texas' },
	     { CountryId: 2, CityId: 4, Name: 'NewYork' }];
	     else
	     $scope.cityList = [];
	   });

       $scope.uploadbtn = function() {
            //SweetAlert.swal("Good job!", "You clicked the button!", "warning")
            $scope.uploadshow1 = true;
            SweetAlert.swal({   
                title: "Submitted",   
                text: "Form Submitted Successfully!",   
                type: "success"
            }) 
        }

	});

	angular.module('app').directive('validPassword', function () {
	    return {
	        require: 'ngModel',
	        link: function (scope, elm, attrs, ctrl) {
	        	ctrl.$parsers.push(function(viewValue) { 
	        		var isBlank = viewValue === '';
	                var invalidLen = !isBlank && (viewValue.length < 8 || viewValue.length > 20);
	                var isWeak = !isBlank && !invalidLen && !/(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z])/.test(viewValue);
	                ctrl.$setValidity('isBlank', !isBlank);
	                ctrl.$setValidity('isWeak', !isWeak);
	                ctrl.$setValidity('invalidLen', !invalidLen);
	                scope.passwordGood = !isBlank && !isWeak && !invalidLen;
	        		return viewValue.split(',');
	        	});
	        }
	    }
	}).directive('validPasswordC', function () {
	    return {
	        require: 'ngModel',
	        link: function (scope, elm, attrs, ctrl) {
	            ctrl.$parsers.push(function(viewValue, $scope) { 
	            //ctrl.$parsers.unshift(function (viewValue, $scope) {
	                var isBlank = viewValue === '';
	                var noMatch = viewValue != scope.userForm.password.$viewValue;
	                ctrl.$setValidity('isBlank', !isBlank);
	                ctrl.$setValidity('noMatch', !noMatch);
	                scope.passwordCGood = !isBlank && !noMatch;
	                return viewValue.split(',');
	            })
	        }
	    }
	});

	//Directives
	angular.module('app').directive('allowPattern', function () {
		return {
			restrict: "A",
			compile: function(tElement, tAttrs) {
				return function(scope, element, attrs) {
	        // I handle key events
					element.bind("keypress", function(event) {
						var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
						var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.
	          
	          // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
						if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
	            			event.preventDefault();
							return false;
						}
	          
					});
				};
			}
		};
	});

//Input file validation
    angular.module('app').directive('validFile',function(){
      return {
        require:'ngModel',
        link:function(scope,el,attrs,ngModel){
          //change event is fired when file is selected
          el.bind('change',function(){
            scope.$apply(function(){
              ngModel.$setViewValue(el.val());
              ngModel.$render();
            })
          })
        }
      }
    })
    

	/*angular.module('app').directive('validatealphabets', function () {
        function link(scope, elem, attrs, ngModel) {
            ngModel.$parsers.push(function (viewValue) {
                //var reg = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./1-9]*$/;
                var reg = /^[a-zA-Z']*$/;
                // if view values matches regexp, update model value
                if (viewValue.match(reg)) {
                    return viewValue;
                }
                // keep the model value as it is
                var transformedValue = ngModel.$modelValue;
                ngModel.$setViewValue(transformedValue);
                ngModel.$render();
                return transformedValue;
            });
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
    });

    angular.module('app').directive('alphanumeric', function () {
        function link(scope, elem, attrs, ngModel) {
            ngModel.$parsers.push(function (viewValue) {
                //var reg = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./1-9]*$/;
                var reg = /^[a-zA-Z0-9]*$/;
                // if view values matches regexp, update model value
                if (viewValue.match(reg)) {
                    return viewValue;
                }
                // keep the model value as it is
                var transformedValue = ngModel.$modelValue;
                ngModel.$setViewValue(transformedValue);
                ngModel.$render();
                return transformedValue;
            });
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
    });

    angular.module('app').directive('numeric', function () {
        function link(scope, elem, attrs, ngModel) {
            ngModel.$parsers.push(function (viewValue) {
                //var reg = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./1-9]*$/;
                var reg = /^[0-9]*$/;
                // if view values matches regexp, update model value
                if (viewValue.match(reg)) {
                    return viewValue;
                }
                // keep the model value as it is
                var transformedValue = ngModel.$modelValue;
                ngModel.$setViewValue(transformedValue);
                ngModel.$render();
                return transformedValue;
            });
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
    });

    angular.module('app').directive('decimalNumeric', function () {
        function link(scope, elem, attrs, ngModel) {
            ngModel.$parsers.push(function (viewValue) {
                //var reg = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./1-9]*$/;
                var reg = /^\d*\.?\d*$/;
                // if view values matches regexp, update model value
                if (viewValue.match(reg)) {
                    return viewValue;
                }
                // keep the model value as it is
                var transformedValue = ngModel.$modelValue;
                ngModel.$setViewValue(transformedValue);
                ngModel.$render();
                return transformedValue;
            });
        }

        return {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };
    });*/

})()