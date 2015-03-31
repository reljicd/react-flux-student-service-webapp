/**
 * Created by reljicd on 3/31/15.
 */

var React = require('react');

var TopStudentForm = require('./TopStudentForm.react.js');
var CenterStackedNavTabs = require('./CenterStackedNavTabs.react.js');
var StudentStore = require('../../stores/StudentStore');

/**
 * ******************************
 *   *** Student Page ***
 */

function getStateFromStores() {
    return {
        students: StudentStore.getAll()
    };
}

var StudentPage = React.createClass({

    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        StudentStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        StudentStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div>
                <TopStudentForm student={this.state.students[30]}/>
                <CenterStackedNavTabs />
            </div>
        );
    },

    /**
     * Event handler for 'change' events coming from the MessageStore
     */
    _onChange: function () {
        this.setState(getStateFromStores());
    }

});

module.exports = StudentPage;
