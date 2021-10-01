import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import React, {useState, useEffect} from "react";
import {Link as RouterLink} from "react-router-dom";
import {FiMenu} from "react-icons/fi";
import getPageName from "../../utils/getPageName";
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router-dom';
import LanguageMenu from "../menu/LanguageMenu";
import UserMenu from "../menu/UserMenu";
import {DiReact} from "react-icons/di";
import '../../assets/css/Header.css';

const useStyles = makeStyles(() => ({
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

export default function Header() {
    const translation = useTranslation();
    const {t} = translation;

    const location = useLocation();
    const pathName = location.pathname;
    const pageName = getPageName(t, pathName);

    const {menuButton, toolbar, drawerContainer} = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const {mobileView, drawerOpen} = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({...prevState, mobileView: true}))
                : setState((prevState) => ({...prevState, mobileView: false}));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {logoBarDesktop}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({...prevState, drawerOpen: true}));
        const handleDrawerClose = () =>
            setState((prevState) => ({...prevState, drawerOpen: false}));

        return (
            <Toolbar style={{
                paddingRight: 0,
            }}>
                <Drawer
                    {...{
                        anchor: "right",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div style={{
                    width: '100%'
                }}>
                    {logoBarMobile}
                </div>

                <IconButton
                    {...{
                        edge: "end",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <FiMenu/>
                </IconButton>
            </Toolbar>
        );
    };

    const logoBarDesktop = (
        <Typography variant="h6" component="h1" className="logo">
            <DiReact size={24} style={{
                marginBottom: '-5px',
            }}/>
            {pageName}
        </Typography>
    );

    const logoBarMobile = (
        <Typography variant="h6" component="h1" className="logo">
            {pageName}
            <DiReact size={24} style={{
                marginBottom: '-5px',
            }}/>
        </Typography>
    );

    const getDrawerChoices = () => {
        return (
            <React.Fragment>
                <Link
                    {...{
                        component: RouterLink,
                        to: '/',
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: t('homepageTitle'),
                    }}
                >
                    <MenuItem>{t('homepageTitle')}</MenuItem>
                </Link>
                <Link
                    {...{
                        component: RouterLink,
                        to: '/services',
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: t('servicesTitle'),
                    }}
                >
                    <MenuItem>{t('servicesTitle')}</MenuItem>
                </Link>
                <Link
                    {...{
                        component: RouterLink,
                        to: '/contact-us',
                        color: "inherit",
                        style: {textDecoration: "none"},
                        key: t('contactUsTitle'),
                    }}
                >
                    <MenuItem>{t('contactUsTitle')}</MenuItem>
                </Link>
                <UserMenu/>
                <hr />
                <div>
                    <LanguageMenu mdLanguageStyle={{
                        color: 'black'
                    }}/>
                    {t('language')}
                </div>
            </React.Fragment>
        );
    };

    const getMenuButtons = () => {
        return (
            <React.Fragment>
                <Button
                    {...{
                        key: t('homepageTitle'),
                        color: "inherit",
                        to: '/',
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {t('homepageTitle')}
                </Button>
                <Button
                    {...{
                        key: t('servicesTitle'),
                        color: "inherit",
                        to: '/services',
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {t('servicesTitle')}
                </Button>
                <Button
                    {...{
                        key: t('contactUsTitle'),
                        color: "inherit",
                        to: '/contact-us',
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {t('contactUsTitle')}
                </Button>
                <LanguageMenu mdLanguageStyle={{
                    color: 'white'
                }}/>
                <UserMenu/>
            </React.Fragment>
        );
    };

    return (
        <header>
            <AppBar className="header">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
