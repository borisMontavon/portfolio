import { createStore } from 'redux';
import rootReducers from './reducers/combine';
import en from './constants/en.json';

const initialState = {
    'translateReducer': {
        'language': 'en',
        'i18n': en,
        'pdfLink': './assets/documents/CV English 2 pages.pdf',
        'tooltipText': 'Thank you very much !'
    }
};

const store = createStore(
    rootReducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;