exports.id = 344;
exports.ids = [344];
exports.modules = {

/***/ 27461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Navigation: () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Header/Navigation/Navigation.module.scss
var Navigation_module = __webpack_require__(63287);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/img/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.91adf6a0.svg","height":64,"width":64,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(27870);
// EXTERNAL MODULE: ./app/i18n/i18n.tsx
var i18n = __webpack_require__(21161);
// EXTERNAL MODULE: ./components/UI/CustomSelect/CustomSelect.tsx
var CustomSelect = __webpack_require__(25605);
// EXTERNAL MODULE: ./public/img/arrow.svg
var arrow = __webpack_require__(28482);
// EXTERNAL MODULE: ./store/translate.tsx
var translate = __webpack_require__(95068);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
;// CONCATENATED MODULE: ./components/Header/Translate/Translate.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const Translate = ()=>{
    const dispatch = (0,lib.useDispatch)();
    const { language } = (0,lib.useSelector)((state)=>state.translate);
    const options = [
        {
            value: "ka",
            label: "ქართული"
        },
        {
            value: "en",
            label: "English"
        }
    ];
    (0,react_.useEffect)(()=>{
        i18n/* default */.Z.changeLanguage(language);
    }, [
        dispatch,
        language
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(CustomSelect/* default */.Z, {
        icon: arrow/* default */.Z,
        title: language === "ka" ? "ქართული" : "English",
        options: options,
        selected: "",
        onChange: (e)=>{
            dispatch(translate/* siteTranslateAction */.F.changeLanguage(e));
        }
    });
};
/* harmony default export */ const Translate_Translate = (Translate);

;// CONCATENATED MODULE: ./components/Header/Navigation/Navigation.tsx
/* __next_internal_client_entry_do_not_use__ Navigation auto */ 






const Navigation = ()=>{
    const { t } = (0,es/* useTranslation */.$G)();
    const data = [
        {
            id: 3532,
            title: t("menu.home"),
            url: "/"
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Navigation_module_default()).navigation,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-auto d-flex align-items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Navigation_module_default()).logo,
                            children: [
                                "MING",
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo,
                                    alt: "icon",
                                    width: 20,
                                    height: 20
                                }),
                                ".GE"
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-6 d-flex align-items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (Navigation_module_default()).list,
                            children: data && data.map((item)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (Navigation_module_default()).item,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.url,
                                        className: (Navigation_module_default()).link,
                                        children: item.title
                                    })
                                }, item.id);
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12 col-lg-4 d-flex justify-content-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Translate_Translate, {})
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 25605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75182);
/* harmony import */ var _CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27870);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useCityTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69357);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const CustomSelect = ({ options, title, icon, onChange, selected })=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const [dropdown, setDropdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // const [selected, setSelected] = useState(t('filter.placeholder'))
    const filter = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.filterData);
    function handleOptionClick(e) {
        setDropdown(false);
        // setSelected(e.target.getAttribute("data-name"))
        onChange(e.target.getAttribute("data-value"));
    }
    const handleClickOutside = (e)=>{
        if (!e.target.classList.contains((_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item)) && !e.target.classList.contains((_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().selected))) {
            setDropdown(false);
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
        className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().select),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().selected),
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
                            children: (0,_hooks_useCityTitle__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(selected)
                        })
                    ]
                })
            }),
            dropdown && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().body),
                children: options?.map((item)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_CustomSelect_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
                        "data-value": item.value,
                        "data-name": item.label,
                        onClick: handleOptionClick,
                        children: item.label
                    }, item.value);
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSelect);


/***/ }),

/***/ 69357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27870);
/* __next_internal_client_entry_do_not_use__ default auto */ 

const useCityTitle = (title)=>{
    const [myTitle, setMyTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$G)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        switch(title){
            case "tbilisi":
                setMyTitle("city.tbilisi");
                break;
            case "batumi":
                setMyTitle("city.batumi");
                break;
            case "kutaisi":
                setMyTitle("city.kutaisi");
                break;
            case "poti":
                setMyTitle("city.poti");
                break;
            default:
                setMyTitle(title);
                break;
        }
    }, [
        title
    ]);
    return t(myTitle);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCityTitle);


/***/ }),

/***/ 63014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* __next_internal_client_entry_do_not_use__ default auto */ const useDateFormat = (date)=>{
    let itemDate = new Date(date);
    const dateFormat = {
        getMonth: ()=>{
            let month = itemDate.getMonth() + 1;
            return month < 10 ? "0" + month : month;
        },
        getDate: ()=>{
            let date = itemDate.getDate();
            return date < 10 ? "0" + date : date;
        },
        getHours: ()=>{
            let horse = itemDate.getHours();
            return horse < 10 ? "0" + horse : horse;
        },
        getMinutes: ()=>{
            let minutes = itemDate.getMinutes();
            return minutes < 10 ? "0" + minutes : minutes;
        },
        getYear: ()=>{
            let year = itemDate.getFullYear();
            return year;
        }
    };
    return dateFormat;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDateFormat);


/***/ }),

/***/ 63287:
/***/ ((module) => {

// Exports
module.exports = {
	"navigation": "Navigation_navigation__XPn3R",
	"logo": "Navigation_logo__LRX9_",
	"list": "Navigation_list__5Ikgp",
	"item": "Navigation_item__RoRjd",
	"link": "Navigation_link__KjA2e",
	"login": "Navigation_login__iF0y8"
};


/***/ }),

/***/ 28482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/arrow.da8b9579.svg","height":24,"width":24,"blurWidth":0,"blurHeight":0});

/***/ })

};
;