var fs = require( 'fs' );


class getFile {

    constructor( fileName ) {
        this.fileName = fileName
    }

    getContent () {
        const stream = fs.createReadStream( this.fileName )
        const chunks = [];
        return new Promise( ( resolve, reject ) => {
            stream.on( 'data', chunk => chunks.push( chunk ) )
            stream.on( 'error', reject )
            stream.on( 'end', () => resolve( Buffer.concat( chunks ).toString( 'utf8' ) ) )
        } )
    }

}

module.exports = { getFile };