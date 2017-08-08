'use strict';

angular.module("todoListApp")

.controller('mainCtrl', function($scope, dataService) {
    $scope.addTodo = function() {
        let todo = {name: "This is a new todo."};
        $scope.todos.unshift(todo);
    };
    
    $scope.helloWorld = dataService.helloWorld;
    
    dataService.getTodos(function(res) {
        $scope.todos = res.data;
    });
    
    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index,1);              //  removes the item from the array
    };
    
    $scope.saveTodos = function() {
        let filteredTodos = $scope.todos.filter(function(todo) {
            if(todo.edited) {
                return todo;
            };
        });
        dataService.saveTodos(filteredTodos);
    };
    
});