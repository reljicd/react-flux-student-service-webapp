/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;

var TopNavbar = React.createClass({

    render: function () {
        return (
            <Navbar inverse staticTop brand='IP React/Flux'>
                <Nav left>
                    <NavItem eventKey={1} href='#'>Student</NavItem>
                    <NavItem eventKey={2} href='#'>Studije</NavItem>
                    <NavItem eventKey={3} href='#'>Ispitni Rok</NavItem>
                    <NavItem eventKey={4} href='#'>Nastava</NavItem>
                    <NavItem eventKey={5} href='#'>Nastavni Plan</NavItem>
                    <NavItem eventKey={6} href='#'>Skolarina</NavItem>
                    <NavItem eventKey={7} href='#'>Administracija</NavItem>
                    <NavItem eventKey={8} href='#'>Ostalo</NavItem>
                </Nav>

                <Nav right>
                    <NavItem eventKey={1} href='#'><b>[Dusan]</b></NavItem>
                    <NavItem eventKey={2} href='#'>Kraj Rada</NavItem>
                </Nav>
            </Navbar>

        );
    }
});

module.exports = TopNavbar;