/**
 * Created by reljicd on 3/27/15.
 */

var React = require('react');
var Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,
    Route = Router.Route,
    RouteHandler = Router.RouteHandler;

var TopNavbar = require('./components/TopNavbar.react.js');
var DefaultPage = require('./components/DefaultPage.react.js');
var StudentPage = require('./components/student/StudentPage.react.js');
var MaticniPodaciForm = require('./components/student/maticniPodaci/MaticniPodaciForm.react.js');
var Upisi = require('./components/student/upisi/Upisi.react.js');
var RezultatiIspita = require('./components/student/rezultatiIspita/RezultatiIspita.react.js');
var KratakPregled = require('./components/student/kratakPregled/KratakPregled.react.js');

var WebAPIUtils = require('./utils/WebAPIUtils');
var ExampleData = require('./ExampleData');

/**
 * ******************************
 *   *** Main React file ***
 *
 *   This file bootstraps the entire application.
 *   Loads the data
 *   Defines the Main Component.
 *   Configures and runs Router
 */

window.React = React; // export for http://fb.me/react-devtools

ExampleData.init(); // load example data into localstorage

WebAPIUtils.getAllStudents(); // load *Student* data for the first time into the app
WebAPIUtils.getAllPredmets(); // load *Predmet* data for the first time into the app
WebAPIUtils.getAllGodinaStudijas(); // load *Godina Studija* data for the first time into the app
WebAPIUtils.getAllRoks(); // load *Rok* data for the first time into the app
WebAPIUtils.getAllNacinFinansiranjas(); // load *Nacin Finansiranja* data for the first time into the app
WebAPIUtils.getAllSkolskaGodinas(); // load *Skolska Godina* data for the first time into the app
WebAPIUtils.getAllStudijskiPrograms(); // load *Studijski Program* data for the first time into the app
WebAPIUtils.getAllUpiss(); // load *Upis* data for the first time into the app
WebAPIUtils.getAllRezultatIspitas(); // load *Rezultat Ispita* data for the first time into the app

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