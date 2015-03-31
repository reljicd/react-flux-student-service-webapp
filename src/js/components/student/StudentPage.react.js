/**
 * Created by reljicd on 3/31/15.
 */

var React = require('react');

var TopStudentForm = require('./TopStudentForm.react.js');
var CenterStackedNavTabs = require('./CenterStackedNavTabs.react.js');

/**
 * ******************************
 *   *** Student Page ***
 */
var StudentPage = React.createClass({
    render: function () {
        return (
            <div>
                <TopStudentForm />
                <CenterStackedNavTabs />
            </div>
        );
    }
});

module.exports = StudentPage;
