/**
 * Created by Dan on 8/25/2015.
 */

(function(){
    'use strict';
    var app = angular.module('BitwiseBooks');

    app.service('BooksService', function(){
        var books = [];

        function bootstrap( data ){
            data.forEach( function( book ){
               books.push( book );
            });
        }

        function find( id ) {
            return _.find( books, { id: id } );
        }

        return {
            find: find,
            bootstrap: bootstrap,
            books: books
        };
    });
})();