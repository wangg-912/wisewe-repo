import WButton from "./src/Button.vue";
import { App } from "vue";

const components = [WButton];

const install = function(app: App) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};

export { WButton };
