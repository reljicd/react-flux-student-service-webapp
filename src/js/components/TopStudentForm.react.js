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
var LabelAndDisabledInputText = require('../components/LabelAndDisabledInputText.react');

var TopStudentForm = React.createClass({

    render: function () {
        return (
            <Grid>
                <Panel>
                    <Row>
                        <Col md={3}>
                            <Col md={5}>
                                <p className='textAllignedRight'>Indeks</p>
                            </Col>
                            <Col md={7}>
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
                            <LabelAndDisabledInputText label='God. studija' inputTextValue=''/>
                        </Col>
                        <Col md={3}>
                            <Col md={5}>
                                <p className='textAllignedRight'>Status/Profil</p>
                            </Col>
                            <Col md={7}>
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
                            <LabelAndDisabledInputText label='Tip studija' inputTextValue=''/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Ime' inputTextValue=''/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Datum upisa' inputTextValue=''/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='ESPB' inputTextValue=''/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Nacin upisa' inputTextValue=''/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Prezime' inputTextValue=''/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Status upisa' inputTextValue=''/>
                        </Col>
                        <Col md={3}>
                            <LabelAndDisabledInputText label='Skolska god.' inputTextValue=''/>
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