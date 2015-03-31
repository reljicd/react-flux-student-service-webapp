/**
 * Created by Dusan on 3/30/2015.
 */

var React = require('react');
var Select = require('react-select');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;
var StudentStore = require('../../stores/StudentStore');
var StudentActionCreators = require('../../actions/StudentActionCreators');

/**
 * ******************************
 *   *** Autocomplete control for student searching ***
 *
 *   Combined Label and custom Search Component
 *   Can be searched by *broj_indeksa*, *ime* or *prezime*
 */
var LabelAndYearIndexComboBox = React.createClass({

    render: function () {

        var getOptions = function(input, callback) {
            setTimeout(function() {
                var students = StudentStore.getAll();
                var options = [];
                if(input.length >= 3) { //only search for reasults if we entered more than 3 characters
                    for (var studentId in students) {
                        var brojIndeksa = students[studentId].id;
                        var imePrezime = students[studentId].broj_indeksa + ' ' + students[studentId].ime + ' ' + students[studentId].prezime;
                        options.push({value: brojIndeksa, label: imePrezime});
                        if (options.count >= 5) break; //break after 5 results
                    }
                }
                callback(null, {
                    options: options,
                    // CAREFUL! Only set this to true when there are no more options,
                    // or more specific queries will not be sent to the server.
                    complete: false
                });
            }, 500);
        };

        return (
            <span>
                <Row>
                    <Col md={3}>
                        <p className='textAllignedRight'>Indeks</p>
                    </Col>
                    <Col md={9}>
                        <Select asyncOptions={getOptions} matchProp='label' onChange={this._onChange}/>
                    </Col>
                </Row>
            </span>
        );
    },

    /**
     * Event handler for selecting Student
     */
    _onChange: function (studentId) {
        StudentActionCreators.changeStudent(studentId);
    }

});

module.exports = LabelAndYearIndexComboBox;