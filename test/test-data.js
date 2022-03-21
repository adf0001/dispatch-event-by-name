
//global variable, for html page, refer tpsvr @ npm.
dispatch_event_by_name = require("../dispatch-event-by-name.js");

module.exports = {

	"dispatch_event_by_name": function (done) {
		_ele('divResult3').innerHTML = '<span myattr=11>aaa</span>';

		_ele('divResult3').firstChild.onclick = function () { done(false); };

		//dispatchEventByName(el, eventName [, options] )
		//options:{ bubbles, cancelable, composed, delay } | bubbles | delay
		dispatch_event_by_name(_ele('divResult3').firstChild, "click", 500);	//number for delay
	},

	"options.bubbles": function (done) {
		_ele('divResult3').innerHTML = '<span myattr=11><span>aaa</span></span>';

		_ele('divResult3').firstChild.onclick = function () { done(false); };

		dispatch_event_by_name(_ele('divResult3').firstChild.firstChild, "click", {bubbles:true, delay:500});
	},

	".click": function (done) {
		_ele('divResult3').innerHTML = '<span myattr=11><span>aaa</span></span>';

		_ele('divResult3').firstChild.onclick = function () { done(false); };

		dispatch_event_by_name.click(_ele('divResult3').firstChild.firstChild);
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('dispatch_event_by_name', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
