"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/resolve-alpn@1.2.1";
exports.ids = ["vendor-chunks/resolve-alpn@1.2.1"];
exports.modules = {

/***/ "(action-browser)/./node_modules/.pnpm/resolve-alpn@1.2.1/node_modules/resolve-alpn/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/resolve-alpn@1.2.1/node_modules/resolve-alpn/index.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst tls = __webpack_require__(/*! tls */ \"tls\");\n\nmodule.exports = (options = {}, connect = tls.connect) => new Promise((resolve, reject) => {\n\tlet timeout = false;\n\n\tlet socket;\n\n\tconst callback = async () => {\n\t\tawait socketPromise;\n\n\t\tsocket.off('timeout', onTimeout);\n\t\tsocket.off('error', reject);\n\n\t\tif (options.resolveSocket) {\n\t\t\tresolve({alpnProtocol: socket.alpnProtocol, socket, timeout});\n\n\t\t\tif (timeout) {\n\t\t\t\tawait Promise.resolve();\n\t\t\t\tsocket.emit('timeout');\n\t\t\t}\n\t\t} else {\n\t\t\tsocket.destroy();\n\t\t\tresolve({alpnProtocol: socket.alpnProtocol, timeout});\n\t\t}\n\t};\n\n\tconst onTimeout = async () => {\n\t\ttimeout = true;\n\t\tcallback();\n\t};\n\n\tconst socketPromise = (async () => {\n\t\ttry {\n\t\t\tsocket = await connect(options, callback);\n\n\t\t\tsocket.on('error', reject);\n\t\t\tsocket.once('timeout', onTimeout);\n\t\t} catch (error) {\n\t\t\treject(error);\n\t\t}\n\t})();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZXNvbHZlLWFscG5AMS4yLjEvbm9kZV9tb2R1bGVzL3Jlc29sdmUtYWxwbi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLFlBQVksbUJBQU8sQ0FBQyxnQkFBSzs7QUFFekIsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFlBQVksbURBQW1EOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLFlBQVksMkNBQTJDO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmFwaGFlbHNhbGFqYS8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZXNvbHZlLWFscG5AMS4yLjEvbm9kZV9tb2R1bGVzL3Jlc29sdmUtYWxwbi9pbmRleC5qcz9iMWRjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IHRscyA9IHJlcXVpcmUoJ3RscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChvcHRpb25zID0ge30sIGNvbm5lY3QgPSB0bHMuY29ubmVjdCkgPT4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRsZXQgdGltZW91dCA9IGZhbHNlO1xuXG5cdGxldCBzb2NrZXQ7XG5cblx0Y29uc3QgY2FsbGJhY2sgPSBhc3luYyAoKSA9PiB7XG5cdFx0YXdhaXQgc29ja2V0UHJvbWlzZTtcblxuXHRcdHNvY2tldC5vZmYoJ3RpbWVvdXQnLCBvblRpbWVvdXQpO1xuXHRcdHNvY2tldC5vZmYoJ2Vycm9yJywgcmVqZWN0KTtcblxuXHRcdGlmIChvcHRpb25zLnJlc29sdmVTb2NrZXQpIHtcblx0XHRcdHJlc29sdmUoe2FscG5Qcm90b2NvbDogc29ja2V0LmFscG5Qcm90b2NvbCwgc29ja2V0LCB0aW1lb3V0fSk7XG5cblx0XHRcdGlmICh0aW1lb3V0KSB7XG5cdFx0XHRcdGF3YWl0IFByb21pc2UucmVzb2x2ZSgpO1xuXHRcdFx0XHRzb2NrZXQuZW1pdCgndGltZW91dCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzb2NrZXQuZGVzdHJveSgpO1xuXHRcdFx0cmVzb2x2ZSh7YWxwblByb3RvY29sOiBzb2NrZXQuYWxwblByb3RvY29sLCB0aW1lb3V0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IG9uVGltZW91dCA9IGFzeW5jICgpID0+IHtcblx0XHR0aW1lb3V0ID0gdHJ1ZTtcblx0XHRjYWxsYmFjaygpO1xuXHR9O1xuXG5cdGNvbnN0IHNvY2tldFByb21pc2UgPSAoYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRzb2NrZXQgPSBhd2FpdCBjb25uZWN0KG9wdGlvbnMsIGNhbGxiYWNrKTtcblxuXHRcdFx0c29ja2V0Lm9uKCdlcnJvcicsIHJlamVjdCk7XG5cdFx0XHRzb2NrZXQub25jZSgndGltZW91dCcsIG9uVGltZW91dCk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0fVxuXHR9KSgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/.pnpm/resolve-alpn@1.2.1/node_modules/resolve-alpn/index.js\n");

/***/ })

};
;