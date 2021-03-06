/**
 * Created by Dusan on 3/29/2015.
 */

var React = require('react');
var ReactBootstrap = require('react-bootstrap'),
    Row = ReactBootstrap.Row,
    Input = ReactBootstrap.Input,
    Col = ReactBootstrap.Col;

/**
 * ******************************
 *   *** Combined Label and Disabled Input Text Component ***
 *
 *  Helper Component
 *
 *  @param {string} label
 *  @param {string} inputTextValue
 *  @param {boolean} enabled - Pass *true* if you want to enable Input Text
 *  @param {boolean} narrow [narrow=wideInputText] - Pass *true* if you want to narrow it
 */
var LabelAndDisabledInputText = React.createClass({

    render: function () {
        var labelText = this.props.label;
        var inputTextValue = this.props.inputTextValue;
        var enabled = this.props.enabled ? true : false;
        var narrowOrWideClassName = this.props.narrow ? 'narrowInputText' : 'wideInputText';

        return (
            <Row>
                <Col md={5}>
                    <p className='textAllignedRight'>{labelText}</p>
                </Col>
                <Col md={7}>
                    <Input type='text' value={inputTextValue} className={narrowOrWideClassName} disabled={!enabled}/>
                </Col>
            </Row>
        );
    }
});

module.exports = LabelAndDisabledInputText;
