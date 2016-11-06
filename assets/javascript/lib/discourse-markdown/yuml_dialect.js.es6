(function() {

export function setup(helper) {

  helper.replaceBlock({
    start: '[yuml]',
    stop: '[/yuml]',
    emitter(contents) {
      var uri = "https://yuml.me/diagram/scruffy/class/" + encodeURIComponent(blockContents.replace(/\n/g, ","));
      return "<img src=\"" + uri + "\" />";

      return contents;
    }
  });
}
