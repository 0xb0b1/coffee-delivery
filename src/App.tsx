import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/defaultTheme'
import { GlobalStyle } from './styles/global'
import { Card } from './components/Card'

import expresso from './assets/expresso.svg'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <Card
        name="Expresso Tradicional"
        tags={['tradicional']}
        image={expresso}
        price={99}
        description="O tradicional café feito com água quente e grãos moídos"
      />
    </ThemeProvider>
  )
}

export default App
