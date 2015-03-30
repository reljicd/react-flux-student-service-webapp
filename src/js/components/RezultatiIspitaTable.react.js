/**
 * Created by reljicd on 3/30/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Table = ReactBootstrap.Table;
var LabelAndDisabledInputText = require('../components/LabelAndDisabledInputText.react');

var RezultatiIspitaTable = React.createClass({

    render: function () {
        return (
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Akronim</th>
                        <th>Predmet</th>
                        <th>T.</th>
                        <th>Rok</th>
                        <th>O.</th>
                        <th>Nastavnik</th>
                        <th>E.</th>
                        <th>P.</th>
                        <th>Dat. pol.</th>
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
                    </tr>
                </tbody>
            </Table>
        );
    }
});

module.exports = RezultatiIspitaTable;