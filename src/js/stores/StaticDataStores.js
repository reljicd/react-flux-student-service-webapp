/**
 * Created by reljicd on 4/3/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var GodinaStudijaUtilsConverter = require('../utils/GodinaStudijaUtils').convertRawGodinaStudija;
var SkolskaGodinaUtilsConverter = require('../utils/SkolskaGodinaUtils').convertRawSkolskaGodina;
var NacinFinansiranjaUtils = require('../utils/NacinFinansiranjaUtils').convertRawNacinFinansiranja;
var StudijskiProgramUtils = require('../utils/StudijskiProgramUtils').convertRawStudijskiProgram;
var RokUtils = require('../utils/RokUtils').convertRawRok;
var PredmetUtils = require('../utils/PredmetUtils').convertRawPredmet;

/*
 This is implemented as Module Pattern
 */
var staticDataStore = function (actionType, converter) {

// ********* Encapsulated data ***********
    var _staticData = {};

    var _addStaticData = function (rawStaticData, rawStaticDataConverter) {
        rawStaticData.forEach(function (message) {
            if (!_staticData[message.id]) {
                _staticData[message.id] = rawStaticDataConverter(
                    message
                );
            }
        });
    };

// ********* Constructor ***********
    function oStaticDataStore() {
    };

// ********* Prototype Object ***********
    oStaticDataStore.prototype = assign({}, EventEmitter.prototype, {

        emitChange: function () {
            this.emit(CHANGE_EVENT);
            //console.log('Loaded New Data: ' + JSON.stringify(this.getAll()));
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
            return _staticData[id];
        },

        getAll: function () {
            return _staticData;
        }

    });

    oStaticDataStore.prototype.dispatchToken = AppDispatcher.register(function (action) {
        switch (action.type) {

            case actionType:
                _addStaticData(action.rawStaticData, converter);
                oStaticDataStore.prototype.emitChange();
                break;

            default:
            // do nothing
        }

    });

    return new oStaticDataStore();
};

var staticDataStoreGodineStudija = staticDataStore(ActionTypes.RECEIVE_RAW_GODINASTUDIJAS, GodinaStudijaUtilsConverter);
var staticDataStoreSkolskaGodina = staticDataStore(ActionTypes.RECEIVE_RAW_SKOLSKAGODINAS, SkolskaGodinaUtilsConverter);
var staticDataStoreNacinFinansiranja = staticDataStore(ActionTypes.RECEIVE_RAW_NACINFINANSIRANJAS, NacinFinansiranjaUtils);
var staticDataStoreStudijskiProgram = staticDataStore(ActionTypes.RECEIVE_RAW_STUDIJSKIPROGRAMS, StudijskiProgramUtils);
var staticDataStoreRok = staticDataStore(ActionTypes.RECEIVE_RAW_ROKS, RokUtils);
var staticDataStorePredmet = staticDataStore(ActionTypes.RECEIVE_RAW_PREDMETS, PredmetUtils);


module.exports = {
    staticDataStoreGodineStudija: staticDataStoreGodineStudija,
    staticDataStoreSkolskaGodina: staticDataStoreSkolskaGodina,
    staticDataStoreNacinFinansiranja: staticDataStoreNacinFinansiranja,
    staticDataStoreStudijskiProgram: staticDataStoreStudijskiProgram,
    staticDataStoreRok: staticDataStoreRok,
    staticDataStorePredmet: staticDataStorePredmet
};