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

      <Row className="mx-1 my-5">
        <Col sm={0} md={2}></Col>
        <Col sm={12} md={8}>
          <MainBlogs />
        </Col>
        <Col sm={0} md={2}></Col>
      </Row>
    </Fragment>
  );
};

export default Home;
