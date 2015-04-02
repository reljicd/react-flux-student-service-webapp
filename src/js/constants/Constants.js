/**
 * Created by reljicd on 3/31/15.
 */

var keyMirror = require('react/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({
        CHOOSE_STUDENT: null,
        MAKE_UPIS: null,
        CHANGE_UPIS: null,
        MAKE_REZULTAT_ISPITA: null,
        CHANGE_REZULTAT_ISPITA: null,
        RECEIVE_STUDENTS: null,
        RECEIVE_RAW_STUDENTS: null,
        RECEIVE_RAW_PREDMETS: null,
        RECEIVE_RAW_GODINASTUDIJAS: null,
        RECEIVE_RAW_ROKS: null,
        RECEIVE_RAW_NACINFINANSIRANJAS: null,
        RECEIVE_RAW_SKOLSKAGODINAS: null,
        RECEIVE_RAW_STUDIJSKIPROGRAMS: null,
        RECEIVE_RAW_UPISS: null,
        RECEIVE_RAW_REZULTATISPITAS: null
    })

};