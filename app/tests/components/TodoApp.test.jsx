var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('TodoApp component should exist', () => {
    expect(TodoApp).toExist();
  });
    
    it('should add todo to the todos state on handleAddTodo', () => {
        // create new todo to add
        var todoText = 'add new todo';
        // create instance of TodoApp component
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        
        // empty the todos state                                 
        todoApp.setState({todos: []});
        // add new todo to todos state
        todoApp.handleAddTodo(todoText);
        
        // test state for added todo
        expect(todoApp.state.todos[0].text).toBe(todoText);
    });
    
    it('should toggle completed value when handleToggle called', () => {
        var todoData = {
            id: 11, 
            text: 'Test Features',
            completed: false
        };
        
        var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});
        
        // check that todos first item has completed value of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with 11
        todoApp.handleToggle(11);
        // Verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
    });
});