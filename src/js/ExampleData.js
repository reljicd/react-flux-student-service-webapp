/**
 * Created by Dusan on 3/29/2015.
 */

/**
 * ******************************
 *   *** Static Example Data ***
 */
module.exports = {

    init: function () {
        localStorage.clear();
        localStorage.setItem('students', JSON.stringify([
            {
                "broj_indeksa": "2009/0430",
                "id": 30,
                "ime": "Dusan",
                "prezime": "Perkovic"
            }, {
                "broj_indeksa": "2011/0052",
                "id": 34,
                "ime": "Joksic",
                "prezime": "Aleksandar"
            }, {
                "broj_indeksa": "2008/0465",
                "id": 28,
                "ime": "Miladin",
                "prezime": "Radovic"
            }, {
                "broj_indeksa": "2010/0430",
                "id": 31,
                "ime": "Boris",
                "prezime": "Suslov"
            }, {
                "broj_indeksa": "2009/0028",
                "id": 29,
                "ime": "Marko",
                "prezime": "Vukasinovic"
            }, {
                "broj_indeksa": "2010/0435",
                "id": 33,
                "ime": "Milan",
                "prezime": "Stojkovic"
            }, {
                "broj_indeksa": "2011/0213",
                "id": 35,
                "ime": "Milan",
                "prezime": "Dzeletovic"
            }, {
                "broj_indeksa": "2010/0379",
                "id": 32,
                "ime": "Marko",
                "prezime": "Trailovic"
            }, {
                "broj_indeksa": "2011/0122",
                "id": 36,
                "ime": "Stefan",
                "prezime": "Radovic"
            }, {
                "broj_indeksa": "2007/0120",
                "id": 27,
                "ime": "Stefan",
                "prezime": "Vukovic"
            }
        ]));
    }

};