// .storybook/manager.js

import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'
import { myThema } from './my-thema.css'

addons.setConfig({
  theme: { ...themes.dark, ...myThema },
})
