import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import ReduxToastr from 'react-redux-toastr';
import '../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxToastr 
      timeOut={4000}
      newestOnTop={true}
      preventDuplicates
      position="bottom-center"
      getState={(state) => state.toastr}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar={false}
      closeOnToastrClick={false}
    />
  </Provider>,
  document.getElementById('root')
);