// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9WNCQ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b00f64485af36d7c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aub9U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _preactRouter = require("preact-router");
var _hooks = require("preact/hooks");
var _searchComponent = require("../components/search/search.component");
var _searchComponentDefault = parcelHelpers.interopDefault(_searchComponent);
var _httpService = require("../services/http.service");
var _luxon = require("luxon");
var _holidayContext = require("../context/holidayContext");
var _holidayComponent = require("../components/holiday/holiday.component");
var _holidayComponentDefault = parcelHelpers.interopDefault(_holidayComponent);
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
function ResultsRoute() {
    var saveHolidays = _hooks.useContext(_holidayContext.HolidayContext).saveHolidays;
    var _a1 = __read(_preactRouter.useRouter(), 1), searchParams = _a1[0];
    var _b1 = __read(_hooks.useState(false), 2), loading = _b1[0], setLoading = _b1[1];
    _hooks.useEffect(function() {
        var _a, _b, _c, _d;
        setLoading(true);
        var departureDate = _luxon.DateTime.fromFormat((_a = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _a === void 0 ? void 0 : _a.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        var requestBody = {
            "bookingType": "holiday",
            "location": (_b = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _b === void 0 ? void 0 : _b.location,
            "departureDate": departureDate,
            "duration": (_c = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _c === void 0 ? void 0 : _c.duration,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": (_d = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _d === void 0 ? void 0 : _d.adults,
                    "childAges": [],
                    "infants": 0
                }
            ]
        };
        _httpService.doRequest('POST', '/cjs-search-api/search', requestBody).then(function(response) {
            setLoading(false);
            // Results are loaded here
            saveHolidays(response === null || response === void 0 ? void 0 : response.holidays);
        });
    }, [
        searchParams
    ]);
    return _preact.h("section", null, _preact.h(_searchComponentDefault.default, {
        loading: loading
    }), loading && _preact.h("div", null, "Loading..."), !loading && _preact.h(_holidayComponentDefault.default, null));
}
exports.default = ResultsRoute;

},{"preact":"26zcy","preact-router":"e4tGw","preact/hooks":"eZN76","../services/http.service":"afHpL","luxon":"dpK6X","../context/holidayContext":"koC64","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/search/search.component":"3PzYm","../components/holiday/holiday.component":"jt2ld"}],"afHpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doRequest", ()=>doRequest
);
var doRequest = function(method, url, body) {
    if (body === void 0) body = undefined;
    return new Promise(function(resolve, reject) {
        run(method, url, body, function(request) {
            if (request.readyState !== 4) return;
            switch(request.status){
                case 200:
                    resolve(JSON.parse(request.responseText));
                    break;
                case 204:
                    resolve(undefined);
                    break;
                case 500:
                    var isJson = request.getResponseHeader('content-type') === 'application/json';
                    reject(isJson ? JSON.parse(request.responseText) : undefined);
                default:
                    reject(undefined);
                    break;
            }
        });
    });
};
var run = function(method, url, body, stateChange) {
    if (body === void 0) body = undefined;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        return stateChange(xmlHttpRequest);
    };
    xmlHttpRequest.open(method, url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.send(body != null ? JSON.stringify(body) : undefined);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jt2ld":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _hooks = require("preact/hooks");
var _holidayContext = require("../../context/holidayContext");
var _filterComponent = require("../hotel/filter.component");
var _filterComponentDefault = parcelHelpers.interopDefault(_filterComponent);
var _hotelComponent = require("../hotel/hotel.component");
var _hotelComponentDefault = parcelHelpers.interopDefault(_hotelComponent);
var _holidayModuleLess = require("./holiday.module.less");
var __assign = undefined && undefined.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
function HolidayComponent() {
    var holidays = _hooks.useContext(_holidayContext.HolidayContext).holidays;
    var _a = __read(_hooks.useState([]), 2), holidaysToShow = _a[0], setHolidaysToShow = _a[1];
    // Set holidays data to component state
    _hooks.useEffect(function() {
        setHolidaysToShow(holidays);
    }, [
        holidays
    ]);
    return _preact.h("section", {
        className: _holidayModuleLess["holiday-result"]
    }, holidaysToShow.length ? _preact.h("div", {
        className: _holidayModuleLess["wrapper"]
    }, _preact.h("div", {
        className: _holidayModuleLess["filter"]
    }, _preact.h(_filterComponentDefault.default, {
        holidays: holidays,
        setHolidaysToShow: setHolidaysToShow
    })), _preact.h("div", {
        className: _holidayModuleLess["result"]
    }, holidaysToShow.map(function(item) {
        return _preact.h("div", {
            className: ""
        }, _preact.h(_hotelComponentDefault.default, __assign({}, item)));
    }))) : _preact.h("div", null, "No results found"));
}
exports.default = HolidayComponent;

},{"preact":"26zcy","preact/hooks":"eZN76","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../context/holidayContext":"koC64","../hotel/hotel.component":"5KrHM","../hotel/filter.component":"f1UKX","./holiday.module.less":"3dn0f"}],"5KrHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _buttonComponent = require("../button/button.component");
var _hotelModuleLess = require("./hotel.module.less");
var _ratingComponent = require("../rating/rating.component");
var _ratingComponentDefault = parcelHelpers.interopDefault(_ratingComponent);
function HotelCardComponent(props) {
    var _a, _b, _c;
    return _preact.h("div", {
        className: _hotelModuleLess['hotel-card']
    }, _preact.h("img", {
        src: (_c = (_b = (_a = props.hotel.content) === null || _a === void 0 ? void 0 : _a.images[0]) === null || _b === void 0 ? void 0 : _b.RESULTS_CAROUSEL) === null || _c === void 0 ? void 0 : _c.url,
        alt: 'Hotel'
    }), _preact.h("div", {
        className: _hotelModuleLess['card-body']
    }, _preact.h("div", {
        className: _hotelModuleLess["top"]
    }, _preact.h("div", {
        className: ''
    }, _preact.h("h3", null, props.hotel.name)), _preact.h(_ratingComponentDefault.default, {
        available: Number(props.hotel.content.starRating),
        total: 5
    })), _preact.h("div", {
        className: _hotelModuleLess["description"]
    }, _preact.h("p", {
        className: ''
    }, props.hotel.content.hotelDescription)), _preact.h("div", {
        className: _hotelModuleLess["content"]
    }, _preact.h("div", {
        className: _hotelModuleLess["facilities"]
    }, _preact.h("h3", null, "Facilities"), _preact.h("ul", {
        className: ''
    }, props.hotel.content.hotelFacilities.map(function(op, idx) {
        return _preact.h("li", {
            key: idx
        }, op);
    }))), _preact.h("div", {
        className: _hotelModuleLess["key-features"]
    }, _preact.h("h3", null, "Key Features"), _preact.h("ul", {
        className: ''
    }, props.hotel.content.keyFeatures.map(function(op, idx) {
        return _preact.h("li", {
            key: idx
        }, op.description);
    }))))), _preact.h("div", {
        className: _hotelModuleLess['card-footer']
    }, _preact.h("div", {
        className: _hotelModuleLess['price']
    }, "$", props.depositPerPerson, _preact.h("small", null, " per person")), _preact.h(_buttonComponent.ButtonComponent, {
        text: 'Book Now'
    })));
}
exports.default = HotelCardComponent;

},{"preact":"26zcy","../button/button.component":"1pBJn","./hotel.module.less":"cvW43","../rating/rating.component":"3eVsP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvW43":[function(require,module,exports) {
module.exports["card-footer"] = `wXk_MG_card-footer`;
module.exports["card-body"] = `wXk_MG_card-body`;
module.exports["content"] = `wXk_MG_content`;
module.exports["hotel-card"] = `wXk_MG_hotel-card`;
module.exports["price"] = `wXk_MG_price`;
module.exports["facilities"] = `wXk_MG_facilities`;
module.exports["top"] = `wXk_MG_top`;
module.exports["key-features"] = `wXk_MG_key-features`;

},{}],"3eVsP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _search = require("../../consts/search");
function RatingComponent(props) {
    return _preact.h("div", null, Array.from({
        length: props.available
    }).map(function(_, idx) {
        return _search.STAR.FILLED;
    }), Array.from({
        length: props.total - props.available
    }).map(function(_, idx) {
        return _search.STAR.EMPTY;
    }));
}
exports.default = RatingComponent;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../consts/search":"41r2A"}],"f1UKX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _hooks = require("preact/hooks");
var _search = require("../../consts/search");
var _buttonComponent = require("../button/button.component");
var _checkboxComponent = require("../input/checkbox/checkbox.component");
var _radioComponent = require("../input/radio/radio.component");
var _filterModuleLess = require("./filter.module.less");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = undefined && undefined.__spread || function() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
};
function FilterHotelComponent(_a1) {
    var holidays = _a1.holidays, setHolidaysToShow = _a1.setHolidaysToShow;
    var _b = __read(_hooks.useState(0), 2), rating1 = _b[0], setRating = _b[1];
    var _c = __read(_hooks.useState([]), 2), facilities1 = _c[0], setFacilities = _c[1];
    var _d = __read(_hooks.useState([
        -1,
        10000
    ]), 2), pricePerPerson = _d[0], setPricePerPerson = _d[1];
    // Filter holidays data by rating
    var filterByRating = _hooks.useCallback(function(rating) {
        var filteredData = holidays.filter(function(option) {
            return Number(option.hotel.content.starRating) > rating - 1;
        });
        // Set filtered data to component state
        setHolidaysToShow(__spread(filteredData));
    }, [
        holidays
    ]);
    _hooks.useEffect(function() {
        filterByRating(rating1);
    }, [
        filterByRating,
        rating1
    ]);
    // Filter holidays data by available facilities
    var filterByFacilities = _hooks.useCallback(function(facilities) {
        var filteredData = holidays;
        facilities.forEach(function(option) {
            filteredData = filteredData.filter(function(op) {
                var _a;
                return (_a = op.hotel.content.hotelFacilities) === null || _a === void 0 ? void 0 : _a.includes(option);
            });
        });
        // Set filtered data to component state
        setHolidaysToShow(__spread(filteredData));
    }, [
        holidays
    ]);
    _hooks.useEffect(function() {
        filterByFacilities(facilities1);
    }, [
        filterByFacilities,
        facilities1
    ]);
    // Filter holidays data by price per person
    var filterByPricePerPerson = _hooks.useCallback(function(price) {
        var filteredData = holidays.filter(function(option) {
            return Number(option.depositPerPerson) > price[0] - 1 && Number(option.depositPerPerson) < price[1] + 1;
        });
        // Set filtered data to component state
        setHolidaysToShow(__spread(filteredData));
    }, [
        holidays
    ]);
    _hooks.useEffect(function() {
        filterByPricePerPerson(pricePerPerson);
    }, [
        filterByPricePerPerson,
        pricePerPerson
    ]);
    // Facility selection in filter
    var handleFacilityChange = function(facility) {
        var availableFacilities = facilities1;
        if (facilities1.includes(facility)) availableFacilities = facilities1.filter(function(op) {
            return op !== facility;
        });
        else availableFacilities.push(facility);
        setFacilities(__spread(availableFacilities));
    };
    // Price change in filter
    var handlePriceChange = function(price) {
        setPricePerPerson(price);
    };
    // Clear filter
    var handleClear = function() {
        setRating(0);
        setFacilities([]);
        setPricePerPerson([
            -1,
            10000
        ]);
        setHolidaysToShow(__spread(holidays));
    };
    return _preact.h("div", {
        className: _filterModuleLess["wrapper"]
    }, _preact.h("div", {
        className: _filterModuleLess["rating"]
    }, Array.from({
        length: 5
    }).map(function(_, idx) {
        return _preact.h(_buttonComponent.ButtonComponent, {
            text: rating1 > idx ? _search.STAR.FILLED : _search.STAR.EMPTY,
            skin: "SECONDARY",
            onClick: function() {
                return setRating(idx + 1);
            }
        });
    })), _preact.h("hr", null), _preact.h("div", {
        className: _filterModuleLess["facilities"]
    }, _preact.h("h3", null, "Facilities"), _search.HOTEL_FACILTITIES.map(function(option, idx) {
        return _preact.h(_checkboxComponent.CheckboxComponent, {
            key: idx,
            id: "facility" + idx,
            name: "facility" + idx,
            label: option,
            checked: facilities1.includes(option),
            onChange: function() {
                return handleFacilityChange(option);
            }
        });
    })), _preact.h("hr", null), _preact.h("div", {
        className: _filterModuleLess['price-per-person']
    }, _preact.h("h3", null, "Price Per Person"), _search.PRICE_PER_PERSON.map(function(option, idx) {
        return _preact.h(_radioComponent.RadioComponent, {
            key: idx,
            name: "price",
            id: 'price-' + idx,
            label: option.label,
            checked: pricePerPerson[0] === option.value[0],
            onChange: function() {
                return handlePriceChange(option.value);
            }
        });
    })), _preact.h("div", {
        className: _filterModuleLess['reset']
    }, _preact.h(_buttonComponent.ButtonComponent, {
        text: 'Clear',
        onClick: handleClear
    })));
}
exports.default = FilterHotelComponent;

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../consts/search":"41r2A","../button/button.component":"1pBJn","../input/checkbox/checkbox.component":"gMxQg","../input/radio/radio.component":"35t1S","preact/hooks":"eZN76","./filter.module.less":"irx4z"}],"gMxQg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CheckboxComponent", ()=>CheckboxComponent
);
/** @jsx h */ var _preact = require("preact");
var _checkboxModuleLess = require("./checkbox.module.less");
var CheckboxComponent = function(props) {
    return _preact.h("div", {
        className: _checkboxModuleLess['checkbox-component']
    }, _preact.h("label", {
        for: props === null || props === void 0 ? void 0 : props.id
    }, _preact.h("input", {
        type: "checkbox",
        name: props === null || props === void 0 ? void 0 : props.name,
        id: props === null || props === void 0 ? void 0 : props.id,
        checked: props === null || props === void 0 ? void 0 : props.checked,
        onChange: props === null || props === void 0 ? void 0 : props.onChange
    }), props === null || props === void 0 ? void 0 : props.label));
};

},{"preact":"26zcy","./checkbox.module.less":"64fcB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64fcB":[function(require,module,exports) {

},{}],"35t1S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RadioComponent", ()=>RadioComponent
);
/** @jsx h */ var _preact = require("preact");
var _radioModuleLess = require("./radio.module.less");
var RadioComponent = function(props) {
    return _preact.h("div", {
        className: _radioModuleLess['radio-component']
    }, _preact.h("label", {
        for: props === null || props === void 0 ? void 0 : props.id
    }, _preact.h("input", {
        type: "radio",
        name: props === null || props === void 0 ? void 0 : props.name,
        id: props === null || props === void 0 ? void 0 : props.id,
        checked: props === null || props === void 0 ? void 0 : props.checked,
        onChange: props === null || props === void 0 ? void 0 : props.onChange
    }), props === null || props === void 0 ? void 0 : props.label));
};

},{"preact":"26zcy","./radio.module.less":"9Mtld","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Mtld":[function(require,module,exports) {

},{}],"irx4z":[function(require,module,exports) {
module.exports["price-per-person"] = `_7kylGW_price-per-person`;
module.exports["wrapper"] = `_7kylGW_wrapper`;
module.exports["rating"] = `_7kylGW_rating`;

},{}],"3dn0f":[function(require,module,exports) {
module.exports["holiday-result"] = `RJch-G_holiday-result`;
module.exports["wrapper"] = `RJch-G_wrapper`;

},{}]},["9WNCQ"], null, "parcelRequired508")

//# sourceMappingURL=results.route.5af36d7c.js.map
