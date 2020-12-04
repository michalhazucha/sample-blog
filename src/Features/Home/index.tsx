import React, { Fragment } from 'react';
import './home.scss';
import { Col, Container, Row } from 'react-bootstrap';

/*Components */
import Header from '../../components/Header';
import Highlights from '../../components/Highlights';
import MainBlogs from '../../components/MainBlogs';
const Home = () => {
  return (
    <Fragment>
      <Highlights />
      <MainBlogs />
    </Fragment>
  );
};

export default Home;
