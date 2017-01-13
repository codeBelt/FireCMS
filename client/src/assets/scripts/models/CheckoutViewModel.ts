import BaseModel from 'structure-js/ts/model/BaseModel';
import InputModel from './form/InputModel';

/**
 * @class CheckoutViewModel
 * @extends ApiBaseModel
 * @constructor
 **/
class CheckoutViewModel extends BaseModel {

    /**
     * @property cartItems
     * @type {Array<MenuItems>}
     * @public
     */
    cartItems = [];

    /**
     * @property pickHowOptions
     * @type {Array<{}>}
     * @public
     */
    pickHowOptions = [
        new InputModel({
            id: 'pickupInside',
            name: 'pickupInside',
            label: 'Inside (Come on in!)',
            isChecked: true,
        }),
        new InputModel({
            id: 'pickupCurbside',
            name: 'pickupCurbside',
            label: 'We\'ll bring it out.',
            isChecked: false,
        }),
    ];

    /**
     * @property pickupTimesOptions
     * @type {Array<{}>}
     * @public
     */
    pickupTimesOptions = [
        new InputModel({
            id: 'pickupAsap',
            name: 'pickupAsap',
            label: 'ASAP (Today, 5:00 pm)',
            isChecked: true,
        }),
        new InputModel({
            id: 'pickupFuture',
            name: 'pickupFuture',
            label: 'Future',
            isChecked: false,
        }),
    ];

    constructor(data = {}, opts = {}) {
        super(opts);

        if (data) {
            this.update(data);
        }
    }

    /**
     * @overridden ApiBaseModel.update
     */
    update(data) {
        super.update(data);

        // Override any values after the default super update method has set the values.
    }

}

export default CheckoutViewModel;
