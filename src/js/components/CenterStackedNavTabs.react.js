/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var CenterFormSelector = require('../components/CenterFormSelector.react');
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var Grid = require('react-bootstrap').Grid;
var Col = require('react-bootstrap').Col;
var Panel = require('react-bootstrap').Panel;

var CenterStackedNavTabs = React.createClass({

    getInitialState: function () {
        return {
            chosenNavItem: 1
        };
    },

    render: function () {

        return (

            <Grid>
                <Panel>
                    <Col md={2}>
                        <Nav bsStyle='pills' stacked activeKey={this.state.chosenNavItem} onSelect={this._handleSelect}>
                            <NavItem eventKey={1} >Maticni podaci</NavItem>
                            <NavItem eventKey={2} >Kadeti</NavItem>
                            <NavItem eventKey={3} >Upisi</NavItem>
                            <NavItem eventKey={4} >Predracun skolarine</NavItem>
                            <NavItem eventKey={5} >Uplata</NavItem>
                            <NavItem eventKey={6} >Prati / Izbor prof.</NavItem>
                            <NavItem eventKey={7} >Pregled Prijava</NavItem>
                            <NavItem eventKey={8} >Zabrana prijave</NavItem>
                            <NavItem eventKey={9} >Rezultati ispita</NavItem>
                            <NavItem eventKey={10} >Pregled obaveza</NavItem>
                            <NavItem eventKey={11} >Spisak</NavItem>
                            <NavItem eventKey={12} >Obavestenja</NavItem>
                            <NavItem eventKey={13} >Kratak pregled</NavItem>
                            <NavItem eventKey={14} >Diploma</NavItem>
                            <NavItem eventKey={15} >Uverenja</NavItem>
                        </Nav>
                    </Col>
                    <Col md={10} >
                        <Panel className='centerForm'>
                            <CenterFormSelector chosenNavItem={this.state.chosenNavItem}/>
                        </Panel>
                    </Col>
                </Panel>
            </Grid>

        );
    },

    _handleSelect: function (selectedKey) {
        this.setState({
            chosenNavItem: selectedKey
        });
    }

});

module.exports = CenterStackedNavTabs;