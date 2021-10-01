import {dashboardRoutes} from "../routes";

export default function getPageName(t, path) {
    if (!dashboardRoutes.some(route => route.path === path)) {
        return '';
    }

    const dashboardRoute = dashboardRoutes.find(route => route.path === path);
    const { name: dashboardRouteName } = dashboardRoute;

    return t(dashboardRouteName);
}
