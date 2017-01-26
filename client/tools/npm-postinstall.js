/**
 * Exits early if old version of node is detected
 * Checks installed version of node against the minimum version number of node specified
 * in package.json -> engines/node
 */

'use strict';

var path = require('path');
var shell = require('shelljs');
var pkg = require('./../package.json');
var semver = require('semver');

var expected = semver.validRange(pkg.engines.node);
var actual = semver.valid(process.version);
var satisfies = semver.satisfies(actual, expected);

if (!satisfies) {
    var errorMessage =
        '=========================================================\n' +
        'ACTION REQUIRED!!!\n' +
        '=========================================================\n' +
        'Cannot run build due to outdated node version detected!\n' +
        'Expected node ' + expected + ', but found ' + actual + '\n\n' +
        'To install the required version of node:\n\n' +
        '    Windows: node-install.cmd --install\n' +
        '    Mac/Linux: ./node-install.sh --install\n' +
        '=========================================================\n' +
        '=========================================================';

    console.error(errorMessage);
    process.exit(1);
}

shell.chmod(770, path.resolve(__dirname, '../node-install.sh'));
