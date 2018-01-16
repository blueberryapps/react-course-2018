import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import SimpleRefactor from './1_simple_refactor/Example';
import Posts from './2_refactor/Posts';
import Router from './3_router/Router';
import SimplestRedux from './4_simplest_redux';
import Todo from './5_todo_app';


const apps = {
  '/simpleRefactor': <SimpleRefactor />,
  '/refactor': <Posts />,
  '/router': <Router />,
  '/simplest-redux': <SimplestRedux />,
  '/todo': <Todo />,
};

const SelectedApp = () => (apps[window.location.pathname] || <App apps={Object.keys(apps)} />);

ReactDOM.render(<SelectedApp />, document.getElementById('root'));
registerServiceWorker();
