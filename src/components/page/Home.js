import React  from "react";
import { withRouter } from 'react-router-dom';
import { withTranslation } from "react-i18next";
import Media from '../../components/section/Media';
import Container from '@mui/material/Container';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Container  maxWidth="xs">
                    <h1 style={{textAlign:'center'}}>{this.props.t('homepageTitle')}</h1>
                    <p style={{textAlign:'justify'}}>{this.props.t('homepageText')}</p>
                    <Media/>
                </Container>

            </div>
        );
    }
}

export default withTranslation()(withRouter(Home));

