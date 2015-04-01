/**
 * Created by reljicd on 3/31/15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var StudentUtils = require('../utils/StudentUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _students = {};
var _chosenStudentID;

function _addStudents(rawStudents) {
    rawStudents.forEach(function (message) {
        if (!_students[message.id]) {
            _students[message.id] = StudentUtils.convertRawStudent(
                message
            );
        }
    });
}

function _changeChosenStudentID(studentId) {
    console.log("Changed studentId to: " + studentId);
    _chosenStudentID = studentId;
}

var StudentStore = assign({}, EventEmitter.prototype, {

    emitChange: function () {
        this.emit(CHANGE_EVENT);
        //  console.log('Loaded All Students from Memory: ' + JSON.stringify(this.getAll()));
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
     *
     * *for testing purposes*
     * *If id is undefined, returns student[27]*
     */
    get: function (id) {
        if (id === undefined) {
            return _students[27];
        } else {
            return _students[id];
        }

    },

    getAll: function () {
        return _students;
    },

    /**
     * *for testing purposes*
     * *If _chosenStudentID is undefined, returns 27*
     */
    getChosenStudentID: function () {
        if (_chosenStudentID === undefined) {
            return 27;
        } else {
            return _chosenStudentID;
        }

    }

});

StudentStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_STUDENTS:
            _addStudents(action.rawStudents);
            StudentStore.emitChange();
            break;

        case ActionTypes.CHOOSE_STUDENT:
            _changeChosenStudentID(action.studentId);
            StudentStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = StudentStore;