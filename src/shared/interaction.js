'use strict';

/**
 * @class Stimuli.shared.Interaction
 * @mixins Stimuli.core.Chainable
 * Generic device implementation.
 * @constructor
 * @param {Stimuli.shared.Viewport} viewport The viewport to which is the device attached.
 * @param {Object} options The device options if any.
 */
(function() {
    
    Stimuli.shared.Interaction = function(viewport, options) {
        var self = this;
        self.options = {};
        self.viewport = viewport;
        Stimuli.core.Object.merge(self.options, options);
    };

    var Generic = Stimuli.shared.Interaction;

    Stimuli.core.Class.mix(Generic, Stimuli.core.Chainable);

    Generic.prototype.configure = Generic.prototype.then;

    /**
     * @chainable
     * Injects the configured event into the dom.
     * @param {Function} generateEventConfig The event configuration to generate.
     * @param {Number=} delay The delay before in injection in ms
     */
    Generic.prototype.inject = function(generateEventConfig, delay) {
        var self = this,
            callback = function(event, canceled) {
                if (!self.events) {
                    self.events = [];
                }
                self.events.push({
                    src: event,
                    canceled: canceled
                });
            },
            options;

        if (!isNaN(delay)) {
            options = {delay: delay};
        }

        return self.defer(function(next) {
            var eventConfig = generateEventConfig();
            eventConfig.view = self.viewport.getWindow();
            Stimuli.event.Emitter.emit(eventConfig, next);
        }, callback, options);

    };

})();