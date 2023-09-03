import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'

import { Provider as EduardoslgProvider } from '@eduardoslg/core'
import { Provider } from '@siakit/core'

import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <EduardoslgProvider>
        <Provider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </EduardoslgProvider>
    </ThemeProvider>
  )
}
