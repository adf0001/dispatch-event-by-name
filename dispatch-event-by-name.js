
// dispatch-event-by-name @ npm, compatible tool for dispatchEvent().

//dispatch_event_by_name(el, eventName [, delay] )
module.exports = function (el, eventName, delay) {
	var evt;
	if (typeof Event === "function") { evt = new Event(eventName); }
	else {
		evt = document.createEvent('Event');	//ie11
		evt.initEvent(eventName, true, true);
	}

	if (typeof el === "string") el = document.getElementById(el);

	if (delay >= 0) { setTimeout(function () { el.dispatchEvent(evt); }, delay); }
	else { el.dispatchEvent(evt); }
}
