import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Formdemo from './Formdemo';
import LoginForm from './LoginForm';
import Todolist from './Todolist';
import Counter from './Counter';
import Keepnote from './keepnote/Keepnote';

ReactDOM.render(
  <>
    <App /> 
    <Formdemo />
    <LoginForm /> 
    <Todolist />
    <Counter />
    <Keepnote />
  </>,
  document.getElementById('root')
);
