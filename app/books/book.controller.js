/**
 * Created by Dan on 8/25/2015.
 */

(function(){
    'use strict';

    var app = angular.module('BitwiseBooks');

    app.controller('BookController', function( book ){
        var vm = this;
        vm.book = book;
    });

})();
