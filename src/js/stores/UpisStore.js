/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var UpisUtils = require('../utils/UpisUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _upiss = {};

function _addUpiss(rawUpiss) {
    rawUpiss.forEach(function (message) {
        if (!_upiss[message.id]) {
            _upiss[message.id] = UpisUtils.convertRawUpis(
                message
            );
        }
    });
}

var upisStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New Upiss: ' + JSON.stringify(this.getAll()));
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
        if (id === undefined) {
            return _upiss[27];
        } else {
            return _upiss[id];
        }

    },

    getAll: function () {
        return _upiss;
    }

});

upisStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_UPISS:
            _addUpiss(action.rawUpiss);
            upisStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = upisStore;