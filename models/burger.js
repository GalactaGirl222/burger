// call back all your orms 
var orm = require("../config/orm");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("bugers", function (res) {
            cb(res);
        });
        {
            var orm =
            {
                selectAll: function
                    (table, cb) {
                    var dbQuery = "SELECT * FROM" + table + ";";
                    connection.query(dbQuery, function (err, res) {
                        if (err) {
                            throw err;
                        }
                        cb(res);
                    });
                }
    insertOne: function (table, cols, vals, cd) {
                    var dbQuery =
                        " INSERT INTO " +
                        table +
                        "(" +
                        cols.toString() +
                        ")" +
                        " VALUES (" +
                        createQmarks(vals.length) +
                        ")";

                    console.log(dbQuery);

                    connection.query(dbQuery, vals, function (err, res) {

                        if (err) {
                            throw err;
                        }

                        cb(res);
                    });
                }
    updateOne: function (table, objColVals, condition, cb) {
                    var dbQuery =
                        " UPDATE " +
                        table +
                        "SET" +
                        translateSql(objColVals) +
                        ")" +
                        " WHERE " +
                        condition;

                    console.log(dbQuery);

                    connection.query(dbQuery, function (err, res) {
                        if (err) {
                            throw err;
                        }

                        cb(res);
                    });
                },
                deleteOne: function (table, condition, cb) {
                    var dbQuery = " DELETE FROM " + table + " WHERE" = condition;
                    console.log(dbQuery);

                    connection.query(dbQuery, function (err, res) {
                        if (err) {
                            throw err;
                        }

                        cb(res);
                    });

                }

            };
        }

    }
};

module.exports = burger;
