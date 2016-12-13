import * as riot from 'riot'
import '../../templates/riot/index';
import * as firebase from 'firebase';

/**
 * Initial application setup. Runs once upon every page load.
 *
 * @class App
 * @constructor
 */
class App {

    constructor() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDqBfvsMGjfiTXNHeG7RmcOl-AcyHM2AZY',
            databaseURL: 'https://firecms-e950e.firebaseio.com'
        });

        const firebaseRef = firebase.database().ref();
        const cms = firebaseRef.child('cms');
        cms.on('value', snap => {
            console.log(`snap`, snap.val());
        });

        // cms.set({
        //     single: {
        //         "asdfeawraf8435tffda": {
        //             title: 'Heyw',
        //             body:'asdfasdf'
        //         },
        //         "0": {
        //             title: 'Heyw',
        //             body:'asdfasdf'
        //         }
        //     }
        // })

        this._setRoutes();
    }

    /**
     * @method test
     * @param event {any}
     * @public
     */
    public test(event:any):void {
        console.log(`hey`);
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
