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
var LabelAndComboBox = require('../../helpers/LabelAndComboBox.react.js');
var LabelAndDateTimePicker = require('../../helpers/LabelAndDateTimePicker.react.js');
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');

/**
 * ******************************
 *   *** Rezultati Ispita Table of Rezultati Ispita section of the Student Page ***
 *
 *   @param {object} rezultatiIspitaForChosenStudent
 */
var RezultatiIspitaTable = React.createClass({

        mixins: [OverlayMixin],

        getInitialState: function () {
            return {
                isModalOpen: false
            };
        },

        render: function () {

            var rezultatiIspitaForChosenStudent = this.props.rezultatiIspitaForChosenStudent;
            var rows = [];

            var counter = 1;
            for (var rezultatiIspitaForChosenStudentId in rezultatiIspitaForChosenStudent) {
                rows.push(
                    <tr onClick={this._onClick}>
                        <td >{counter}</td>
                        <td>{rezultatiIspitaForChosenStudent[rezultatiIspitaForChosenStudentId].predmet.skraceni_naziv}</td>
                        <td>{rezultatiIspitaForChosenStudent[rezultatiIspitaForChosenStudentId].predmet.dugi_naziv}</td>
                        <td></td>
                        <td>{rezultatiIspitaForChosenStudent[rezultatiIspitaForChosenStudentId].rok.dugi_naziv}</td>
                        <td>{rezultatiIspitaForChosenStudent[rezultatiIspitaForChosenStudentId].ocena}</td>
                        <td>Name</td>
                        <td></td>
                        <td></td>
                        <td>@{rezultatiIspitaForChosenStudent[rezultatiIspitaForChosenStudentId].datum_polaganja}</td>
                    </tr>
                )
                counter++
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
        ,

        _onClick: function () {
            console.log("Selected: ");
            this.handleToggle();
        }
        ,

        handleToggle: function () {
            this.setState({
                isModalOpen: !this.state.isModalOpen
            });
        }
        ,

// This is called by the `OverlayMixin` when this component
// is mounted or updated and the return value is appended to the body.
        renderOverlay: function () {
            if (!this.state.isModalOpen) {
                return <span/>;
            }

            return (
                <Modal bsStyle='primary' title='Menjanje izabranog ispita' onRequestHide={this.handleToggle}>
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
    })
    ;

module.exports = RezultatiIspitaTable;