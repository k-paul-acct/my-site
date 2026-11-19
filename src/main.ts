import { createApp } from "vue";
import highlightPlugin from "@highlightjs/vue-plugin";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";

import "@fontsource/fira-mono/latin-400.css";
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-400-italic.css";
import "highlight.js/styles/base16/onedark.css";
import "./assets/main.css";
import App from "./App.vue";

hljs.registerLanguage("csharp", csharp);

createApp(App).use(highlightPlugin).mount("#app");
