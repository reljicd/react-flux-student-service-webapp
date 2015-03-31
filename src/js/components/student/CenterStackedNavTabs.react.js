/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    Grid = ReactBootstrap.Grid,
    Col = ReactBootstrap.Col;
var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink;
var Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

/**
 * ******************************
 *   *** Left Navigation Bar on Student Page ***
 *
 *   Provides navigation to different sections of the Student Page
 */
var CenterStackedNavTabs = React.createClass({

    render: function () {
        var defaultURL = '#/student/#';

        return (

            <Grid>
                <Panel>
                    <Col md={2}>
                        <Nav bsStyle='pills' stacked >
                            <NavItemLink eventKey={1} to='maticnipodaci'>Maticni podaci</NavItemLink>
                            <NavItem eventKey={2} href={defaultURL}>Kadeti</NavItem>
                            <NavItemLink eventKey={3} to='upisi'>Upisi</NavItemLink>
                            <NavItem eventKey={4} href={defaultURL}>Predracun skolarine</NavItem>
                            <NavItem eventKey={5} href={defaultURL}>Uplata</NavItem>
                            <NavItem eventKey={6} href={defaultURL}>Prati / Izbor prof.</NavItem>
                            <NavItem eventKey={7} href={defaultURL}>Pregled Prijava</NavItem>
                            <NavItem eventKey={8} href={defaultURL}>Zabrana prijave</NavItem>
                            <NavItemLink eventKey={9} to='rezultatiispita'>Rezultati ispita</NavItemLink>
                            <NavItem eventKey={10} href={defaultURL}>Pregled obaveza</NavItem>
                            <NavItem eventKey={11} href={defaultURL}>Spisak</NavItem>
                            <NavItem eventKey={12} href={defaultURL}>Obavestenja</NavItem>
                            <NavItemLink eventKey={9} to='kratakpregled'>Kratak pregled</NavItemLink>
                            <NavItem eventKey={14} href={defaultURL}>Diploma</NavItem>
                            <NavItem eventKey={15} href={defaultURL}>Uverenja</NavItem>
                        </Nav>
                    </Col>
                    <Col md={10} >
                        <Panel className='centerForm'>
                            <RouteHandler/>
                        </Panel>
                    </Col>
                </Panel>
            </Grid>

        );
    }

});

module.exports = CenterStackedNavTabs;