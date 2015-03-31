/**
 * Created by reljicd on 3/31/15.
 */

module.exports = {

    convertRawStudent: function(rawStudent) {
        return {
            broj_indeksa: rawStudent.broj_indeksa,
            id: rawStudent.id,
            ime: rawStudent.ime,
            prezime: rawStudent.prezime
        };
    }

};