declare var JSMESSLoader: any;
declare var Emulator: any;

function extend( target: any, ...objects: any[] )
{
	if ( target == null ) {
		throw new TypeError( 'Cannot convert undefined or null to object' );
	}

	target = Object( target );
	for ( const source of objects ) {
		if ( source != null ) {
			for ( var key in source ) {
				if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
					target[ key ] = source[ key ];
				}
			}
		}
	}
	return target;
}

interface Options
{
	scale?: number;
	target?: string;
	loadingImg?: string;
	js: string;
	driver: string;
	cfg: string;
	peripherals: string[];
	resolution: number[];
	rom: string;
	bios: string[];
}

class RetroJolt
{
	private emulator: any;

	constructor( options: Options )
	{
		const defaults = {
			scale: 1,
			target: '#emulator-target',
			loadingImg: 'loading.gif',
		};

		const config = extend( defaults, options );
		const romFile = config.rom.split( '/' ).pop();
		let args: any[] = [];

		// Emularity saves files to an indexeddb and it makes it really hard
		// to update configs and bios files. Clearing it every time allows us
		// to change it knowing that the emulation will use the new files.
		window.indexedDB.deleteDatabase( 'emularity' );

		args.push( JSMESSLoader.driver( config.driver ) );
		args.push( JSMESSLoader.nativeResolution( config.resolution[0], config.resolution[1] ) );
		args.push( JSMESSLoader.emulatorJS( config.js ) );

		if ( config.bios ) {
			for ( let i = 0; i < config.bios.length; ++i ) {
				args.push( JSMESSLoader.mountFile( config.bios[ i ], JSMESSLoader.fetchFile( 'Bios File (' + (i + 1) + ')', config.bios[ i ] ) ) );
			}
		}

		args.push( JSMESSLoader.mountFile( romFile, JSMESSLoader.fetchFile( 'Game File', config.rom ) ) );
		args.push( JSMESSLoader.mountFile( 'default.cfg', JSMESSLoader.fetchFile( 'Input Config', config.cfg ) ) );

		if ( config.peripherals && config.peripherals.length > 0 ) {
			for ( const peripheral of config.peripherals ) {
				args.push( JSMESSLoader.peripheral( peripheral, romFile ) );
			}
		}

		if ( !config.args || !config.args.length ) {
			config.args = [];
		}

		// Fixes bug where controller input config doesn't load.
		config.args.push( '-ctrlrpath' );
		config.args.push( 'emulator' );
		config.args.push( '-ctrlr' );
		config.args.push( 'default' );
		args.push( JSMESSLoader.extraArgs( config.args ) );

		this.emulator = new Emulator( document.querySelector( config.target ), null, JSMESSLoader.apply( null, args ) )
			.setScale( config.scale )
			.setSplashImage( config.loadingImg )
			.start()
		;
	}
}