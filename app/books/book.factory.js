(function(){
    'use strict';

    var app = angular.module('BitwiseBooks');

    app.factory( 'Book', function( $injector ){
        function Book(data) {
            _.merge(
                this,
                {},
                data);
            }

        Book.prototype = {
            inStock: function inStock() {
                return this.isInStock() ? "In Stock" : "Out of Stock";
            },
            findAuthor: function findAuthor() {
                var service = $injector.get('AuthorsService'),
                    author = service.find( this.authorID );
                return author.name;
            }
        }

        return Book;
    });

})();