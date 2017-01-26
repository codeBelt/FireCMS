import riot from 'riot'
import '../../templates/riot/index';
import * as firebase from 'firebase';
import CheckoutViewModel from './models/CheckoutViewModel'

/**
 * Initial application setup. Runs once upon every page load.
 *
 * @class App
 * @constructor
 */
class App {

    private _pageRoutes:any = [
        { route:'/', tag:'layout-default', routes: [
            { route:'/', tag:'home-view' },
        ]},
    ];

    constructor() {
        console.log(`CheckoutViewModel`, new CheckoutViewModel().pickHowOptions);

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

        // Start riot and router.
        riot.mount('*', {
            pageRoutes: this._pageRoutes,
            options: {},
        });
    }

    /**
     * @method test
     * @param event {any}
     * @public
     */
    public test(event: any): void {
        console.log(`hey`);
    }

}

export default App;
