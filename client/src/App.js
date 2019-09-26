import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './component/shared/Home'
import About from './component/shared/About';
import Nomatch from './component/shared/Nomatch';
import Navbar from './component/shared/Navbar';
import Blog from './component/blog/Blog';

import { Container } from 'semantic-ui-react';

const App = () => (
   <> 
    <Navbar />
  <Container style={{ paddingTop: "25px" }}>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/blog' component={Blog} />
      {/* no match must be on the bottom of all routes*/}
      <Route component={Nomatch} />
    </Switch>
  </Container>
  </>
)

export default App;
