'use strict';

(function(){

    var routerApp = angular.module('routerApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.router','ngCookies','pascalprecht.translate','oitozero.ngSweetAlert']);

    routerApp.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .state('register', {
                url: '/register',
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            })
            
        .state('home', {
            url: '/home',
            templateUrl: 'template/home/home.html',
            controller: 'HomeController'
        })
        .state('form', {
            url: '/form',
            templateUrl: 'template/form/form.html',
            controller: 'formController'
        })

        .state('home-en', {
            url: '/home-en',
            templateUrl: 'template/home/home-en.html',
            controller: 'LangCtrl'
        })
        .state('home-hn', {
            url: '/home-hn',
            templateUrl: 'template/home/home-hn.html',
            controller: 'LangCtrl'
        })
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'template/home/home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        .state('home.accordion', {
            url: '/accordion',
            templateUrl: 'template/accordion/accordion.html',
            controller: 'AccordionDemoCtrl'
        })
        // nested list with just some random string data
        .state('home.carousel', {
            url: '/carousel',
            templateUrl: 'template/carousel/carousel.html',
        })

        .state('home.others', {
            url: '/others',
            templateUrl: 'template/others/others.html',
        })

        .state('home.pagination', {
            url: '/pagination',
            templateUrl: 'template/pagination/pagination.html',
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                    // the main template will be placed here (relatively named)
                    '': { templateUrl: 'template/about/about.html' },

                    // the child views will be defined here (absolutely named)
                    'columnOne@about': { template: 'Look I am a column!' },

                    // for column two, we'll define a separate controller 
                    'columnTwo@about': { 
                        templateUrl: 'template/table-data.html',
                        controller: 'scotchController'
                    }
                }
        });


        // add translation tables
        $translateProvider.translations('English', translationsEN);
        $translateProvider.translations('Hindi', translationsHN);
        $translateProvider.registerAvailableLanguageKeys(['English', 'Hindi'], {
          'en_US': 'English',
          'en_UK': 'English',
          'en_*': 'English'
        });
        
        $translateProvider.determinePreferredLanguage();
        //$translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('English');
        
        // remember language
        $translateProvider.useCookieStorage();

        $translateProvider.useSanitizeValueStrategy('sanitize');
    });

    routerApp.run(function($rootScope, $cookieStore, $http,$state) {
      // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($state.go(), ['login', 'register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $state.go('login');
            }
        });
    })

    routerApp.controller('LangCtrl', ['$translate', '$scope', function ($translate, $scope) {

        $scope.products = [{
          lang: 'English'
        }, {
          lang: 'Hindi'
        }]

        var currentLang = $translate.proposedLanguage() || $translate.use();
        $scope.sellang = currentLang;
        console.log(currentLang + ' currentLang');
        /*var mainUrl = window.location.href;
          
          var match = mainUrl.substr(mainUrl.lastIndexOf('/')+1).split('-').pop();
          console.log(match + ' match');
          var replacedUrlEN = mainUrl.replace('hn','en');
          var replacedUrlHN = mainUrl.replace('en','hn');
           
          if((match !== '') && (match !== 'hn') && (match !== 'en')){
              var replacedUrl = (currentLang == 'Hindi') ? (window.location.href + '-hn') : (window.location.href + '-en');
              window.location.href = replacedUrl;
            }else if(match == 'hn' && currentLang == 'English'){
            window.location.href = replacedUrlEN;
          } else if(match == 'en' && currentLang == 'Hindi'){
            window.location.href = replacedUrlHN;
          } */

      $scope.selectLanguage = function(langKey){
      if (langKey === 'English') {
          $translate.fallbackLanguage('English');
        } else if (langKey == 'Hindi') {
          $translate.fallbackLanguage('Hindi');
        }
        $translate.use(langKey);
        location.reload();
      };
      
    }]);

    routerApp.controller('DatepickerPopupDemoCtrl', function($scope) {
    
          $scope.clear = function() {
            $scope.dt = null;
          };

          $scope.dateOptions = {
            formatYear: 'yy',
            //maxDate: new Date(2020, 5, 22),
            //minDate: new Date(),
            maxDate: new Date(),
            startingDay: 1
          };

          $scope.open2 = function() {
            $scope.popup2.opened = true;
          };

          $scope.popup2 = {
            opened: false
          };

          var tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          var afterTomorrow = new Date();
          afterTomorrow.setDate(tomorrow.getDate() + 1);
          $scope.events = [
            {
              date: tomorrow,
              status: 'full'
            },
            {
              date: afterTomorrow,
              status: 'partially'
            }
          ];

          function getDayClass(data) {
            var date = data.date,
              mode = data.mode;
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return $scope.events[i].status;
                }
              }
            }

            return '';
          }
    })

    routerApp.controller('scotchController', function($scope) {

        $scope.message = 'test';

        $scope.scotches = [
            {
                name: 'Macallan 12',
                price: 50
            },
            {
                name: 'Chivas Regal Royal Salute',
                price: 10000
            },
            {
                name: 'Glenfiddich 1937',
                price: 20000
            }
        ];

    });

})()