import angular from 'angular';
import { angularize } from "react-in-angularjs";
import HelloWorld from "./angular-app/HelloWorld";
import TodoList from "./angular-app/TodoList";

angular.module('angularApp', [])
    .controller("todoController", function todoController($scope) {
        $scope.data = {
            todos: [
                {
                    name: "Todo 1",
                    description: "Description todo 1"
                },
                {
                    name: "Todo 2",
                    description: "Description todo 2"
                }
            ],
            addTodo: function (todo) {
                $scope.data.todos.push({
                    name: todo.name,
                    description: todo.description
                });
            }
        };
    })
    .controller("alertController", function alertController($scope) {
        $scope.fnc = (name) => {
            alert("Salut a toi " + name);
        };
    }).name;

// Transform react comp to angular comp
angularize(HelloWorld, "helloWorld", angular.module("angularApp"), {
    name: "@"
});
angularize(TodoList, "todoList", angular.module("angularApp"), {
    data: "<"
});