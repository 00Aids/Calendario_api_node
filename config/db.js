import { createPool } from "mysql2/promise"; //importo el pool que es un conjunto de conexiones que se utilizan en produccion


export const Pool = createPool ({
    host : 'localhost',
    user : 'root',
    password : '',
    port: 3306,
    database: 'agenda'

})
//conecto con base datos

