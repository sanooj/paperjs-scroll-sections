// Generated by CoffeeScript 1.6.2
var gui, _ref;

if ((_ref = window.PaperSections) == null) {
  window.PaperSections = {};
}

window.PaperSections.$container = $('#wrapper');

window.PaperSections.i = 0;

window.PaperSections.next = 0;

window.PaperSections.prev = 0;

window.PaperSections.scrollSpeed = 0;

window.PaperSections.timeOut = null;

window.PaperSections.invertScroll = false;

window.PaperSections.slice = function(val, max) {
  if (val > 0 && val > max) {
    return Math.min(val, max);
  }
  if (val < 0 && val < max) {
    return Math.max(val, -max);
  }
  return val;
};

window.PaperSections.$container.scroll(function(e) {
  var direction;

  clearTimeout(window.PaperSections.timeOut);
  window.PaperSections.timeOut = setTimeout(function() {
    window.PaperSections.i = 0;
    window.PaperSections.$container.trigger('stopScroll');
    return window.PaperSections.prev = window.PaperSections.$container.scrollTop();
  }, 50);
  if (window.PaperSections.i % 5 === 0) {
    direction = window.PaperSections.invertScroll ? -1 : 1;
    window.PaperSections.next = window.PaperSections.$container.scrollTop();
    window.PaperSections.scrollSpeed = direction * window.PaperSections.slice(window.PaperSections.next - window.PaperSections.prev, window.PaperSections.data.sectionheight / 2);
    window.PaperSections.prev = window.PaperSections.next;
  }
  return window.PaperSections.i++;
});

gui = new dat.GUI;

gui.add(window.PaperSections, 'invertScroll');

$('.section-b').on('mousedown', function() {
  var $$;

  $$ = $(this);
  return console.log($$.index());
});
