/**
 * Created by reljicd on 4/2/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Button = ReactBootstrap.Button,
    Glyphicon = ReactBootstrap.Glyphicon,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Input = ReactBootstrap.Input,
    Modal = ReactBootstrap.Modal;

var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var LabelAndDateTimePicker = require('../../helpers/LabelAndDateTimePicker.react.js');
var LabelAndComboBox = require('../../helpers/LabelAndComboBox.react.js');
var UpisActionCreators = require('../../../actions/UpisActionCreators');
var UpisStore = require('../../../stores/UpisStore');
var UpisUtils = require('../../../utils/UpisUtils');

/**
 * ******************************
 *   *** Dodavanje Polozenog Ispita Modal of Rezultati Ispita section of the Student Page ***
 */
var DodavanjeUpisaModal = React.createClass({

    getInitialState: function () {
        return {
            newUpis: UpisUtils.convertRawUpis(UpisStore.getPoslednjiUpis()) //because js is pass by reference
        };
    },

    componentDidMount: function () {
        this.state.newUpis.datum_upisa = this.getFormatedDate(new Date());
    },


    _onDodaj: function () {
        console.log("Dodat upis " + JSON.stringify(this.state.newUpis));
        UpisActionCreators.makeUpis(this.state.newUpis);
        this.props.onRequestHide();
    },

    _onUpdatedDate: function (updatedDate) {
        this.state.newUpis.datum_upisa = updatedDate;
    },

    _onUpdatedGodinaStudija: function (updatedGodinaStudija) {
        this.state.newUpis.godinaStudija = updatedGodinaStudija;
    },

    _onUpdatedNacinFinansiranja: function (updatedNacinFinansiranja) {
        this.state.newUpis.nacinFinansiranja = updatedNacinFinansiranja;
    },

    _onUpdatedSkolskaGodina: function (updatedSkolskaGodina) {
        this.state.newUpis.skolskaGodina = updatedSkolskaGodina;
    },

    _onUpdatedStudijskiProgram: function (updatedStudijskiProgram) {
        this.state.newUpis.studijskiProgram = updatedStudijskiProgram;
    },

    render: function () {
        return (
            <Modal {...this.props} bsStyle='primary' title='Dodavanje Upisa' animation={true}>
                <div className='modal-body'>
                    <form className='form-horizontal'>
                        <LabelAndDateTimePicker label='Datum upisa' defaultDate={new Date(this.state.newUpis.datum_upisa)} onUserInput={this._onUpdatedDate}/>
                        <LabelAndComboBox data={this.props.godineStudija} label='Godina studija' defaultValueId={this.state.newUpis.godinaStudija.id} onUserInput={this._onUpdatedGodinaStudija}/>
                        <LabelAndComboBox data={this.props.naciniFinansiranja} label='Nacin finansiranja' defaultValueId={this.state.newUpis.nacinFinansiranja.id} onUserInput={this._onUpdatedNacinFinansiranja}/>
                        <LabelAndComboBox data={this.props.skolskeGodine} label='Skolska godina' defaultValueId={this.state.newUpis.skolskaGodina.id} onUserInput={this._onUpdatedSkolskaGodina}/>
                        <LabelAndComboBox data={this.props.studijskiProgrami} label='Studijski program' defaultValueId={this.state.newUpis.studijskiProgram.id} onUserInput={this._onUpdatedStudijskiProgram}/>
                    </form>
                </div>
                <div className='modal-footer'>
                    <ButtonToolbar>
                        <Button bsStyle='primary' onClick={this._onDodaj}>
                            <Glyphicon glyph='ok' />
                            Dodaj</Button>
                        <Button bsStyle='primary' onClick={this.props.onRequestHide}>
                            <Glyphicon glyph='remove' />
                            Izlaz</Button>
                    </ButtonToolbar>
                </div>
            </Modal>
        );

    },

    getFormatedDate: function (rawdate) {
        return rawdate.getFullYear() + '-' + rawdate.getMonth() + '-' + rawdate.getDate();
    }

});

module.exports = DodavanjeUpisaModal;