# dispatch-event-by-name
compatible tool for dispatchEvent()

# Install
```
npm install dispatch-event-by-name
```

# Usage & Api
```javascript
var dispatch_event_by_name = require("dispatch-event-by-name");

_ele('divResult3').innerHTML = '<span myattr=11>aaa</span>';

_ele('divResult3').firstChild.onclick = function () { done(false); };

//dispatch_event_by_name(el, eventName [, delay] )
dispatch_event_by_name(_ele('divResult3').firstChild, "click", 500);

```
