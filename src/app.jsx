import ReactDOM from 'react-dom';
import React, { Component } from 'react';
/* import { createStore } from 'redux'; */     /*  le composant TodoApp a déja la méthode createstore   */
/* import todoApp from './reducers'; */ /* le composant TodoApp a déja le reducer*/
import { store, TodoApp } from './components/TodoApp'; 


const render = () => {
    ReactDOM.render(
	<TodoApp todos={store.getState().todos}/>,
	document.getElementById('root')
    );
};

store.subscribe(render);
render();
