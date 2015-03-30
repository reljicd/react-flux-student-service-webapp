/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    Button = ReactBootstrap.Button,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Glyphicon = ReactBootstrap.Glyphicon,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Panel = ReactBootstrap.Panel;
var LabelAndDisabledInputText = require('../components/LabelAndDisabledInputText.react');
var RezultatiIspitaTable = require('../components/RezultatiIspitaTable.react');

var RezultatiIspita = React.createClass({

    render: function () {
        return (
            <span>
                <Panel id='rezultatiIspitaPanel'>
                    <Nav bsStyle='tabs' activeKey={1}>
                        <NavItem eventKey={1}>Rezultati polozenih ispita</NavItem>
                        <NavItem eventKey={2} disabled>Rezultati nepolozenih ispita</NavItem>
                        <NavItem eventKey={2} disabled>Spoljne ocene</NavItem>
                    </Nav>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <Button>
                                <Glyphicon glyph='plus' />
                            </Button>
                            <Button>
                                <Glyphicon glyph='search' />
                            </Button>
                            <Button>
                                <b>Dodavanje polozenog ispita</b>
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <RezultatiIspitaTable/>
                </Panel>
                < Row >
                    <Col md={4}>
                        <LabelAndDisabledInputText label='Trajanje stud.' inputTextValue=''/>
                    </Col>
                    <Col md={2} xsOffset={6}>
                        <Button bsStyle='primary'>
                            <Glyphicon glyph='remove' /> Izlaz</Button>
                    </Col>
                </ Row >
            </span>
        );
    }
});

module.exports = RezultatiIspita;