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
    ModalTrigger = ReactBootstrap.ModalTrigger,
    Panel = ReactBootstrap.Panel;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var RezultatiIspitaTable = require('./RezultatiIspitaTable.react.js');
var DodavanjePolozenogIspitaModal = require('./DodavanjePolozenogIspitaModal.react.js');
var RezultatIspitaStore = require('../../../stores/RezultatIspitaStore');
var GodinaStudijaStore = require('../../../stores/GodinaStudijaStore');
var PredmetStore = require('../../../stores/PredmetStore');
var RokStore = require('../../../stores/RokStore');

/**
 * ******************************
 *   *** Rezultati Ispita section of the Student Page ***
 */

function getStateFromStores() {
    return {
        rezultatiIspitaForChosenStudent: RezultatIspitaStore.getRezultatiIspitaForChosenStudent(),
        godineStudija: GodinaStudijaStore.getAll(),
        predmeti: PredmetStore.getAll(),
        rokovi: RokStore.getAll()
    };
}

var RezultatiIspita = React.createClass({

    getInitialState: function () {
        return getStateFromStores();
    },

    componentDidMount: function () {
        RezultatIspitaStore.addChangeListener(this._onChange);
        GodinaStudijaStore.addChangeListener(this._onChange);
        PredmetStore.addChangeListener(this._onChange);
        RokStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        RezultatIspitaStore.removeChangeListener(this._onChange);
        GodinaStudijaStore.removeChangeListener(this._onChange);
        PredmetStore.removeChangeListener(this._onChange);
        RokStore.removeChangeListener(this._onChange);
    },

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
                            <ModalTrigger modal={<DodavanjePolozenogIspitaModal
                                godineStudija={this.state.godineStudija}
                                predmeti={this.state.predmeti}
                                rokovi={this.state.rokovi}
                            />}
                            >
                                <Button>
                                    <b>Dodavanje polozenog ispita</b>
                                </Button>
                            </ModalTrigger>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <RezultatiIspitaTable rezultatiIspitaForChosenStudent={this.state.rezultatiIspitaForChosenStudent}
                        godineStudija={this.state.godineStudija}
                        predmeti={this.state.predmeti}
                        rokovi={this.state.rokovi}
                    />
                </Panel>
                < Row >
                    <Col md={4}>
                        <LabelAndDisabledInputText label='Trajanje stud.' inputTextValue=''/>
                    </Col>
                    <Col md={2} xsOffset={6}>
                        <Button bsStyle='primary'>
                            <Glyphicon glyph='remove' />
                        Izlaz</Button>
                    </Col>
                </ Row >
            </span>
        );
    },

    /**
     * Event handler for 'change' events coming from the StudentStore
     */
    _onChange: function () {
        this.setState(getStateFromStores());
    }
});

module.exports = RezultatiIspita;