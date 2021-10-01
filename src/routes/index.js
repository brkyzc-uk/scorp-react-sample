import async from '../components/helper/Async';


// Components
const Home = async(() => import('../components/page/Home'));
const ContactUs = async(() => import("../components/page/ContactUs"));
const Services = async(() => import('../components/page/Services'));

const dashboardRoutes = [
    {

        path: '/',
        component: Home,
        name: 'homePageName'
    },
    {
        path: '/contact-us',
        component: ContactUs,
        name: 'contactUsPageName'
    },
    {
        path: '/services',
        component: Services,
        name: 'servicesPageName'
    }
];

export { dashboardRoutes };
