#!/usr/bin/env node


require('shelljs/global');

var program = require('commander');
var path = require('path');
var which = require('npm-which')(__dirname);

function getBin(cmd) {
    return which.sync(cmd);
}

var binDir = path.join(__dirname, 'node_modules', '.bin');
var configDir = path.join(__dirname, 'configs');



program.version('0.0.1');

program.command('build')
    .action(function(env, options) {
        exec(
            getBin('webpack') +
            ' --config ' + path.join(configDir, 'webpack-production.config.js') +
            ' --progress --profile --colors' +
            ' ---output-path ' + process.cwd()
        );
        rm('-rf', 'dist');

        mkdir('dist');
        // copy index file
        cp(path.join(process.cwd(), 'src', 'index.html'), path.join(process.cwd(), 'dist'));
        cp(path.join(process.cwd(), 'src', 'bundle.js'), path.join(process.cwd(), 'dist'));
        rm('-rf', path.join(process.cwd(), 'src', 'bundle.js'));
        rm('-rf', path.join(process.cwd(), 'tests', 'bundle.js'));

        cp('-r', path.join(process.cwd(), 'src', 'assets'), path.join(process.cwd(), 'dist', 'assets'));
    });

program.command('dev')
    .action(function(env, options) {
        exec(
            getBin('webpack-dev-server') +
            ' --config ' + path.join(configDir, 'webpack-dev-server.config.js') +
            ' --progress --colors --inline'
        );
    });

program.command('test')
    .action(function(env, options) {
        // create bundles
        exec(
            getBin('webpack') +
            ' --config ' + path.join(configDir, 'webpack-production.config.js') +
            ' --progress --profile --colors' +
            ' ---output-path ' + process.cwd()
        );
        exec(
            getBin('mocha-phantomjs') + ' ' +
            path.join(process.cwd(), 'test', 'index.html')
        );
        rm('-rf', path.join(process.cwd(), 'src', 'bundle.js'));
        rm('-rf', path.join(process.cwd(), 'test', 'bundle.js'));
    });

program.command('lint')
    .action(function(env, options) {
        console.log('Will be available soon...');
    });

program.command('init')
    .action(function(env, options) {
        ls('-A', path.join(__dirname, 'init') + '/*').forEach(function(obj) {
          cp('-r', obj, process.cwd());
        });
        exec('npm install');
    });

program.parse(process.argv);
