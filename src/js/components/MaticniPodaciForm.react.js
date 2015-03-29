/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var Panel = require('react-bootstrap').Panel;
var MaticniPodaciLeftForm = require('../components/MaticniPodaciLeftForm.react');
var MaticniPodaciRightForm = require('../components/MaticniPodaciRightForm.react');

var MaticniPodaciForm = React.createClass({

    render: function () {
        return (
            <span>
                <Row>
                    <Col md={5}>
                        <MaticniPodaciLeftForm/>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Col md={8}>
                                <MaticniPodaciRightForm/>
                            </Col>
                            <Col md={4}>
                                <img src="./assets/fb-batman.jpg" id="maticniPodaciImage" className='img-rounded'/>
                            </Col>
                        </Row>
                        <Row>
                            <Panel id='maticniPodaciRightTextAreaPanel'>
                                <form className='form-horizontal'>
                                    <Input type='textarea' label='Ostale aktivnosti' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
                                    <Input type='textarea' label='Komentar' labelClassName='col-xs-2' wrapperClassName='col-xs-10' />
                                </form>
                            </Panel>
                        </Row>
                    </Col>
                </Row>
                < Row >
                    <Col md={3} xsOffset={9}>
                        <ButtonToolbar>
                            <Button bsStyle='primary'>Azuriraj</Button>
                            <Button bsStyle='primary'>Izlaz</Button>
                        </ButtonToolbar>
                    </Col>
                </ Row >
            </span>
        );
    }
});

module.exports = MaticniPodaciForm;