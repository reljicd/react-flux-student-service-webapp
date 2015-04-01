/**
 * Created by reljicd on 4/1/15.
 */

var GodinaStudijaUtils = require('../utils/GodinaStudijaUtils');
var NacinFinansiranjaUtils = require('../utils/NacinFinansiranjaUtils');
var SkolskaGodinaUtils = require('../utils/SkolskaGodinaUtils');
var StudentUtils = require('../utils/StudentUtils');
var StudijskiProgramUtils = require('../utils/StudijskiProgramUtils');

module.exports = {

    convertRawUpis: function (rawUpis) {
        return {
            datum_upisa: rawUpis.datum_upisa,
            godinaStudija: GodinaStudijaUtils.convertRawGodinaStudija(rawUpis.godinaStudija),
            id: rawUpis.id,
            nacinFinansiranja: NacinFinansiranjaUtils.convertRawNacinFinansiranja(rawUpis.nacinFinansiranja),
            skolskaGodina: SkolskaGodinaUtils.convertRawSkolskaGodina(rawUpis.skolskaGodina),
            student: StudentUtils.convertRawStudent(rawUpis.student),
            studijskiProgram: StudijskiProgramUtils.convertRawStudijskiProgram(rawUpis.studijskiProgram)
        };
    }

};