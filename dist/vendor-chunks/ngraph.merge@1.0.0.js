/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ngraph.merge@1.0.0";
exports.ids = ["vendor-chunks/ngraph.merge@1.0.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/ngraph.merge@1.0.0/node_modules/ngraph.merge/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/ngraph.merge@1.0.0/node_modules/ngraph.merge/index.js ***!
  \**********************************************************************************/
/***/ ((module) => {

eval("module.exports = merge;\n\n/**\n * Augments `target` with properties in `options`. Does not override\n * target's properties if they are defined and matches expected type in \n * options\n *\n * @returns {Object} merged object\n */\nfunction merge(target, options) {\n  var key;\n  if (!target) { target = {}; }\n  if (options) {\n    for (key in options) {\n      if (options.hasOwnProperty(key)) {\n        var targetHasIt = target.hasOwnProperty(key),\n            optionsValueType = typeof options[key],\n            shouldReplace = !targetHasIt || (typeof target[key] !== optionsValueType);\n\n        if (shouldReplace) {\n          target[key] = options[key];\n        } else if (optionsValueType === 'object') {\n          // go deep, don't care about loops here, we are simple API!:\n          target[key] = merge(target[key], options[key]);\n        }\n      }\n    }\n  }\n\n  return target;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbmdyYXBoLm1lcmdlQDEuMC4wL25vZGVfbW9kdWxlcy9uZ3JhcGgubWVyZ2UvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXBoYWVsc2FsYWphLy4vbm9kZV9tb2R1bGVzLy5wbnBtL25ncmFwaC5tZXJnZUAxLjAuMC9ub2RlX21vZHVsZXMvbmdyYXBoLm1lcmdlL2luZGV4LmpzP2M1OTkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcblxuLyoqXG4gKiBBdWdtZW50cyBgdGFyZ2V0YCB3aXRoIHByb3BlcnRpZXMgaW4gYG9wdGlvbnNgLiBEb2VzIG5vdCBvdmVycmlkZVxuICogdGFyZ2V0J3MgcHJvcGVydGllcyBpZiB0aGV5IGFyZSBkZWZpbmVkIGFuZCBtYXRjaGVzIGV4cGVjdGVkIHR5cGUgaW4gXG4gKiBvcHRpb25zXG4gKlxuICogQHJldHVybnMge09iamVjdH0gbWVyZ2VkIG9iamVjdFxuICovXG5mdW5jdGlvbiBtZXJnZSh0YXJnZXQsIG9wdGlvbnMpIHtcbiAgdmFyIGtleTtcbiAgaWYgKCF0YXJnZXQpIHsgdGFyZ2V0ID0ge307IH1cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKGtleSBpbiBvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciB0YXJnZXRIYXNJdCA9IHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpLFxuICAgICAgICAgICAgb3B0aW9uc1ZhbHVlVHlwZSA9IHR5cGVvZiBvcHRpb25zW2tleV0sXG4gICAgICAgICAgICBzaG91bGRSZXBsYWNlID0gIXRhcmdldEhhc0l0IHx8ICh0eXBlb2YgdGFyZ2V0W2tleV0gIT09IG9wdGlvbnNWYWx1ZVR5cGUpO1xuXG4gICAgICAgIGlmIChzaG91bGRSZXBsYWNlKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAob3B0aW9uc1ZhbHVlVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBnbyBkZWVwLCBkb24ndCBjYXJlIGFib3V0IGxvb3BzIGhlcmUsIHdlIGFyZSBzaW1wbGUgQVBJITpcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG1lcmdlKHRhcmdldFtrZXldLCBvcHRpb25zW2tleV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/ngraph.merge@1.0.0/node_modules/ngraph.merge/index.js\n");

/***/ })

};
;