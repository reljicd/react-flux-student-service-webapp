/**
 * Created by reljicd on 4/1/15.
 */

module.exports = {

    convertRawPredmet: function (rawPredmet) {
        return {
            dugi_naziv: rawPredmet.dugi_naziv,
            espb: rawPredmet.espb,
            id: rawPredmet.id,
            skraceni_naziv: rawPredmet.skraceni_naziv
        };
    }

};