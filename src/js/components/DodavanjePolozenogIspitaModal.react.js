/**
 * Created by reljicd on 3/30/15.
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

var LabelAndDisabledInputText = require('../components/LabelAndDisabledInputText.react');
var LabelAndDateTimePicker = require('../components/LabelAndDateTimePicker.react');
var LabelAndComboBox = require('../components/LabelAndComboBox.react');

/**
 * ******************************
 *   *** Dodavanje Polozenog Ispita Modal of Rezultati Ispita section of the Student Page ***
 */
var DodavanjePolozenogIspitaModal = React.createClass({

    render: function () {
        return (
            <Modal {...this.props} bsStyle='primary' title='Dodavanje polozenog ispita' animation={true}>
                <div className='modal-body'>
                    <form className='form-horizontal'>
                        <Input type='text' label='Predmet' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
                        <LabelAndComboBox label='Rok'/>
                        <LabelAndComboBox label='Ocena'/>
                        <LabelAndComboBox label='Nastavnik potpisao'/>
                        <Input type='text' label='ESPB' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
                        <Input type='text' label='Poena' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
                        <LabelAndDateTimePicker label='Datum prijave'/>
                        <LabelAndDateTimePicker label='Datum polaganja'/>
                        <LabelAndComboBox label='Tip rezultata ispita'/>
                        <LabelAndComboBox label='Tip prijave'/>
                        <Input type='text' label='Broj prijava' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
                        <Input type='text' label='Nastavna grupa' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
                        <Input type='textarea' label='Dodatne informacije' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
                        <Input type='text' label='Komentar' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />

                    </form>
                </div>
                <div className='modal-footer'>
                    <ButtonToolbar>
                        <Button bsStyle='primary' onClick={this.props.onRequestHide}>
                            <Glyphicon glyph='ok' />
                            Azuriraj</Button>
                        <Button bsStyle='primary' onClick={this.props.onRequestHide}>
                            <Glyphicon glyph='remove' />
                            Izlaz</Button>
                    </ButtonToolbar>
                </div>
            </Modal>
        );
    }
});

module.exports = DodavanjePolozenogIspitaModal;