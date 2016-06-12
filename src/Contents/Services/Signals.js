Signals = {
    getAll: function (o, cb) {
        Signals.using('db').model('vibren', 'select * from signal', cb);
    },

    get: function (o, cb) {
        var vibren = Signals.using('db').using('vibren');

        vibren.signal.findAll({
            where: {
                acquisitionId: o
            }
        }).then(function (records) {
            cb(records);
        });
    },

    getSingle: function (o, cb) {
        var vibren = Signals.using('db').using('vibren');
        vibren.signal.find({
            where: {
                acquisitionId: o
            }
        }).then(function (records) {
            cb(records);
        });
    }
}

module.exports = Signals;