import React from 'react';
import { withTranslation } from "react-i18next";
import './assets/css/App.css';
import Routes from "./routes/Routes";

class App extends React.Component {
    render() {
        return (
            <Routes />
        );
    }
}

export default withTranslation()(App);
