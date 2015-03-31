/**
 * Created by Dusan on 3/29/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Panel = ReactBootstrap.Panel;
var LabelAndDisabledInputText = require('../../helpers/LabelAndDisabledInputText.react.js');

/**
 * ******************************
 *   *** Right Form on Maticni Podaci section of the Student Page ***
 */
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