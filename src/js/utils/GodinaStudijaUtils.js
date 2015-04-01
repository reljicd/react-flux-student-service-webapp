/**
 * Created by reljicd on 4/1/15.
 */

module.exports = {

    convertRawGodinaStudija: function (rawGodinaStudija) {
        return {
            dugi_naziv: rawGodinaStudija.dugi_naziv,
            id: rawGodinaStudija.id,
            skraceni_naziv: rawGodinaStudija.skraceni_naziv
        };
    }

};