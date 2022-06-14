import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from './components/functionBased/TodoContainer';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
);
