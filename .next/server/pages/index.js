(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 934:
/***/ ((module) => {

// Exports
module.exports = {
	"newsItem": "newsItem_newsItem__vKXPg"
};


/***/ }),

/***/ 340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const { Client  } = __webpack_require__(891);
const notion = new Client({
    auth: process.env.NOTION_API_KEY
});
module.exports = notion;


/***/ }),

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/notion.js
var notion = __webpack_require__(340);
var notion_default = /*#__PURE__*/__webpack_require__.n(notion);
;// CONCATENATED MODULE: ./src/config.js
const NOTION_DATABASE_ID = "a7cd41b17f8849debf6f5c5c7b9644d7";

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/pages/newsItem.module.css
var newsItem_module = __webpack_require__(934);
var newsItem_module_default = /*#__PURE__*/__webpack_require__.n(newsItem_module);
;// CONCATENATED MODULE: ./src/pages/index.js



 // Import the constant from config.js

 // Import the CSS module
// Helper function to format date and time
const formatDateAndTime = (dateString)=>{
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};
async function getServerSideProps(context) {
    const selectedTag = context.query.tag; // Get the selected tag from the query parameter
    const databaseId = NOTION_DATABASE_ID;
    const response = await notion_default().databases.query({
        database_id: databaseId
    });
    // Filter the results based on the selected tag (if provided)
    const filteredResults = selectedTag ? response.results.filter((page)=>{
        const tags = page.properties.Tags?.multi_select.map((tag)=>tag.name) || [];
        return tags.includes(selectedTag);
    }) : response.results;
    const results = filteredResults.map((page)=>{
        // Extract and format data from the Notion page
        const name = page.properties.Name?.title[0]?.plain_text || "";
        const tags = page.properties.Tags?.multi_select.map((tag)=>tag.name) || [];
        const url = page.properties.URL?.url || "";
        const publishedDate = page.properties["Published Date"]?.date?.start;
        const formattedPublishedDate = publishedDate ? formatDateAndTime(publishedDate) : "";
        const bookmarkedDate = page.created_time;
        const formattedBookmarkedDate = formatDateAndTime(bookmarkedDate);
        return {
            name,
            tags,
            url,
            publishedDate: formattedPublishedDate,
            bookmarkedDate: formattedBookmarkedDate
        };
    });
    return {
        props: {
            results
        }
    };
}
function Home({ results  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const selectedTag = router.query.tag; // Get the selected tag from the query parameter
    // Extract all unique tags from the results
    const uniqueTags = new Set();
    results.forEach((result)=>{
        result.tags.forEach((tag)=>uniqueTags.add(tag));
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                children: "AI News"
            }),
            !selectedTag && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "tagsList",
                children: Array.from(uniqueTags).map((tag, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "#",
                                onClick: (e)=>{
                                    e.preventDefault();
                                    router.push(`/?tag=${encodeURIComponent(tag)}`);
                                },
                                children: tag
                            }),
                            index < uniqueTags.size - 1 && ", "
                        ]
                    }, index))
            }),
            selectedTag && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "showAll",
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "/",
                    children: "Show All"
                })
            }),
            results.map((result, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (newsItem_module_default()).newsItem,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "bmDate",
                            children: result.bookmarkedDate
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: result.name
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: result.tags.map((tag, tagIndex)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                            href: "#",
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                router.push(`/?tag=${encodeURIComponent(tag)}`);
                                            },
                                            children: tag
                                        }),
                                        tagIndex < result.tags.length - 1 && ", "
                                    ]
                                }, tagIndex))
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: result.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Read More"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                "Published: ",
                                result.publishedDate
                            ]
                        })
                    ]
                }, index))
        ]
    });
}


/***/ }),

/***/ 891:
/***/ ((module) => {

"use strict";
module.exports = require("@notionhq/client");

/***/ }),

/***/ 280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664], () => (__webpack_exec__(999)));
module.exports = __webpack_exports__;

})();