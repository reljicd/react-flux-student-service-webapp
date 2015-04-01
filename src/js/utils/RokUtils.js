/**
 * Created by reljicd on 4/1/15.
 */

module.exports = {

    convertRawRok: function (rawRok) {
        return {
            dugi_naziv: rawRok.dugi_naziv,
            id: rawRok.id,
            skraceni_naziv: rawRok.skraceni_naziv
        };
    }

};