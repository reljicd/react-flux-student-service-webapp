/**
 * Created by reljicd on 4/1/15.
 */

module.exports = {

    convertRawNacinFinansiranja: function (rawNacinFinansiranja) {
        return {
            dugi_naziv: rawNacinFinansiranja.dugi_naziv,
            id: rawNacinFinansiranja.id,
            skraceni_naziv: rawNacinFinansiranja.skraceni_naziv
        };
    }

};