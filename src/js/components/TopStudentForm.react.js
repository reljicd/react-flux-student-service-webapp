/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var Nav = require('react-bootstrap').Nav;
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Panel = require('react-bootstrap').Panel;

var TopStudentForm = React.createClass({

    render: function () {
        return (
            <Grid>
                <Panel>
                    <Row>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Indeks</p>
                            </Col>
                            <Col md={6}>
                                <Input>
                                    <Row>
                                        <Col md={6}>
                                            <input type='text' placeholder='Year' className='narrowInputText  form-control'/>
                                        </Col>
                                        <Col md={6}>
                                            <input type='text' placeholder='No' className='narrowInputText  form-control'/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Godina studija</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Status/Profil</p>
                            </Col>
                            <Col md={6}>
                                <Input>
                                    <Row>
                                        <Col md={6}>
                                            <input type='text' placeholder='Year' className='narrowInputText  form-control' disabled/>
                                        </Col>
                                        <Col md={6}>
                                            <input type='text' placeholder='No' className='narrowInputText  form-control' disabled/>
                                        </Col>
                                    </Row>
                                </Input>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Tip Studija</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Ime</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Datum upisa</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>ESPB</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Nacin upisa</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Prezime</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Status upisa</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>Skolska godina</p>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='inputText form-control' disabled/>
                            </Col>
                        </Col>
                        <Col md={3}>
                            <Col md={6}>
                                <p className='textAllignedRight'>
                                    <b>Neaktivan</b>
                                </p>
                            </Col>
                            <Col md={6}>
                            </Col>
                        </Col>
                    </Row>
                </Panel>
            </Grid>
        );
    }
});

module.exports = TopStudentForm;