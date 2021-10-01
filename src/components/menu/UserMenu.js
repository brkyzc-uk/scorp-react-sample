import React, {Component} from 'react';
import {withTranslation} from "react-i18next";
import {withStyles} from "@mui/styles";
import {Menu, Modal, ClickAwayListener} from "@mui/material";
import Button from "@mui/material/Button";
import {connect} from "react-redux";
import {setUserInfo} from "../../state/actions/userInfoActions";
import LoginForm from "../form/LoginForm";
import {FaRegUser} from "react-icons/fa";
import {GoMail} from "react-icons/go";

const StyledMenu = withStyles({
    paper: {
        width: '300px',
    },
})(props => (
    <Menu
        anchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
));

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
        };
    }

    toggleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    closeMenu = () => {
        this.setState({anchorEl: null});
    };

    setUserInfoToRedux = userInfo => {
      this.closeMenu();
      this.props.setUserInfo(userInfo);
    };

    getLoginModal = () => {
        return (<div>
            <LoginForm setUserInfo={this.setUserInfoToRedux} />
        </div>);
    };

    getLoggedinModal = () => {
        return (<div>
            {this.props.userInfo && (
                <div style={{margin:'12px 12px'}}>
                   <GoMail fontSize={16} style={{marginBottom:'-3px'}} /> {this.props.userInfo.email}
                </div>
            )}
            <Button
                style={{textTransform: 'capitalize', marginLeft:'10px'}}
                variant="contained"
                onClick={this.logoutUser}
            >{this.props.t('logoutButtonLabel')}</Button>
        </div>);
    };

    logoutUser = () => {
        this.props.setUserInfo(null);
        this.closeMenu();
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);

        return (
            <React.Fragment>
                {this.props.userInfo && (
                    <ClickAwayListener onClickAway={this.closeMenu}>
                        <React.Fragment>
                            <Button
                                style={{textTransform: 'none'}}
                                variant="contained"
                                startIcon={<FaRegUser />}
                                onClick={this.toggleMenu}
                            >{this.props.userInfo.name}</Button>
                            <StyledMenu
                                id="customized-loggedin-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={this.closeMenu}
                            >
                                {this.getLoggedinModal()}
                            </StyledMenu>
                        </React.Fragment>
                    </ClickAwayListener>
                )
                }
                {!this.props.userInfo && (
                        <ClickAwayListener onClickAway={this.closeMenu}>
                            <React.Fragment>
                                <Button
                                    style={{textTransform: 'capitalize'}}
                                    variant="contained"
                                    onClick={this.toggleMenu}
                                >{this.props.t('loginButtonLabel')}</Button>
                                <Modal
                                    open={open}
                                    onClose={this.closeMenu}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    {this.getLoginModal()}
                                </Modal>
                            </React.Fragment>
                        </ClickAwayListener>
                    )
                }
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const {userInfoReducer} = state;
    return {
        userInfo: userInfoReducer.userInfo,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUserInfo: userInfo => {
            dispatch(setUserInfo(userInfo));
        },
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(UserMenu));
