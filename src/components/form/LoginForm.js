import React from 'react';
import {withTranslation} from "react-i18next";
import {TextField, Box} from '@mui/material';
import Button from "@mui/material/Button";
import PropTypes from 'prop-types';
import LanguageMenu from "../menu/LanguageMenu";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            email: null,
            password: null
        };
    }

    loginUser = () => {
        const {name, email} = this.state;

        this.props.setUserInfo({
            name,
            email,
            // password,
        })
    };

    render() {
        return (
            <Box sx={style}>
                <React.Fragment>
                    <Box  sx={{
                        display: 'flex',
                        gap: 2,
                        
                    }}>
                    
                    
                    </Box>
                   
                    <div style={{textAlign:'right'}}>
                    <LanguageMenu mdLanguageStyle={{
                        color: 'black'
                    }} />
                    {this.props.t('language')}
                    </div>
                    <h1 style={{textAlign:'center'}}>{this.props.t('loginTitle')}</h1>
                        <TextField
                            id="name-input"
                            fullWidth={true}
                            color="primary"
                            placeholder={this.props.t('loginNameLabel')}
                            required={true}
                            onChange={event => this.setState({name: event.target.value})}
                        />
                
                    
                        <TextField
                            id="email-input"
                            style={{marginTop:'10px'}}
                            fullWidth={true}
                            color="primary"
                            placeholder={this.props.t('loginEmailLabel')}
                            required={true}
                            type="email"
                            onChange={event => this.setState({email: event.target.value})}
                        />
                   
                    
                        <TextField
                            id="password-input"
                            fullWidth={true}
                            style={{marginTop:'10px'}}
                            color="primary"
                            placeholder={this.props.t('loginPasswordLabel')}
                            required={true}
                            type="password"
                            onChange={event => this.setState({password: event.target.value})}
                        />
                    

                    <Button
                        style={{textTransform: 'capitalize',marginTop:'20px'}}
                        variant="contained"
                        marginBottom="20px"
                        size="large"
                        fullWidth={true}
                        onClick={this.loginUser}
                    >{this.props.t('loginButtonLabel')}
                    </Button>
                    
                </React.Fragment>
            </Box>
        )
    }
}

LoginForm.propTypes = {
    setUserInfo: PropTypes.func.isRequired
};

export default withTranslation()(LoginForm);
