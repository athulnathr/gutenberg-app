import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GenrePage from './pages/Genre';
import BookListPage from './pages/BookList';
import { GlobalStyle } from './styles/GlobalStyles';

function App() {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" element={<GenrePage />} />
        <Route path="/books/:genre" element={<BookListPage />} />
      </Routes>
    </Router>
    
    </>
  );
}


export default App;