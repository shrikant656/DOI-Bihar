'use strict';

(function(){


    var routerApp = angular.module('routerApp', ['ngAnimate', 'ngSanitize','ngCookies', 'ui.bootstrap','ui.router','ngCookies','pascalprecht.translate']);
      var cookies;
      function readCookie(name, c, C, i) {
          var sd = document.cookie;
          c = sd.split('; ');
          cookies = {};
          for (i = c.length - 1; i >= 0; i--) {
              C = c[i].split('=');
              cookies[C[0]] = C[1];
          }
          return cookies[name];
      }
      window.readCookie = readCookie; // or expose it however you want
    var langchanges = readCookie('NG_TRANSLATE_LANG_KEY');
    var langchange = langchanges ? langchanges : '%22English%22';

    routerApp.config(function($stateProvider, $urlRouterProvider,$translateProvider) {

    $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.when("/about", "/about/overview");
    $urlRouterProvider.when("/contact-us", "/contact-us/key-contacts");
    $urlRouterProvider.when("/services", "/services/single-window");
    $urlRouterProvider.when("/agriculture-sector", "/agriculture-sector/introduction");

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'template/home/home.html',
            controller: 'LangCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'template/login/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'template/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'vm'
        })
        .state('app', {
            url: '/app',
            templateUrl: 'application/home/home.html',
            controller: 'HomeController'
        })
        // About STATES AND NESTED VIEWS ========================================
        .state('about', {
            url: '/about',
            templateUrl: 'template/about/about.html',
            controller: 'aboutController'
        })
        .state('about.overview', {
            url: '/overview',
            templateUrl: langchange == '%22English%22' ? 'template/about/overview.html' : 'template/about/overview-hn.html'
        })
        .state('about.department-functions', {
            url: '/department-functions',
            templateUrl: langchange == '%22English%22' ? 'template/about/department-functions.html' : 'template/about/department-functions-hn.html'
        })
        .state('about.organizational-structure', {
            url: '/organizational-structure',
            templateUrl: langchange == '%22English%22' ? 'template/about/organizational-structure.html' : 'template/about/organizational-structure-hn.html'
        })
        .state('about.best-practices', {
            url: '/best-practices',
            templateUrl: langchange == '%22English%22' ? 'template/about/best-practices.html' : 'template/about/best-practices-hn.html'
        })
        // contact STATES AND NESTED VIEWS ========================================
			.state('contact-us', {
            url: '/contact-us',
            templateUrl: 'template/contact/contact.html',
            controller: 'contactController'
        })
        .state('contact-us.key-contacts', {
            url: '/key-contacts',
            templateUrl: langchange == '%22English%22' ? 'template/contact/key-contacts.html' : 'template/contact/key-contacts-hn.html'
        })
        .state('contact-us.head-offices', {
            url: '/head-offices',
            templateUrl: langchange == '%22English%22' ? 'template/contact/head-offices.html' : 'template/contact/head-offices-hn.html'
        })
        .state('contact-us.dic', {
            url: '/dic',
            templateUrl: langchange == '%22English%22' ? 'template/contact/dic.html' : 'template/contact/dic-hn.html'
        })
        .state('contact-us.authority', {
            url: '/authority',
            templateUrl: langchange == '%22English%22' ? 'template/contact/authority.html' : 'template/contact/authority-hn.html'
        })
        // services STATES AND NESTED VIEWS ========================================
        .state('services', {
            url: '/services',
            templateUrl: 'template/services/services.html',
            controller: 'servicesController'
        })
        .state('services.single-window', {
            url: '/single-window',
            templateUrl: langchange == '%22English%22' ? 'template/services/single-window.html' : 'template/services/single-window-hn.html'
        })
        .state('services.schemes', {
            url: '/schemes',
            templateUrl: langchange == '%22English%22' ? 'template/services/schemes.html' : 'template/services/schemes-hn.html'
        })
        // Agriculture STATES AND NESTED VIEWS ========================================
        .state('agriculture-sector', {
            url: '/agriculture-sector',
            templateUrl: 'template/agriculture-sector/agriculture-sector.html',
            controller: 'agricultureController'
        })
        .state('agriculture-sector.introduction', {
            url: '/introduction',
            templateUrl: langchange == '%22English%22' ? 'template/agriculture-sector/introduction.html' : 'template/agriculture-sector/introduction-hn.html'
        })
        .state('agriculture-sector.highlights', {
            url: '/highlights',
            templateUrl: langchange == '%22English%22' ? 'template/agriculture-sector/highlights.html' : 'template/agriculture-sector/highlights-hn.html'
        })
        // Tenders STATES AND NESTED VIEWS ========================================
        .state('tender', {
            url: '/tender',
            templateUrl: 'template/tender/tender.html',
            controller: 'tenderController'
        })


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

        //$translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.useSanitizeValueStrategy(null);
    });

   
    routerApp.run(function($rootScope, $state, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
            //console.log(123);
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($state.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    });
    

    routerApp.controller('LangCtrl', ['$translate', '$scope', function ($translate, $scope) {

        $scope.products = [{ lang: 'English' }, { lang: 'Hindi' }];

        var currentLang = $translate.proposedLanguage() || $translate.use();
        $scope.sellang = currentLang;
        $scope.selectedLanguage = currentLang;
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
        location.reload()
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


})()