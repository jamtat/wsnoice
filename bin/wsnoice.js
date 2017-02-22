#!/usr/bin/env node

const ws = require( 'ws' )
const url = require( 'yargs' ).argv._[ 0 ]

if ( !url ) {
	console.log( 'Usage: `wsnoice ws[s]://example.com/wsurl`')
	process.exit( 1 )
}

const sock = new ws( url )

sock.on( 'error', err => {
	console.log( err )
	process.exit( 1 )
} )

sock.on( 'close', ( code, reason ) => {
	console.error( `Socket closed with code "${code}" and reason "${reason}"`)
	process.exit( 0 )
} )

sock.on( 'message', message => console.log( message ) )
