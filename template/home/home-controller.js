'use strict';

(function(){

    angular.module('routerApp').controller('CarouselDemoCtrl', function ($scope) {
	     
       $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.slides = [
            {id:0,image:'images/home-carousel/banner_img1.jpg',text:'Nice image1'},
            {id:1,image:'images/home-carousel/b.jpg',text:'Nice image2'},
            {id:2,image:'images/home-carousel/c.jpg',text:'Nice image3'},
            {id:3,image:'images/home-carousel/a.jpg',text:'Nice image4'}
            ]; 

/*slides.push(
  {id:0,image:'template/carousel/a.jpg',text:'Nice image1'},
  {id:1,image:'template/carousel/b.jpg',text:'Nice image2'},
  {id:2,image:'template/carousel/c.jpg',text:'Nice image3'}
  ); */

        /*$scope.addSlide = function() {
          var newWidth = 1900 + slides.length + 1;
          slides.push({
            image: '//unsplash.it/' + newWidth + '/600',
            text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
            id: currIndex++
          });
        };*/

        /*$scope.randomize = function() {
          var indexes = generateIndexesArray();
          assignNewIndexesToSlides(indexes);
        };*/

       /* for (var i = 0; i < 4; i++) {
          //$scope.addSlide();
        }*/

        // Randomize logic below

        /*function assignNewIndexesToSlides(indexes) {
          for (var i = 0, l = slides.length; i < l; i++) {
            slides[i].id = indexes.pop();
          }
        }*/

        /*function generateIndexesArray() {
          var indexes = [];
          for (var i = 0; i < currIndex; ++i) {
            indexes[i] = i;
          }
          return shuffle(indexes);
        }*/

        // http://stackoverflow.com/questions/962802#962890
        /*function shuffle(array) {
          var tmp, current, top = array.length;

          if (top) {
            while (--top) {
              current = Math.floor(Math.random() * (top + 1));
              tmp = array[current];
              array[current] = array[top];
              array[top] = tmp;
            }
          }

          return array;
        }*/

	   });

})()