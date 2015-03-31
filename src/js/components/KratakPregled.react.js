/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Button = ReactBootstrap.Button,
    Panel = ReactBootstrap.Panel,
    Glyphicon = ReactBootstrap.Glyphicon,
    Col = ReactBootstrap.Col;
var LabelAndDisabledInputText = require('../components/LabelAndDisabledInputText.react');
var GodinaIspitiTable = require('../components/GodinaIspitiTable.react');

/**
 * ******************************
 *   *** Kratak Pregled section of the Student Page ***
 */
var KratakPregled = React.createClass({

    render: function () {
        return (
            <span>
                < Row >
                    <Col md={3}>
                        <GodinaIspitiTable godina='1'/>
                    </Col>
                    <Col md={3}>
                        <GodinaIspitiTable godina='2'/>
                    </Col>
                    <Col md={3}>
                        <GodinaIspitiTable godina='3'/>
                    </Col>
                    <Col md={3}>
                        <GodinaIspitiTable godina='4'/>
                    </Col>
                </Row>
                < Row >
                    <Col md={10}>
                        <Panel>
                            <Col md={4}>
                                <LabelAndDisabledInputText label='ESPB' inputTextValue='' narrow/>
                                <LabelAndDisabledInputText label='Ukupno ESPB' inputTextValue='' narrow/>
                            </Col>
                            <Col md={4}>
                                <LabelAndDisabledInputText label='Prosecna ocena' inputTextValue='' narrow/>
                                <LabelAndDisabledInputText label='Uk. pros. ocena' inputTextValue='' narrow/>
                            </Col>
                            <Col md={4}>
                                <LabelAndDisabledInputText label='Polozeno ispita' inputTextValue='' narrow/>
                            </Col>
                        </Panel>
                    </Col>
                    <Col md={2}>
                        <Button bsStyle='primary' id='kratakPregledIzlazButton'>
                            <Glyphicon glyph='remove' /> Izlaz</Button>
                    </Col>
                </ Row >
            </span>
        );
    }
});

module.exports = KratakPregled;