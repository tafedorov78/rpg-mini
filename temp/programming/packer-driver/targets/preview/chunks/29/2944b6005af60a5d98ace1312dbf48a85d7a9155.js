System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventManager, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99aab0HvLpOFobA6muDVhhN", "EventManager", undefined);

      _export("default", EventManager = class EventManager {
        constructor() {}

        static add(eventName, callback) {
          if (!EventManager.eventListeners[eventName]) {
            EventManager.eventListeners[eventName] = [];
          }

          EventManager.eventListeners[eventName].push(callback);
        }

        static addOnce(eventName, callback) {
          EventManager.remove(eventName, callback);
          EventManager.add(eventName, callback);
        }

        static remove(eventName, callback) {
          var listeners = EventManager.eventListeners[eventName];

          if (!listeners) {
            return;
          }

          var index = listeners.indexOf(callback);

          if (index !== -1) {
            listeners.splice(index, 1);
          }
        }

        static dispatch(eventName) {
          var listeners = EventManager.eventListeners[eventName];

          if (!listeners) {
            return;
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var callback of listeners) {
            callback(...args);
          }
        }

      });

      EventManager.eventListeners = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2944b6005af60a5d98ace1312dbf48a85d7a9155.js.map