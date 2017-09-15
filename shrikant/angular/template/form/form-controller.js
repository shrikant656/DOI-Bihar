'use strict';

(function(){

/*---------------------------------------Dropdown---------------------------------------*/
    angular.module('routerApp').controller('formController', function ($scope,$log,SweetAlert) {

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

      $scope.Area = [
      {"AadharNumber":null,"AddressLineTwo":null,"AlternateEmailId":null,"ApplicationNumber":null,"ApplicationType":0,"Area":[{"ID":306,"ItemId":null,"Name":"A F station yelahanka"},{"ID":307,"ItemId":null,"Name":"Adugodi"},{"ID":308,"ItemId":null,"Name":"Agara"},{"ID":309,"ItemId":null,"Name":"Agram"},{"ID":310,"ItemId":null,"Name":"Air Force hospital"},{"ID":311,"ItemId":null,"Name":"Amruthahalli"},{"ID":312,"ItemId":null,"Name":"Anandnagar"},{"ID":313,"ItemId":null,"Name":"Anekal"},{"ID":314,"ItemId":null,"Name":"Anekalbazar"},{"ID":315,"ItemId":null,"Name":"Arabic College"},{"ID":316,"ItemId":null,"Name":"Aranya Bhavan"},{"ID":317,"ItemId":null,"Name":"Ashoknagar"},{"ID":318,"ItemId":null,"Name":"Attibele"},{"ID":319,"ItemId":null,"Name":"Attur"},{"ID":320,"ItemId":null,"Name":"Austin Town"},{"ID":321,"ItemId":null,"Name":"Avalahalli"},{"ID":322,"ItemId":null,"Name":"Avani Sringeri mutt"},{"ID":323,"ItemId":null,"Name":"Avenue Road"},{"ID":324,"ItemId":null,"Name":"B Sk ii stage"},{"ID":326,"ItemId":null,"Name":"Bagalgunte"},{"ID":327,"ItemId":null,"Name":"Bagalur"},{"ID":328,"ItemId":null,"Name":"Balepete"},{"ID":329,"ItemId":null,"Name":"Banashankari"},{"ID":330,"ItemId":null,"Name":"Banashankari Iii stage"},{"ID":331,"ItemId":null,"Name":"Banaswadi"},{"ID":332,"ItemId":null,"Name":"Bandikodigehalli"},{"ID":333,"ItemId":null,"Name":"Bangalore Air port"},{"ID":334,"ItemId":null,"Name":"Bangalore Bazaar"},{"ID":335,"ItemId":null,"Name":"Bangalore City"},{"ID":336,"ItemId":null,"Name":"Bangalore Corporation building"},{"ID":337,"ItemId":null,"Name":"Bangalore Dist offices bldg"},{"ID":338,"ItemId":null,"Name":"Bangalore Fort"},{"ID":339,"ItemId":null,"Name":"Bangalore Sub fgn post"},{"ID":340,"ItemId":null,"Name":"Bangalore."},{"ID":341,"ItemId":null,"Name":"Bannerghatta"},{"ID":342,"ItemId":null,"Name":"Bannerghatta Road"},{"ID":343,"ItemId":null,"Name":"Bapujinagar"},{"ID":344,"ItemId":null,"Name":"Basavanagudi"},{"ID":345,"ItemId":null,"Name":"Basavaraja Market"},{"ID":346,"ItemId":null,"Name":"Basaveshwaranagar"},{"ID":347,"ItemId":null,"Name":"Basaveswaranagar Ii stage"},{"ID":348,"ItemId":null,"Name":"Bellandur"},{"ID":349,"ItemId":null,"Name":"Benson Town"},{"ID":350,"ItemId":null,"Name":"Bestamaranahalli"},{"ID":351,"ItemId":null,"Name":"Bettahalsur"},{"ID":352,"ItemId":null,"Name":"Bhashyam Circle"},{"ID":353,"ItemId":null,"Name":"Bhattarahalli"},{"ID":354,"ItemId":null,"Name":"Bidaraguppe"},{"ID":355,"ItemId":null,"Name":"Bidrahalli"},{"ID":356,"ItemId":null,"Name":"Bnagalore Viswavidalaya"},{"ID":357,"ItemId":null,"Name":"Bommanahalli"},{"ID":358,"ItemId":null,"Name":"Brigade Road"},{"ID":325,"ItemId":null,"Name":"Bsf Campus yelahanka"},{"ID":5,"ItemId":null,"Name":"BTM Layout"},{"ID":359,"ItemId":null,"Name":"Byatarayanapura"},{"ID":360,"ItemId":null,"Name":"C.V.raman nagar"},{"ID":363,"ItemId":null,"Name":"Cahmrajendrapet"},{"ID":364,"ItemId":null,"Name":"Chamrajpet"},{"ID":365,"ItemId":null,"Name":"Chamrajpet Bazar"},{"ID":366,"ItemId":null,"Name":"Chandra Lay out"},{"ID":367,"ItemId":null,"Name":"Chickpet"},{"ID":368,"ItemId":null,"Name":"Chikkabettahalli"},{"ID":369,"ItemId":null,"Name":"Chikkajala"},{"ID":370,"ItemId":null,"Name":"Chikkalasandra"},{"ID":371,"ItemId":null,"Name":"Chikkanahalli"},{"ID":372,"ItemId":null,"Name":"Chunchanakuppe"},{"ID":361,"ItemId":null,"Name":"Cmp Centre and school"},{"ID":362,"ItemId":null,"Name":"Crpf Campus yelahanka"},{"ID":373,"ItemId":null,"Name":"Cubban Road"},{"ID":374,"ItemId":null,"Name":"Dasarahalli"},{"ID":375,"ItemId":null,"Name":"Deepanjalinagar"},{"ID":376,"ItemId":null,"Name":"Devanagundi"},{"ID":377,"ItemId":null,"Name":"Devarjeevanahalli"},{"ID":378,"ItemId":null,"Name":"Devasandra"},{"ID":379,"ItemId":null,"Name":"Dharmaram College"},{"ID":380,"ItemId":null,"Name":"Doddagubbi"},{"ID":381,"ItemId":null,"Name":"Doddajala"},{"ID":382,"ItemId":null,"Name":"Doddakallasandra"},{"ID":383,"ItemId":null,"Name":"Doddanekkundi"},{"ID":384,"ItemId":null,"Name":"Domlur"},{"ID":385,"ItemId":null,"Name":"Dommasandra"},{"ID":386,"ItemId":null,"Name":"Doorvaninagar"},{"ID":387,"ItemId":null,"Name":"Dr. ambedkar veedhi"},{"ID":388,"ItemId":null,"Name":"Electronics City"},{"ID":389,"ItemId":null,"Name":"Fraser Town"},{"ID":390,"ItemId":null,"Name":"G.K.v.k."},{"ID":391,"ItemId":null,"Name":"Gaviopuram Extension"},{"ID":392,"ItemId":null,"Name":"Gaviopuram Guttanahalli"},{"ID":393,"ItemId":null,"Name":"Gayathrinagar"},{"ID":394,"ItemId":null,"Name":"Girinagar"},{"ID":395,"ItemId":null,"Name":"Goraguntepalya"},{"ID":396,"ItemId":null,"Name":"Goripalya"},{"ID":397,"ItemId":null,"Name":"Governmemnt Electric factory"},{"ID":398,"ItemId":null,"Name":"Govindapalya"},{"ID":399,"ItemId":null,"Name":"Gunjur"},{"ID":400,"ItemId":null,"Name":"H M t"},{"ID":401,"ItemId":null,"Name":"H.A. farm"},{"ID":402,"ItemId":null,"Name":"H.A.l ii stage"},{"ID":403,"ItemId":null,"Name":"H.K.p. road"},{"ID":405,"ItemId":null,"Name":"Hampinagar"},{"ID":406,"ItemId":null,"Name":"Handenahalli"},{"ID":407,"ItemId":null,"Name":"Harogadde"},{"ID":408,"ItemId":null,"Name":"Hebbal Kempapura"},{"ID":409,"ItemId":null,"Name":"Hennagara"},{"ID":410,"ItemId":null,"Name":"Highcourt"},{"ID":411,"ItemId":null,"Name":"Hongasandra"},{"ID":412,"ItemId":null,"Name":"Hoodi"},{"ID":413,"ItemId":null,"Name":"Horamavu"},{"ID":414,"ItemId":null,"Name":"Hosakerehalli"},{"ID":415,"ItemId":null,"Name":"Hosur Road"},{"ID":404,"ItemId":null,"Name":"Hsr Layout"},{"ID":2,"ItemId":null,"Name":"HSR Layout"},{"ID":416,"ItemId":null,"Name":"Hulimangala"},{"ID":417,"ItemId":null,"Name":"Hulimavu"},{"ID":418,"ItemId":null,"Name":"Hulsur Bazaar"},{"ID":419,"ItemId":null,"Name":"Hunasamaranahalli"},{"ID":421,"ItemId":null,"Name":"Immedihalli"},{"ID":422,"ItemId":null,"Name":"Indalavadi"},{"ID":423,"ItemId":null,"Name":"Indiranagar"},{"ID":424,"ItemId":null,"Name":"Indiranagar Com. complex"},{"ID":425,"ItemId":null,"Name":"Industrial Estate"},{"ID":420,"ItemId":null,"Name":"Isro Anthariksha bhavan"},{"ID":426,"ItemId":null,"Name":"Ittamadu Layout"},{"ID":427,"ItemId":null,"Name":"J P nagar"},{"ID":428,"ItemId":null,"Name":"J.C.nagar"},{"ID":429,"ItemId":null,"Name":"Jakkur"},{"ID":430,"ItemId":null,"Name":"Jalahalli"},{"ID":431,"ItemId":null,"Name":"Jalahalli East"},{"ID":432,"ItemId":null,"Name":"Jalahalli Village"},{"ID":433,"ItemId":null,"Name":"Jalahalli West"},{"ID":434,"ItemId":null,"Name":"Jalavayuvihar"},{"ID":435,"ItemId":null,"Name":"Jayanagar"},{"ID":436,"ItemId":null,"Name":"Jayanagar West"},{"ID":437,"ItemId":null,"Name":"Jayangar East"},{"ID":438,"ItemId":null,"Name":"Jayangar Iii block"},{"ID":439,"ItemId":null,"Name":"Jeevanahalli"},{"ID":440,"ItemId":null,"Name":"Jeevanbhimanagar"},{"ID":441,"ItemId":null,"Name":"Jigani"},{"ID":1,"ItemId":null,"Name":"Jindal Colony"},{"ID":442,"ItemId":null,"Name":"Jp Nagar iii phase"},{"ID":443,"ItemId":null,"Name":"K H b colony"},{"ID":444,"ItemId":null,"Name":"K. g. road"},{"ID":445,"ItemId":null,"Name":"K.P.west"},{"ID":446,"ItemId":null,"Name":"Kacharakanahalli"},{"ID":447,"ItemId":null,"Name":"Kadabagere"},{"ID":448,"ItemId":null,"Name":"Kadugodi"},{"ID":449,"ItemId":null,"Name":"Kalkunte"},{"ID":450,"ItemId":null,"Name":"Kalyan Nagar"},{"ID":451,"ItemId":null,"Name":"Kamagondanahalli"},{"ID":452,"ItemId":null,"Name":"Kamakshipalya"},{"ID":453,"ItemId":null,"Name":"Kannamangala"},{"ID":454,"ItemId":null,"Name":"Kannur"},{"ID":455,"ItemId":null,"Name":"Kanteeravanagar"},{"ID":456,"ItemId":null,"Name":"Kathriguppe"},{"ID":457,"ItemId":null,"Name":"Kenchanahalli"},{"ID":458,"ItemId":null,"Name":"Kendriya Sadan"},{"ID":459,"ItemId":null,"Name":"Kendriya Vihar"},{"ID":460,"ItemId":null,"Name":"Kodigehalli"},{"ID":461,"ItemId":null,"Name":"Konanakunte"},{"ID":462,"ItemId":null,"Name":"Koramangala"},{"ID":463,"ItemId":null,"Name":"Koramangala I block"},{"ID":464,"ItemId":null,"Name":"Koramangala Vi bk"},{"ID":465,"ItemId":null,"Name":"Kothanur"},{"ID":466,"ItemId":null,"Name":"Krishnarajapuram"},{"ID":467,"ItemId":null,"Name":"Krishnarajapuram R s"},{"ID":468,"ItemId":null,"Name":"Kugur"},{"ID":469,"ItemId":null,"Name":"Kumaraswamy Layout"},{"ID":470,"ItemId":null,"Name":"Kumbalgodu"},{"ID":471,"ItemId":null,"Name":"Kundalahalli"},{"ID":472,"ItemId":null,"Name":"Lalbagh West"},{"ID":473,"ItemId":null,"Name":"Legislators Home"},{"ID":474,"ItemId":null,"Name":"Lingarajapuram"},{"ID":475,"ItemId":null,"Name":"M S r road"},{"ID":476,"ItemId":null,"Name":"Madhavan Park"},{"ID":477,"ItemId":null,"Name":"Madivala"},{"ID":478,"ItemId":null,"Name":"Magadi Road"},{"ID":479,"ItemId":null,"Name":"Mahadevapura"},{"ID":480,"ItemId":null,"Name":"Mahalakshmipuram Layout"},{"ID":481,"ItemId":null,"Name":"Mahatma Gandhi road"},{"ID":482,"ItemId":null,"Name":"Malkand Lines"},{"ID":483,"ItemId":null,"Name":"Mallathahalli"},{"ID":484,"ItemId":null,"Name":"Malleswaram"},{"ID":485,"ItemId":null,"Name":"Malleswaram West"},{"ID":486,"ItemId":null,"Name":"Mandalay Lines"},{"ID":3,"ItemId":null,"Name":"Mangammanapalya"},{"ID":487,"ItemId":null,"Name":"Marathahalli Colony"},{"ID":488,"ItemId":null,"Name":"Marsur"},{"ID":489,"ItemId":null,"Name":"Maruthi Sevanagar"},{"ID":490,"ItemId":null,"Name":"Mathikere"},{"ID":491,"ItemId":null,"Name":"Mavalli"},{"ID":492,"ItemId":null,"Name":"Mayasandra"},{"ID":493,"ItemId":null,"Name":"Medihalli"},{"ID":494,"ItemId":null,"Name":"Medimallasandra"},{"ID":495,"ItemId":null,"Name":"Mico Layout"},{"ID":496,"ItemId":null,"Name":"Milk Colony"},{"ID":497,"ItemId":null,"Name":"Mount St joseph"},{"ID":498,"ItemId":null,"Name":"Msrit"},{"ID":499,"ItemId":null,"Name":"Mundur"},{"ID":500,"ItemId":null,"Name":"Museum Road"},{"ID":501,"ItemId":null,"Name":"Muthanallur"},{"ID":502,"ItemId":null,"Name":"Muthusandra"},{"ID":504,"ItemId":null,"Name":"Naduvathi"},{"ID":505,"ItemId":null,"Name":"Nagarbhavi"},{"ID":506,"ItemId":null,"Name":"Nagasandra"},{"ID":507,"ItemId":null,"Name":"Nagavara"},{"ID":503,"ItemId":null,"Name":"Nal"},{"ID":508,"ItemId":null,"Name":"Nandinilayout"},{"ID":509,"ItemId":null,"Name":"Narasimharaja Colony"},{"ID":510,"ItemId":null,"Name":"Narasimjharaja Road"},{"ID":511,"ItemId":null,"Name":"Narayan Pillai street"},{"ID":512,"ItemId":null,"Name":"Nayandahalli"},{"ID":513,"ItemId":null,"Name":"Neralur"},{"ID":514,"ItemId":null,"Name":"New Tharaggupet"},{"ID":515,"ItemId":null,"Name":"New Thippasandra"},{"ID":516,"ItemId":null,"Name":"Okalipuram"},{"ID":517,"ItemId":null,"Name":"P&t Col. kavalbyrasandra"},{"ID":518,"ItemId":null,"Name":"Padmanabhnagar"},{"ID":519,"ItemId":null,"Name":"Palace Guttahalli"},{"ID":520,"ItemId":null,"Name":"Panathur"},{"ID":305,"ItemId":null,"Name":"Parappana Agrahara"},{"ID":521,"ItemId":null,"Name":"Pasmpamahakavi Road"},{"ID":522,"ItemId":null,"Name":"Peenya I stage"},{"ID":523,"ItemId":null,"Name":"Peenya Ii stage"},{"ID":524,"ItemId":null,"Name":"Peenya Small industries"},{"ID":525,"ItemId":null,"Name":"R T nagar"},{"ID":526,"ItemId":null,"Name":"R.M.v. extension ii stage"},{"ID":527,"ItemId":null,"Name":"Rajajinagar"},{"ID":528,"ItemId":null,"Name":"Rajajinagar I block"},{"ID":529,"ItemId":null,"Name":"Rajajinagar Ivth block"},{"ID":530,"ItemId":null,"Name":"Rajanakunte"},{"ID":531,"ItemId":null,"Name":"Rajarajeshwarinagar"},{"ID":532,"ItemId":null,"Name":"Rajbhavan"},{"ID":533,"ItemId":null,"Name":"Ramachandrapuram"},{"ID":534,"ItemId":null,"Name":"Ramagondanahalli"},{"ID":535,"ItemId":null,"Name":"Ramakrishna Hegde nagar"},{"ID":536,"ItemId":null,"Name":"Ramamurthy Nagar"},{"ID":537,"ItemId":null,"Name":"Rameshnagar"},{"ID":538,"ItemId":null,"Name":"Richmond Town"},{"ID":539,"ItemId":null,"Name":"Rv Niketan"},{"ID":540,"ItemId":null,"Name":"Sadashivanagar"},{"ID":541,"ItemId":null,"Name":"Sahakaranagar P.o"},{"ID":542,"ItemId":null,"Name":"Samandur"},{"ID":543,"ItemId":null,"Name":"Samethanahalli"},{"ID":544,"ItemId":null,"Name":"Sampangiramnagar"},{"ID":545,"ItemId":null,"Name":"Sarjapura"},{"ID":546,"ItemId":null,"Name":"Science Institute"},{"ID":547,"ItemId":null,"Name":"Seshadripuram"},{"ID":548,"ItemId":null,"Name":"Shankarpura"},{"ID":549,"ItemId":null,"Name":"Shanthinagar"},{"ID":550,"ItemId":null,"Name":"Sidihoskote"},{"ID":551,"ItemId":null,"Name":"Singanayakanahalli"},{"ID":304,"ItemId":null,"Name":"Singasandra"},{"ID":552,"ItemId":null,"Name":"Sivan Chetty gardens"},{"ID":553,"ItemId":null,"Name":"Someswarapura"},{"ID":554,"ItemId":null,"Name":"Sri Jayachamarajendra road"},{"ID":555,"ItemId":null,"Name":"Srirampuram"},{"ID":556,"ItemId":null,"Name":"St. johns medical college"},{"ID":557,"ItemId":null,"Name":"St. thomas town"},{"ID":558,"ItemId":null,"Name":"State Bank of mysore colony"},{"ID":559,"ItemId":null,"Name":"Subhashnagar"},{"ID":560,"ItemId":null,"Name":"Subramanyapura"},{"ID":561,"ItemId":null,"Name":"Swimming Pool extn"},{"ID":562,"ItemId":null,"Name":"Tarahunise"},{"ID":563,"ItemId":null,"Name":"Tavarekere"},{"ID":564,"ItemId":null,"Name":"Taverekere"},{"ID":565,"ItemId":null,"Name":"Thambuchetty Palya"},{"ID":566,"ItemId":null,"Name":"Thammanayakanahalli"},{"ID":567,"ItemId":null,"Name":"Tilaknagar"},{"ID":568,"ItemId":null,"Name":"Training Command iaf"},{"ID":569,"ItemId":null,"Name":"Tyagrajnagar"},{"ID":570,"ItemId":null,"Name":"Ullalu Upanagara"},{"ID":571,"ItemId":null,"Name":"Vanakanahalli"},{"ID":572,"ItemId":null,"Name":"Vartur"},{"ID":573,"ItemId":null,"Name":"Vasanthnagar"},{"ID":574,"ItemId":null,"Name":"Venkatarangapura"},{"ID":575,"ItemId":null,"Name":"Venkateshapura"},{"ID":576,"ItemId":null,"Name":"Vidhana Soudha"},{"ID":577,"ItemId":null,"Name":"Vidyanagara"},{"ID":578,"ItemId":null,"Name":"Vidyaranyapura"},{"ID":579,"ItemId":null,"Name":"Vijayanagar"},{"ID":580,"ItemId":null,"Name":"Vijayanagar East"},{"ID":581,"ItemId":null,"Name":"Vikramnagar"},{"ID":582,"ItemId":null,"Name":"Vimapura"},{"ID":583,"ItemId":null,"Name":"Virgonagar"},{"ID":584,"ItemId":null,"Name":"Visveswarapuram"},{"ID":585,"ItemId":null,"Name":"Viswaneedam"},{"ID":586,"ItemId":null,"Name":"Vittalnagar"},{"ID":587,"ItemId":null,"Name":"Viveknagar"},{"ID":588,"ItemId":null,"Name":"Vyalikaval Extn"},{"ID":589,"ItemId":null,"Name":"Wheel And axle plant"},{"ID":590,"ItemId":null,"Name":"Whitefield"},{"ID":591,"ItemId":null,"Name":"Wilson Garden"},{"ID":592,"ItemId":null,"Name":"Yadavanahalli"},{"ID":593,"ItemId":null,"Name":"Yediyur"},{"ID":594,"ItemId":null,"Name":"Yelachenahalli"},{"ID":595,"ItemId":null,"Name":"Yelahanka"},{"ID":596,"ItemId":null,"Name":"Yelahanka Satellite town"},{"ID":597,"ItemId":null,"Name":"Yemalur"},{"ID":598,"ItemId":null,"Name":"Yeshwanthpur Bazar"},{"ID":4,"ItemId":null,"Name":"Yeshwantpur"},{"ID":599,"ItemId":null,"Name":"Yeswanthpura"}],"BP_Number":null,"Building":[{"ID":1,"ItemId":null,"Name":"Flat - Upto 4 floors"},{"ID":2,"ItemId":null,"Name":"House - Individual Villa"},{"ID":3,"ItemId":null,"Name":"High Raised Appartment - More than 4 floors"}],"BuildingNumber":null,"CaptchaText":"m9tbW","City":null,"CorrespondingAddress":null,"DateOfBirth":null,"Department":null,"EmailID":null,"FirstName":null,"Gender":false,"HouseNumber":null,"IsConnectionAvailable":0,"LastName":null,"MiddleName":null,"NearestLandMark":null,"NumberOfAppartments":null,"NumberOfFloors":null,"OTPval":null,"Ownership":[{"ID":1,"ItemId":null,"Name":"Owned"},{"ID":2,"ItemId":null,"Name":"Rented"}],"Phone":null,"Pincode":null,"Prefix_Id":[{"ID":1,"ItemId":null,"Name":"Mr"},{"ID":2,"ItemId":null,"Name":"Ms"},{"ID":3,"ItemId":null,"Name":"Mrs"}],"Street":null,"selectedArea":null,"selectedBuildingType":null,"selectedOwnership":null,"selectedPrefix":null}
      ];
      $scope.selectedArea=0;

       
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

	   $scope.country = {};
        $scope.state = {};
        $scope.city = {};
        var allCountries = [{
            Id: 1,
            CountryName: "USA"
        }, {
            Id: 2,
            CountryName: "Australia"
        }];
        var allStates = [{
            Id: 1,
            StateName: "Washington",
            CountryId: 1
        }, {
            Id: 2,
            StateName: "New York",
            CountryId: 1
        }, {
            Id: 3,
            StateName: "Queensland",
            CountryId: 2
        }];
        var allCities = [{
            Id: 1,
            CityName: "Washington DC",
            StateId: 1
        }, {
            Id: 2,
            CityName: "New York City",
            StateId: 2
        }, {
            Id: 3,
            CityName: "Brisbane",
            StateId: 3
        } ];

        $scope.countries = allCountries;

        $scope.$watch('country', function () {
            $scope.states = allStates.filter(function (s) {
                return s.CountryId == $scope.country.Id;
            });
            $scope.city = {};
            $scope.state = {};
            $scope.cities = [];
        });

        $scope.$watch('state', function () {
            $scope.cities = allCities.filter(function (c) {
                return c.StateId == $scope.state.Id;
            });
            $scope.city = {};
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

	angular.module('routerApp').directive('validPassword', function () {
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
	angular.module('routerApp').directive('allowPattern', function () {
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
    angular.module('routerApp').directive('validFile',function(){
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