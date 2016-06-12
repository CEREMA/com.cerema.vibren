Acquisitions = {
    getAll: function(o,cb) {
        Acquisitions.using("db").model("vibren", "select * from acquisitions", cb);
    }
}

module.exports = Acquisitions;