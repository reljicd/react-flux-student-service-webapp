/**
 * Created by reljicd on 3/31/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

    changeStudent: function(studentId) {
        console.log("Action CHOOSE_STUDENT for studentId: " + studentId);
        AppDispatcher.dispatch({
            type: ActionTypes.CHOOSE_STUDENT,
            studentId: studentId
        });
    }

};