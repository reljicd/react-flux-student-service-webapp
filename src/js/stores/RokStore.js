/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var RokUtils = require('../utils/RokUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _roks = {};

function _addRoks(rawRoks) {
    rawRoks.forEach(function (message) {
        if (!_roks[message.id]) {
            _roks[message.id] = RokUtils.convertRawRok(
                message
            );
        }
    });
}

var rokStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New Roks: ' + JSON.stringify(this.getAll()));
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
            return _roks[27];
        } else {
            return _roks[id];
        }

    },

    getAll: function () {
        return _roks;
    }

});

rokStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_ROKS:
            _addRoks(action.rawRoks);
            rokStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = rokStore;