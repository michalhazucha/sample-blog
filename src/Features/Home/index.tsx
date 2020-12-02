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
      <Row>
        <Highlights />
      </Row>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <section className="main_blogs">
            <MainBlogs />
          </section>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Fragment>
  );
};

export default Home;
