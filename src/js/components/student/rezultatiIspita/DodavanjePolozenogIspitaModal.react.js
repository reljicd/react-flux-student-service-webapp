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

var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var LabelAndDateTimePicker = require('../../helpers/LabelAndDateTimePicker.react.js');
var LabelAndComboBox = require('../../helpers/LabelAndComboBox.react.js');
var RezultatIspitaActionCreators = require('../../../actions/RezultatIspitaActionCreators');
var RezultatIspitaStore = require('../../../stores/RezultatIspitaStore');
var StudentStore = require('../../../stores/StudentStore');
var RezultatIspitaUtils = require('../../../utils/RezultatIspitaUtils');

/**
 * ******************************
 *   *** Dodavanje Polozenog Ispita Modal of Rezultati Ispita section of the Student Page ***
 */
var DodavanjePolozenogIspitaModal = React.createClass({

    getInitialState: function () {
        return {
            //Example *Rezultat*
            newRezultatIspita: RezultatIspitaUtils.convertRawRezultatIspita({
                "datum_polaganja": "2012-05-16",
                "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
                "id": 43,
                "ocena": 10,
                "predmet": {"dugi_naziv": "Sociologija", "espb": 2, "id": 11, "skraceni_naziv": "SI1S"},
                "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
                "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
            }) //because js is pass by reference
        };
    },

    componentDidMount: function () {
        this.state.newRezultatIspita.datum_upisa = this.getFormatedDate(new Date());
        this.state.newRezultatIspita.student = StudentStore.get(StudentStore.getChosenStudentID());
    },


    _onDodaj: function () {
        console.log("Dodat rezultat ispita: " + JSON.stringify(this.state.newRezultatIspita));
        RezultatIspitaActionCreators.makeRezultatispita(this.state.newRezultatIspita);
        this.props.onRequestHide();
    },

    _onUpdatedDate: function (updatedDate) {
        this.state.newRezultatIspita.datum_polaganja = updatedDate;
    },

    _onUpdatedGodinaStudija: function (updatedGodinaStudija) {
        this.state.newRezultatIspita.godinaStudija = updatedGodinaStudija;
    },

    _onUpdatedPredmet: function (updatedPredmet) {
        this.state.newRezultatIspita.predmet = updatedPredmet;
    },

    _onUpdatedRok: function (updatedRok) {
        this.state.newRezultatIspita.rok = updatedRok;
    },

    render: function () {
        return (
            <Modal {...this.props} bsStyle='primary' title='Dodavanje polozenog ispita' animation={true}>
                <div className='modal-body'>
                    <form className='form-horizontal'>
                        <LabelAndDateTimePicker label='Datum polaganja' defaultDate={new Date()} onUserInput={this._onUpdatedDate}/>
                        <LabelAndComboBox data={this.props.godineStudija} label='Godina studija' defaultValueId={this.state.newRezultatIspita.godinaStudija.id} onUserInput={this._onUpdatedGodinaStudija}/>
                        <LabelAndComboBox data={this.props.predmeti} label='Predmet' defaultValueId={this.state.newRezultatIspita.predmet.id} onUserInput={this._onUpdatedPredmet}/>
                        <LabelAndComboBox data={this.props.rokovi} label='Rok' defaultValueId={this.state.newRezultatIspita.rok.id} onUserInput={this._onUpdatedRok}/>
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
        var month = rawdate.getMonth() + 1;
        return rawdate.getFullYear() + '-' + month + '-' + rawdate.getDate();
    }
});

module.exports = DodavanjePolozenogIspitaModal;