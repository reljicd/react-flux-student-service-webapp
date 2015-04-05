/**
 * Created by reljicd on 3/31/15.
 */

var React = require('react');

var TopStudentForm = require('./TopStudentForm.react.js');
var CenterStackedNavTabs = require('./CenterStackedNavTabs.react.js');
var StudentStore = require('../../stores/StudentStore');
var UpisStore = require('../../stores/UpisStore');

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
