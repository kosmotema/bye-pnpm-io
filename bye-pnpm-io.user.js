// ==UserScript==
// @name        Bye, pnpm.io
// @description Redirects from pnpm.io to pnpm.ml to bypass region blocking #stopwar #stopcensorship
// @version     1.0
// @author      kosmotema
// @namespace   kosmotema.dev
// @license     Mozilla Public License 2.0
// @downloadURL https://raw.github.com/kosmotema/bye-pnpm-io/main/bye-pnpm-io.user.js
// @homepageURL https://github.com/kosmotema/bye-pnpm-io
// @match       *://pnpm.io/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

window.location.hostname = 'pnpm.ml';
