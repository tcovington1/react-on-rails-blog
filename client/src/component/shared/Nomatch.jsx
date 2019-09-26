import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Nomatch = () => (
  <Container>
    <Header> Error 404 - no page found </Header>
    <Link to='/' >
      Home
    </Link>
  </Container>
)

export default Nomatch;