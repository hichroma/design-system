import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { injectGlobal } from 'styled-components'
import { ThemeProvider, Box } from '../src'

setOptions({
  name: 'Design System',
  url: 'https://pricelinelabs.github.io/design-system/',
  showDownPanel: false
})

injectGlobal([], {
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    lineHeight: 1.5,
    margin: 0
  }
})

const Decorator = props => (
  <ThemeProvider>
    <Box p={3}>
      {props.children}
    </Box>
  </ThemeProvider>
)

addDecorator(story => (
  <Decorator children={story()} />
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
