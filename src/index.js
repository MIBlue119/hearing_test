import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//our own codes
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    //Passing our reducers with store prop of the provider
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root')
);