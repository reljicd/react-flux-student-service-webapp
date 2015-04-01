/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel,
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Grid = ReactBootstrap.Grid,
    Col = ReactBootstrap.Col;
var LabelAndDisabledInputText = require('../helpers/LabelAndDisabledInputText.react.js');
var LabelAndYearIndexComboBox = require('../helpers/LabelAndYearIndexComboBox.react.js');

/**
 * ******************************
 *   *** Form on top of the Student Page ***
 *
 *      Visible always on Student Page
 *
 *      @param {object} student
 *      @param {object} poslednjiUpis
 */
var TopStudentForm = React.createClass({

    render: function () {

        var student = this.props.student;
        var poslednjiUpis = this.props.poslednjiUpis;

        return (
            <Grid>
                <Panel>
                    <Row>
                        <Col md={3}>
                         {/*  Autocomplete control for student searching */}
                            <LabelAndYearIndexComboBox/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='God. studija' inputTextValue={poslednjiUpis ? poslednjiUpis.godinaStudija.dugi_naziv : ''}/>
                        </Col>
                        <Col md={3}>
                            <Col md={5}>
                                <p className='textAllignedRight'>Status/Profil</p>
                            </Col>
                            <Col md={7}>
                                <Input>
                                    <Row>
                                        <Col md={6}>
                                            <input type='text' value='2006' className='narrowInputText  form-control' disabled/>
                                        </Col>
                                        <Col md={6}>
                                            <input type='text' placeholder='No' className='narrowInputText  form-control' disabled/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Tip studija' inputTextValue='AOS'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Ime' inputTextValue={student ? student.ime : ''}/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Datum upisa' inputTextValue={poslednjiUpis ? poslednjiUpis.datum_upisa : ''}/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='ESPB' inputTextValue='90'/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Nacin upisa' inputTextValue='Standardno'/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Prezime' inputTextValue={student ? student.prezime : ''}/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Status upisa' inputTextValue='Samofinansiranje'/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Skolska god.' inputTextValue={poslednjiUpis ? poslednjiUpis.skolskaGodina.dugi_naziv : ''}/>
                        </Col>
                        <Col md={3}>
                            <Col md={5}>
                                <p className='textAllignedRight'>
                                    <b>Neaktivan</b>
                                </p>
                            </Col>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
});

module.exports = TopStudentForm;