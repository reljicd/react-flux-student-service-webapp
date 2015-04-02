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
 *
 *    *  @param {number} defaultDate - js Date object
 */
var LabelAndDateTimePicker = React.createClass({

    getInitialState: function () {
        return {
            value: this.props.defaultDate ?
                this.props.defaultDate
                :
                new Date() // show todays date if defaultDate is not passed to component
        };
    },

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
                        <DateTimePicker format={"yyyy-MM-dd"} time={false} defaultValue={this.state.value} onSelect={this._onSelect} />
                    </Col>
                </Row>
            </span>
        );
    },

    _onSelect: function (value) {
        //console.log("Selected date: " + JSON.stringify(value) + ' and formated: ' + this.getFormatedDate(value));
        this.setState({
            value: value
        });

        if (this.props.onUserInput) {
            this.props.onUserInput(this.getFormatedDate(value));
        } else {
            console.log("onUserInput not defined");
        }
    },

    getFormatedDate: function (rawdate) {
        var month = rawdate.getMonth() + 1;
        return rawdate.getFullYear() + '-' + month + '-' + rawdate.getDate();
    }

});


module.exports = LabelAndDateTimePicker;