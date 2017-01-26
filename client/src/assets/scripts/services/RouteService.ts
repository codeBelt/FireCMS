import * as qs from 'qs';

class RouteService {

    /**
     * A simple helper method to create a url route from an unlimited number of arguments.
     * @example
     *      const someProperty = 'api/endpoint';
     *      const queryObject = {type: 'car', name: encodeURIComponent('Telsa Motors')};
     *
     *      RouteService.buildRoute(someProperty, 'path', 7, queryObject);
     *
     *      //Creates 'api/endpoint/path/7?type=car&name=Telsa%20Motors'
     */
    public static buildRoute(...rest): string {
        rest.forEach((value, index, array) => {
            if (typeof value === 'object') {
                array[index] = `?${RouteService.stringify(value)}`;
            }
        });

        // Filter out empty strings from the array
        rest = rest.filter(Boolean);

        let route: string = rest.join('/');
        route = route.replace(/\/\//g, '/'); // Remove extra back slashes
        route = route.replace(':/', '://'); // Add back slash since we remove it from the "http://"
        route = route.replace('/#', '#'); // Remove the back slash in front of a hash

        return route;
    }

    public static stringify(obj: any): string {
        return qs.stringify(obj);
    }

    public static parse(str: string): any {
        return qs.parse(str);
    }

}

export default RouteService;
