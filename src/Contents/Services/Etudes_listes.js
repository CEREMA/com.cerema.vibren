Etudes_listes = {
    getByEtude: function (o, cb) {
        var vibren = Etudes_listes.using('db').using('vibren');

        vibren.etudes_listes.findAll({
            where: {
                etudeId: o
            }
        }).then(function (records) {
            cb(records);
        });
    }
};

module.exports = Etudes_listes;
