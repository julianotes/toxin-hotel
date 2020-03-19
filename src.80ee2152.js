// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./assets\\fonts\\Quicksand\\Quicksand-bold\\Quicksand-Bold.eot":[["Quicksand-Bold.5862033e.eot","assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.eot"],"assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.eot"],"./assets\\fonts\\Quicksand\\Quicksand-bold\\Quicksand-Bold.woff":[["Quicksand-Bold.3ba12430.woff","assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.woff"],"assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.woff"],"./assets\\fonts\\Quicksand\\Quicksand-bold\\Quicksand-Bold.ttf":[["Quicksand-Bold.b1139de2.ttf","assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.ttf"],"assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.ttf"],"./assets\\fonts\\Quicksand\\Quicksand-bold\\Quicksand-Bold.svg":[["Quicksand-Bold.4dea1ff1.svg","assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.svg"],"Quicksand-Bold.4dea1ff1.js","assets/fonts/Quicksand/Quicksand-bold/Quicksand-Bold.svg"],"./assets\\fonts\\Quicksand\\Quicksand-regular\\Quicksand-Regular.eot":[["Quicksand-Regular.36bf2dff.eot","assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.eot"],"assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.eot"],"./assets\\fonts\\Quicksand\\Quicksand-regular\\Quicksand-Regular.woff":[["Quicksand-Regular.e94fb1b6.woff","assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.woff"],"assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.woff"],"./assets\\fonts\\Quicksand\\Quicksand-regular\\Quicksand-Regular.ttf":[["Quicksand-Regular.ffc9d9ec.ttf","assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.ttf"],"assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.ttf"],"./assets\\fonts\\Quicksand\\Quicksand-regular\\Quicksand-Regular.svg":[["Quicksand-Regular.a9d46757.svg","assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.svg"],"Quicksand-Regular.a9d46757.js","assets/fonts/Quicksand/Quicksand-regular/Quicksand-Regular.svg"],"./assets\\fonts\\Montserrat\\Montserrat-Bold\\Montserrat-Bold.eot":[["Montserrat-Bold.9ce880df.eot","assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.eot"],"assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.eot"],"./assets\\fonts\\Montserrat\\Montserrat-Bold\\Montserrat-Bold.woff":[["Montserrat-Bold.2af363c0.woff","assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.woff"],"assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.woff"],"./assets\\fonts\\Montserrat\\Montserrat-Bold\\Montserrat-Bold.ttf":[["Montserrat-Bold.14de1886.ttf","assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.ttf"],"assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.ttf"],"./assets\\fonts\\Montserrat\\Montserrat-Bold\\Montserrat-Bold.svg":[["Montserrat-Bold.bc121b6d.svg","assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.svg"],"Montserrat-Bold.bc121b6d.js","assets/fonts/Montserrat/Montserrat-Bold/Montserrat-Bold.svg"],"./assets\\fonts\\Montserrat\\Montserrat-Regular\\Montserrat-Regular.eot":[["Montserrat-Regular.b06d3a6e.eot","assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.eot"],"assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.eot"],"./assets\\fonts\\Montserrat\\Montserrat-Regular\\Montserrat-Regular.woff":[["Montserrat-Regular.e890bba2.woff","assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.woff"],"assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.woff"],"./assets\\fonts\\Montserrat\\Montserrat-Regular\\Montserrat-Regular.ttf":[["Montserrat-Regular.a2775d6d.ttf","assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.ttf"],"assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.ttf"],"./assets\\fonts\\Montserrat\\Montserrat-Regular\\Montserrat-Regular.svg":[["Montserrat-Regular.83d63e02.svg","assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.svg"],"Montserrat-Regular.83d63e02.js","assets/fonts/Montserrat/Montserrat-Regular/Montserrat-Regular.svg"],"./assets\\fonts\\Material-Icons\\MaterialIcons-Regular.eot":[["MaterialIcons-Regular.7aff73a1.eot","assets/fonts/Material-Icons/MaterialIcons-Regular.eot"],"assets/fonts/Material-Icons/MaterialIcons-Regular.eot"],"./assets\\fonts\\Material-Icons\\MaterialIcons-Regular.woff2":[["MaterialIcons-Regular.849aec31.woff2","assets/fonts/Material-Icons/MaterialIcons-Regular.woff2"],"assets/fonts/Material-Icons/MaterialIcons-Regular.woff2"],"./assets\\fonts\\Material-Icons\\MaterialIcons-Regular.woff":[["MaterialIcons-Regular.fce9fa05.woff","assets/fonts/Material-Icons/MaterialIcons-Regular.woff"],"assets/fonts/Material-Icons/MaterialIcons-Regular.woff"],"./assets\\fonts\\Material-Icons\\MaterialIcons-Regular.ttf":[["MaterialIcons-Regular.326f798b.ttf","assets/fonts/Material-Icons/MaterialIcons-Regular.ttf"],"assets/fonts/Material-Icons/MaterialIcons-Regular.ttf"],"./assets\\fonts\\Font_Awesome\\fontawesome-webfont.eot":[["fontawesome-webfont.04172b94.eot","assets/fonts/Font_Awesome/fontawesome-webfont.eot"],"assets/fonts/Font_Awesome/fontawesome-webfont.eot"],"./assets\\fonts\\Font_Awesome\\fontawesome-webfont.woff2":[["fontawesome-webfont.ba48bb7d.woff2","assets/fonts/Font_Awesome/fontawesome-webfont.woff2"],"assets/fonts/Font_Awesome/fontawesome-webfont.woff2"],"./assets\\fonts\\Font_Awesome\\fontawesome-webfont.woff":[["fontawesome-webfont.ecdb1109.woff","assets/fonts/Font_Awesome/fontawesome-webfont.woff"],"assets/fonts/Font_Awesome/fontawesome-webfont.woff"],"./assets\\fonts\\Font_Awesome\\fontawesome-webfont.ttf":[["fontawesome-webfont.a69020b4.ttf","assets/fonts/Font_Awesome/fontawesome-webfont.ttf"],"assets/fonts/Font_Awesome/fontawesome-webfont.ttf"],"./assets\\fonts\\Font_Awesome\\fontawesome-webfont.svg":[["fontawesome-webfont.40d80bdd.svg","assets/fonts/Font_Awesome/fontawesome-webfont.svg"],"fontawesome-webfont.40d80bdd.js","assets/fonts/Font_Awesome/fontawesome-webfont.svg"],"./assets\\fonts\\Open-Sans\\OpenSansLight\\OpenSansLight.eot":[["OpenSansLight.65b99859.eot","assets/fonts/Open-Sans/OpenSansLight/OpenSansLight.eot"],"assets/fonts/Open-Sans/OpenSansLight/OpenSansLight.eot"],"./assets\\fonts\\Open-Sans\\OpenSansLight\\OpenSansLight.woff":[["OpenSansLight.df5e39a6.woff","assets/fonts/Open-Sans/OpenSansLight/OpenSansLight.woff"],"assets/fonts/Open-Sans/OpenSansLight/OpenSansLight.woff"],"./assets\\fonts\\Open-Sans\\OpenSansLight\\OpenSansLight.ttf":[["OpenSansLight.866bc2cf.ttf","assets/fonts/Open-Sans/OpenSansLight/OpenSansLight.ttf"],"assets/fonts/Open-Sans/OpenSansLight/OpenSansLight.ttf"],"./assets\\fonts\\Open-Sans\\OpenSansRegular\\OpenSansRegular.eot":[["OpenSansRegular.d07a74b1.eot","assets/fonts/Open-Sans/OpenSansRegular/OpenSansRegular.eot"],"assets/fonts/Open-Sans/OpenSansRegular/OpenSansRegular.eot"],"./assets\\fonts\\Open-Sans\\OpenSansRegular\\OpenSansRegular.woff":[["OpenSansRegular.bed355f4.woff","assets/fonts/Open-Sans/OpenSansRegular/OpenSansRegular.woff"],"assets/fonts/Open-Sans/OpenSansRegular/OpenSansRegular.woff"],"./assets\\fonts\\Open-Sans\\OpenSansRegular\\OpenSansRegular.ttf":[["OpenSansRegular.39b4471e.ttf","assets/fonts/Open-Sans/OpenSansRegular/OpenSansRegular.ttf"],"assets/fonts/Open-Sans/OpenSansRegular/OpenSansRegular.ttf"],"./assets\\fonts\\Open-Sans\\OpenSansSemiBold\\OpenSansSemiBold.eot":[["OpenSansSemiBold.dce4eedd.eot","assets/fonts/Open-Sans/OpenSansSemiBold/OpenSansSemiBold.eot"],"assets/fonts/Open-Sans/OpenSansSemiBold/OpenSansSemiBold.eot"],"./assets\\fonts\\Open-Sans\\OpenSansSemiBold\\OpenSansSemiBold.woff":[["OpenSansSemiBold.f1a6c1f0.woff","assets/fonts/Open-Sans/OpenSansSemiBold/OpenSansSemiBold.woff"],"assets/fonts/Open-Sans/OpenSansSemiBold/OpenSansSemiBold.woff"],"./assets\\fonts\\Open-Sans\\OpenSansSemiBold\\OpenSansSemiBold.ttf":[["OpenSansSemiBold.da0fcfc0.ttf","assets/fonts/Open-Sans/OpenSansSemiBold/OpenSansSemiBold.ttf"],"assets/fonts/Open-Sans/OpenSansSemiBold/OpenSansSemiBold.ttf"],"./assets\\fonts\\Open-Sans\\OpenSansBold\\OpenSansBold.eot":[["OpenSansBold.fdb9cc12.eot","assets/fonts/Open-Sans/OpenSansBold/OpenSansBold.eot"],"assets/fonts/Open-Sans/OpenSansBold/OpenSansBold.eot"],"./assets\\fonts\\Open-Sans\\OpenSansBold\\OpenSansBold.woff":[["OpenSansBold.91cb355c.woff","assets/fonts/Open-Sans/OpenSansBold/OpenSansBold.woff"],"assets/fonts/Open-Sans/OpenSansBold/OpenSansBold.woff"],"./assets\\fonts\\Open-Sans\\OpenSansBold\\OpenSansBold.ttf":[["OpenSansBold.ee20cb0c.ttf","assets/fonts/Open-Sans/OpenSansBold/OpenSansBold.ttf"],"assets/fonts/Open-Sans/OpenSansBold/OpenSansBold.ttf"],"D:\\Programming\\Projects\\FSD Frontend\\Parcel_bundle\\src\\assets\\images\\arrow-down.svg":[["arrow-down.2712fddc.svg","assets/images/arrow-down.svg"],"arrow-down.2712fddc.js","assets/images/arrow-down.svg"],"D:\\Programming\\Projects\\FSD Frontend\\Parcel_bundle\\src\\assets\\images\\arrow-right.svg":[["arrow-right.331ce49a.svg","assets/images/arrow-right.svg"],"arrow-right.331ce49a.js","assets/images/arrow-right.svg"],"D:\\Programming\\Projects\\FSD Frontend\\Parcel_bundle\\src\\assets\\images\\bg-main.jpg":[["bg-main.0f62b4bb.jpg","assets/images/bg-main.jpg"],"bg-main.0f62b4bb.js","assets/images/bg-main.jpg"],"D:\\Programming\\Projects\\FSD Frontend\\Parcel_bundle\\src\\assets\\images\\logo.png":[["logo.3f4a1874.png","assets/images/logo.png"],"logo.3f4a1874.js","assets/images/logo.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58961" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/src.80ee2152.js.map