/**
 * Created by Dusan on 3/29/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel,
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');

/**
 * ******************************
 *   *** Left Form on Maticni Podaci section of the Student Page ***
 */
var MaticniPodaciLeftForm = React.createClass({

    render: function () {
        return (
            <Panel id='maticniPodaciLeftFormPanel'>
                <h4>Student</h4>
                <LabelAndDisabledInputText label='Ime' inputTextValue=''/>
                <LabelAndDisabledInputText label='Prezime' inputTextValue=''/>
                <LabelAndDisabledInputText label='Srednje Ime' inputTextValue=''/>
                <Row>
                    <Col md={5}>
                        <p className='textAllignedRightSpecial'>Datum rodjenja</p>
                        <p className='textAllignedRightSpecial'>JMBG</p>
                        <p className='textAllignedRightSpecial'>Broj L.K.</p>
                        <p className='textAllignedRightSpecial'>Broj pasosa</p>
                        <p className='textAllignedRightSpecial'>Mobilni</p>
                    </Col>
                    <Col md={3}>
                        <Input type='text' className='narrowInputText' disabled/>
                        <Input type='text' className='narrowInputText' disabled/>
                        <Input type='text' className='narrowInputText' disabled/>
                        <Input type='text' className='narrowInputText' disabled/>
                        <Input type='text' className='narrowInputText' disabled/>
                    </Col>
                    <Col md={4}>
                        <Panel className='polPanel'>
                        Pol
                            <Input type='radio' label='Muski' name='optionsRadios'  />
                            <Input type='radio' label='Zenski' name='optionsRadios' checked  />
                        </Panel>
                        <Input type='checkbox' label='Stranac' />
                        <Input type='checkbox' label='Zaposlen' />
                    </Col>
                </Row>
                <LabelAndDisabledInputText label='Ser. br. indeksa' inputTextValue=''/>
                <LabelAndDisabledInputText label='E-posta' inputTextValue=''/>
                <LabelAndDisabledInputText label='Mesto rodj.' inputTextValue=''/>
                <LabelAndDisabledInputText label='Opstina rodj.' inputTextValue=''/>
            </Panel>
        );
    }
});

module.exports = MaticniPodaciLeftForm;