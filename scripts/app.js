'use strict';

(function(){


    var routerApp = angular.module('routerApp', ['ngAnimate', 'ngSanitize','ngCookies', 'ui.bootstrap','ui.router','ngCookies','pascalprecht.translate','oitozero.ngSweetAlert','chart.js']);
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

    routerApp.config(function($stateProvider, $urlRouterProvider,$translateProvider,ChartJsProvider) {

        // Configure all charts
    ChartJsProvider.setOptions({
      colors: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
    });
    // Configure all doughnut charts
    ChartJsProvider.setOptions('doughnut', {
      cutoutPercentage: 60
    });

    $urlRouterProvider.otherwise('/home');
    $urlRouterProvider.when("/about", "/about/overview");
    $urlRouterProvider.when("/contact-us", "/contact-us/key-contacts");
    $urlRouterProvider.when("/services", "/services/single-window");
    $urlRouterProvider.when("/agriculture-sector", "/agriculture-sector/introduction");
    $urlRouterProvider.when("/login", "/login/userlogin");

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'template/home/home.html',
            controller: 'LangCtrl'
        })
                
        .state('app', {
            url: '/app',
            templateUrl: 'application/home/home.html',
            controller: 'HomeController'
        })
        // Login STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'template/login/login.html',
            controller: 'loginController',
            controllerAs: 'vm'
        })
        .state('login.userlogin', {
            url: '/userlogin',
            templateUrl: 'template/login/login-view.html'
        })
        .state('login.register', {
            url: '/register',
            templateUrl: 'template/login/register-view.html',
            controller: 'RegisterController',
            controllerAs: 'vm'
        })
        .state('login.forgot-password', {
            url: '/forgot-password',
            templateUrl: 'template/login/ForgotPassword-view.html'
           //controller: 'loginController',
           // controllerAs: 'vm'
        })
        .state('login.thankyou', {
            url: '/thankyou',
            templateUrl: 'template/login/thankyou.html'
        })
        .state('login.otp', {
            url: '/otp',
            templateUrl: 'template/login/otp.html'
        })
        .state('register', {  //Note: Dummy need to delete it, dont refer this state...
            url: '/register',
            templateUrl: 'template/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'vm'
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
        .state('about.citizen-charter', {
            url: '/citizen-charter',
            templateUrl: langchange == '%22English%22' ? 'template/about/citizen-charter.html' : 'template/about/citizen-charter-hn.html'
        })
        /*.state('about.photo-gallery', {
            url: '/photo-gallery',
            templateUrl: langchange == '%22English%22' ? 'template/about/photo-gallery.html' : 'template/about/photo-gallery-hn.html'
        })*/
        
        
        // Investors Zone STATES AND NESTED VIEWS ========================================
        .state('investors-zone', {
            url: '/investors-zone',
            templateUrl: 'template/investors-zone/investors-zone.html',
            controller: 'investorsController'
        })
        .state('investors-zone.important-downloads', {
            url: '/important-downloads',
            templateUrl: langchange == '%22English%22' ? 'template/investors-zone/important-downloads.html' : 'template/investors-zone/important-downloads-hn.html'
        })
        .state('investors-zone.faq', {
            url: '/faq',
            templateUrl: langchange == '%22English%22' ? 'template/investors-zone/faq.html' : 'template/investors-zone/faq-hn.html'
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
        // Guidelines STATES AND NESTED VIEWS ========================================
        .state('guidelines', {
            url: '/guidelines',
            templateUrl: langchange == '%22English%22' ? 'template/guidelines/guidelines.html' : 'template/guidelines/guidelines-hn.html'
        }) 
        // Policies Acts STATES AND NESTED VIEWS ========================================
        .state('policies-acts', {
            url: '/policies-acts',
            templateUrl: langchange == '%22English%22' ? 'template/policies-acts/policies-acts.html' : 'template/policies-acts/policies-acts-hn.html'
        }) 
        // Photo Gallery STATES AND NESTED VIEWS ========================================
        .state('photo-gallery', {
            url: '/photo-gallery',
            templateUrl: langchange == '%22English%22' ? 'template/photo-gallery/photo-gallery.html' : 'template/photo-gallery/photo-gallery.html'
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
        .state('agriculture-sector.renewal-energy', {
            url: '/renewal-energy',
            templateUrl: langchange == '%22English%22' ? 'template/agriculture-sector/renewal-energy.html' : 'template/agriculture-sector/renewal-energy-hn.html'
        })
        .state('agriculture-sector.manufacturing', {
            url: '/manufacturing',
            templateUrl: langchange == '%22English%22' ? 'template/agriculture-sector/manufacturing.html' : 'template/agriculture-sector/manufacturing-hn.html'
        })
        .state('agriculture-sector.it-electronics', {
            url: '/it-electronics',
            templateUrl: langchange == '%22English%22' ? 'template/agriculture-sector/it-electronics.html' : 'template/agriculture-sector/it-electronics-hn.html'
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
    

    


})()