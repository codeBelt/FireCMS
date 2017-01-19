import EventBroker from 'structure-js/js/event/EventBroker';
import RouteModel from '../models/RouteModel';
import RouteService from '../services/RouteService';
import page from 'page';

/**
 * Sets current route
 *
 * @class RouteAction
 * @constructor
 **/
class RouteAction {

    SET = 'RouteAction.SET';

    /**
     * Navigates user to a new URL
     *
     * @method navigateTo
     * @public
     * @usage
     *     RouteAction.navigateTo('cars', 'path', 7, { type: 'car', name: 'Tesla Motors'});
     *     Creates 'cars/path/7/?type=car&name=Telsa%20Motors'
     */
    navigateTo(...rest) {
        const route = RouteService.buildRoute(...rest);
        page(route);
    }

    /**
     * @method meta
     * @param options {{ title: string }}
     * @public
     */
    meta(options) {
        let title = 'Hy-Vee Market Grille';

        if (options != null && options.title != null) {
            title = `${options.title} | ${title}`;
        }

        document.title = title;
    }

    /**
     * Automatically called every time the internal router changes.
     * Notifies everyone about our current route state
     * DO NOT call manually, use RouteAction.route() instead
     *
     * @method onRouteChange
     * @private
     * @path {string} The current path
     * @routeParams {object} Variables extracted from the route, like :itemId
     * @queryString {string} The current query string
     * @hash {string} The current hash
     */
    onRouteChange(options) {
        const routeModel = new RouteModel();
        routeModel.path = options.path;
        routeModel.queryObject = RouteService.parse(options.queryString);
        routeModel.hash = options.hash;
        routeModel.routeParams = options.routeParams;

        if (routeModel.hash !== 'noscroll') {
            window.scrollTo(0, 0);
        }

        EventBroker.dispatchEvent(this.SET, { routeModel });
    }
}

export default new RouteAction();
