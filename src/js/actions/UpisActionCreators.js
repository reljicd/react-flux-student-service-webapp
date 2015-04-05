/**
 * Created by reljicd on 4/2/15.
 *
 *  *******************************
 *   *** Action Creator for all Upis actions ***
 *
 *      - adding of new *Upis*
 *      - modifying present *Upis*
 *
 */

// ****** Imports **********************************
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;
/*************************************************/

module.exports = {

    changeUpis: function(updatedUpis) {
        console.log("Action CHANGE_UPIS for id: " + updatedUpis.id);
        AppDispatcher.dispatch({
            type: ActionTypes.CHANGE_UPIS,
            updatedUpis: updatedUpis
        });
    },

    makeUpis: function(newUpis) {
        console.log("Action MAKE_UPIS");
        AppDispatcher.dispatch({
            type: ActionTypes.MAKE_UPIS,
            newUpis: newUpis
        });
    }

};