// Lucknow AI Labs: hide "upcoming" event entries once their date has passed.
// GitHub Pages only rebuilds the site when something is pushed, so the list
// built on the last push can go stale; this keeps visitors from seeing a
// finished event as "upcoming". Dates are compared in the visitor's local time.
jtd.onReady(function () {
  var now = new Date();
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  var today = now.getFullYear() + '-' + pad(now.getMonth() + 1) + '-' + pad(now.getDate());

  var groups = document.querySelectorAll('[data-upcoming-group]');
  for (var g = 0; g < groups.length; g++) {
    var items = groups[g].querySelectorAll('[data-event-date]');
    var shown = 0;
    for (var i = 0; i < items.length; i++) {
      if (items[i].getAttribute('data-event-date') < today) {
        items[i].hidden = true;
      } else {
        shown++;
      }
    }
    var empty = groups[g].querySelector('[data-upcoming-empty]');
    if (empty && shown === 0) {
      empty.hidden = false;
    }
  }
});
