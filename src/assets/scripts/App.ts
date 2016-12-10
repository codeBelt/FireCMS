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
    }

    /**
     * @method test
     * @param event {any}
     * @public
     */
    public test(event:any):void {
        console.log(`hey`);
    }

}

export default App;
