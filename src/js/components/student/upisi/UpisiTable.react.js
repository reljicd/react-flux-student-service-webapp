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
    OverlayMixin = ReactBootstrap.OverlayMixin;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');
var LabelAndDateTimePicker = require('../../helpers/LabelAndDateTimePicker.react.js');
var LabelAndComboBox = require('../../helpers/LabelAndComboBox.react.js');

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
                <UpisiTableRow upisForChosenStudent = {upisiForChosenStudent[upisiForChosenStudentId]}/>
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
            isModalOpen: false
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
                    <Button onClick={this.handleToggle} bsStyle='primary'>
                        <Glyphicon glyph='remove'/>
                        Izlaz</Button>
                </div>
            </Modal>
        );
    }

});

module.exports = UpisiTable;