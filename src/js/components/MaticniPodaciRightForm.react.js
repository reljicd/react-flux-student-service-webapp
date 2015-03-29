/**
 * Created by Dusan on 3/29/2015.
 */

var React = require('react');
var Panel = require('react-bootstrap').Panel;
var Nav = require('react-bootstrap').Nav;
var LabelAndDisabledInputText = require('../components/LabelAndDisabledInputText.react');

var MaticniPodaciRightForm = React.createClass({

    render: function () {
        return (
            <Panel id='maticniPodaciRightFormPanel'>
                <h4>Stalna adresa i mesto stanovanja</h4>
                <LabelAndDisabledInputText label='Adresa' inputTextValue=''/>
                <LabelAndDisabledInputText label='Mesto' inputTextValue=''/>
                <LabelAndDisabledInputText label='Opstina' inputTextValue=''/>
                <LabelAndDisabledInputText label='Drzava' inputTextValue=''/>
                <LabelAndDisabledInputText label='Telefon' inputTextValue=''/>
            </Panel>
        );
    }
});

module.exports = MaticniPodaciRightForm;