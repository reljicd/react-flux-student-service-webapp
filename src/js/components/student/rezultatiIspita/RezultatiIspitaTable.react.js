/**
 * Created by reljicd on 3/30/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Table = ReactBootstrap.Table,
    Modal = ReactBootstrap.Modal,
    Input = ReactBootstrap.Input,
    Glyphicon = ReactBootstrap.Glyphicon,
    Button = ReactBootstrap.Button,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    OverlayMixin = ReactBootstrap.OverlayMixin;
var LabelAndComboBox = require('../../helpers/LabelAndComboBox.react.js');
var LabelAndDateTimePicker = require('../../helpers/LabelAndDateTimePicker.react.js');
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var RezultatIspitaActionCreators = require('../../../actions/RezultatIspitaActionCreators');
var RezultatIspitaUtils = require('../../../utils/RezultatIspitaUtils');

/**
 * ******************************
 *   *** Rezultati Ispita Table of Rezultati Ispita section of the Student Page ***
 *
 *   @param {object} rezultatiIspitaForChosenStudent
 */
var RezultatiIspitaTable = React.createClass({

    render: function () {

        var rezultatiIspitaForChosenStudent = this.props.rezultatiIspitaForChosenStudent;

        var rows = [];
        var counter = 1;
        for (var rezultatiIspitaForChosenStudentId in rezultatiIspitaForChosenStudent) {
            rows.push(
                <RezultatiIspitaTableRow rezultatIspitaForChosenStudent = {rezultatiIspitaForChosenStudent[rezultatiIspitaForChosenStudentId]} rowNumber = {counter}
                    godineStudija={this.props.godineStudija}
                    predmeti={this.props.predmeti}
                    rokovi={this.props.rokovi}
                />
            );
            counter++;
        }

        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Akronim</th>
                        <th>Predmet</th>
                        <th>T.</th>
                        <th>Rok</th>
                        <th>O.</th>
                        <th>Nastavnik</th>
                        <th>E.</th>
                        <th>P.</th>
                        <th>Dat. pol.</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }

});

var RezultatiIspitaTableRow = React.createClass({

    mixins: [OverlayMixin],

    getInitialState: function () {
        return {
            isModalOpen: false,
            updatedRezultatIspitaForChosenStudent: RezultatIspitaUtils.convertRawRezultatIspita(this.props.rezultatIspitaForChosenStudent)
        };
    },

    render: function () {

        var rezultatIspitaForChosenStudent = this.props.rezultatIspitaForChosenStudent;

        return (
            <tr onClick={this._onClick}>
                <td >{this.props.rowNumber}</td>
                <td>{rezultatIspitaForChosenStudent.predmet.skraceni_naziv}</td>
                <td>{rezultatIspitaForChosenStudent.predmet.dugi_naziv}</td>
                <td></td>
                <td>{rezultatIspitaForChosenStudent.rok.dugi_naziv}</td>
                <td>{rezultatIspitaForChosenStudent.ocena}</td>
                <td>Name</td>
                <td></td>
                <td></td>
                <td>{rezultatIspitaForChosenStudent.datum_polaganja}</td>
            </tr>
        );
    },

    _onClick: function () {
        console.log("Selected row: " + this.props.rezultatIspitaForChosenStudent.id);
        this.handleToggle();
    },

    _onAzuriraj: function () {
        console.log("Azuriran rezultat ispita: " + this.props.rezultatIspitaForChosenStudent.id);
        RezultatIspitaActionCreators.changeRezultatIspita(this.state.updatedRezultatIspitaForChosenStudent);
        this.handleToggle();
    },

    _onUpdatedDate: function (updatedDate) {
        this.state.updatedRezultatIspitaForChosenStudent.datum_polaganja = updatedDate;
    },

    _onUpdatedGodinaStudija: function (updatedGodinaStudija) {
        this.state.updatedRezultatIspitaForChosenStudent.godinaStudija = updatedGodinaStudija;
    },

    _onUpdatedPredmet: function (updatedPredmet) {
        this.state.updatedRezultatIspitaForChosenStudent.predmet = updatedPredmet;
    },

    _onUpdatedRok: function (updatedRok) {
        this.state.updatedRezultatIspitaForChosenStudent.rok = updatedRok;
    },

    handleToggle: function () {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },

// This is called by the `OverlayMixin` when this component
// is mounted or updated and the return value is appended to the body.
    renderOverlay: function () {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <Modal bsStyle='primary' title={'Menjanje ispita ' + this.props.rezultatIspitaForChosenStudent.predmet.dugi_naziv} onRequestHide={this.handleToggle}>
                <div className='modal-body'>
                    <form className='form-horizontal'>
                        <LabelAndDateTimePicker label='Datum polaganja' defaultDate={new Date(this.props.rezultatIspitaForChosenStudent.datum_polaganja)} onUserInput={this._onUpdatedDate}/>
                        <LabelAndComboBox data={this.props.godineStudija} label='Godina studija' defaultValueId={this.props.rezultatIspitaForChosenStudent.godinaStudija.id} onUserInput={this._onUpdatedGodinaStudija}/>
                        <LabelAndComboBox data={this.props.predmeti} label='Predmet' defaultValueId={this.props.rezultatIspitaForChosenStudent.predmet.id} onUserInput={this._onUpdatedPredmet}/>
                        <LabelAndComboBox data={this.props.rokovi} label='Rok' defaultValueId={this.props.rezultatIspitaForChosenStudent.rok.id} onUserInput={this._onUpdatedRok}/>
                    </form>
                </div>
                <div className='modal-footer'>
                    <ButtonToolbar>
                        <Button bsStyle='primary' onClick={this._onAzuriraj}>
                            <Glyphicon glyph='ok' />
                        Azuriraj</Button>
                        <Button onClick={this.handleToggle} bsStyle='primary'>
                            <Glyphicon glyph='remove'/>
                        Izlaz</Button>
                    </ButtonToolbar>
                </div>
            </Modal>
        );
    }

});

module.exports = RezultatiIspitaTable;