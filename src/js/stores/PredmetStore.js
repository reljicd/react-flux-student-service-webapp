/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var PredmetUtils = require('../utils/PredmetUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _predmets = {};

function _addPredmets(rawPredmets) {
    rawPredmets.forEach(function (message) {
        if (!_predmets[message.id]) {
            _predmets[message.id] = PredmetUtils.convertRawPredmet(
                message
            );
        }
    });
}

var predmetStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New Predmets: ' + JSON.stringify(this.getAll()));
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
        return _predmets;
    }

});

predmetStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_PREDMETS:
            _addPredmets(action.rawPredmets);
            predmetStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = predmetStore;