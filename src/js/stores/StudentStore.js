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

var studentStore = assign({}, EventEmitter.prototype, {

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

    getChosenStudentID: function () {
        return _chosenStudentID;
    }

});

studentStore.dispatchToken = AppDispatcher.register(function (action) {

    switch (action.type) {

        case ActionTypes.RECEIVE_RAW_STUDENTS:
            _addStudents(action.rawStudents);
            studentStore.emitChange();
            break;

        case ActionTypes.CHOOSE_STUDENT:
            _changeChosenStudentID(action.studentId);
            studentStore.emitChange();
            break;

        default:
        // do nothing
    }

});

module.exports = studentStore;