/**
 * Created by reljicd on 3/30/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;
var ReactWidgets = require('react-widgets'),
    Combobox = ReactWidgets.Combobox;

var LabelAndComboBox = React.createClass({

    render: function () {

        var colors = ['orange', 'red', 'blue', 'purple'];

        var labelText = this.props.label;

        return (
            <span>
                <Row className='labelAndDateTimePickerRow'>
                    <Col md={3}>
                        <p className='labelAndDateTimePickerText'>
                            <b>{labelText}</b>
                        </p>
                    </Col>
                    <Col md={9}>
                        <Combobox defaultValue={"orange"} data={colors}/>
                    </Col>
                </Row>
            </span>
        );
    }
});

module.exports = LabelAndComboBox;