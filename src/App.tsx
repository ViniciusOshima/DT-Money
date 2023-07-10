import { ThemeProvider } from 'styled-components/dist/base'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <h1>eai</h1>
    </ThemeProvider>
  )
}
