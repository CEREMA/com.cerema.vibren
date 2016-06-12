Mesures = {
    getAll: function (o, cb) {
        Mesures.using('db').model('vibren', 'select * from mesures', cb);
    },

    get: function (o, cb) {
        var vibren = Mesures.using('db').using('vibren');

        vibren.mesures.findAll({
            where: {
                acquisitionId: o
            }
        }).then(function (records) {
            cb(records);
        });
    }
}

module.exports = Mesures;