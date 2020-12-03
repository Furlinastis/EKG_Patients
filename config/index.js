const dotenv = require('dotenv');
// Config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

export default {
    port: process.env.PORT,
    database: {
    databaseDATABASE: process.env.DATABASE,
    databaseUSER: process.env.USER,
    databasePASSWORD: process.env.PASSWORD,
    databaseSERVER: process.env.SERVER,
    databasePORT: process.env.DATABASEPORT,

    }
}