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
    
   
