'use strict';

/** The plugin's identifier */
exports.id = 'alloy-local';
exports.version = '1.0';

/** The Titanium CLI version that this hook is compatible with */
exports.cliVersion = '>=3.2';

const fs = require('fs');
const path = require('path');

const localAlloyPath = path.join('.', 'node_modules', '.bin', 'alloy');

if (fs.existsSync(localAlloyPath)) {
	console.error('you are here → Found localAlloyPath');
	process.env.ALLOY_PATH = localAlloyPath;
}
