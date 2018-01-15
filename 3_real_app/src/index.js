import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import SimpleRefactor from './1_simple_refactor/Example';
import Posts from './2_refactor/Posts';
import Router from './3_router/Router';
import Todo from './4_todo_app';


const apps = {
  '/simpleRefactor': <SimpleRefactor />,
  '/refactor': <Posts />,
  '/todo': <Todo />,
  '/router': <Router />,
};

const SelectedApp = () => (apps[window.location.pathname] || <App apps={Object.keys(apps)} />);

ReactDOM.render(<SelectedApp />, document.getElementById('root'));
registerServiceWorker();
