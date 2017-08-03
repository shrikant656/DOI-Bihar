'use strict';

var routerApp = angular.module('routerApp');
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


      $scope.menuRedirect = function(param){
        $('#showRedirectBlk').show();
        $scope.redirected = function(){
          window.open(param,  '_blank');
          $('#showRedirectBlk').hide();
        }
        $scope.HideRedirected = function(){
         $('#showRedirectBlk').hide(); 
        }
      }
      
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