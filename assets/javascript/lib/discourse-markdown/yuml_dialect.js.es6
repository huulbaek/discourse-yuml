(function() {

export function setup(helper) {

  helper.inlineBetween({
    start: '[yuml]',
    stop: '[/yuml]',
    rawContents: true,
    emitter(contents) {
      var uri = "http://yuml.me/diagram/scruffy/class/" + encodeURIComponent(blockContents.replace(/\n/g, ","));
      return "<img src=\"" + uri + "\" />";

      return contents;
    }
  });
}
