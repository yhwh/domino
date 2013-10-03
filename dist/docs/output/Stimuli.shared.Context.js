Ext.data.JsonP.Stimuli_shared_Context({"tagname":"class","name":"Stimuli.shared.Context","autodetected":{},"files":[{"filename":"context.js","href":"context.html#Stimuli-shared-Context"}],"mixins":["Stimuli.core.Observable"],"members":[{"name":"destroy","tagname":"method","owner":"Stimuli.shared.Context","id":"method-destroy","meta":{}},{"name":"getWindow","tagname":"method","owner":"Stimuli.shared.Context","id":"method-getWindow","meta":{}},{"name":"once","tagname":"method","owner":"Stimuli.core.Observable","id":"method-once","meta":{}},{"name":"publish","tagname":"method","owner":"Stimuli.core.Observable","id":"method-publish","meta":{}},{"name":"setLoading","tagname":"method","owner":"Stimuli.shared.Context","id":"method-setLoading","meta":{}},{"name":"setNew","tagname":"method","owner":"Stimuli.shared.Context","id":"method-setNew","meta":{}},{"name":"subscribe","tagname":"method","owner":"Stimuli.core.Observable","id":"method-subscribe","meta":{}},{"name":"unsubscribe","tagname":"method","owner":"Stimuli.core.Observable","id":"method-unsubscribe","meta":{}},{"name":"waitForReady","tagname":"method","owner":"Stimuli.shared.Context","id":"method-waitForReady","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Stimuli.shared.Context","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/Stimuli.core.Observable' rel='Stimuli.core.Observable' class='docClass'>Stimuli.core.Observable</a></div><h4>Files</h4><div class='dependency'><a href='source/context.html#Stimuli-shared-Context' target='_blank'>context.js</a></div></pre><div class='doc-contents'><p>This class provides an abstraction layer to manage a {<a href=\"#!/api/Stimuli.virtual.Browser\" rel=\"Stimuli.virtual.Browser\" class=\"docClass\">Stimuli.virtual.Browser</a>} execution contexts.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-destroy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Context'>Stimuli.shared.Context</span><br/><a href='source/context.html#Stimuli-shared-Context-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Context-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Destroys the current context. ...</div><div class='long'><p>Destroys the current context.</p>\n</div></div></div><div id='method-getWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Context'>Stimuli.shared.Context</span><br/><a href='source/context.html#Stimuli-shared-Context-method-getWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Context-method-getWindow' class='name expandable'>getWindow</a>( <span class='pre'></span> ) : Window<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the current browser window. ...</div><div class='long'><p>Returns the current browser window.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Window</span><div class='sub-desc'><p>The current window.</p>\n</div></li></ul></div></div></div><div id='method-once' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Stimuli.core.Observable' rel='Stimuli.core.Observable' class='defined-in docClass'>Stimuli.core.Observable</a><br/><a href='source/observable.html#Stimuli-core-Observable-method-once' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.core.Observable-method-once' class='name expandable'>once</a>( <span class='pre'>eventName, fn, [scope], [sneak]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attaches a listener to an event, but it will be called only once. ...</div><div class='long'><p>Attaches a listener to an event, but it will be called only once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>The event name.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The listener to attach.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The listener execution scope.</p>\n</div></li><li><span class='pre'>sneak</span> : Boolean (optional)<div class='sub-desc'><p>If true the listener will be called first.</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Stimuli.core.Observable' rel='Stimuli.core.Observable' class='defined-in docClass'>Stimuli.core.Observable</a><br/><a href='source/observable.html#Stimuli-core-Observable-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.core.Observable-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventName, [data]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Publishes an event, which will result in a call to all suscribed listeners. ...</div><div class='long'><p>Publishes an event, which will result in a call to all suscribed listeners.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>The event name.</p>\n</div></li><li><span class='pre'>data</span> : Mixed (optional)<div class='sub-desc'><p>the data to be emitted.</p>\n</div></li></ul></div></div></div><div id='method-setLoading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Context'>Stimuli.shared.Context</span><br/><a href='source/context.html#Stimuli-shared-Context-method-setLoading' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Context-method-setLoading' class='name expandable'>setLoading</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the context in a loading state. ...</div><div class='long'><p>Sets the context in a loading state.</p>\n</div></div></div><div id='method-setNew' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Context'>Stimuli.shared.Context</span><br/><a href='source/context.html#Stimuli-shared-Context-method-setNew' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Context-method-setNew' class='name expandable'>setNew</a>( <span class='pre'>win</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets a new context. ...</div><div class='long'><p>Sets a new context.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>win</span> : Window<div class='sub-desc'><p>The window object used as a context.</p>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Stimuli.core.Observable' rel='Stimuli.core.Observable' class='defined-in docClass'>Stimuli.core.Observable</a><br/><a href='source/observable.html#Stimuli-core-Observable-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.core.Observable-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>eventName, fn, [scope], [sneak]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Attaches a listener to an event. ...</div><div class='long'><p>Attaches a listener to an event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>The event name.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The listener to attach.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The listener execution scope.</p>\n</div></li><li><span class='pre'>sneak</span> : Boolean (optional)<div class='sub-desc'><p>If true the listener will be called first.</p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Stimuli.core.Observable' rel='Stimuli.core.Observable' class='defined-in docClass'>Stimuli.core.Observable</a><br/><a href='source/observable.html#Stimuli-core-Observable-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.core.Observable-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>eventName, fn</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Detaches a listener on a specifi event. ...</div><div class='long'><p>Detaches a listener on a specifi event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>The event name.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The listener to detach.</p>\n</div></li></ul></div></div></div><div id='method-waitForReady' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Stimuli.shared.Context'>Stimuli.shared.Context</span><br/><a href='source/context.html#Stimuli-shared-Context-method-waitForReady' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Stimuli.shared.Context-method-waitForReady' class='name expandable'>waitForReady</a>( <span class='pre'>callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Waits for the context to be ready (generally used after a navigation change). ...</div><div class='long'><p>Waits for the context to be ready (generally used after a navigation change).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to call when the context is ready.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});