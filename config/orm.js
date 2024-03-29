
var connection = require("../config/connection");

function createQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();

}
function translateSql(obj){
    var arr = [];
    for (var key in ob){
        var value =ob[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + VALUE + "'";
            }
            arr.push(key + "=" value);
        }
    }
    return arr.toString();
};

//declare a var named orm that will pull all you query's in it 
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
