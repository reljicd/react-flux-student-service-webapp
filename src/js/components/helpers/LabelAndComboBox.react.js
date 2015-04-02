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

/**
 * ******************************
 *   *** Autocomplete control ***
 *
 *   Combined Label and custom Combobox Component
 *
 *  @param {object} rawData - raw data object to show in combobox; should be converted to array;
 *                            every property object of rawData object should contain properties 'id' and 'dugi_naziv'
 *  @param {number} defaultValueId - id of default value in *rawData*
 */
var LabelAndComboBox = React.createClass({

    getInitialState: function () {
        return {
            value: this.props.defaultValueId ?
                this.props.data[this.props.defaultValueId]
                :
                '' // show nothing in combobox if defaultValueId is not passed to component
        };
    },

    render: function () {

        var rawData = this.props.data;

        var data = [];

        // make an array of rawData (object)
        for (var rawDataId in rawData) {
            data.push(
                rawData[rawDataId]
            );
        }

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
                        <Combobox data={data} valueField='id' textField='dugi_naziv' defaultValue={this.state.value} onSelect={this._onSelect} />
                    </Col>
                </Row>
            </span>
        );
    },

    _onSelect: function (value) {
        console.log("Selected: " + JSON.stringify(value));
        this.setState({
            value: value
        });

        if (this.props.onUserInput) {
            this.props.onUserInput(value);
        } else {
            console.log("onUserInput not defined");
        }
    }
});

module.exports = LabelAndComboBox;