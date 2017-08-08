'use strict';
angular.module('todoListApp')
.directive('todos', function() {
    return {
        templateUrl : 'templates/todos.html',
        controller  : 'mainCtrl',
        replace     : true                      //  removes to do tags from html
    }
});