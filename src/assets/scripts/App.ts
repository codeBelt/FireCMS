
/**
 * Initial application setup. Runs once upon every page load.
 *
 * @class App
 * @constructor
 */
class App {

    constructor() {
        this.test(null);
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
