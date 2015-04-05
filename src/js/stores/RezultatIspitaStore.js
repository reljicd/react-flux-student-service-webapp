/**
 * Created by reljicd on 4/1/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var RezultatIspitaUtils = require('../utils/RezultatIspitaUtils');
var StudentStore = require('../stores/StudentStore');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _rezultatIspitas = {};
var _rezultatiIspitaForChosenStudent = {};


var _rezultatIspitaIdCounter = 1000; //helper var for making new ids

function _addRezultatIspitas(rawRezultatIspitas) {
    rawRezultatIspitas.forEach(function (message) {
        if (!_rezultatIspitas[message.id]) {
            _rezultatIspitas[message.id] = RezultatIspitaUtils.convertRawRezultatIspita(
                message
            );
        }
    });
}

function _makeNewRezultatIspita(newRezultatIspita) {
    newRezultatIspita.id = _rezultatIspitaIdCounter;
    _rezultatIspitas[_rezultatIspitaIdCounter] = newRezultatIspita;
    _rezultatIspitaIdCounter++;
}

function _changeRezultatIspita(updatedRezultatIspita) {
    _rezultatIspitas[updatedRezultatIspita.id] = updatedRezultatIspita;
}

function _addRezultatiIspitaForChosenStudent() {
    _rezultatiIspitaForChosenStudent = {}; // clear old data
    var chosenStudentId = StudentStore.getChosenStudentID();
    for (var rezultatIspitaId in _rezultatIspitas) {
        if (chosenStudentId == _rezultatIspitas[rezultatIspitaId].student.id)
            _rezultatiIspitaForChosenStudent[rezultatIspitaId] = _rezultatIspitas[rezultatIspitaId];
    }
    ;
}

var rezultatIspitaStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //console.log('Loaded New RezultatIspitas: ' + JSON.stringify(this.getAll()));
        //console.log('RezultatiIspitaForChosenStudent: ' + JSON.stringify(this.getRezultatiIspitaForChosenStudent()));
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
    },

    getRezultatiIspitaForChosenStudent: function () {
        return _rezultatiIspitaForChosenStudent;
    }

});

rezultatIspitaStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_REZULTATISPITAS:
            _addRezultatIspitas(action.rawRezultatIspitas);

            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _addRezultatiIspitaForChosenStudent();

            rezultatIspitaStore.emitChange();
            break;

        case ActionTypes.CHOOSE_STUDENT:
            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _addRezultatiIspitaForChosenStudent()

            rezultatIspitaStore.emitChange();
            break;

        case ActionTypes.MAKE_REZULTAT_ISPITA:
            _makeNewRezultatIspita(action.newRezultatispita);

            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _addRezultatiIspitaForChosenStudent();

            rezultatIspitaStore.emitChange();
            break;

        case ActionTypes.CHANGE_REZULTAT_ISPITA:
            _changeRezultatIspita(action.updatedRezultatIspita);

            // Because this data depends on the *Student* data,
            // wait for StudentStore to do its thing first
            AppDispatcher.waitFor([StudentStore.dispatchToken]);
            _addRezultatiIspitaForChosenStudent();

            rezultatIspitaStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = rezultatIspitaStore;