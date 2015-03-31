/**
 * Created by reljicd on 3/31/15.
 */

var React = require('react');

/**
 * ******************************
 *   *** Default Page Component ***
 *
 *   Page to show whenever router hit unknown route
 */
var DefaultPage = React.createClass({
    render: function () {
        return (
            <div className="container">
                <h1>Empty Page</h1>
            </div>
        );
    }
});

module.exports = DefaultPage;
