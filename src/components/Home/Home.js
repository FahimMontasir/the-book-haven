import React from 'react';
import { Container } from 'react-bootstrap';
import DisplayCard from './DisplayCard/DisplayCard';
import HomeNav from './HomeNav/HomeNav';

const Home = () => {
  return (
    <div>
      <HomeNav></HomeNav>
      <Container className="d-flex flex-wrap justify-content-center">
        <DisplayCard></DisplayCard>
      </Container>
    </div>
  );
};

export default Home;