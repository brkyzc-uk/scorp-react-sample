import React from 'react';
import {withTranslation} from "react-i18next";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {MenuItem, Menu, IconButton } from "@mui/material";
import availableLanguages from '../../localization/locales';
import {DEFAULT_LANG} from "../../utils/constants";
import {setLanguage} from "../../state/actions/languageActions";
import {MdLanguage} from "react-icons/md";

class LanguageMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorMenu: null,
            lang: null,
        };
    }

    componentDidMount = () => {
        // Set the current language
        const { language } = this.props;

        let currentLanguage = availableLanguages[language];
        if (!currentLanguage) {
            // Use default language (en-US) if the browser language is not supported
            currentLanguage = availableLanguages[DEFAULT_LANG];
        }

        const { code, name } = currentLanguage;
        this.setState({
            lang: {
                code,
                name,
            },
        });
    };

    toggleMenu = event => {
        this.setState({
            anchorMenu: event.currentTarget,
        });
    };

    closeMenu = () => {
        this.setState({
            anchorMenu: null,
        });
    };

    changeLanguage = (code, name) => {
        this.setState({
            lang: {
                code,
                name,
            },
            anchorMenu: null,
        });

        this.props.dispatch(setLanguage(code));
    };

    getMenuItems = () => {
        return Object.keys(availableLanguages).map((langCode, index) => {
            const { code, name } = availableLanguages[langCode];
            return (
                <MenuItem
                    key={index}
                    onClick={() => {
                        this.changeLanguage(code, name);
                    }}
                >
                    {name}
                </MenuItem>
            );
        });
    };

    render() {
        const { anchorMenu } = this.state;
        const open = Boolean(anchorMenu);

        return (
            <React.Fragment>
                <IconButton
                    aria-owns={open ? 'menu-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.toggleMenu}
                    color="inherit"
                >
                    <MdLanguage style={this.props.mdLanguageStyle}/>
                </IconButton>
                <Menu id="menu-appbar" anchorEl={anchorMenu} open={open} onClose={this.closeMenu}>
                    {this.getMenuItems()}
                </Menu>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { languageReducer } = state;
    return {
        language: languageReducer.language,
    };
}

LanguageMenu.propTypes = {
    mdLanguageStyle: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withTranslation()(LanguageMenu));
