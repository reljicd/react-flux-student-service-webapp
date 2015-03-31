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
 */
var UpisiTable = React.createClass({

    render: function () {
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
});

module.exports = UpisiTable;