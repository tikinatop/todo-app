import { combineReducers } from 'redux';
    /* Reducer composition */
    /* Création et modification de l'élément TODO */
    const todo = (state, action) => {
	switch (action.type) {
	    case 'ADD_TODO':
		return {
		    id: action.id,
		    text: action.text,
		    completed: false
		};
	    case 'TOGGLE_TODO':
		/* Abstraction = state */
		return state.id !== action.id ? state : {
		    ...state,
		    completed: !state.completed
		};
	    default:
		return state
	}
    };

    const visibilityFilter = (
	state = 'SHOW_ALL',
	action
    ) => {
	switch (action.type) {
		/* état représentant une action */
	    case 'SET_VISIBILITY_FILTER':
		return action.filter;
	    default:
		return state;
	}
    };


    /* Gestion de la liste de todos */
    const todos = (state = [], action) => {
    switch(action.type) {
	case 'ADD_TODO':
	    return [
		...state,
		todo(undefined, action)
	    ];
	case 'TOGGLE_TODO':
	    return state.map(t => todo(t, action));

	default:
	    return state;
    }
};

/* Utilise le combineReducers importé et non depuis le main file*/
const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export default todoApp;
