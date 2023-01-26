import { DataTypes } from "sequelize"
// import Pool from "../config/db.js"

const Participant = db.define('participant', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Participant