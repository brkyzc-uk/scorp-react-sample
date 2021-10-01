import React from 'react';

import Footer from '../components/section/Footer';
import Header from "../components/section/Header";

class Dashboard extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <div>
                <Header />
                {children}
                <Footer />

            </div>
        );
    }
}

export default Dashboard;
