import Vue from "vue";
import VueI18n from "vue-i18n";

import fr from "./fr.json";
import en from "./en.json";

Vue.use(VueI18n);

export default new VueI18n({
  fallbackLocale: "en",
  messages: { fr, en }
});
