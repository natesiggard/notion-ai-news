"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { Client  } = __webpack_require__(891);
const notion = new Client({
    auth: process.env.NOTION_API_KEY
});
module.exports = notion;


/***/ }),

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./src/notion.js
var notion = __webpack_require__(340);
var notion_default = /*#__PURE__*/__webpack_require__.n(notion);
;// CONCATENATED MODULE: ./src/config.js
const NOTION_DATABASE_ID = "a7cd41b17f8849debf6f5c5c7b9644d7";

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
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


/***/ }),

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664], () => (__webpack_exec__(999)));
module.exports = __webpack_exports__;

})();