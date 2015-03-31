/**
 * Created by reljicd on 3/31/15.
 */

var React = require('react');

var TopStudentForm = require('../components/TopStudentForm.react.js');
var CenterStackedNavTabs = require('../components/CenterStackedNavTabs.react.js');

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
