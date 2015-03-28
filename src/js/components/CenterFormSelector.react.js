/**
 * Created by Dusan on 3/28/2015.
 */

var React = require('react');
var MaticniPodaciForm = require('../components/MaticniPodaciForm.react');
var Upisi = require('../components/Upisi.react');
var RezultatiIspita = require('../components/RezultatiIspita.react');
var KratakPregled = require('../components/KratakPregled.react');

var CenterNavSelector = React.createClass({

    render: function () {

        var chosenForm;

        switch(this.props.chosenNavItem) {

            case 1:
                chosenForm = (
                    <MaticniPodaciForm />
                );
                break;

            case 3:
                chosenForm = (
                    <Upisi />
                );
                break;

            case 9:
                chosenForm = (
                    <RezultatiIspita />
                );
                break;

            case 13:
                chosenForm = (
                    <KratakPregled />
                );
                break;

            default:
                chosenForm = (
                    <h1>Default</h1>
                );
                break;
        }

        return chosenForm;
    }
});

module.exports = CenterNavSelector;