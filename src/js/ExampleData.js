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

        /**
         * ******************************
         *   *** Set *Student* Data ***
         */
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

        /**
         * ******************************
         *   *** Set *Predmet* Data ***
         */
        localStorage.setItem('predmets', JSON.stringify([{
            "dugi_naziv": "Engleski Jezik - nizi",
            "espb": 3,
            "id": 13,
            "skraceni_naziv": "SI1EJN"
        }, {
            "dugi_naziv": "Programiranje 1",
            "espb": 5,
            "id": 10,
            "skraceni_naziv": "SI1P1"
        }, {
            "dugi_naziv": "Praktikum iz koriscenja racunara",
            "espb": 2,
            "id": 8,
            "skraceni_naziv": "SI1PKR"
        }, {
            "dugi_naziv": "Praktikum iz prohgramiranja 1",
            "espb": 3,
            "id": 9,
            "skraceni_naziv": "SI1PP1"
        }, {
            "dugi_naziv": "Sociologija",
            "espb": 2,
            "id": 11,
            "skraceni_naziv": "SI1S"
        }, {
            "dugi_naziv": "Matematika 1",
            "espb": 5,
            "id": 12,
            "skraceni_naziv": "SI1M1"
        }, {
            "dugi_naziv": "Fizika",
            "espb": 5,
            "id": 7,
            "skraceni_naziv": "SI1F"
        }]));

        /**
         * ******************************
         *   *** Set *Godina Studija* Data ***
         */
        localStorage.setItem('godinaStudijas', JSON.stringify([{
            "dugi_naziv": "Druga godina",
            "id": 2,
            "skraceni_naziv": "druga"
        }, {
            "dugi_naziv": "Cetvrta godina",
            "id": 4,
            "skraceni_naziv": "cetvrta"
        }, {
            "dugi_naziv": "Treca godina",
            "id": 3,
            "skraceni_naziv": "treca"
        }, {
            "dugi_naziv": "Prva godina",
            "id": 1,
            "skraceni_naziv": "prva"
        }]));

        /**
         * ******************************
         *   *** Set *Rok* Data ***
         */
        localStorage.setItem('roks', JSON.stringify([{
            "dugi_naziv": "Septembar - 2012/13",
            "id": 18,
            "skraceni_naziv": "sep12/13"
        }, {
            "dugi_naziv": "Jun - 2012/13",
            "id": 16,
            "skraceni_naziv": "jun12/13"
        }, {
            "dugi_naziv": "Jul - 2012/13",
            "id": 17,
            "skraceni_naziv": "jul12/13"
        }, {
            "dugi_naziv": "Februar - 2012/13",
            "id": 15,
            "skraceni_naziv": "feb12/13"
        }, {
            "dugi_naziv": "Januar - 2012/13",
            "id": 14,
            "skraceni_naziv": "jan12/13"
        }]));

        /**
         * ******************************
         *   *** Set *Nacin Finansiranja* Data ***
         */
        localStorage.setItem('nacinFinansiranjas', JSON.stringify([{
            "dugi_naziv": "Finansiranje iz budzeta",
            "id": 5,
            "skraceni_naziv": "Standardno"
        }, {
            "dugi_naziv": "Samofinansiranje",
            "id": 6,
            "skraceni_naziv": "Sopstveno"
        }]));

        /**
         * ******************************
         *   *** Set *Skolska Godina* Data ***
         */
        localStorage.setItem('skolskaGodinas', JSON.stringify([{
            "dugi_naziv": "2013/2014",
            "id": 25,
            "skraceni_naziv": "13/14"
        }, {
            "dugi_naziv": "2012/2013",
            "id": 24,
            "skraceni_naziv": "12/13"
        }, {
            "dugi_naziv": "2011/2012",
            "id": 23,
            "skraceni_naziv": "11/12"
        }, {
            "dugi_naziv": "2014/2015",
            "id": 26,
            "skraceni_naziv": "14/15"
        }, {
            "dugi_naziv": "2010/2011",
            "id": 22,
            "skraceni_naziv": "10/11"
        }, {
            "dugi_naziv": "2007/2008",
            "id": 19,
            "skraceni_naziv": "07/08"
        }, {
            "dugi_naziv": "2008/2009",
            "id": 20,
            "skraceni_naziv": "08/09"
        }, {
            "dugi_naziv": "2009/2010",
            "id": 21,
            "skraceni_naziv": "09/10"
        }]));

        /**
         * ******************************
         *   *** Set *Studijski Program* Data ***
         */
        localStorage.setItem('studijskiPrograms', JSON.stringify([{
            "dugi_naziv": "Elektrotehnika i Racunarstvo",
            "id": 37,
            "skraceni_naziv": "ER"
        }, {
            "dugi_naziv": "Softversko Inzenjerstvo",
            "id": 38,
            "skraceni_naziv": "SI"
        }]));

        /**
         * ******************************
         *   *** Set *Upis* Data ***
         */
        localStorage.setItem('upiss', JSON.stringify([{
            "datum_upisa": "2012-06-05",
            "godinaStudija": {"dugi_naziv": "Druga godina", "id": 2, "skraceni_naziv": "druga"},
            "id": 56,
            "nacinFinansiranja": {"dugi_naziv": "Samofinansiranje", "id": 6, "skraceni_naziv": "Sopstveno"},
            "skolskaGodina": {"dugi_naziv": "2012/2013", "id": 24, "skraceni_naziv": "12/13"},
            "student": {"broj_indeksa": "2010/0379", "id": 32, "ime": "Marko", "prezime": "Trailovic"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2008-06-05",
            "godinaStudija": {"dugi_naziv": "Druga godina", "id": 2, "skraceni_naziv": "druga"},
            "id": 52,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2008/2009", "id": 20, "skraceni_naziv": "08/09"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2007-06-05",
            "godinaStudija": {"dugi_naziv": "Prva godina", "id": 1, "skraceni_naziv": "prva"},
            "id": 51,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2007/2008", "id": 19, "skraceni_naziv": "07/08"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2012-06-05",
            "godinaStudija": {"dugi_naziv": "Treca godina", "id": 3, "skraceni_naziv": "treca"},
            "id": 57,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2012/2013", "id": 24, "skraceni_naziv": "12/13"},
            "student": {"broj_indeksa": "2008/0465", "id": 28, "ime": "Miladin", "prezime": "Radovic"},
            "studijskiProgram": {"dugi_naziv": "Softversko Inzenjerstvo", "id": 38, "skraceni_naziv": "SI"}
        }, {
            "datum_upisa": "2012-06-05",
            "godinaStudija": {"dugi_naziv": "Prva godina", "id": 1, "skraceni_naziv": "prva"},
            "id": 59,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2012/2013", "id": 24, "skraceni_naziv": "12/13"},
            "student": {"broj_indeksa": "2009/0430", "id": 30, "ime": "Dusan", "prezime": "Perkovic"},
            "studijskiProgram": {"dugi_naziv": "Softversko Inzenjerstvo", "id": 38, "skraceni_naziv": "SI"}
        }, {
            "datum_upisa": "2012-06-05",
            "godinaStudija": {"dugi_naziv": "Druga godina", "id": 2, "skraceni_naziv": "druga"},
            "id": 60,
            "nacinFinansiranja": {"dugi_naziv": "Samofinansiranje", "id": 6, "skraceni_naziv": "Sopstveno"},
            "skolskaGodina": {"dugi_naziv": "2012/2013", "id": 24, "skraceni_naziv": "12/13"},
            "student": {"broj_indeksa": "2010/0430", "id": 31, "ime": "Boris", "prezime": "Suslov"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2009-06-05",
            "godinaStudija": {"dugi_naziv": "Treca godina", "id": 3, "skraceni_naziv": "treca"},
            "id": 53,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2009/2010", "id": 21, "skraceni_naziv": "09/10"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2010-06-05",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 54,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2010/2011", "id": 22, "skraceni_naziv": "10/11"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2012-06-05",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 58,
            "nacinFinansiranja": {"dugi_naziv": "Samofinansiranje", "id": 6, "skraceni_naziv": "Sopstveno"},
            "skolskaGodina": {"dugi_naziv": "2012/2013", "id": 24, "skraceni_naziv": "12/13"},
            "student": {"broj_indeksa": "2009/0028", "id": 29, "ime": "Marko", "prezime": "Vukasinovic"},
            "studijskiProgram": {"dugi_naziv": "Elektrotehnika i Racunarstvo", "id": 37, "skraceni_naziv": "ER"}
        }, {
            "datum_upisa": "2012-06-05",
            "godinaStudija": {"dugi_naziv": "Prva godina", "id": 1, "skraceni_naziv": "prva"},
            "id": 55,
            "nacinFinansiranja": {"dugi_naziv": "Finansiranje iz budzeta", "id": 5, "skraceni_naziv": "Standardno"},
            "skolskaGodina": {"dugi_naziv": "2012/2013", "id": 24, "skraceni_naziv": "12/13"},
            "student": {"broj_indeksa": "2011/0213", "id": 35, "ime": "Milan", "prezime": "Dzeletovic"},
            "studijskiProgram": {"dugi_naziv": "Softversko Inzenjerstvo", "id": 38, "skraceni_naziv": "SI"}
        }]));

        /**
         * ******************************
         *   *** Set *Rezultat Ispita* Data ***
         */
        localStorage.setItem('rezultatIspitas', JSON.stringify([{
            "datum_polaganja": "2012-05-16",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 43,
            "ocena": 10,
            "predmet": {"dugi_naziv": "Sociologija", "espb": 2, "id": 11, "skraceni_naziv": "SI1S"},
            "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2012-09-14",
            "godinaStudija": {"dugi_naziv": "Druga godina", "id": 2, "skraceni_naziv": "druga"},
            "id": 50,
            "ocena": 8,
            "predmet": {"dugi_naziv": "Sociologija", "espb": 2, "id": 11, "skraceni_naziv": "SI1S"},
            "rok": {"dugi_naziv": "Septembar - 2012/13", "id": 18, "skraceni_naziv": "sep12/13"},
            "student": {"broj_indeksa": "2010/0430", "id": 31, "ime": "Boris", "prezime": "Suslov"}
        }, {
            "datum_polaganja": "2007-01-05",
            "godinaStudija": {"dugi_naziv": "Prva godina", "id": 1, "skraceni_naziv": "prva"},
            "id": 39,
            "ocena": 6,
            "predmet": {"dugi_naziv": "Fizika", "espb": 5, "id": 7, "skraceni_naziv": "SI1F"},
            "rok": {"dugi_naziv": "Januar - 2012/13", "id": 14, "skraceni_naziv": "jan12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2008-02-07",
            "godinaStudija": {"dugi_naziv": "Druga godina", "id": 2, "skraceni_naziv": "druga"},
            "id": 40,
            "ocena": 7,
            "predmet": {
                "dugi_naziv": "Praktikum iz koriscenja racunara",
                "espb": 2,
                "id": 8,
                "skraceni_naziv": "SI1PKR"
            },
            "rok": {"dugi_naziv": "Februar - 2012/13", "id": 15, "skraceni_naziv": "feb12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2012-06-17",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 44,
            "ocena": 6,
            "predmet": {"dugi_naziv": "Fizika", "espb": 5, "id": 7, "skraceni_naziv": "SI1F"},
            "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2012-06-10",
            "godinaStudija": {"dugi_naziv": "Treca godina", "id": 3, "skraceni_naziv": "treca"},
            "id": 48,
            "ocena": 8,
            "predmet": {"dugi_naziv": "Praktikum iz prohgramiranja 1", "espb": 3, "id": 9, "skraceni_naziv": "SI1PP1"},
            "rok": {"dugi_naziv": "Jun - 2012/13", "id": 16, "skraceni_naziv": "jun12/13"},
            "student": {"broj_indeksa": "2009/0028", "id": 29, "ime": "Marko", "prezime": "Vukasinovic"}
        }, {
            "datum_polaganja": "2012-02-08",
            "godinaStudija": {"dugi_naziv": "Druga godina", "id": 2, "skraceni_naziv": "druga"},
            "id": 47,
            "ocena": 8,
            "predmet": {
                "dugi_naziv": "Praktikum iz koriscenja racunara",
                "espb": 2,
                "id": 8,
                "skraceni_naziv": "SI1PKR"
            },
            "rok": {"dugi_naziv": "Februar - 2012/13", "id": 15, "skraceni_naziv": "feb12/13"},
            "student": {"broj_indeksa": "2008/0465", "id": 28, "ime": "Miladin", "prezime": "Radovic"}
        }, {
            "datum_polaganja": "2012-08-20",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 46,
            "ocena": 8,
            "predmet": {"dugi_naziv": "Engleski Jezik - nizi", "espb": 3, "id": 13, "skraceni_naziv": "SI1EJN"},
            "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2009-03-13",
            "godinaStudija": {"dugi_naziv": "Treca godina", "id": 3, "skraceni_naziv": "treca"},
            "id": 41,
            "ocena": 8,
            "predmet": {"dugi_naziv": "Praktikum iz prohgramiranja 1", "espb": 3, "id": 9, "skraceni_naziv": "SI1PP1"},
            "rok": {"dugi_naziv": "Jun - 2012/13", "id": 16, "skraceni_naziv": "jun12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2012-07-18",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 45,
            "ocena": 7,
            "predmet": {"dugi_naziv": "Matematika 1", "espb": 5, "id": 12, "skraceni_naziv": "SI1M1"},
            "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }, {
            "datum_polaganja": "2012-07-12",
            "godinaStudija": {"dugi_naziv": "Prva godina", "id": 1, "skraceni_naziv": "prva"},
            "id": 49,
            "ocena": 8,
            "predmet": {"dugi_naziv": "Programiranje 1", "espb": 5, "id": 10, "skraceni_naziv": "SI1P1"},
            "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
            "student": {"broj_indeksa": "2009/0430", "id": 30, "ime": "Dusan", "prezime": "Perkovic"}
        }, {
            "datum_polaganja": "2010-04-15",
            "godinaStudija": {"dugi_naziv": "Cetvrta godina", "id": 4, "skraceni_naziv": "cetvrta"},
            "id": 42,
            "ocena": 9,
            "predmet": {"dugi_naziv": "Programiranje 1", "espb": 5, "id": 10, "skraceni_naziv": "SI1P1"},
            "rok": {"dugi_naziv": "Jul - 2012/13", "id": 17, "skraceni_naziv": "jul12/13"},
            "student": {"broj_indeksa": "2007/0120", "id": 27, "ime": "Stefan", "prezime": "Vukovic"}
        }]));

    }

};