/**
 * Created by reljicd on 3/30/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;
var ReactWidgets = require('react-widgets'),
    DateTimePicker = ReactWidgets.DateTimePicker;

/**
 * ******************************
 *   *** Combined Label and custom DateTime Component ***
 */
var LabelAndDateTimePicker = React.createClass({

    render: function () {
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
                        <DateTimePicker time={false} defaultValue={new Date()} />
                    </Col>
                </Row>
            </span>
        );
    }
});

module.exports = LabelAndDateTimePicker;