import React from 'react';
import { withRouter } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import ContactForm from '../form/ContactForm';
import Container from '@mui/material/Container';

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <Container  maxWidth="xs">
                    <h1 style={{textAlign:'center'}}>{this.props.t('contactUsTitle')}</h1>

                    <ContactForm/>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(withRouter(ContactUs));
