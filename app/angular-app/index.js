import angular from "angular";
import { angularize } from "react-in-angularjs";
import HelloWorld from "./HelloWorld";
import TodoList from "./TodoList";

export default angular
    .module("angularApp.app", [])
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
angularize(HelloWorld, "helloWorld", angular.module("angularApp.app"), {
    name: "@"
});

angularize(TodoList, "todoList", angular.module("angularApp.app"), {
    data: "<"
});