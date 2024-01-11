import React, { useMemo, useReducer } from 'react';
import './App.css';
import { initState, reducer } from './reducer/reducer';
import { AppContext } from './context';
import TodosList from './Features/Todos/TodosList';
import AddTodoForm from './Features/Todos/AddTodoForm';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initState);
  const stateContext = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={stateContext}>
      <div className="App">
        <AddTodoForm />
        <TodosList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
