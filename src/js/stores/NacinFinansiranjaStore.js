/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var NacinFinansiranjaUtils = require('../utils/NacinFinansiranjaUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _nacinFinansiranjas = {};

function _addNacinFinansiranjas(rawNacinFinansiranjas) {
    rawNacinFinansiranjas.forEach(function (message) {
        if (!_nacinFinansiranjas[message.id]) {
            _nacinFinansiranjas[message.id] = NacinFinansiranjaUtils.convertRawNacinFinansiranja(
                message
            );
        }
    });
}

var nacinFinansiranjaStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New NacinFinansiranjas: ' + JSON.stringify(this.getAll()));
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
        return _nacinFinansiranjas;
    }

});

nacinFinansiranjaStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_NACINFINANSIRANJAS:
            _addNacinFinansiranjas(action.rawNacinFinansiranjas);
            nacinFinansiranjaStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = nacinFinansiranjaStore;
