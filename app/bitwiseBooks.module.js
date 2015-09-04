/**
 * Created by Dan on 8/20/2015.
 */

(function(){
    'use strict';

    var app = angular.module('BitwiseBooks', ['ui.router','ui.bootstrap', 'ui.bootstrap.tpls']);

    app.config( function( $stateProvider, $urlRouterProvider ){
        $stateProvider.state('bitwiseBooks', {
            abstract: true,
            template: '<ui-view>'
        }).state('bitwiseBooks.home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'home/home.html'
        }).state('bitwiseBooks.books', {
            url: '/books',
            controller: 'BooksController',
            controllerAs: 'books',
            templateUrl: 'books/books.html',
            resolve:{
                books: function(BooksService) {
                    return BooksService.getBooks();
                },
                authors: function(AuthorsService) {
                    debugger;
                    return AuthorsService.getAuthors();
                }
            }
        }).state('bitwiseBooks.books.single', {
            url: '/:bookId',
            controller: 'BookController',
            controllerAs: 'book',
            templateUrl: 'books/book.html',
            resolve:{
                book: function( books, BooksService, $stateParams ){
                    debugger;
                    return BooksService.find($stateParams.bookId);
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    });
}());
