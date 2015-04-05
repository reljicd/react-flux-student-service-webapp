/**
 * Created by Dusan on 4/2/2015.
 *
 *  **************************************************************
 *   *** Action Creator for all Rezultati Ispita actions ***
 *
 *      - adding of new *Rezultat Ispita*
 *      - modifying present *Rezultat Ispita*
 *
 */

// ****** Imports **********************************
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;
/*************************************************/


module.exports = {

    changeRezultatIspita: function(updatedRezultatIspita) {
        console.log("Action CHANGE_REZULTATISPITA for id: " + updatedRezultatIspita.id);
        AppDispatcher.dispatch({
            type: ActionTypes.CHANGE_REZULTAT_ISPITA,
            updatedRezultatIspita: updatedRezultatIspita
        });
    },

    makeRezultatispita: function(newRezultatIspita) {
        console.log("Action MAKE_REZULTATISPITA");
        AppDispatcher.dispatch({
            type: ActionTypes.MAKE_REZULTAT_ISPITA,
            newRezultatispita: newRezultatIspita
        });
    }

};