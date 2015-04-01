/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var StudijskiProgramUtils = require('../utils/StudijskiProgramUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _studijskiPrograms = {};

function _addStudijskiPrograms(rawStudijskiPrograms) {
    rawStudijskiPrograms.forEach(function (message) {
        if (!_studijskiPrograms[message.id]) {
            _studijskiPrograms[message.id] = StudijskiProgramUtils.convertRawStudijskiProgram(
                message
            );
        }
    });
}

var studijskiProgramStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New StudijskiPrograms: ' + JSON.stringify(this.getAll()));
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
            return _studijskiPrograms[27];
        } else {
            return _studijskiPrograms[id];
        }

    },

    getAll: function () {
        return _studijskiPrograms;
    }

});

studijskiProgramStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_STUDIJSKIPROGRAMS:
            _addStudijskiPrograms(action.rawStudijskiPrograms);
            studijskiProgramStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = studijskiProgramStore;