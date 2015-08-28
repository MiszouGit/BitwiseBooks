/**
 * Created by Dan on 8/20/2015.
 */

(function(){
    'use strict';

    var app = angular.module('BitwiseBooks');

    app.controller('HomeController', function( $scope ){
        $scope.welcome = 'Welcome to Bitwise Books';
    });
}());