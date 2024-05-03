"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/p-cancelable@4.0.1";
exports.ids = ["vendor-chunks/p-cancelable@4.0.1"];
exports.modules = {

/***/ "(action-browser)/./node_modules/.pnpm/p-cancelable@4.0.1/node_modules/p-cancelable/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/p-cancelable@4.0.1/node_modules/p-cancelable/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CancelError: () => (/* binding */ CancelError),\n/* harmony export */   \"default\": () => (/* binding */ PCancelable)\n/* harmony export */ });\nclass CancelError extends Error {\n\tconstructor(reason) {\n\t\tsuper(reason || 'Promise was canceled');\n\t\tthis.name = 'CancelError';\n\t}\n\n\tget isCanceled() {\n\t\treturn true;\n\t}\n}\n\nconst promiseState = Object.freeze({\n\tpending: Symbol('pending'),\n\tcanceled: Symbol('canceled'),\n\tresolved: Symbol('resolved'),\n\trejected: Symbol('rejected'),\n});\n\nclass PCancelable {\n\tstatic fn(userFunction) {\n\t\treturn (...arguments_) => new PCancelable((resolve, reject, onCancel) => {\n\t\t\targuments_.push(onCancel);\n\t\t\tuserFunction(...arguments_).then(resolve, reject);\n\t\t});\n\t}\n\n\t#cancelHandlers = [];\n\t#rejectOnCancel = true;\n\t#state = promiseState.pending;\n\t#promise;\n\t#reject;\n\n\tconstructor(executor) {\n\t\tthis.#promise = new Promise((resolve, reject) => {\n\t\t\tthis.#reject = reject;\n\n\t\t\tconst onResolve = value => {\n\t\t\t\tif (this.#state !== promiseState.canceled || !onCancel.shouldReject) {\n\t\t\t\t\tresolve(value);\n\t\t\t\t\tthis.#setState(promiseState.resolved);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tconst onReject = error => {\n\t\t\t\tif (this.#state !== promiseState.canceled || !onCancel.shouldReject) {\n\t\t\t\t\treject(error);\n\t\t\t\t\tthis.#setState(promiseState.rejected);\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tconst onCancel = handler => {\n\t\t\t\tif (this.#state !== promiseState.pending) {\n\t\t\t\t\tthrow new Error(`The \\`onCancel\\` handler was attached after the promise ${this.#state.description}.`);\n\t\t\t\t}\n\n\t\t\t\tthis.#cancelHandlers.push(handler);\n\t\t\t};\n\n\t\t\tObject.defineProperties(onCancel, {\n\t\t\t\tshouldReject: {\n\t\t\t\t\tget: () => this.#rejectOnCancel,\n\t\t\t\t\tset: boolean => {\n\t\t\t\t\t\tthis.#rejectOnCancel = boolean;\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t});\n\n\t\t\texecutor(onResolve, onReject, onCancel);\n\t\t});\n\t}\n\n\t// eslint-disable-next-line unicorn/no-thenable\n\tthen(onFulfilled, onRejected) {\n\t\treturn this.#promise.then(onFulfilled, onRejected);\n\t}\n\n\tcatch(onRejected) {\n\t\treturn this.#promise.catch(onRejected);\n\t}\n\n\tfinally(onFinally) {\n\t\treturn this.#promise.finally(onFinally);\n\t}\n\n\tcancel(reason) {\n\t\tif (this.#state !== promiseState.pending) {\n\t\t\treturn;\n\t\t}\n\n\t\tthis.#setState(promiseState.canceled);\n\n\t\tif (this.#cancelHandlers.length > 0) {\n\t\t\ttry {\n\t\t\t\tfor (const handler of this.#cancelHandlers) {\n\t\t\t\t\thandler();\n\t\t\t\t}\n\t\t\t} catch (error) {\n\t\t\t\tthis.#reject(error);\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\n\t\tif (this.#rejectOnCancel) {\n\t\t\tthis.#reject(new CancelError(reason));\n\t\t}\n\t}\n\n\tget isCanceled() {\n\t\treturn this.#state === promiseState.canceled;\n\t}\n\n\t#setState(state) {\n\t\tif (this.#state === promiseState.pending) {\n\t\t\tthis.#state = state;\n\t\t}\n\t}\n}\n\nObject.setPrototypeOf(PCancelable.prototype, Promise.prototype);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy8ucG5wbS9wLWNhbmNlbGFibGVANC4wLjEvbm9kZV9tb2R1bGVzL3AtY2FuY2VsYWJsZS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnRkFBZ0Ysd0JBQXdCO0FBQ3hHOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixLQUFLO0FBQ0wsSUFBSTs7QUFFSjtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JhcGhhZWxzYWxhamEvLi9ub2RlX21vZHVsZXMvLnBucG0vcC1jYW5jZWxhYmxlQDQuMC4xL25vZGVfbW9kdWxlcy9wLWNhbmNlbGFibGUvaW5kZXguanM/YjEzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ2FuY2VsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKHJlYXNvbikge1xuXHRcdHN1cGVyKHJlYXNvbiB8fCAnUHJvbWlzZSB3YXMgY2FuY2VsZWQnKTtcblx0XHR0aGlzLm5hbWUgPSAnQ2FuY2VsRXJyb3InO1xuXHR9XG5cblx0Z2V0IGlzQ2FuY2VsZWQoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuY29uc3QgcHJvbWlzZVN0YXRlID0gT2JqZWN0LmZyZWV6ZSh7XG5cdHBlbmRpbmc6IFN5bWJvbCgncGVuZGluZycpLFxuXHRjYW5jZWxlZDogU3ltYm9sKCdjYW5jZWxlZCcpLFxuXHRyZXNvbHZlZDogU3ltYm9sKCdyZXNvbHZlZCcpLFxuXHRyZWplY3RlZDogU3ltYm9sKCdyZWplY3RlZCcpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBDYW5jZWxhYmxlIHtcblx0c3RhdGljIGZuKHVzZXJGdW5jdGlvbikge1xuXHRcdHJldHVybiAoLi4uYXJndW1lbnRzXykgPT4gbmV3IFBDYW5jZWxhYmxlKChyZXNvbHZlLCByZWplY3QsIG9uQ2FuY2VsKSA9PiB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2gob25DYW5jZWwpO1xuXHRcdFx0dXNlckZ1bmN0aW9uKC4uLmFyZ3VtZW50c18pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcblx0XHR9KTtcblx0fVxuXG5cdCNjYW5jZWxIYW5kbGVycyA9IFtdO1xuXHQjcmVqZWN0T25DYW5jZWwgPSB0cnVlO1xuXHQjc3RhdGUgPSBwcm9taXNlU3RhdGUucGVuZGluZztcblx0I3Byb21pc2U7XG5cdCNyZWplY3Q7XG5cblx0Y29uc3RydWN0b3IoZXhlY3V0b3IpIHtcblx0XHR0aGlzLiNwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy4jcmVqZWN0ID0gcmVqZWN0O1xuXG5cdFx0XHRjb25zdCBvblJlc29sdmUgPSB2YWx1ZSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLiNzdGF0ZSAhPT0gcHJvbWlzZVN0YXRlLmNhbmNlbGVkIHx8ICFvbkNhbmNlbC5zaG91bGRSZWplY3QpIHtcblx0XHRcdFx0XHRyZXNvbHZlKHZhbHVlKTtcblx0XHRcdFx0XHR0aGlzLiNzZXRTdGF0ZShwcm9taXNlU3RhdGUucmVzb2x2ZWQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBvblJlamVjdCA9IGVycm9yID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuI3N0YXRlICE9PSBwcm9taXNlU3RhdGUuY2FuY2VsZWQgfHwgIW9uQ2FuY2VsLnNob3VsZFJlamVjdCkge1xuXHRcdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0dGhpcy4jc2V0U3RhdGUocHJvbWlzZVN0YXRlLnJlamVjdGVkKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3Qgb25DYW5jZWwgPSBoYW5kbGVyID0+IHtcblx0XHRcdFx0aWYgKHRoaXMuI3N0YXRlICE9PSBwcm9taXNlU3RhdGUucGVuZGluZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihgVGhlIFxcYG9uQ2FuY2VsXFxgIGhhbmRsZXIgd2FzIGF0dGFjaGVkIGFmdGVyIHRoZSBwcm9taXNlICR7dGhpcy4jc3RhdGUuZGVzY3JpcHRpb259LmApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy4jY2FuY2VsSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblx0XHRcdH07XG5cblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG9uQ2FuY2VsLCB7XG5cdFx0XHRcdHNob3VsZFJlamVjdDoge1xuXHRcdFx0XHRcdGdldDogKCkgPT4gdGhpcy4jcmVqZWN0T25DYW5jZWwsXG5cdFx0XHRcdFx0c2V0OiBib29sZWFuID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuI3JlamVjdE9uQ2FuY2VsID0gYm9vbGVhbjtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cblx0XHRcdGV4ZWN1dG9yKG9uUmVzb2x2ZSwgb25SZWplY3QsIG9uQ2FuY2VsKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXRoZW5hYmxlXG5cdHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcy4jcHJvbWlzZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcblx0fVxuXG5cdGNhdGNoKG9uUmVqZWN0ZWQpIHtcblx0XHRyZXR1cm4gdGhpcy4jcHJvbWlzZS5jYXRjaChvblJlamVjdGVkKTtcblx0fVxuXG5cdGZpbmFsbHkob25GaW5hbGx5KSB7XG5cdFx0cmV0dXJuIHRoaXMuI3Byb21pc2UuZmluYWxseShvbkZpbmFsbHkpO1xuXHR9XG5cblx0Y2FuY2VsKHJlYXNvbikge1xuXHRcdGlmICh0aGlzLiNzdGF0ZSAhPT0gcHJvbWlzZVN0YXRlLnBlbmRpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLiNzZXRTdGF0ZShwcm9taXNlU3RhdGUuY2FuY2VsZWQpO1xuXG5cdFx0aWYgKHRoaXMuI2NhbmNlbEhhbmRsZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGZvciAoY29uc3QgaGFuZGxlciBvZiB0aGlzLiNjYW5jZWxIYW5kbGVycykge1xuXHRcdFx0XHRcdGhhbmRsZXIoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0dGhpcy4jcmVqZWN0KGVycm9yKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLiNyZWplY3RPbkNhbmNlbCkge1xuXHRcdFx0dGhpcy4jcmVqZWN0KG5ldyBDYW5jZWxFcnJvcihyZWFzb24pKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgaXNDYW5jZWxlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy4jc3RhdGUgPT09IHByb21pc2VTdGF0ZS5jYW5jZWxlZDtcblx0fVxuXG5cdCNzZXRTdGF0ZShzdGF0ZSkge1xuXHRcdGlmICh0aGlzLiNzdGF0ZSA9PT0gcHJvbWlzZVN0YXRlLnBlbmRpbmcpIHtcblx0XHRcdHRoaXMuI3N0YXRlID0gc3RhdGU7XG5cdFx0fVxuXHR9XG59XG5cbk9iamVjdC5zZXRQcm90b3R5cGVPZihQQ2FuY2VsYWJsZS5wcm90b3R5cGUsIFByb21pc2UucHJvdG90eXBlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/.pnpm/p-cancelable@4.0.1/node_modules/p-cancelable/index.js\n");

/***/ })

};
;