import React  from "react";
import { withRouter } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import Gallery from '../../components/section/Gallery';
import { Container } from "@mui/material";

class Services extends React.Component {
    render() {
        return (
            <div>
                <Container  maxWidth="xs">
                    <h1 style={{textAlign:'center'}}>{this.props.t('servicesTitle')}</h1>
                    <Gallery/>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(withRouter(Services));
