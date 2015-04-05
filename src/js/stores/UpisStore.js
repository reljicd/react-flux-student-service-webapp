/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var UpisUtils = require('../utils/UpisUtils');
var StudentStore = require('../stores/StudentStore');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _upiss = {};
var _upisiForChosenStudent = {};
var _poslednjiUpis;

var _upisIdCounter = 1000; //helper var for making new ids

function _addUpiss(rawUpiss) {
    rawUpiss.forEach(function (message) {
        if (!_upiss[message.id]) {
            _upiss[message.id] = UpisUtils.convertRawUpis(
                message
            );
        }
    });
    _addUpisiForChosenStudent();
}

function _makeNewUpis(newUpis) {
    newUpis.id = _upisIdCounter;
    _upiss[_upisIdCounter] = newUpis;
    _upisIdCounter++;
    _addUpisiForChosenStudent();
}

function _changeUpis(updatedUpis) {
    _upiss[updatedUpis.id] = updatedUpis;
    _addUpisiForChosenStudent();
}

function _addUpisiForChosenStudent() {
    _upisiForChosenStudent = {}; // clear old data
    var chosenStudentId = StudentStore.getChosenStudentID();
    for (var upisId in _upiss) {
        if (chosenStudentId == _upiss[upisId].student.id) _upisiForChosenStudent[upisId] = _upiss[upisId];
    }
    ;
    _calculatePoslednjiUpis();
}

function _calculatePoslednjiUpis() {
    _poslednjiUpis = undefined; // clear old data
    var lastYear = 1900;
    for (var upisId in _upisiForChosenStudent) {
        var godinaUpisa = _upisiForChosenStudent[upisId].datum_upisa.slice(0, 4);
        if (godinaUpisa > lastYear) _poslednjiUpis = _upisiForChosenStudent[upisId];
        lastYear = godinaUpisa;
    }
    ;
}

var upisStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
       // console.log('Loaded New Upiss: ' + JSON.stringify(this.getAll()));
       // console.log('UpisiForChosenStudent: ' + JSON.stringify(this.getUpisiForChosenStudent()));
       // console.log('Loaded New PoslednjiUpis: ' + JSON.stringify(this.getPoslednjiUpis()));
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
    },

    getUpisiForChosenStudent: function () {
        return _upisiForChosenStudent;
    },

    getPoslednjiUpis: function () {
        return _poslednjiUpis;
    }

});

upisStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_UPISS:
            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _addUpiss(action.rawUpiss);
            upisStore.emitChange();
            break;

        case ActionTypes.CHOOSE_STUDENT:
            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _addUpisiForChosenStudent();
            upisStore.emitChange();
            break;

        case ActionTypes.MAKE_UPIS:
            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _makeNewUpis(action.newUpis);
            upisStore.emitChange();
            break;

        case ActionTypes.CHANGE_UPIS:
            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _changeUpis(action.updatedUpis);
            upisStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = upisStore;