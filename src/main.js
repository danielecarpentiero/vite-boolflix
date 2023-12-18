import { createApp } from "vue";
import App from "./App.vue";
import "./style.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

library.add(faUserSecret, faStar, emptyStar);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
