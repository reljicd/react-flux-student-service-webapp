/**
 * Created by reljicd on 3/27/15.
 */

// This file bootstraps the entire application.
var React = require('react');
var TopNavbar = require('./components/TopNavbar.react.js');
var TopStudentForm = require('./components/TopStudentForm.react.js');
var CenterStackedNavTabs = require('./components/CenterStackedNavTabs.react.js');
var ExampleData = require('./ExampleData');
window.React = React; // export for http://fb.me/react-devtools

ExampleData.init(); // load example data into localstorage

React.render(
    <TopNavbar />,
    document.getElementById('navbar-section')
);

React.render(
    <TopStudentForm />,
    document.getElementById('top-section')
);

React.render(
    <CenterStackedNavTabs />,
    document.getElementById('center-section')
);