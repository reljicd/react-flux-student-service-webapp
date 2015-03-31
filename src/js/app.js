/**
 * Created by reljicd on 3/27/15.
 *
 * This file bootstraps the entire application.
 */

var React = require('react');
var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var TopNavbar = require('./components/TopNavbar.react.js');
var DefaultPage = require('./components/DefaultPage.react.js');
var StudentPage = require('./components/StudentPage.react.js');
var MaticniPodaciForm = require('./components/MaticniPodaciForm.react.js');
var Upisi = require('./components/Upisi.react.js');
var RezultatiIspita = require('./components/RezultatiIspita.react.js');
var KratakPregled = require('./components/KratakPregled.react.js');

var ExampleData = require('./ExampleData');


window.React = React; // export for http://fb.me/react-devtools

ExampleData.init(); // load example data into localstorage


/**
 * ******************************
 *   *** Main Component ***
 */
var App = React.createClass({
    render: function () {
        return (
            <div>
                <TopNavbar />
        {/* this is the important part */}
                <RouteHandler/>
            </div>
        );
    }
});


/**
 * ******************************
 *   *** react-router ***
 *   configuration and initialization
 */
var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="student" handler={StudentPage}>
            <Route name="maticnipodaci" handler={MaticniPodaciForm}/>
            <Route name="upisi" path='/student/upisi' handler={Upisi}/>
            <Route name="rezultatiispita" handler={RezultatiIspita}/>
            <Route name="kratakpregled" handler={KratakPregled}/>
            <DefaultRoute  handler={DefaultPage}/>
            <NotFoundRoute handler={DefaultPage}/>
        </Route>
        <DefaultRoute handler={DefaultPage}/>
        <NotFoundRoute handler={DefaultPage}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
/**
 *******************************
 */