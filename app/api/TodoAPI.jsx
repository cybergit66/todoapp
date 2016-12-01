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
    },
    filterTodos: function(todos, showCompleted, searchText){
        var filteredTodos = todos;
        
        // filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });
        
        // filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var str = todo.text.toLowerCase();
            return searchText.length === 0 || str.indexOf(searchText) > -1;
        });
            // use filter method on filtered todos
                // check for search text
                    // if no search text return every todo item
                    // if search text exist then 
                        // convert to lowercase, e.g. text.toLowerCase()
                        // check todo using IndexOf
        
        
        // sort todos with non-completed first
        filteredTodos.sort((a,b) => {
           if (!a.completed && b.completed) {
               return -1
           } else if (a.completed && !b.completed){
               return 1
           } else {
               return 0;
           }
        });
        
        return filteredTodos;
    }
};