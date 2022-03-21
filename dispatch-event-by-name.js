
// dispatch-event-by-name @ npm, compatible tool for dispatchEvent().

//createEvent(eventName [, options] )
//options:{ bubbles, cancelable, composed } | bubbles
var createEvent = function (eventName, options) {
	//options
	if (typeof options === "boolean") options = { bubbles: options };
	else if (!options) options = {};

	var evt;
	if (typeof Event === "function") { evt = new Event(eventName, options); }
	else {
		evt = document.createEvent('Event');	//ie11
		evt.initEvent(eventName, options.bubbles, options.cancelable);
	}

	return evt;
}

//dispatchEventByName(el, eventName [, options] )
//options:{ bubbles, cancelable, composed, delay } | bubbles | delay
var dispatchEventByName = function (el, eventName, options) {
	//options
	if (typeof options === "number") options = { delay: options };

	var evt = createEvent(eventName, options);

	if (typeof el === "string") el = document.getElementById(el);

	if (options && options.delay >= 0) { setTimeout(function () { el.dispatchEvent(evt); }, options.delay); }
	else { el.dispatchEvent(evt); }

	return evt;
}

//a click tool
var click = function (el) {
	if (el.click) el.click();	//.click is null for not-input element in safari 5.x in windows
	else dispatchEventByName(el, "click", true);
}

//module

module.exports = exports = dispatchEventByName

exports.createEvent = createEvent;
exports.create = createEvent;

exports.click = click;
