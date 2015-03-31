/**
 * Created by reljicd on 3/31/15.
 */

var ServerActionCreators = require('../actions/ServerActionCreators');

// !!! Please Note !!!
// We are using localStorage as an example, but in a real-world scenario, this
// would involve XMLHttpRequest, or perhaps a newer client-server protocol.
// The function signatures below might be similar to what you would build, but
// the contents of the functions are just trying to simulate client-server
// communication and server-side processing.

module.exports = {

    getAllStudents: function() {
        // simulate retrieving data from a database
        var rawStudents = JSON.parse(localStorage.getItem('students'));

        // simulate success callback
        ServerActionCreators.receiveAllStudents(rawStudents);
    }

};