var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('Todo component should exist', () => {
    expect(Todo).toExist();
  });
    
    it('should call onToggle prop with id on click', () => {
        var todoData = {
            id: 199,
            text: 'Write todo.test.jsx',
            completed: true
        };
        var spy = expect.createSpy();
        var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        
        //Access the jquery selector
        var $el = $(ReactDOM.findDOMNode(todo));
        //pull out the element and simulate click event
        TestUtils.Simulate.click($el[0]);
        //write assertion that checks spy was called successfully with id: 199
        expect(spy).toHaveBeenCalledWith(199);
    })
});