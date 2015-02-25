angular.module("library", ["firebase", "ui.router"])
    .constant('FIREBASE_URL','https://libraryzti.firebaseio.com')

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('book', {
                url: '/book',
                templateUrl: 'templates/book.html',
                controller: 'bookCtrl'
        })
            .state('books', {
                url: '/books',
                templateUrl: 'templates/books.html',
                controller: 'booksCtrl'
        })            
            .state('category', {
                url: '/category',
                templateUrl: 'templates/category.html',
                controller: 'categoryCtrl'
        })            
  $urlRouterProvider.otherwise('/books');
})
    
    .factory('LibraryService', function($firebase, FIREBASE_URL){
        var ref = new Firebase(FIREBASE_URL + "/categories");
        var sync = $firebase(ref);
        var booksCategories = sync.$asArray()
        
        var getBooksCategories = function() {
            return booksCategories;
        };
        
        var addBookCategory = function(category) {
            booksCategories.$add(category);
        }
        
        var removeBookCategory = function(id) {
            booksCategories.$remove(id);
        }
        
        var updateBookCategory = function(id) {
            booksCategories.$save(id);
        }
        return {
            getBooksCategories: getBooksCategories,
            addBookCategory: addBookCategory,
            removeBookCategory: removeBookCategory,
            updateBookCategory: updateBookCategory
        }
    })
