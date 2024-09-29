
import { ThemeProvider } from './context/ThemeContext';
import Pages from './pages';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Pages />
    </ThemeProvider>
  );
}


export default App;