require("./bootstrap");

window.Vue = require("vue").default;

import { createApp } from "vue";

import Example from "./components/ExampleComponent.vue";

createApp({
    components: {
        "example-component": Example,
    },
}).mount("#app");
