import riot from 'riot';
import './../../templates/riot/index';

/**
 * Initial application setup. Runs once upon every page load.
 *
 * @class App
 * @constructor
 */
class App {

    constructor() {
        this._setRoutes();
    }

    /**
     * @method _setRoutes
     * @private
     */
    _setRoutes() {
        // Routes for the Application.
        const routes = [
            { route:'/', tag:'layout-default', routes: [
                { route:'/', tag:'home-view' },
            ]},
        ];

        // Start riot and router.
        riot.mount('*', {
            routes,
            options: {},
        });
    }

}

export default App;
