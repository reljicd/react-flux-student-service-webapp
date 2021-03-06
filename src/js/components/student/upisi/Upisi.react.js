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
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Glyphicon = ReactBootstrap.Glyphicon,
    ModalTrigger = ReactBootstrap.ModalTrigger,
    Panel = ReactBootstrap.Panel;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var DodavanjeUpisaModal = require('./DodavanjeUpisaModal.react.js');
var UpisiTable = require('./UpisiTable.react.js');
var UpisStore = require('../../../stores/UpisStore');
var StaticDataStores = require('../../../stores/StaticDataStores');

/**
 * ******************************
 *   *** Upisi section of the Student Page ***
 */
function getStateFromStores() {
    return {
        upisiForChosenStudent: UpisStore.getUpisiForChosenStudent(),
        skolskeGodine: StaticDataStores.staticDataStoreSkolskaGodina.getAll(),
        naciniFinansiranja: StaticDataStores.staticDataStoreNacinFinansiranja.getAll(),
        godineStudija: StaticDataStores.staticDataStoreGodineStudija.getAll(),
        studijskiProgrami: StaticDataStores.staticDataStoreStudijskiProgram.getAll()
    };
}

var Upisi = React.createClass({

    getInitialState: function () {
        return getStateFromStores();
    },

    componentDidMount: function () {
        UpisStore.addChangeListener(this._onChange);
        StaticDataStores.staticDataStoreSkolskaGodina.addChangeListener(this._onChange);
        StaticDataStores.staticDataStoreNacinFinansiranja.addChangeListener(this._onChange);
        StaticDataStores.staticDataStoreGodineStudija.addChangeListener(this._onChange);
        StaticDataStores.staticDataStoreStudijskiProgram.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        UpisStore.removeChangeListener(this._onChange);
        StaticDataStores.staticDataStoreSkolskaGodina.removeChangeListener(this._onChange);
        StaticDataStores.staticDataStoreNacinFinansiranja.removeChangeListener(this._onChange);
        StaticDataStores.staticDataStoreGodineStudija.removeChangeListener(this._onChange);
        StaticDataStores.staticDataStoreStudijskiProgram.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <span>
                <Panel id='upisiPanel'>
                    <Nav bsStyle='tabs' activeKey={1}>
                        <NavItem eventKey={1}>Upisi</NavItem>
                        <NavItem eventKey={2} disabled>Atributi</NavItem>
                    </Nav>
                    <ButtonToolbar>
                        <ButtonGroup>
                            <ModalTrigger modal={<DodavanjeUpisaModal skolskeGodine={this.state.skolskeGodine}
                                naciniFinansiranja={this.state.naciniFinansiranja}
                                godineStudija={this.state.godineStudija}
                                studijskiProgrami={this.state.studijskiProgrami}
                            />}
                            >
                                <Button>
                                    <b>Upis godine</b>
                                </Button>
                            </ModalTrigger>
                            <Button>
                                <b>Obnova godine</b>
                            </Button>
                            <Button>
                                <b>Ispis</b>
                            </Button>
                            <Button>
                                <b>Zakljucaj</b>
                            </Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                    <UpisiTable upisiForChosenStudent={this.state.upisiForChosenStudent}
                        skolskeGodine={this.state.skolskeGodine}
                        naciniFinansiranja={this.state.naciniFinansiranja}
                        godineStudija={this.state.godineStudija}
                        studijskiProgrami={this.state.studijskiProgrami}
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

module.exports = Upisi;