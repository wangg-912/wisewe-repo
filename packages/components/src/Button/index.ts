import { App } from 'vue'
import WButton from './button.vue'

WButton.install = (app: App) => {
  app.component(WButton.name, WButton)
}

export default WButton
