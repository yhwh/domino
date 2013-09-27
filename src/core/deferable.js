'use strict';

(function() {


    Stimuli.core.Deferable = {

        initScheduler: function(options) {
            var self = this;
            options = options || {};
            options.delay = !isNaN(options.delay) ? options.delay : 0;
            options.scope = options.scope || self;

            self.scheduler = new Stimuli.core.Scheduler(options);

            var error = null;

            self.scheduler.subscribe('event', function(fn, callback) {
                fn.call(options.scope, callback);
            });

        },

        sneak: function(fn, callback, options) {
            var self = this;
            fn = fn || function(done) {done();};

            if (!self.scheduler) {
                self.initScheduler();
            }

            self.scheduler.schedule(fn, callback, options, 0);
            return self;
        },

        defer: function(fn, callback, options) {
            var self = this;
            fn = fn || function(done) {done();};

            if (!self.scheduler) {
                self.initScheduler();
            }

            self.scheduler.schedule(fn, callback, options);
            return self;
        },

        then: function(callback) {
            return this.defer(null, callback);
        },

        sleep: function(delay) {
            return this.defer(null, null, {delay: delay});
        },

        synchronize: function(obj) {
            var self = this;
            if (!self.scheduler) {
                self.initScheduler();
            }
            obj.scheduler = this.scheduler;
        }

    };

//    Stimuli.core.Object.merge(Stimuli.core.Deferable, Stimuli.core.Observable);


})();

// Dependencies
Stimuli.core.Class.mix(Stimuli, Stimuli.core.Deferable);