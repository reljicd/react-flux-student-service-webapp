/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var RezultatIspitaUtils = require('../utils/RezultatIspitaUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _rezultatIspitas = {};

function _addRezultatIspitas(rawRezultatIspitas) {
    rawRezultatIspitas.forEach(function (message) {
        if (!_rezultatIspitas[message.id]) {
            _rezultatIspitas[message.id] = RezultatIspitaUtils.convertRawRezultatIspita(
                message
            );
        }
    });
}

var rezultatIspitaStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New RezultatIspitas: ' + JSON.stringify(this.getAll()));
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
            return _rezultatIspitas[27];
        } else {
            return _rezultatIspitas[id];
        }

    },

    getAll: function () {
        return _rezultatIspitas;
    }

});

rezultatIspitaStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_REZULTATISPITAS:
            _addRezultatIspitas(action.rawRezultatIspitas);
            rezultatIspitaStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = rezultatIspitaStore;