/**
 * Created by Dan on 8/25/2015.
 */

(function(){
    'use strict';
    var app = angular.module('BitwiseBooks');

    app.service('BootStrapService', function( $http, BooksService ) {
        function bootstrap(){
            return $http.get("../books.json").then( function( res ){
                var data = res.data;
                BooksService.bootstrap(data);
            });
        }
        return { bootstrap: bootstrap };
    });
})();

