import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    aliases: {
        VBtnSecondary: VBtn,
      },
      defaults: {
        VBtn: {
          color: 'primary',
          variant: 'text',
        },
        VBtnSecondary: {
          color: '#337566',
          variant: 'flat',
        },
      }
  })
  app.vueApp.use(vuetify)
})