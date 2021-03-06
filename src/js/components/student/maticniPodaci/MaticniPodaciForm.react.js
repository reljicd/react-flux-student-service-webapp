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
var MaticniPodaciLeftForm = require('./MaticniPodaciLeftForm.react.js');
var MaticniPodaciRightForm = require('./MaticniPodaciRightForm.react.js');
var StudentStore = require('../../../stores/StudentStore');

/**
 * ******************************
 *   *** Maticni Podaci section of the Student Page ***
 */

function getStateFromStores() {
    return {
        student: StudentStore.get(StudentStore.getChosenStudentID())
    };
}

var MaticniPodaciForm = React.createClass({

    getInitialState: function () {
        return getStateFromStores();
    },

    componentDidMount: function () {
        StudentStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        StudentStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <span>
                <Row>
                    <Col md={5}>
                        <MaticniPodaciLeftForm student={this.state.student}/>
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
                            <Button bsStyle='primary'>
                                <Glyphicon glyph='ok' />
                            Azuriraj</Button>
                            <Button bsStyle='primary'>
                                <Glyphicon glyph='remove' />
                            Izlaz</Button>
                        </ButtonToolbar>
                    </Col>
                </ Row >
            </span>
        );
    },

    /**
     * Event handler for 'change' events coming from the StudentStore
     */
    _onChange: function () {
        this.setState(getStateFromStores());
    }
});

module.exports = MaticniPodaciForm;