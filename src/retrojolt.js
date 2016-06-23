var RetroJolt = (function()
{
	// Object.assign polyfill
	if (typeof Object.assign != 'function') {
		Object.assign = function(target) {
			'use strict';
			if (target == null) {
				throw new TypeError('Cannot convert undefined or null to object');
			}

			target = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index];
				if (source != null) {
					for (var key in source) {
						if (Object.prototype.hasOwnProperty.call(source, key)) {
							target[key] = source[key];
						}
					}
				}
			}
			return target;
		};
	}

	function RetroJolt( config )
	{
		var defaults = {
			scale: 1,
			target: '#emulator-target',
			loadingImg: 'loading.gif',
		};

		config = Object.assign( defaults, config );

		var romFile = config.rom.split( '/' ).pop();
		var args = [];

		args.push( JSMESSLoader.driver( config.driver ) );
		args.push( JSMESSLoader.nativeResolution( config.resolution[0], config.resolution[1] ) );
		args.push( JSMESSLoader.emulatorJS( config.js ) );

		if ( config.bios ) {
			for ( var i = 0; i < config.bios.length; ++i ) {
				args.push( JSMESSLoader.mountFile( config.bios[ i ], JSMESSLoader.fetchFile( 'Bios File (' + (i + 1) + ')', config.bios[ i ] ) ) );
			}
		}

		args.push( JSMESSLoader.mountFile( romFile, JSMESSLoader.fetchFile( 'Game File', config.rom ) ) );
		args.push( JSMESSLoader.mountFile( 'default.cfg', JSMESSLoader.fetchFile( 'Input Config', config.cfg ) ) );

		if ( config.peripherals && config.peripherals.length > 0 ) {
			for ( var i in config.peripherals ) {
				args.push( JSMESSLoader.peripheral( config.peripherals[ i ], romFile ) );
			}
		}

		if ( config.args && config.args.length > 0 ) {
			args.push( JSMESSLoader.extraArgs( config.args[i] ) );
		}

		var emulator = new Emulator( document.querySelector( config.target ), null, JSMESSLoader.apply( null, args ) )
			.setScale( config.scale )
			.setSplashImage( config.loadingImg )
			.start()
		;
	}

	return RetroJolt;
})();
