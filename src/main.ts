import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'highlight.js/styles/base16/onedark.css'
import hljs from 'highlight.js/lib/core'
import csharp from 'highlight.js/lib/languages/csharp'
import hljsVuePlugin from "@highlightjs/vue-plugin"

hljs.registerLanguage('csharp', csharp);

let app = createApp(App)

app.use(hljsVuePlugin)

app.mount('#app')