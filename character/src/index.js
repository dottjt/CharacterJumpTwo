import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Components
import AppContainer from './App.jsx';
import ScrollToTop from './Utility/ScrollToTop.jsx';

// Redux
import reducer from './redux/reducers';
import store from './redux/store';

// CSS
import './index.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
      {/* <ScrollToTop> */}
        <AppContainer/>
      {/* </ScrollToTop> */}
    </Provider>
  ,document.getElementById('root'));


registerServiceWorker();

