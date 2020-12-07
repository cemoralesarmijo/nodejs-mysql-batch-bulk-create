require( 'dotenv' ).config();

const { getFile } = require( './file' );
const { DataBase } = require( './database' );

async function main() {
    try {
        console.time( 'tiempo transcurrido' );
        console.log( 'Procesando fichero csv...' );
        const fileName = 'worldcities.csv';
        const file = new getFile( fileName );
        const content = await file.getContent();
        const dbConfig = {
            database: process.env.MYSQL_DATABASE,
            username: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            host: process.env.DB_HOSTNAME,
            port: process.env.DB_PORT,
        };
        db = new DataBase( dbConfig );
        console.log( 'Fin de procesar fichero csv ' );

        console.log( 'Procesando carga masiva...' );
        await db.bulkCreateData( content.split( '\n' ) );
        console.log( 'Fin carga masiva :)' );
        console.timeEnd( 'tiempo transcurrido' );
        return
    } catch ( error ) {
        console.log( 'error', error.message );
    }
};

main();