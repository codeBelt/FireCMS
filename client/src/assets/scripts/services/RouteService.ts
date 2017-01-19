import qs from 'qs';

/**
 * @class RouteService
 * @constructor
 **/
class RouteService {

    /**
     * A simple helper method to create a url route from an unlimited number of arguments.
     *
     * @method buildRoute
     * @param ...rest {...rest}
     * @return {string}
     * @static
     * @example
     *      const someProperty = 'api/endpoint';
     *      const queryObject = {type: 'car', name: encodeURIComponent('Telsa Motors')};
     *
     *      RouteService.buildRoute(someProperty, 'path', 7, queryObject);
     *
     *      //Creates 'api/endpoint/path/7?type=car&name=Telsa%20Motors'
     */
    static buildRoute(...rest) {
        rest.forEach((value, index, array) => {
            if (typeof value === 'object') {
                array[index] = `?${RouteService.stringify(value)}`;
            }
        });

        // Filter out empty strings from the array
        rest = rest.filter(Boolean);

        let route = rest.join('/');
        // Remove extra back slashes
        route = route.replace(/\/\//g, '/');
        // Add back slash since we remove it from the "http://"
        route = route.replace(':/', '://');
        // Remove the back slash in front of a hash
        route = route.replace('/#', '#');

        return route;
    }

    /**
     * @method stringify
     * @static
     */
    static stringify(obj) {
        return qs.stringify(obj);
    }

    /**
     * @method parse
     * @static
     */
    static parse(str) {
        console.log(`qs`, qs);
        return qs.parse(str);
    }
}

export default RouteService;
