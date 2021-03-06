(function(){
    'use strict';
    var app = angular.module('BitwiseBooks');

    app.service('AuthorsService', function(Author,$http){
        var vm = this;
        vm.authors = [];

        vm.buildAuthors = function buildAuthors(data){
            data.forEach( function( author ){
                vm.authors.push( new Author(author ) );
            });
            return vm.authors;
        };

        vm.getAuthors = function getAuthors() {
            return $http.get('../../authors.json').then( function( res ) {
                return vm.buildAuthors( res.data );
            }, function( err ){
                console.log(err);
                return("Authors not found");
            });
        };

        vm.find = function find(id) {
            return _.find( vm.authors, { _id: id } );
        };
    })
})();