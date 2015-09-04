(function(){
    'use strict';
    var app = angular.module('BitwiseBooks');

    app.factory( 'Author', function( $injector ){
        function Author(data) {
            _.merge(
                this,
                {},
                data);
        }

        Author.prototype = {
            findAuthor: function findAuthor() {
                var service = $injector.get('BooksService');
                return _.where(service.books, { authorid : this.id });
            }
        }

        return Author;
    });

})();