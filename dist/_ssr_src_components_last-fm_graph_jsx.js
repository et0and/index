"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_components_last-fm_graph_jsx";
exports.ids = ["_ssr_src_components_last-fm_graph_jsx"];
exports.modules = {

/***/ "(ssr)/./src/components/last-fm/graph.jsx":
/*!******************************************!*\
  !*** ./src/components/last-fm/graph.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LastFMForceGraph: () => (/* binding */ LastFMForceGraph)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_last_fm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/last-fm */ \"(ssr)/./src/lib/last-fm.ts\");\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ \"(ssr)/./node_modules/.pnpm/d3@7.9.0/node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_force_graph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-force-graph */ \"(ssr)/./node_modules/.pnpm/react-force-graph@1.44.3_react@18.3.1_three@0.163.0/node_modules/react-force-graph/dist/react-force-graph.mjs\");\n/* harmony import */ var relative_time_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! relative-time-format */ \"(ssr)/./node_modules/.pnpm/relative-time-format@1.1.6/node_modules/relative-time-format/modules/RelativeTimeFormat.js\");\n/* harmony import */ var relative_time_format_locale_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! relative-time-format/locale/en */ \"(ssr)/./node_modules/.pnpm/relative-time-format@1.1.6/node_modules/relative-time-format/locale/en.json.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three */ \"(ssr)/./node_modules/.pnpm/three@0.163.0/node_modules/three/build/three.module.js\");\n\n\n\n\n\n\n\n\nconst LastFMForceGraph = ({ data })=>{\n    relative_time_format__WEBPACK_IMPORTED_MODULE_4__[\"default\"].addLocale(relative_time_format_locale_en__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const distance = 1000;\n    const reference = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();\n    const [isSelected, setIsSelected] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [selectedNode, setSelectedNode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [graph, setGraph] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (reference.current && reference.current.d3Force) {\n            const collide = d3__WEBPACK_IMPORTED_MODULE_2__.forceCollide().radius(10);\n            reference.current.d3Force(\"charge\").strength(-100).distanceMax(300);\n            reference.current.d3Force(\"collide\", collide);\n            reference.current.d3Force(\"link\").distance(100);\n        }\n    }, [\n        reference,\n        distance\n    ]);\n    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((node)=>{\n        const distance = 200;\n        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);\n        if (reference.current) {\n            reference.current.cameraPosition({\n                x: node.x * distRatio,\n                y: node.y * distRatio,\n                z: node.z * distRatio\n            }, node, 2000);\n        }\n        setSelectedNode(node);\n        setIsSelected(true);\n    }, [\n        reference\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function fetchData() {\n            const data = await _lib_last_fm__WEBPACK_IMPORTED_MODULE_1__.lastfm.getTopTracks();\n            console.log(_lib_last_fm__WEBPACK_IMPORTED_MODULE_1__.lastfm.getImageFromTrack);\n            console.log(data);\n            setGraph(data);\n        }\n        fetchData();\n    }, []);\n    const memoizedForceGraph = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_force_graph__WEBPACK_IMPORTED_MODULE_6__.ForceGraph3D, {\n            ref: reference,\n            graphData: graph,\n            showNavInfo: false,\n            linkColor: ()=>\"rgba(0,0,0,1)\",\n            backgroundColor: \"rgba(0,0,0,0)\",\n            onNodeClick: handleClick,\n            nodeThreeObject: (node)=>{\n                const mesh = new three__WEBPACK_IMPORTED_MODULE_7__.Mesh();\n                const sprite = new three__WEBPACK_IMPORTED_MODULE_7__.Sprite();\n                const texture = new three__WEBPACK_IMPORTED_MODULE_7__.TextureLoader().load(node.lastfm.images[3].url, (tex)=>{\n                    tex.needsUpdate = true;\n                    sprite.scale.set(tex.image.width / 20, tex.image.height / 20, 1);\n                });\n                sprite.material = new three__WEBPACK_IMPORTED_MODULE_7__.SpriteMaterial({\n                    map: texture,\n                    transparent: true\n                });\n                mesh.add(sprite);\n                return mesh;\n            },\n            width: window.innerWidth,\n            height: window.innerHeight\n        }, void 0, false, {\n            fileName: \"/Users/raphaelsalaja/Documents/Projects/raphaelsalaja/src/components/last-fm/graph.jsx\",\n            lineNumber: 61,\n            columnNumber: 4\n        }, undefined), [\n        graph,\n        handleClick\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-full w-full overflow-hidden\",\n        children: memoizedForceGraph\n    }, void 0, false, {\n        fileName: \"/Users/raphaelsalaja/Documents/Projects/raphaelsalaja/src/components/last-fm/graph.jsx\",\n        lineNumber: 97,\n        columnNumber: 3\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLENBQUNmO2dCQUNULE9BQU9EO1lBQ1I7WUFDQVcsT0FBT00sT0FBT0MsVUFBVTtZQUN4Qk4sUUFBUUssT0FBT0UsV0FBVzs7Ozs7dUJBRzVCO1FBQUNsRDtRQUFPUztLQUFZO0lBR3JCLHFCQUNDLDhEQUFDMEM7UUFBSUMsV0FBVTtrQkF5TGI3Qjs7Ozs7O0FBR0osRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JhcGhhZWxzYWxhamEvLi9zcmMvY29tcG9uZW50cy9sYXN0LWZtL2dyYXBoLmpzeD85MWE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhc3RmbSB9IGZyb20gJ0AvbGliL2xhc3QtZm0nXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMydcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcmNlR3JhcGgzRCB9IGZyb20gJ3JlYWN0LWZvcmNlLWdyYXBoJ1xuaW1wb3J0IFJlbGF0aXZlVGltZUZvcm1hdCBmcm9tICdyZWxhdGl2ZS10aW1lLWZvcm1hdCdcbmltcG9ydCBlbiBmcm9tICdyZWxhdGl2ZS10aW1lLWZvcm1hdC9sb2NhbGUvZW4nXG5pbXBvcnQgeyBNZXNoLCBTcHJpdGUsIFNwcml0ZU1hdGVyaWFsLCBUZXh0dXJlTG9hZGVyIH0gZnJvbSAndGhyZWUnXG5cbmV4cG9ydCBjb25zdCBMYXN0Rk1Gb3JjZUdyYXBoID0gKHsgZGF0YSB9KSA9PiB7XG5cdFJlbGF0aXZlVGltZUZvcm1hdC5hZGRMb2NhbGUoZW4pXG5cblx0Y29uc3QgZGlzdGFuY2UgPSAxMDAwXG5cdGNvbnN0IHJlZmVyZW5jZSA9IHVzZVJlZigpXG5cdGNvbnN0IFtpc1NlbGVjdGVkLCBzZXRJc1NlbGVjdGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbc2VsZWN0ZWROb2RlLCBzZXRTZWxlY3RlZE5vZGVdID0gdXNlU3RhdGUoKVxuXHRjb25zdCBbZ3JhcGgsIHNldEdyYXBoXSA9IHVzZVN0YXRlKClcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChyZWZlcmVuY2UuY3VycmVudCAmJiByZWZlcmVuY2UuY3VycmVudC5kM0ZvcmNlKSB7XG5cdFx0XHRjb25zdCBjb2xsaWRlID0gZDMuZm9yY2VDb2xsaWRlKCkucmFkaXVzKDEwKVxuXHRcdFx0cmVmZXJlbmNlLmN1cnJlbnQuZDNGb3JjZSgnY2hhcmdlJykuc3RyZW5ndGgoLTEwMCkuZGlzdGFuY2VNYXgoMzAwKVxuXHRcdFx0cmVmZXJlbmNlLmN1cnJlbnQuZDNGb3JjZSgnY29sbGlkZScsIGNvbGxpZGUpXG5cdFx0XHRyZWZlcmVuY2UuY3VycmVudC5kM0ZvcmNlKCdsaW5rJykuZGlzdGFuY2UoMTAwKVxuXHRcdH1cblx0fSwgW3JlZmVyZW5jZSwgZGlzdGFuY2VdKVxuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gdXNlQ2FsbGJhY2soXG5cdFx0KG5vZGUpID0+IHtcblx0XHRcdGNvbnN0IGRpc3RhbmNlID0gMjAwXG5cdFx0XHRjb25zdCBkaXN0UmF0aW8gPSAxICsgZGlzdGFuY2UgLyBNYXRoLmh5cG90KG5vZGUueCwgbm9kZS55LCBub2RlLnopXG5cblx0XHRcdGlmIChyZWZlcmVuY2UuY3VycmVudCkge1xuXHRcdFx0XHRyZWZlcmVuY2UuY3VycmVudC5jYW1lcmFQb3NpdGlvbihcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHR4OiBub2RlLnggKiBkaXN0UmF0aW8sXG5cdFx0XHRcdFx0XHR5OiBub2RlLnkgKiBkaXN0UmF0aW8sXG5cdFx0XHRcdFx0XHR6OiBub2RlLnogKiBkaXN0UmF0aW8sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRub2RlLFxuXHRcdFx0XHRcdDIwMDBcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdFx0c2V0U2VsZWN0ZWROb2RlKG5vZGUpXG5cdFx0XHRzZXRJc1NlbGVjdGVkKHRydWUpXG5cdFx0fSxcblx0XHRbcmVmZXJlbmNlXVxuXHQpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgbGFzdGZtLmdldFRvcFRyYWNrcygpXG5cdFx0XHRjb25zb2xlLmxvZyhsYXN0Zm0uZ2V0SW1hZ2VGcm9tVHJhY2spXG5cdFx0XHRjb25zb2xlLmxvZyhkYXRhKVxuXHRcdFx0c2V0R3JhcGgoZGF0YSlcblx0XHR9XG5cdFx0ZmV0Y2hEYXRhKClcblx0fSwgW10pXG5cblx0Y29uc3QgbWVtb2l6ZWRGb3JjZUdyYXBoID0gdXNlTWVtbyhcblx0XHQoKSA9PiAoXG5cdFx0XHQ8Rm9yY2VHcmFwaDNEXG5cdFx0XHRcdHJlZj17cmVmZXJlbmNlfVxuXHRcdFx0XHRncmFwaERhdGE9e2dyYXBofVxuXHRcdFx0XHRzaG93TmF2SW5mbz17ZmFsc2V9XG5cdFx0XHRcdGxpbmtDb2xvcj17KCkgPT4gJ3JnYmEoMCwwLDAsMSknfVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I9eydyZ2JhKDAsMCwwLDApJ31cblx0XHRcdFx0b25Ob2RlQ2xpY2s9e2hhbmRsZUNsaWNrfVxuXHRcdFx0XHRub2RlVGhyZWVPYmplY3Q9eyhub2RlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbWVzaCA9IG5ldyBNZXNoKClcblx0XHRcdFx0XHRjb25zdCBzcHJpdGUgPSBuZXcgU3ByaXRlKClcblx0XHRcdFx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmVMb2FkZXIoKS5sb2FkKFxuXHRcdFx0XHRcdFx0bm9kZS5sYXN0Zm0uaW1hZ2VzWzNdLnVybCxcblx0XHRcdFx0XHRcdCh0ZXgpID0+IHtcblx0XHRcdFx0XHRcdFx0dGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHRzcHJpdGUuc2NhbGUuc2V0KFxuXHRcdFx0XHRcdFx0XHRcdHRleC5pbWFnZS53aWR0aCAvIDIwLFxuXHRcdFx0XHRcdFx0XHRcdHRleC5pbWFnZS5oZWlnaHQgLyAyMCxcblx0XHRcdFx0XHRcdFx0XHQxXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0c3ByaXRlLm1hdGVyaWFsID0gbmV3IFNwcml0ZU1hdGVyaWFsKHtcblx0XHRcdFx0XHRcdG1hcDogdGV4dHVyZSxcblx0XHRcdFx0XHRcdHRyYW5zcGFyZW50OiB0cnVlLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0bWVzaC5hZGQoc3ByaXRlKVxuXHRcdFx0XHRcdHJldHVybiBtZXNoXG5cdFx0XHRcdH19XG5cdFx0XHRcdHdpZHRoPXt3aW5kb3cuaW5uZXJXaWR0aH1cblx0XHRcdFx0aGVpZ2h0PXt3aW5kb3cuaW5uZXJIZWlnaHR9XG5cdFx0XHQvPlxuXHRcdCksXG5cdFx0W2dyYXBoLCBoYW5kbGVDbGlja11cblx0KVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGgtZnVsbCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuJz5cblx0XHRcdHsvKiA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cblx0XHRcdFx0e2lzU2VsZWN0ZWQgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHotMTAgdy05NiBwLTQnPlxuXHRcdFx0XHRcdFx0PENhcmRcblx0XHRcdFx0XHRcdFx0aW5pdGlhbD17e1xuXHRcdFx0XHRcdFx0XHRcdGZpbHRlcjogJ2JsdXIoNHB4KScsXG5cdFx0XHRcdFx0XHRcdFx0eTogMTAwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXI6ICdibHVyKDApJyxcblx0XHRcdFx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGV4aXQ9e3tcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXI6ICdibHVyKDRweCknLFxuXHRcdFx0XHRcdFx0XHRcdHk6IDEwMCxcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNzUsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbm9uZSdcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PENhcmRIZWFkZXIgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGJnLW11dGVkLzUwJz5cblx0XHRcdFx0XHRcdFx0XHQ8Q2FyZFRpdGxlIGNsYXNzTmFtZT0nZ3JvdXAgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMiB0ZXh0LWxnJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nbWF4LXctWzIwMHB4XSBvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctZWxsaXBzaXMgd2hpdGVzcGFjZS1ub3dyYXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7c2VsZWN0ZWROb2RlLmFyZW5hLnRpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBzZWxlY3RlZE5vZGUuYXJlbmEudGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6IHNlbGVjdGVkTm9kZS5hcmVuYVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZ2VuZXJhdGVkX3RpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPSdpY29uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3JvdW5kZWQtbm9uZSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldElzU2VsZWN0ZWQoZmFsc2UpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDcm9zczFJY29uIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L0NhcmRUaXRsZT5cblx0XHRcdFx0XHRcdFx0PC9DYXJkSGVhZGVyPlxuXHRcdFx0XHRcdFx0XHQ8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPSdwLTAgdGV4dC1zbSc+XG5cdFx0XHRcdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZE5vZGUuYXJlbmEuY2xhc3MgPT09ICdUZXh0JyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5pdGlhbD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNjYWxlOiAwLjgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5MZWZ0OiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Ub3A6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5Cb3R0b206IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWx0ZXI6ICdibHVyKDRweCknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWx0ZXI6ICdibHVyKDApJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogMzAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IDI0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luUmlnaHQ6IDI0LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWFyZ2luVG9wOiAyNCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4aXQ9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkxlZnQ6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXJnaW5SaWdodDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpblRvcDogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmdpbkJvdHRvbTogMCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWx0ZXI6ICdibHVyKDRweCknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAwLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naC1mdWxsIHctZnVsbCByb3VuZGVkLW5vbmUgYm9yZGVyJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9Jydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWROb2RlLmFyZW5hLmNvbnRlbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlYWRPbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2dyaWQgZ2FwLTMgcC02Jz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tdXRlZC1mb3JlZ3JvdW5kJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZGRlZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtzZWxlY3RlZE5vZGUuYXJlbmEuY3JlYXRlZF9hdCA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWxhdGl2ZVRpbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWROb2RlLmFyZW5hLmNyZWF0ZWRfYXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWxhdGl2ZVRpbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5ldyBEYXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWROb2RlLmFyZW5hLm93bmVyLmNyZWF0ZWRfYXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1tdXRlZC1mb3JlZ3JvdW5kJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRNb2RpZmllZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWxhdGl2ZVRpbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmV3IERhdGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWROb2RlLmFyZW5hLnVwZGF0ZWRfYXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtbXV0ZWQtZm9yZWdyb3VuZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Qnlcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWROb2RlLmFyZW5hLnVzZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuZnVsbF9uYW1lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncC02IHB0LTAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdvdXRsaW5lJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3ctZnVsbCByb3VuZGVkLW5vbmUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZE5vZGUuYXJlbmEuY2xhc3MgPT09XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnY2hhbm5lbCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5vcGVuKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaHR0cHM6Ly93d3cuYXJlLm5hLycgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdGVkTm9kZS5hcmVuYS51c2VyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuc2x1ZyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Jy8nICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZE5vZGUuYXJlbmEuc2x1Zyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J19ibGFuaydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93Lm9wZW4oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdodHRwczovL3d3dy5hcmUubmEvYmxvY2svJyArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0ZWROb2RlLmFyZW5hLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnX2JsYW5rJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Vmlld1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8L0NhcmQ+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+ICovfVxuXG5cdFx0XHR7bWVtb2l6ZWRGb3JjZUdyYXBofVxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwibmFtZXMiOlsibGFzdGZtIiwiZDMiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkZvcmNlR3JhcGgzRCIsIlJlbGF0aXZlVGltZUZvcm1hdCIsImVuIiwiTWVzaCIsIlNwcml0ZSIsIlNwcml0ZU1hdGVyaWFsIiwiVGV4dHVyZUxvYWRlciIsIkxhc3RGTUZvcmNlR3JhcGgiLCJkYXRhIiwiYWRkTG9jYWxlIiwiZGlzdGFuY2UiLCJyZWZlcmVuY2UiLCJpc1NlbGVjdGVkIiwic2V0SXNTZWxlY3RlZCIsInNlbGVjdGVkTm9kZSIsInNldFNlbGVjdGVkTm9kZSIsImdyYXBoIiwic2V0R3JhcGgiLCJjdXJyZW50IiwiZDNGb3JjZSIsImNvbGxpZGUiLCJmb3JjZUNvbGxpZGUiLCJyYWRpdXMiLCJzdHJlbmd0aCIsImRpc3RhbmNlTWF4IiwiaGFuZGxlQ2xpY2siLCJub2RlIiwiZGlzdFJhdGlvIiwiTWF0aCIsImh5cG90IiwieCIsInkiLCJ6IiwiY2FtZXJhUG9zaXRpb24iLCJmZXRjaERhdGEiLCJnZXRUb3BUcmFja3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW1hZ2VGcm9tVHJhY2siLCJtZW1vaXplZEZvcmNlR3JhcGgiLCJyZWYiLCJncmFwaERhdGEiLCJzaG93TmF2SW5mbyIsImxpbmtDb2xvciIsImJhY2tncm91bmRDb2xvciIsIm9uTm9kZUNsaWNrIiwibm9kZVRocmVlT2JqZWN0IiwibWVzaCIsInNwcml0ZSIsInRleHR1cmUiLCJsb2FkIiwiaW1hZ2VzIiwidXJsIiwidGV4IiwibmVlZHNVcGRhdGUiLCJzY2FsZSIsInNldCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXRlcmlhbCIsIm1hcCIsInRyYW5zcGFyZW50IiwiYWRkIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/components/last-fm/graph.jsx\n");

/***/ }),

/***/ "(ssr)/./src/lib/last-fm.ts":
/*!****************************!*\
  !*** ./src/lib/last-fm.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lastfm: () => (/* binding */ lastfm)
/* harmony export */ });
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/client/app-call-server */ "(ssr)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/client/app-call-server.js");
/* harmony import */ var next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-client-wrapper */ "(ssr)/./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.5_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js");



function __build_action__(action, args) {
  return (0,next_dist_client_app_call_server__WEBPACK_IMPORTED_MODULE_0__.callServer)(action.$$id, args)
}

/* __next_internal_action_entry_do_not_use__ {"0b2c10dd1c5a04c085bd69ea0616f837d4b560e4":"lastfm"} */ var lastfm = (0,private_next_rsc_action_client_wrapper__WEBPACK_IMPORTED_MODULE_1__.createServerReference)("0b2c10dd1c5a04c085bd69ea0616f837d4b560e4");




/***/ })

};
;