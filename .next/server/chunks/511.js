"use strict";
exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 58511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75182);
/* harmony import */ var _CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const CustomCalendar = ({ children, title, icon, value })=>{
    const [dropdown, setDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const handleClickOutside = (e)=>{
        if (e.target.classList.contains("react-datepicker__day") || e.target.classList.contains("react-datepicker__time-list-item") && e.target.classList.contains("react-datepicker__day")) {
            console.log(1);
            setTimeout(()=>{
                setDropdown(false);
            }, 100);
        }
    };
    const handleClickOpen = ()=>{
        setDropdown(!dropdown);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.addEventListener("mouseup", handleClickOutside);
    }, [
        dropdown,
        selected
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().select),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: (_CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().selected),
                    onClick: handleClickOpen,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: icon,
                            alt: "icon",
                            width: 0,
                            height: 0
                        }),
                        title,
                        ":",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: value
                        })
                    ]
                })
            }),
            dropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CustomSelect_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_3___default().body),
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomCalendar);


/***/ })

};
;