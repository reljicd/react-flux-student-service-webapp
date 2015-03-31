/**
 * Created by reljicd on 3/31/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');

var ActionTypes = Constants.ActionTypes;

module.exports = {

    receiveAllStudents: function(rawStudents) {
        AppDispatcher.dispatch({
            type: ActionTypes.RECEIVE_RAW_STUDENTS,
            rawStudents: rawStudents
        });
    }

};