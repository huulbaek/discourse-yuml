(function() {
    if (Discourse.dialect_deprecated) { return; }

Discourse.Dialect.inlineBetween({
    start: '[yuml]',
    stop: '[/yuml]',
    rawContents: true,
    emitter: function(contents) {
        var uri = "http://yuml.me/diagram/scruffy/class/" + encodeURIComponent(contents.replace(/\n/g, ","));
        return "<img src=\"" + uri + "\" />";
    }
})
    
})();
