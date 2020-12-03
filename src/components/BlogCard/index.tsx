import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './blogcard.scss';
import { Link } from 'react-router-dom';
const BlogCard = ({ imageSrc }: any) => {
  return (
    <Card className="border-0 rounded-0">
      <Card.Img variant="top" src={imageSrc} className="rounded-0" />
      <Card.Body className="d-flex  flex-column justify-content-center align-items-center">
        <Card.Text>
          <small className="text-muted">TRAVEL</small>
        </Card.Text>
        <Card.Title>
          Charming Evening Field
          <hr />
        </Card.Title>
        <Card.Text className="text-center text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, quae cum. Aut accusamus deleniti maiores ullam, cumque veniam adipisci corporis animi nemo. Nobis exercitationem tempore facilis sequi ea quos libero vero, similique voluptates ratione vitae!
        </Card.Text>
        <Card.Text>
          <Button variant="light" size="sm">
            <Link to="/post">Read More</Link>
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
