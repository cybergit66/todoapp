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
});