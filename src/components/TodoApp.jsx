import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from '../reducers'; 


export const store = createStore(todoApp);

console.log("Hello from components");

let nextTodoId = 0;
export class TodoApp extends Component {
    render() {
	return(
	    <div>
		<input ref={node => {
			this.input = node;
		}} type="text" />
		<button onClick={() => {
			store.dispatch({
			    type:'ADD_TODO',
			    text: this.input.value,
			    id: nextTodoId++
			});
			this.input.value =  '';
		}}>
		    Add Todo
		</button>
		<p>
		    {this.props.todos.map(todo =>
			<li key={todo.id}>
			    {todo.text}
			</li>
		    )}
		</p>
	    </div>
	);
    }
}
