/**
 * Created by Dusan on 3/29/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;

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
