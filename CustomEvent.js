var customizeEvent = function (newEvent) {
  return function (event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).trigger (newEvent);
  }
}
