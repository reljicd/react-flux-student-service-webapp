/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel,
    Input = ReactBootstrap.Input,
    Button = ReactBootstrap.Button,
    ButtonToolbar = ReactBootstrap.ButtonToolbar,
    Row = ReactBootstrap.Row,
    Grid = ReactBootstrap.Grid,
    Glyphicon = ReactBootstrap.Glyphicon,
    Col = ReactBootstrap.Col;
var MaticniPodaciLeftForm = require('../components/MaticniPodaciLeftForm.react');
var MaticniPodaciRightForm = require('../components/MaticniPodaciRightForm.react');

/**
 * ******************************
 *   *** Maticni Podaci section of the Student Page ***
 */
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
                            <Button bsStyle='primary'><Glyphicon glyph='ok' /> Azuriraj</Button>
                            <Button bsStyle='primary'><Glyphicon glyph='remove' /> Izlaz</Button>
                        </ButtonToolbar>
                    </Col>
                </ Row >
            </span>
        );
    }
});

module.exports = MaticniPodaciForm;