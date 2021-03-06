import React from 'react';
import ReactDOM from 'react-dom';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import store from './state/store/index';
import './assets/css/index.css';
import App from './App';
import i18n from './localization/i18n';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
