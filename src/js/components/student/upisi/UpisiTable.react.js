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
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var LabelAndDateTimePicker = require('../../helpers/LabelAndDateTimePicker.react.js');
var LabelAndComboBox = require('../../helpers/LabelAndComboBox.react.js');
var UpisActionCreators = require('../../../actions/UpisActionCreators');
var UpisUtils = require('../../../utils/UpisUtils');

/**
 * ******************************
 *   *** Upisi Table of Upisi section of the Student Page ***
 *
 *      @param {object} upisiForChosenStudent
 */
var UpisiTable = React.createClass({

    render: function () {

        var upisiForChosenStudent = this.props.upisiForChosenStudent;

        var rows = [];
        for (var upisiForChosenStudentId in upisiForChosenStudent) {
            rows.push(
                <UpisiTableRow upisForChosenStudent = {upisiForChosenStudent[upisiForChosenStudentId]}
                    skolskeGodine={this.props.skolskeGodine}
                    naciniFinansiranja={this.props.naciniFinansiranja}
                    godineStudija={this.props.godineStudija}
                    studijskiProgrami={this.props.studijskiProgrami}
                />
            )
        }

        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>God. studija</th>
                        <th>Sk. God.</th>
                        <th>St. up.</th>
                        <th>Profil</th>
                        <th>Datum</th>
                        <th>K.p.</th>
                        <th>Nacin upisa</th>
                        <th>ESPB n</th>
                        <th>ESPB o</th>
                        <th>Vazi do</th>
                        <th>Napomena</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
});

var UpisiTableRow = React.createClass({

    mixins: [OverlayMixin],

    getInitialState: function () {
        return {
            isModalOpen: false,
            updatedUpisForChosenStudent: UpisUtils.convertRawUpis(this.props.upisForChosenStudent)

        };
    },

    render: function () {

        var upisForChosenStudent = this.props.upisForChosenStudent;

        return (
            <tr onClick={this._onClick}>
                <td>{upisForChosenStudent.godinaStudija.skraceni_naziv}</td>
                <td>{upisForChosenStudent.skolskaGodina.skraceni_naziv}</td>
                <td>B</td>
                <td>{upisForChosenStudent.studijskiProgram.skraceni_naziv}</td>
                <td>{upisForChosenStudent.datum_upisa}</td>
                <td>1</td>
                <td>standardno</td>
                <td></td>
                <td>10</td>
                <td></td>
                <td></td>
            </tr>
        );
    },

    _onClick: function () {
        console.log("Selected row: " + this.props.upisForChosenStudent.id);
        this.handleToggle();
    },

    _onAzuriraj: function () {
        console.log("Azuriran upis: " + this.props.upisForChosenStudent.id);
        UpisActionCreators.changeUpis(this.state.updatedUpisForChosenStudent);
        this.handleToggle();
    },

    _onUpdatedDate: function (updatedDate) {
        this.state.updatedUpisForChosenStudent.datum_upisa = updatedDate;
    },

    _onUpdatedGodinaStudija: function (updatedGodinaStudija) {
        this.state.updatedUpisForChosenStudent.godinaStudija = updatedGodinaStudija;
    },

    _onUpdatedNacinFinansiranja: function (updatedNacinFinansiranja) {
        this.state.updatedUpisForChosenStudent.nacinFinansiranja = updatedNacinFinansiranja;
    },

    _onUpdatedSkolskaGodina: function (updatedSkolskaGodina) {
        this.state.updatedUpisForChosenStudent.skolskaGodina = updatedSkolskaGodina;
    },

    _onUpdatedStudijskiProgram: function (updatedStudijskiProgram) {
        this.state.updatedUpisForChosenStudent.studijskiProgram = updatedStudijskiProgram;
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
            <Modal bsStyle='primary' title={'Menjanje Upisa sa id: ' + this.props.upisForChosenStudent.id} onRequestHide={this.handleToggle}>
                <form className='form-horizontal'>
                    <div className='modal-body'>

                        <LabelAndDateTimePicker label='Datum upisa' defaultDate={new Date(this.props.upisForChosenStudent.datum_upisa)} onUserInput={this._onUpdatedDate}/>
                        <LabelAndComboBox data={this.props.godineStudija} label='Godina studija' defaultValueId={this.props.upisForChosenStudent.godinaStudija.id} onUserInput={this._onUpdatedGodinaStudija}/>
                        <LabelAndComboBox data={this.props.naciniFinansiranja} label='Nacin finansiranja' defaultValueId={this.props.upisForChosenStudent.nacinFinansiranja.id} onUserInput={this._onUpdatedNacinFinansiranja}/>
                        <LabelAndComboBox data={this.props.skolskeGodine} label='Skolska godina' defaultValueId={this.props.upisForChosenStudent.skolskaGodina.id} onUserInput={this._onUpdatedSkolskaGodina}/>
                        <LabelAndComboBox data={this.props.studijskiProgrami} label='Studijski program' defaultValueId={this.props.upisForChosenStudent.studijskiProgram.id} onUserInput={this._onUpdatedStudijskiProgram}/>

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
                </form>
            </Modal>
        );
    }

});

module.exports = UpisiTable;