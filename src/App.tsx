import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
