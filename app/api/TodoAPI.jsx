var $ = require('jquery');

module.exports = {
    setTodos: function(todos){
        if ($.isArray(todos)){
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    getTodos: function() {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];
        
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            
        }
        
        // ternary operation - if todos is an array, then return todos, else return empty array
        return $.isArray(todos) ? todos : [];
    }
};