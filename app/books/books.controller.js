/**
 * Created by Dan on 8/20/2015.
 */

(function(){
    'use strict';

    var app = angular.module('BitwiseBooks');

    app.controller('BooksController', function( $scope, books ){
        var vm = this;
        vm.books = books;
    });
}());
