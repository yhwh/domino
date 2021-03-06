'use strict';

/**
 * @class Stimuli.event.synthetizer.Keyboard
 * @singleton
 * Abstraction layer for cross-browsers synthetic keyboard events injection.
 */
(function() {

    Stimuli.event.synthetizer.Keyboard = {

        /**
         * Injects an a synthetic keyboard event into the dom.
         * @param {Object} eventConfig The keyboard event configuration
         */
        inject: function(eventConfig) {
            var event,
                canceled;

            if (Stimuli.core.Support.documentCreateEvent) { // IE9+, Safari, PhantomJS, Firefox, Chrome

                if (Stimuli.core.Support.isWebkit) {
                    // see https://bugs.webkit.org/show_bug.cgi?id=16735
                    event = eventConfig.view.document.createEvent('Event');
                    event.initEvent(
                        eventConfig.type,
                        eventConfig.bubbles,
                        eventConfig.cancelable,
                        eventConfig.view
                    );
                    event.ctrlKey = !!eventConfig.ctrlKey;
                    event.altKey = !!eventConfig.altKey;
                    event.shiftKey = !!eventConfig.shiftKey;
                    event.metaKey = eventConfig.metaKey;
                    event.keyCode = eventConfig.keyCode;
                    event.charCode = eventConfig.charCode;
                    event.location = eventConfig.location;
                    event.which = eventConfig.which;

                } else if (Stimuli.core.Support.isIE9 || Stimuli.core.Support.isIE10 || Stimuli.core.Support.isIE11) {

                    var modifiers = [];

                    if (eventConfig.altKey) {
                        modifiers.push('Alt');
                    }

                    if (eventConfig.altGraphKey) {
                        modifiers.push('AltGraph');
                    }

                    if (eventConfig.ctrlKey) {
                        modifiers.push('Control');
                    }

                    if (eventConfig.metaKey) {
                        modifiers.push('Meta');
                    }

                    if (eventConfig.shiftKey) {
                        modifiers.push('Shift');
                    }

                    event = eventConfig.view.document.createEvent('KeyboardEvent');
                    event.initKeyboardEvent(
                        eventConfig.type,
                        eventConfig.bubbles,
                        eventConfig.cancelable,
                        eventConfig.view,
                        eventConfig.key,
                        eventConfig.location,
                        modifiers.join(' '),
                        1,
                        eventConfig.locale
                    );



                    // Setting read-only properties for legacy (initKeyboardEvent doesn't update them)
                    Object.defineProperty(event, 'keyCode', {
                        get: function() {
                            return eventConfig.keyCode;
                        }
                    });


                    if (eventConfig.type === 'keypress') {
                        Object.defineProperty(event, 'charCode', {
                            get: function() {
                                return eventConfig.keyCode;
                            }
                        });
                    }

                    Object.defineProperty(event, 'which', {
                        get: function() {
                            return eventConfig.keyCode;
                        }
                    });

                } else if (Stimuli.core.Support.isGecko) {
                    event = eventConfig.view.document.createEvent('KeyboardEvent');
                    event.initKeyEvent(
                        eventConfig.type,
                        eventConfig.bubbles,
                        eventConfig.cancelable,
                        eventConfig.view,
                        eventConfig.ctrlKey,
                        eventConfig.altKey,
                        eventConfig.shiftKey,
                        eventConfig.metaKey,
                        eventConfig.keyCode,
                        eventConfig.charCode
                    );
                }

                canceled = !eventConfig.target.dispatchEvent(event);

            } else {

                var eventName = 'on' + eventConfig.type;
                // Regardless of their values specified in the event object,
                // cancelBubble is automatically initialized by fireEvent.
                // (see http://msdn.microsoft.com/en-us/library/ie/ms536423(v=vs.85).aspx)
                // So to bypass this limitation we create a listener which will be binded expando style,
                // this way it will be fired before any other listener and the cancelBubble can be fixed.

                var currentListener = eventConfig.target[eventName];

                eventConfig.target[eventName] = function() {
                    var e = eventConfig.view.event;

                    e.cancelBubble = !eventConfig.bubbles;

                    if (currentListener) {
                        currentListener.apply(this);
                    } else {
                        eventConfig.target[eventName] = null;
                    }
                };

                event = eventConfig.view.document.createEventObject();

                event.ctrlKey = eventConfig.ctrKey;
                event.altKey = eventConfig.altKey;
                event.shiftKey = eventConfig.shiftKey;
                event.metaKey = eventConfig.metaKey;
                event.keyCode = eventConfig.keyCode;


                eventConfig.target.fireEvent(eventName, event);
                canceled = event.returnValue === false;
            }

            return {
                event: event,
                canceled: canceled
            };
        }
    };

})();
