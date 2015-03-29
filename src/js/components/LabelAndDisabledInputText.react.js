/**
 * Created by Dusan on 3/29/2015.
 */

var React = require('react');
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Row = require('react-bootstrap').Row;

var LabelAndDisabledInputText = React.createClass({

    render: function () {
        var label = this.props.label;
        var inputTextValue = this.props.inputTextValue;

        return (
            <Row>
                <Col md={5}>
                    <p className='textAllignedRight'>{label}</p>
                </Col>
                <Col md={7}>
                    <Input type='text' value={inputTextValue} className='wideInputText' disabled/>
                </Col>
            </Row>
        );
    }
});

module.exports = LabelAndDisabledInputText;
