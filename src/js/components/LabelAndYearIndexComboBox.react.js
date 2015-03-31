/**
 * Created by Dusan on 3/30/2015.
 */

var React = require('react');
var Select = require('react-select');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;
//var ReactWidgets = require('react-widgets'),
//    Combobox = ReactWidgets.Combobox;

var LabelAndYearIndexComboBox = React.createClass({

    render: function () {
        //var colors = ['orange', 'red', 'blue', 'purple'];
        var options = [
            {value: 'onee', label: 'Onee'},
            {value: 'two', label: 'Two'}
        ];

        return (
            <span>
                <Row>
                    <Col md={2}>
                        <p >Indeks</p>
                    </Col>
                    <Col md={5} id='yearComboBoxCol' name='year' placeholder='year'>
                        <Select options={options}/>
                    </Col>
                    <Col md={5} id='indexComboBoxCol'>
                        <Select options={options}/>
                    </Col>
                </Row>
            </span>
        );
    }
});

module.exports = LabelAndYearIndexComboBox;