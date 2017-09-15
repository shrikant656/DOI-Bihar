'use strict';
/* Controllers */

var app = angular.module('myApp', []);

app.directive('qtip', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.qtip({ content: attrs.qtip,target:$(element)});
    }
  };
});

app.factory('myFactory', function(){
    return {
        title: 'Factory'
    }
})

app.controller('mycntroller',['$scope','myFactory',function($scope,myFactory){
    $scope.hello = myFactory.title;

    $scope.categories= [
    {'id':0,'name':'Development'},
    {'id':1,'name':'Design'},
    {'id':2,'name':'Tablet'},
    {'id':3,'name':'mobile'},
]

$scope.bookmarks = [
    {'id':0,"url":'http://angular.org','category':'Development','title':'Angular'},
    {'id':1,"url":'http://angular.org','category':'Design','title':'UX'},
    {'id':2,"url":'http://angular.org','category':'Tablet','title':'iPad'},
    {'id':3,"url":'http://angular.org','category':'mobile','title':'Android'}
];



$scope.currentCategory = null;

function setCurrentCategory(category){
    $scope.currentCategory = category;
    cancelCreating();
    cancelEditing();
}

function isCurrentCategory(category){
    return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
}

//$scope.isCurrentCategory = isCurrentCategory;
$scope.setCurrentCategory = setCurrentCategory;

/*creating and editing and deleting states*/
function resetCreateForm(){
    console.log($scope.currentCategory);
    $scope.newBookmark = {
        title:'',
        url:'',
        category: $scope.currentCategory
    }
}

function createBookmark(bookmark) {
    bookmark.id = $scope.bookmarks.length;
    $scope.bookmarks.push(bookmark);
    resetCreateForm();
}

$scope.createBookmark = createBookmark;

$scope.editedBookmark = null;

function setEditedBookmark(bookmark){
$scope.editedBookmark = angular.copy(bookmark);
}

function updateBookmark(bookmark){
    var index = _.findIndex($scope.bookmarks, function(b){
    return b.id == bookmark.id;
})
    $scope.bookmarks[index] = bookmarks;
    $scope.editedBookmark = null;
    $scope.isEditing = false;
}

$scope.updateBookmark = updateBookmark;

function isSelectedBookmark(bookmarkId){
    return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
}

$scope.isSelectedBookmark = isSelectedBookmark;
$scope.setEditedBookmark = setEditedBookmark;

function deleteBookmark(bookmark){
    _.remove($scope.bookmarks, function(b){
    return b.id == bookmark.id;
    })
}
$scope.deleteBookmark = deleteBookmark;


/*creating and editing states*/

$scope.isCreating = false;
$scope.isEditing = false;

function startCreating(){
    $scope.isCreating = true;
    $scope.isEditing = false;
    resetCreateForm();
}

function cancelCreating() {
    $scope.isCreating = false;
}

function cancelEditing() {
    $scope.isEditing = false;
}

function startEditing(){
    $scope.isCreating = false;
    $scope.isEditing = true
}

function shouldShowCreating(){
return $scope.currentCategory && !$scope.isEditing;
}

function shouldShowEditing(){
return $scope.isEditing && !$scope.isCreating;
}


$scope.shouldShowCreating = shouldShowCreating;
$scope.shouldShowEditing = shouldShowEditing;
$scope.startCreating = startCreating;
$scope.cancelCreating = cancelCreating;
$scope.cancelEditing =cancelEditing;
$scope.startEditing = startEditing;

}])
