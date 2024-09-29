import Genre from './Genre';
import BookListPage from './BookList';
import paths from '../constants/paths';

const routes = [
  {
    path: paths.home,
    element: <Genre/> ,
  },
  {
    path: paths.books(':genre'), 
    element: <BookListPage />, 
  },
];

export default routes;