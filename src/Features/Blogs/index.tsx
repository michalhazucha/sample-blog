import React from 'react';
import { Col, Row } from 'react-bootstrap';
import MainBlogs from '../../components/MainBlogs';
const Blogs = () => {
  return (
    <Row>
      <Col md={2}></Col>
      <Col md={8}>
        <MainBlogs />
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};

export default Blogs;
