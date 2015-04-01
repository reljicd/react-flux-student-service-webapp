/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var SkolskaGodinaUtils = require('../utils/SkolskaGodinaUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _skolskaGodinas = {};

function _addSkolskaGodinas(rawSkolskaGodinas) {
    rawSkolskaGodinas.forEach(function (message) {
        if (!_skolskaGodinas[message.id]) {
            _skolskaGodinas[message.id] = SkolskaGodinaUtils.convertRawSkolskaGodina(
                message
            );
        }
    });
}

var skolskaGodinaStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New SkolskaGodinas: ' + JSON.stringify(this.getAll()));
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
        return _skolskaGodinas;
    }

});

skolskaGodinaStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_SKOLSKAGODINAS:
            _addSkolskaGodinas(action.rawSkolskaGodinas);
            skolskaGodinaStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = skolskaGodinaStore;