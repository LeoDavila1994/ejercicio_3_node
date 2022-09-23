const { db, DataTypes } = require("../utils/database.util");

const GameInConsole = db.define("gameInConsole", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    consoleId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    gameId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    staus: {
        allowNull: false,
        type: DataTypes.STRING
    }

});


module.exports = { GameInConsole };