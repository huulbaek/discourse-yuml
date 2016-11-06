(function() {

export function setup(helper) {

  helper.inlineBetween({
    start: '[yuml]',
    stop: '[/yuml]',
    rawContents: true,
    emitter(contents) {
      var uri = "http://yuml.me/diagram/scruffy/class/" + encodeURIComponent(contents.replace(/\n/g, ","));
      return "<img src=\"" + uri + "\" />";
    }
  });
}
