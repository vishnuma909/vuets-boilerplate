### Vuetify Configuration
Documentation -> https://vuetifyjs.com/

Installation -> Vue CLI

Supported Browsers
Chromium (Chrome, Edge Insider) | Supported
Edge	                        | Supported
Firefox	                        | Supported
Safari 10+	                    | Supported
IE11/Safari 9	                | Supported with polyfill
IE9 / IE10	                    | Not supported

## Unfortunately Vue CLI doesn’t automatically bring IE11 compatibility in which you may encounter various errors (such as Symbol is not defined). To assist in resolving these errors you need to manually add transpileDependencies parameter in vue.config.js
transpileDependencies: ['vuetify']