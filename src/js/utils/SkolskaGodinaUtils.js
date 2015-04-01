/**
 * Created by reljicd on 4/1/15.
 */

module.exports = {

    convertRawSkolskaGodina: function (rawSkolskaGodina) {
        return {
            dugi_naziv: rawSkolskaGodina.dugi_naziv,
            id: rawSkolskaGodina.id,
            skraceni_naziv: rawSkolskaGodina.skraceni_naziv
        };
    }

};