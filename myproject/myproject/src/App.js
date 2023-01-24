import { useState, useEffect } from "react";
import './App.css';
import Books from './components/Books';
import Newbook from './components/Newbook';
function App() {

  const [entries, setEntries] = useState([
    {book: 'Book 1',
     currentPage: 50,
     author: 'First Last'},
     {book: 'Book 2',
     currentPage: 20,
     author: 'First Last'},
     {book: 'Book 3',
     currentPage: 40,
     author: 'First Last'}
  ]);
  const [book, setBook] = useState("");
  const [page, setPage] = useState("");
  const [author, setAuthor] = useState("");


  return (
    <div className='center'>
      <h1>BooKsmarKt</h1>
      <Books books = {entries}/>
      <Newbook
        book = {book}
        page = {page}
        author = {author}/>
    </div>
  );
}

export default App;
