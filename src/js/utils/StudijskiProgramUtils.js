/**
 * Created by reljicd on 4/1/15.
 */

module.exports = {

    convertRawStudijskiProgram: function (rawStudijskiProgram) {
        return {
            dugi_naziv: rawStudijskiProgram.dugi_naziv,
            id: rawStudijskiProgram.id,
            skraceni_naziv: rawStudijskiProgram.skraceni_naziv
        };
    }

};