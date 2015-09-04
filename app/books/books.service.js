/**
 * Created by Dan on 8/25/2015.
 */

(function(){
    'use strict';
    var app = angular.module('BitwiseBooks');

    app.service('BooksService', function(Book, $http){
        var vm = this;
        vm.books = [];

        vm.makeBooks = function makebooks( data ){
            data.forEach( function( book ){
               vm.books.push( new Book(book) );
            });
            return vm.books;
        };

        vm.getBooks = function getBooks(){
            return $http.get('../../books.json').then( function( res ) {
                return vm.makeBooks( res.data );
            }, function( err ){
                console.log(err);
                return("Book not found");
            });
        };

        vm.find = function find( id ) {
            return _.find( vm.books, { _id: id } );
        };
    });
})();