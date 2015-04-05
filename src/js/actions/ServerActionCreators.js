/**
 * Created by reljicd on 3/31/15.
 *
 *  *******************************
 *   *** Action Creator for Server actions ***
 *
 */

// ****** Imports **********************************
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;
/*************************************************/

module.exports = {

    receiveAllStudents: function (rawStudents) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_STUDENTS,
            rawStudents: rawStudents
        });
    },

    receiveAllPredmets: function (rawPredmets) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_PREDMETS,
            rawPredmets: rawPredmets,
            rawStaticData: rawPredmets
        });
    },

    receiveAllGodinaStudijas: function (rawGodinaStudijas) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_GODINASTUDIJAS,
            rawGodinaStudijas: rawGodinaStudijas,
            rawStaticData: rawGodinaStudijas
        });
    },

    receiveAllRoks: function (rawRoks) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_ROKS,
            rawRoks: rawRoks,
            rawStaticData: rawRoks
        });
    },

    receiveAllNacinFinansiranjas: function (rawNacinFinansiranjas) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_NACINFINANSIRANJAS,
            rawNacinFinansiranjas: rawNacinFinansiranjas,
            rawStaticData: rawNacinFinansiranjas
        });
    },

    receiveAllSkolskaGodinas: function (rawSkolskaGodinas) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_SKOLSKAGODINAS,
            rawSkolskaGodinas: rawSkolskaGodinas,
            rawStaticData: rawSkolskaGodinas
        });
    },

    receiveAllStudijskiPrograms: function (rawStudijskiPrograms) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_STUDIJSKIPROGRAMS,
            rawStudijskiPrograms: rawStudijskiPrograms,
            rawStaticData: rawStudijskiPrograms
        });
    },

    receiveAllUpiss: function (rawUpiss) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_UPISS,
            rawUpiss: rawUpiss
        });
    },

    receiveAllRezultatIspitas: function (rawRezultatIspitas) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_REZULTATISPITAS,
            rawRezultatIspitas: rawRezultatIspitas
        });
    }

};