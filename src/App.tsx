import React, { Fragment } from 'react';
import Home from './Features/Home';
import './App.scss';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from './functions/ScrollToTop';
/*Components */
import Header from './components/Header';
import Blogs from './Features/Blogs';
import BlogPost from './Features/BlogPost';
const App = () => {
  return (
    <Router>
      <Header />
      <Container fluid className="p-0">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/post" component={BlogPost} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
