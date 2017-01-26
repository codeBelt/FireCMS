import EventBroker from 'structure-js/js/event/EventBroker';
import * as page from 'page';
import RouteService from '../services/RouteService';
import RouteModel from '../models/RouteModel';

/**
 * Action class help facilitate passing data to the {{#crossLink "EventBroker"}}{{/crossLink}}(Global Dispatcher).
 * Pertains to the Flux Architecture Lifecycle.
 **/
class RouteAction {

    public readonly SET_ROUTE_MODEL : string = 'RouteAction.SET_ROUTE_MODEL';

    /**
     * Navigates user to a new URL
     *
     * @example
     *     RouteAction.navigateTo('cars', 'path', 7, { type: 'car', name: 'Tesla Motors'});
     *     Creates 'cars/path/7/?type=car&name=Telsa%20Motors'
     */
    public navigateTo(...rest: Array<any>): void {
        const route: string = RouteService.buildRoute(...rest);
        page(route); // tell page.js to update URL history
    }

    public setTitle(pageName: string): void {
        let title: string = "FireCMS";

        if (pageName != null) {
            title += ' | ' + pageName;
        }

        document.title = title;
    }

    /**
     * Automatically called every time the internal router changes.
     * Notifies everyone about our current route state
     * DO NOT call in code, use RouteAction.route() instead
     */
    public setRouteInfo(path: string, queryString: string, hash: string, routeParams: any): void {
        const routeModel: RouteModel = new RouteModel();
        routeModel.path = path;
        routeModel.queryObject = RouteService.parse(queryString);
        routeModel.hash = hash;
        routeModel.routeParams = routeParams;

        if (routeModel.hash !== 'noscroll') {
            window.scrollTo(0, 0);
        }

        EventBroker.dispatchEvent(this.SET_ROUTE_MODEL, { routeModel });
    }
}

export default new RouteAction();
