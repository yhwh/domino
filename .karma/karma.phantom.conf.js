'use strict';

var files = require('./../files.conf.js');
var conf = require('./karma.shared.conf.js');
module.exports = function(config) {

    conf.files = files.testFilesDev;
    conf.autoWatch = false;
    conf.singleRun = true;
    conf.logLevel = config.LOG_INFO;
    conf.disableCompression = true;

    config.set(conf);

};