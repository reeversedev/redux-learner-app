import {combineReducers} from 'react-redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
