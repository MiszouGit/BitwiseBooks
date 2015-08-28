/**
 * Created by Dan on 8/20/2015.
 */

(function(){
    'use strict';

    var app = angular.module('BitwiseBooks', ['ui.router','ui.bootstrap', 'ui.bootstrap.tpls']);

    app.config( function( $stateProvider, $urlRouterProvider ){
        $stateProvider.state('bitwiseBooks', {
            abstract: true,
            template: '<ui-view>',
            resolve: {
                bootstrap: function( BootStrapService ){
                    return BootStrapService.bootstrap();
                }
            }
        }).state('bitwiseBooks.home', {
            url: '/',
            controller: 'HomeController',
            templateUrl: 'home/home.html'
        }).state('bitwiseBooks.books', {
            url: '/books',
            controller: 'BooksController',
            templateUrl: 'books/books.html'
        }).state('bitwiseBooks.books.single', {
            url: '/:bookId',
            controller: 'BookController',
            templateurl: 'books/book.html'
        });
        $urlRouterProvider.otherwise('/');
    });
}());
