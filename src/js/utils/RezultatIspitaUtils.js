/**
 * Created by reljicd on 4/1/15.
 */

var GodinaStudijaUtils = require('../utils/GodinaStudijaUtils');
var PredmetUtils = require('../utils/PredmetUtils');
var RokUtils = require('../utils/RokUtils');
var StudentUtils = require('../utils/StudentUtils');

module.exports = {

    convertRawRezultatIspita: function (rawRezultatIspita) {
        return {
            datum_polaganja: rawRezultatIspita.datum_polaganja,
            godinaStudija: GodinaStudijaUtils.convertRawGodinaStudija(rawRezultatIspita.godinaStudija),
            id: rawRezultatIspita.id,
            ocena: rawRezultatIspita.ocena,
            predmet: PredmetUtils.convertRawPredmet(rawRezultatIspita.predmet),
            rok: RokUtils.convertRawRok(rawRezultatIspita.rok),
            student: StudentUtils.convertRawStudent(rawRezultatIspita.student)
        };
    }

};