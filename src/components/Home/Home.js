import React, { useContext, useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { booksContext } from '../../App';
import DisplayCard from './DisplayCard/DisplayCard';
import HomeNav from './HomeNav/HomeNav';

const Home = () => {
  const [books, setBooks] = useContext(booksContext)
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, [setBooks])
  return (
    <div>
      <HomeNav></HomeNav>
      <Container className="d-flex flex-wrap justify-content-center">
        {
          books.length ? books.map(book => <DisplayCard key={book._id} book={book}></DisplayCard>) :
            <Spinner className="mt-5" animation="border" />
        }
      </Container>
    </div>
  );
};

export default Home;