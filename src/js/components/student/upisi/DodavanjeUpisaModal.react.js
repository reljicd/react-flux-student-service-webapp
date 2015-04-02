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

/**
 * ******************************
 *   *** Dodavanje Polozenog Ispita Modal of Rezultati Ispita section of the Student Page ***
 */
var DodavanjeUpisaModal = React.createClass({

    render: function () {
        return (
            <Modal {...this.props} bsStyle='primary' title='Dodavanje Upisa' animation={true}>
                <div className='modal-body'>
                    <form className='form-horizontal'>
                        <LabelAndDateTimePicker label='Datum upisa'/>
                        <LabelAndComboBox data={this.props.godineStudija} label='Godina studija'/>
                        <LabelAndComboBox data={this.props.naciniFinansiranja} label='Nacin finansiranja'/>
                        <LabelAndComboBox data={this.props.skolskeGodine} label='Skolska godina'/>
                        <LabelAndComboBox data={this.props.studijskiProgrami} label='Studijski program'/>
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

    _onDodaj: function () {
        console.log("Dodat upis: ");
        //this.handleToggle();
    }
});

module.exports = DodavanjeUpisaModal;