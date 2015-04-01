/**
 * Created by reljicd on 3/31/15.
 */

var React = require('react');

var TopStudentForm = require('./TopStudentForm.react.js');
var CenterStackedNavTabs = require('./CenterStackedNavTabs.react.js');
var StudentStore = require('../../stores/StudentStore');
var UpisStore = require('../../stores/UpisStore');
// TODO delete this entries, they are just for testing
var PredmetStore = require('../../stores/PredmetStore');
var GodinaStudijaStore = require('../../stores/GodinaStudijaStore');
var RokStore = require('../../stores/RokStore');
var NacinFinansiranjaStore = require('../../stores/NacinFinansiranjaStore');
var SkolskaGodinaStore = require('../../stores/SkolskaGodinaStore');
var StudijskiProgramStore = require('../../stores/StudijskiProgramStore');
var RezultatIspitaStore = require('../../stores/RezultatIspitaStore');

/**
 * ******************************
 *   *** Student Page ***
 */

function getStateFromStores() {
    return {
        student: StudentStore.get(StudentStore.getChosenStudentID()),
        poslednjiUpis: UpisStore.getPoslednjiUpis()
    };
}

var StudentPage = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        StudentStore.addChangeListener(this._onChange);
        UpisStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        StudentStore.removeChangeListener(this._onChange);
        UpisStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <TopStudentForm student={this.state.student} poslednjiUpis={this.state.poslednjiUpis}/>
                <CenterStackedNavTabs />
            </div>
        );
    },

    /**
     * Event handler for 'change' events coming from the StudentStore
     */
    _onChange: function () {
        this.setState(getStateFromStores());
    }

});

module.exports = StudentPage;
