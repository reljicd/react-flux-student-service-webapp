/**
 * Created by reljicd on 3/30/15.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel,
    Col = ReactBootstrap.Col,
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Table = ReactBootstrap.Table;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');

/**
 * ******************************
 *   *** Godina i Ispiti Table of Kratak Pregled section of the Student Page ***
 *
 *  Helper Component
 *
 *  @param {string} godina - Pass number *n* of the year
 */
var GodinaIspitiTable = React.createClass({

    render: function () {
        var godina = this.props.godina;
        var godinaLabel;

        switch (this.props.godina) {

            case '1':
                godinaLabel = 'Prva';
                break;
            case '2':
                godinaLabel = 'Druga';
                break;
            case '3':
                godinaLabel = 'Treca';
                break;
            case '4':
                godinaLabel = 'Cetvrta';
                break;
            default:
                godinaLabel = '';
                break;
        }

        return (
            <Panel id='godinaIspitiPanel'>
                <h4>{godinaLabel} godina</h4>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Predmet</th>
                            <th>E</th>
                            <th>O</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>T</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>T</td>
                        </tr>
                    </tbody>
                </Table>
                <span className='bottom'>
                    <hr />
                    <Col md={6}>
                        <p className='textAllignedLeftSpecial'>Ukupno</p>
                        <p className='textAllignedLeftSpecial'>Pol. ispita</p>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <Input type='text' className='superNarrowInputText' disabled/>
                            </Col>
                            <Col md={6}>
                                <Input type='text' className='superNarrowInputText' disabled/>
                            </Col>
                        </Row>
                        <Input type='text' className='superNarrowInputText' id='polIspitaRightAlignedInputText' disabled/>
                    </Col>
                </span>
            </Panel>
        );
    }
});

module.exports = GodinaIspitiTable;