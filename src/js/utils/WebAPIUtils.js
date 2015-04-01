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
    },

    getAllPredmets: function() {
        // simulate retrieving data from a database
        var rawPredmets = JSON.parse(localStorage.getItem('predmets'));

        // simulate success callback
        ServerActionCreators.receiveAllPredmets(rawPredmets);
    },

    getAllGodinaStudijas: function() {
        // simulate retrieving data from a database
        var rawGodinaStudijas = JSON.parse(localStorage.getItem('godinaStudijas'));

        // simulate success callback
        ServerActionCreators.receiveAllGodinaStudijas(rawGodinaStudijas);
    },

    getAllRoks: function() {
        // simulate retrieving data from a database
        var rawRoks = JSON.parse(localStorage.getItem('roks'));

        // simulate success callback
        ServerActionCreators.receiveAllRoks(rawRoks);
    },

    getAllNacinFinansiranjas: function() {
        // simulate retrieving data from a database
        var rawNacinFinansiranjas = JSON.parse(localStorage.getItem('nacinFinansiranjas'));

        // simulate success callback
        ServerActionCreators.receiveAllNacinFinansiranjas(rawNacinFinansiranjas);
    },

    getAllSkolskaGodinas: function() {
        // simulate retrieving data from a database
        var rawSkolskaGodinas = JSON.parse(localStorage.getItem('skolskaGodinas'));

        // simulate success callback
        ServerActionCreators.receiveAllSkolskaGodinas(rawSkolskaGodinas);
    },

    getAllStudijskiPrograms: function() {
        // simulate retrieving data from a database
        var rawStudijskiPrograms = JSON.parse(localStorage.getItem('studijskiPrograms'));

        // simulate success callback
        ServerActionCreators.receiveAllStudijskiPrograms(rawStudijskiPrograms);
    },

    getAllUpiss: function() {
        // simulate retrieving data from a database
        var rawUpiss = JSON.parse(localStorage.getItem('upiss'));

        // simulate success callback
        ServerActionCreators.receiveAllUpiss(rawUpiss);
    },

    getAllRezultatIspitas: function() {
        // simulate retrieving data from a database
        var rawRezultatIspitas = JSON.parse(localStorage.getItem('rezultatIspitas'));

        // simulate success callback
        ServerActionCreators.receiveAllRezultatIspitas(rawRezultatIspitas);
    }

};