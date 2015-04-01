/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var GodinaStudijaUtils = require('../utils/GodinaStudijaUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _godinaStudijas = {};

function _addGodinaStudijas(rawGodinaStudijas) {
    rawGodinaStudijas.forEach(function (message) {
        if (!_godinaStudijas[message.id]) {
            _godinaStudijas[message.id] = GodinaStudijaUtils.convertRawGodinaStudija(
                message
            );
        }
    });
}

var godinaStudijaStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New GodinaStudijas: ' + JSON.stringify(this.getAll()));
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    /**
     * @param {string} id
     */
    get: function (id) {
        return _godinaStudijas[id];
    },

    getAll: function () {
        return _godinaStudijas;
    }

});

godinaStudijaStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_GODINASTUDIJAS:
            _addGodinaStudijas(action.rawGodinaStudijas);
            godinaStudijaStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = godinaStudijaStore;