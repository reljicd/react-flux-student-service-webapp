/**
 * Created by reljicd on 3/30/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Table = ReactBootstrap.Table;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');

/**
 * ******************************
 *   *** Upisi Table of Upisi section of the Student Page ***
 *
 *      @param {object} upisiForChosenStudent
 */
var UpisiTable = React.createClass({

    render: function () {

        var upisiForChosenStudent = this.props.upisiForChosenStudent;
        var rows = [];

        for (var upisiForChosenStudentId in upisiForChosenStudent) {
            rows.push(
                <tr>
                    <td>{upisiForChosenStudent[upisiForChosenStudentId].godinaStudija.skraceni_naziv}</td>
                    <td>{upisiForChosenStudent[upisiForChosenStudentId].skolskaGodina.skraceni_naziv}</td>
                    <td>B</td>
                    <td>{upisiForChosenStudent[upisiForChosenStudentId].studijskiProgram.skraceni_naziv}</td>
                    <td>{upisiForChosenStudent[upisiForChosenStudentId].datum_upisa}</td>
                    <td>1</td>
                    <td>standardno</td>
                    <td></td>
                    <td>10</td>
                    <td></td>
                    <td></td>
                </tr>
            )
        }

        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>God. studija</th>
                        <th>Sk. God.</th>
                        <th>St. up.</th>
                        <th>Profil</th>
                        <th>Datum</th>
                        <th>K.p.</th>
                        <th>Nacin upisa</th>
                        <th>ESPB n</th>
                        <th>ESPB o</th>
                        <th>Vazi do</th>
                        <th>Napomena</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        );
    }
});

module.exports = UpisiTable;